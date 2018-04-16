/**
 * 初始化题目管理详情对话框
 */
var TimuInfoDlg = {
    timuInfoData : {}
};

/**
 * 清除数据
 */
TimuInfoDlg.clearData = function() {
    this.timuInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
TimuInfoDlg.set = function(key, val) {
    this.timuInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
TimuInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
TimuInfoDlg.close = function() {
    parent.layer.close(window.parent.Timu.layerIndex);
}

/**
 * 收集数据
 */
TimuInfoDlg.collectData = function() {
    this
    .set('id')
    .set('timuShitiNo')
    .set('timuName')
    .set('timuType')
    .set('timuOp1')
    .set('timuOp1Score')
    .set('timuOp2')
    .set('timuOp2Score')
    .set('timuOp3')
    .set('timuOp3Score')
    .set('timuOp4')
    .set('timuOp4Score')
    .set('timuOp5')
    .set('timuOp5Score')
    .set('timuOp6')
    .set('timuOp6Score')
    .set('timuAddTime')
    .set('timuAddMagNo');
}

/**
 * 提交添加
 */
TimuInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/timu/add", function(data){
        Feng.success("添加成功!");
        window.parent.Timu.table.refresh();
        TimuInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.timuInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
TimuInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/timu/update", function(data){
        Feng.success("修改成功!");
        window.parent.Timu.table.refresh();
        TimuInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.timuInfoData);
    ajax.start();
}

$(function() {

});
