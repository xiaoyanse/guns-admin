/**
 * 试题管理管理初始化
 */
var Shiti = {
    id: "ShitiTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Shiti.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '试题编号', field: 'shitiNo', visible: true, align: 'center', valign: 'middle'},
            {title: '试题名称', field: 'shitiName', visible: true, align: 'center', valign: 'middle'},
            {title: '试题数量', field: 'shitiNum', visible: true, align: 'center', valign: 'middle'},
            {title: '试题类型', field: 'shitiType', visible: true, align: 'center', valign: 'middle'},
            {title: '试题添加时间', field: 'shitiAddTime', visible: true, align: 'center', valign: 'middle'},
            {title: '试题添加人编号', field: 'shitiAddMagNo', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Shiti.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Shiti.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加试题管理
 */
Shiti.openAddShiti = function () {
    var index = layer.open({
        type: 2,
        title: '添加试题管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/shiti/shiti_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看试题管理详情
 */
Shiti.openShitiDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '试题管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/shiti/shiti_update/' + Shiti.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除试题管理
 */
Shiti.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/shiti/delete", function (data) {
            Feng.success("删除成功!");
            Shiti.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("shitiId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询试题管理列表
 */
Shiti.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Shiti.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Shiti.initColumn();
    var table = new BSTable(Shiti.id, "/shiti/list", defaultColunms);
    table.setPaginationType("client");
    Shiti.table = table.init();
});
