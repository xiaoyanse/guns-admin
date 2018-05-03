/**
 * 初始化答题页面详情对话框
 */
var SysTimuInfoDlg = {
    sysTimuInfoData : {}
};

/**
 * 清除数据
 */
SysTimuInfoDlg.clearData = function() {
    this.sysTimuInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
SysTimuInfoDlg.set = function(key, val) {
    this.sysTimuInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
SysTimuInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
SysTimuInfoDlg.close = function() {
    parent.layer.close(window.parent.SysTimu.layerIndex);
}

/**
 * 收集数据
 */
SysTimuInfoDlg.collectData = function() {
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
SysTimuInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/sysTimu/add", function(data){
        Feng.success("添加成功!");
        window.parent.SysTimu.table.refresh();
        SysTimuInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.sysTimuInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
SysTimuInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/sysTimu/update", function(data){
        Feng.success("修改成功!");
        window.parent.SysTimu.table.refresh();
        SysTimuInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.sysTimuInfoData);
    ajax.start();
}

$(function() {

});
