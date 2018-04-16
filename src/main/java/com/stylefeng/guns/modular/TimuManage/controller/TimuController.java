package com.stylefeng.guns.modular.TimuManage.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.core.util.ToolUtil;

import org.springframework.web.bind.annotation.RequestParam;

import com.stylefeng.guns.modular.system.model.Shiti;
import com.stylefeng.guns.modular.system.model.Timu;
import com.stylefeng.guns.modular.TimuManage.service.ITimuService;

/**
 * 题目管理控制器
 *
 * @author fengshuonan
 * @Date 2018-04-16 15:30:38
 */
@Controller
@RequestMapping("/timu")
public class TimuController extends BaseController {

    private String PREFIX = "/TimuManage/timu/";

    @Autowired
    private ITimuService timuService;

    /**
     * 跳转到题目管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "timu.html";
    }

    /**
     * 跳转到添加题目管理
     */
    @RequestMapping("/timu_add")
    public String timuAdd() {
        return PREFIX + "timu_add.html";
    }

    /**
     * 跳转到修改题目管理
     */
    @RequestMapping("/timu_update/{timuId}")
    public String timuUpdate(@PathVariable Integer timuId, Model model) {
        Timu timu = timuService.selectById(timuId);
        model.addAttribute("item",timu);
        LogObjectHolder.me().set(timu);
        return PREFIX + "timu_edit.html";
    }

    /**
     * 获取题目管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
		System.out.println("condition:"+condition);

    	if (ToolUtil.isEmpty(condition)) {
            return timuService.selectList(null);
		}else {
			EntityWrapper<Timu> wrapper=new EntityWrapper<>();
			Wrapper<Timu> result=wrapper.like("timu_name", condition);
			return timuService.selectList(result);	 
		}
    }
    
    /**
     * 根据shitino获取题目管理列表
     */
    @RequestMapping(value = "/list/{shitiNo}")
    @ResponseBody
    public Object listbyshitino(@PathVariable Integer shitiNo) {
		System.out.println("shitiNo:"+shitiNo);

    	if (ToolUtil.isEmpty(shitiNo)) {
            return timuService.selectList(null);
		}else {
			EntityWrapper<Timu> wrapper=new EntityWrapper<>();
			Wrapper<Timu> result=wrapper.where("timu_shiti_no='"+shitiNo+"'");
			return timuService.selectList(result);	 
		}
    }

    /**
     * 新增题目管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Timu timu) {
        timuService.insert(timu);
        return SUCCESS_TIP;
    }

    /**
     * 删除题目管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer timuId) {
        timuService.deleteById(timuId);
        return SUCCESS_TIP;
    }

    /**
     * 修改题目管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Timu timu) {
        timuService.updateById(timu);
        return SUCCESS_TIP;
    }

    /**
     * 题目管理详情
     */
    @RequestMapping(value = "/detail/{timuId}")
    @ResponseBody
    public Object detail(@PathVariable("timuId") Integer timuId) {
        return timuService.selectById(timuId);
    }
}
