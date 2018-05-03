/**
 * 答题页面管理初始化
 */
var SysTimu = {
    id: "SysTimuTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
SysTimu.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '题目对应的试题编号', field: 'timuShitiNo', visible: true, align: 'center', valign: 'middle'},
            {title: '题目内容', field: 'timuName', visible: true, align: 'center', valign: 'middle'},
            {title: '题目类型（0是单选，1是多选，2是填空）', field: 'timuType', visible: true, align: 'center', valign: 'middle'},
            {title: '第一个选项', field: 'timuOp1', visible: true, align: 'center', valign: 'middle'},
            {title: '第一个选项对应的分数', field: 'timuOp1Score', visible: true, align: 'center', valign: 'middle'},
            {title: '第二个选项', field: 'timuOp2', visible: true, align: 'center', valign: 'middle'},
            {title: '第二个选项对应的分数', field: 'timuOp2Score', visible: true, align: 'center', valign: 'middle'},
            {title: '第三个选项', field: 'timuOp3', visible: true, align: 'center', valign: 'middle'},
            {title: '第三个选项对应的分数', field: 'timuOp3Score', visible: true, align: 'center', valign: 'middle'},
            {title: '第四个选项', field: 'timuOp4', visible: true, align: 'center', valign: 'middle'},
            {title: '第四个选项对应的分数', field: 'timuOp4Score', visible: true, align: 'center', valign: 'middle'},
            {title: '第五个选项', field: 'timuOp5', visible: true, align: 'center', valign: 'middle'},
            {title: '第五个选项对应的分数', field: 'timuOp5Score', visible: true, align: 'center', valign: 'middle'},
            {title: '第六个选项', field: 'timuOp6', visible: true, align: 'center', valign: 'middle'},
            {title: '第六个选项对应的分数', field: 'timuOp6Score', visible: true, align: 'center', valign: 'middle'},
            {title: '试题添加时间', field: 'timuAddTime', visible: true, align: 'center', valign: 'middle'},
            {title: '管理员编号', field: 'timuAddMagNo', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
SysTimu.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        SysTimu.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加答题页面
 */
SysTimu.openAddSysTimu = function () {
    var index = layer.open({
        type: 2,
        title: '添加答题页面',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/sysTimu/sysTimu_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看答题页面详情
 */
SysTimu.openSysTimuDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '答题页面详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/sysTimu/sysTimu_update/' + SysTimu.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除答题页面
 */
SysTimu.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/sysTimu/delete", function (data) {
            Feng.success("删除成功!");
            SysTimu.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("sysTimuId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询答题页面列表
 */
SysTimu.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    SysTimu.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = SysTimu.initColumn();
    var table = new BSTable(SysTimu.id, "/sysTimu/list", defaultColunms);
    table.setPaginationType("client");
    SysTimu.table = table.init();
});
