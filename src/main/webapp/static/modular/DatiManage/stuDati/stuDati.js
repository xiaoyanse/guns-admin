/**
 * 答题页面管理初始化
 */
var StuDati = {
    id: "StuDatiTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
StuDati.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '当前用户', field: 'curentUser', visible: true, align: 'center', valign: 'middle'},
            {title: '是否测试', field: 'ifTest', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
StuDati.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        StuDati.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加答题页面
 */
StuDati.openAddStuDati = function () {
    var index = layer.open({
        type: 2,
        title: '添加答题页面',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/stuDati/stuDati_add'
    });
    this.layerIndex = index;
};

    if ($('#back-to-top').length) {
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

/**
 * 打开查看答题页面详情
 */
StuDati.openStuDatiDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '答题页面详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/stuDati/stuDati_update/' + StuDati.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除答题页面
 */
StuDati.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/stuDati/delete", function (data) {
            Feng.success("删除成功!");
            StuDati.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("stuDatiId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询答题页面列表
 */
StuDati.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    StuDati.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = StuDati.initColumn();
    var table = new BSTable(StuDati.id, "/stuDati/list", defaultColunms);
    table.setPaginationType("client");
    StuDati.table = table.init();
});
