/**
 * 初始化西湖定向详情对话框
 */
var YuanxingInfoDlg = {
    yuanxingInfoData : {}
};

/**
 * 清除数据
 */
YuanxingInfoDlg.clearData = function() {
    this.yuanxingInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
YuanxingInfoDlg.set = function(key, val) {
    this.yuanxingInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
YuanxingInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
YuanxingInfoDlg.close = function() {
    parent.layer.close(window.parent.Yuanxing.layerIndex);
}

/**
 * 收集数据
 */
YuanxingInfoDlg.collectData = function() {
    this
    .set('id')
    .set('yuansu')
    .set('xuhao')
    .set('name')
    .set('shuoming')
    .set('jifen')
    .set('manfen')
    .set('address')
    .set('way')
    .set('ifdone');
}

/**
 * 提交添加
 */
YuanxingInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/yuanxing/add", function(data){
        Feng.success("添加成功!");
        window.parent.Yuanxing.table.refresh();
        YuanxingInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.yuanxingInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
YuanxingInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/yuanxing/update", function(data){
        Feng.success("修改成功!");
        window.parent.Yuanxing.table.refresh();
        YuanxingInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.yuanxingInfoData);
    ajax.start();
}

$(function() {

});
