/**
 * 初始化试题管理详情对话框
 */
var ShitiInfoDlg = {
	shitiInfoData : {}
};

/**
 * 清除数据
 */
ShitiInfoDlg.clearData = function() {
	this.shitiInfoData = {};
}

/**
 * 设置对话框中的数据
 * 
 * @param key
 *            数据的名称
 * @param val
 *            数据的具体值
 */
ShitiInfoDlg.set = function(key, val) {
	this.shitiInfoData[key] = (typeof val == "undefined") ? $("#" + key).val()
			: val;
	return this;
}

/**
 * 设置对话框中的数据
 * 
 * @param key
 *            数据的名称
 * @param val
 *            数据的具体值
 */
ShitiInfoDlg.get = function(key) {
	return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ShitiInfoDlg.close = function() {
	parent.layer.close(window.parent.Shiti.layerIndex);
}

/**
 * 收集数据
 */
ShitiInfoDlg.collectData = function() {
	this.set('id').set('shitiNo').set('shitiName').set('shitiNum').set(
			'shitiType').set('shitiAddTime').set('shitiAddMagNo');
}

/**
 * 提交添加
 */
ShitiInfoDlg.addSubmit = function() {

	this.clearData();
	document.getElementById('shitiAddTime').value = CurentTime();
	this.collectData();

	// 提交信息
	var ajax = new $ax(Feng.ctxPath + "/shiti/add", function(data) {
		Feng.success("添加成功!");
		window.parent.Shiti.table.refresh();
		ShitiInfoDlg.close();
	}, function(data) {
		Feng.error("添加失败!" + data.responseJSON.message + "!");
	});
	ajax.set(this.shitiInfoData);
	ajax.start();
}

/**
 * 提交修改
 */
ShitiInfoDlg.editSubmit = function() {

	this.clearData();
	this.collectData();

	// 提交信息
	var ajax = new $ax(Feng.ctxPath + "/shiti/update", function(data) {
		Feng.success("修改成功!");
		window.parent.Shiti.table.refresh();
		ShitiInfoDlg.close();
	}, function(data) {
		Feng.error("修改失败!" + data.responseJSON.message + "!");
	});
	ajax.set(this.shitiInfoData);
	ajax.start();
}
/**
 * 获取当前系统时间
 * 
 * @returns 时间
 */

function CurentTime() {
	var now = new Date();

	var year = now.getFullYear(); // 年
	var month = now.getMonth() + 1; // 月
	var day = now.getDate(); // 日

	var hh = now.getHours(); // 时
	var mm = now.getMinutes(); // 分
	var ss = now.getSeconds(); // 秒

	var clock = year + "-";

	if (month < 10)
		clock += "0";

	clock += month + "-";

	if (day < 10)
		clock += "0";

	clock += day + " ";

	if (hh < 10)
		clock += "0";

	clock += hh + ":";
	if (mm < 10)
		clock += '0';
	clock += mm + ":";

	if (ss < 10)
		clock += '0';
	clock += ss;
	return (clock);
}

$(function() {
	document.getElementById('shitiAddTime').value = CurentTime();
});
