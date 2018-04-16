/**
 * 题目管理管理初始化
 */
var Timu = {
    id: "TimuTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Timu.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle',sortable: true},
            {title: '题目对应的试题编号', field: 'timuShitiNo', visible: true, align: 'center', valign: 'middle',sortable: true},
            {title: '题目内容', field: 'timuName', visible: true, align: 'center', valign: 'middle',sortable: true},
//            {title: '题目类型（0是单选，1是多选，2是填空）', field: 'timuType', visible: true, align: 'center', valign: 'middle'},
//            {title: '第一个选项', field: 'timuOp1', visible: true, align: 'center', valign: 'middle'},
//            {title: '第一个选项对应的分数', field: 'timuOp1Score', visible: true, align: 'center', valign: 'middle'},
//            {title: '第二个选项', field: 'timuOp2', visible: true, align: 'center', valign: 'middle'},
//            {title: '第二个选项对应的分数', field: 'timuOp2Score', visible: true, align: 'center', valign: 'middle'},
//            {title: '第三个选项', field: 'timuOp3', visible: true, align: 'center', valign: 'middle'},
//            {title: '第三个选项对应的分数', field: 'timuOp3Score', visible: true, align: 'center', valign: 'middle'},
//            {title: '第四个选项', field: 'timuOp4', visible: true, align: 'center', valign: 'middle'},
//            {title: '第四个选项对应的分数', field: 'timuOp4Score', visible: true, align: 'center', valign: 'middle'},
//            {title: '第五个选项', field: 'timuOp5', visible: true, align: 'center', valign: 'middle'},
//            {title: '第五个选项对应的分数', field: 'timuOp5Score', visible: true, align: 'center', valign: 'middle'},
//            {title: '第六个选项', field: 'timuOp6', visible: true, align: 'center', valign: 'middle'},
//            {title: '第六个选项对应的分数', field: 'timuOp6Score', visible: true, align: 'center', valign: 'middle'},
            {title: '试题添加时间', field: 'timuAddTime', visible: true, align: 'center', valign: 'middle',sortable: true},
            {title: '管理员编号', field: 'timuAddMagNo', visible: true, align: 'center', valign: 'middle',sortable: true}
    ];
};

/**
 * 检查是否选中
 */
Timu.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Timu.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加题目管理
 */
Timu.openAddTimu = function () {
    var index = layer.open({
        type: 2,
        title: '添加题目管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/timu/timu_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看题目管理详情
 */
Timu.openTimuDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '题目管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/timu/timu_update/' + Timu.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除题目管理
 */
Timu.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/timu/delete", function (data) {
            Feng.success("删除成功!");
            Timu.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("timuId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询题目管理列表
 */
Timu.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Timu.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Timu.initColumn();
    var table = new BSTable(Timu.id, "/timu/list", defaultColunms);
    table.setPaginationType("client");
    Timu.table = table.init();
});
