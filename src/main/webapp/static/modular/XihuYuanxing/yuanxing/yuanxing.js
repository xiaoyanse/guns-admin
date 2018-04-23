/**
 * 西湖定向管理初始化
 */
var Yuanxing = {
    id: "YuanxingTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Yuanxing.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id，key', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '元素名称', field: 'yuansu', visible: true, align: 'center', valign: 'middle'},
            {title: '序号，可以是数字或者汉字', field: 'xuhao', visible: true, align: 'center', valign: 'middle'},
            {title: '任务名称', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '任务说明', field: 'shuoming', visible: true, align: 'center', valign: 'middle'},
            {title: '积分规则', field: 'jifen', visible: true, align: 'center', valign: 'middle'},
            {title: '满分', field: 'manfen', visible: true, align: 'center', valign: 'middle'},
            {title: '场地描述', field: 'address', visible: true, align: 'center', valign: 'middle'},
            {title: '完成方法（指定地点/随地）', field: 'way', visible: true, align: 'center', valign: 'middle'},
            {title: '是否完成', field: 'ifdone', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Yuanxing.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Yuanxing.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加西湖定向
 */
Yuanxing.openAddYuanxing = function () {
    var index = layer.open({
        type: 2,
        title: '添加西湖定向',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/yuanxing/yuanxing_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看西湖定向详情
 */
Yuanxing.openYuanxingDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '西湖定向详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/yuanxing/yuanxing_update/' + Yuanxing.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除西湖定向
 */
Yuanxing.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/yuanxing/delete", function (data) {
            Feng.success("删除成功!");
            Yuanxing.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("yuanxingId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询西湖定向列表
 */
Yuanxing.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Yuanxing.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Yuanxing.initColumn();
    var table = new BSTable(Yuanxing.id, "/yuanxing/list", defaultColunms);
    table.setPaginationType("client");
    Yuanxing.table = table.init();
});
