package com.stylefeng.guns.modular.DatiManage.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.StuDati;
import com.stylefeng.guns.modular.DatiManage.service.IStuDatiService;

/**
 * 答题页面控制器
 *
 * @author fengshuonan
 * @Date 2018-05-03 14:44:27
 */
@Controller
@RequestMapping("/stuDati")
public class StuDatiController extends BaseController {

	private String PREFIX = "/DatiManage/stuDati/";

	@Autowired
	private IStuDatiService stuDatiService;

	/**
	 * 跳转到答题页面首页
	 */
	@RequestMapping("")
	public String index() {
		// return PREFIX + "stuDati.html";
		return PREFIX + "o1.html";
	}

	/**
	 * 跳转到添加答题页面
	 */
	@RequestMapping("/stuDati_add")
	public String stuDatiAdd() {
		return PREFIX + "stuDati_add.html";
	}

	/**
	 * 跳转到scl-90test
	 */
	@RequestMapping("/stuDati_scl90")
	public String stuDatiscl90() {
		return PREFIX + "SCL90test.html";
	}

	/**
	 * 跳转到修改答题页面
	 */
	@RequestMapping("/stuDati_update/{stuDatiId}")
	public String stuDatiUpdate(@PathVariable Integer stuDatiId, Model model) {
		StuDati stuDati = stuDatiService.selectById(stuDatiId);
		model.addAttribute("item", stuDati);
		LogObjectHolder.me().set(stuDati);
		return PREFIX + "stuDati_edit.html";
	}

	/**
	 * 获取答题页面列表
	 */
	@RequestMapping(value = "/list")
	@ResponseBody
	public Object list(String condition) {
		return stuDatiService.selectList(null);
	}

	/**
	 * 新增答题页面
	 */
	@RequestMapping(value = "/add")
	@ResponseBody
	public Object add(StuDati stuDati) {
		stuDatiService.insert(stuDati);
		return SUCCESS_TIP;
	}

	/**
	 * 删除答题页面
	 */
	@RequestMapping(value = "/delete")
	@ResponseBody
	public Object delete(@RequestParam Integer stuDatiId) {
		stuDatiService.deleteById(stuDatiId);
		return SUCCESS_TIP;
	}

	/**
	 * 修改答题页面
	 */
	@RequestMapping(value = "/update")
	@ResponseBody
	public Object update(StuDati stuDati) {
		stuDatiService.updateById(stuDati);
		return SUCCESS_TIP;
	}

	/**
	 * 答题页面详情
	 */
	@RequestMapping(value = "/detail/{stuDatiId}")
	@ResponseBody
	public Object detail(@PathVariable("stuDatiId") Integer stuDatiId) {
		return stuDatiService.selectById(stuDatiId);
	}
}
