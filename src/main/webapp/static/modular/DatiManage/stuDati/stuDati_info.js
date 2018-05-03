/**
 * 初始化答题页面详情对话框
 */
var StuDatiInfoDlg = {
    stuDatiInfoData : {}
};

/**
 * 清除数据
 */
StuDatiInfoDlg.clearData = function() {
    this.stuDatiInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
StuDatiInfoDlg.set = function(key, val) {
    this.stuDatiInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
StuDatiInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
StuDatiInfoDlg.close = function() {
    parent.layer.close(window.parent.StuDati.layerIndex);
}

/**
 * 收集数据
 */
StuDatiInfoDlg.collectData = function() {
    this
    .set('id')
    .set('curentUser')
    .set('ifTest');
}

/**
 * 提交添加
 */
StuDatiInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/stuDati/add", function(data){
        Feng.success("添加成功!");
        window.parent.StuDati.table.refresh();
        StuDatiInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.stuDatiInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
StuDatiInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/stuDati/update", function(data){
        Feng.success("修改成功!");
        window.parent.StuDati.table.refresh();
        StuDatiInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.stuDatiInfoData);
    ajax.start();
}

$(function() {

});
