package com.stylefeng.guns.modular.ShitiManage.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.Shiti;
import com.stylefeng.guns.modular.ShitiManage.service.IShitiService;

/**
 * 试题管理控制器
 *
 * @author fengshuonan
 * @Date 2018-04-16 15:44:02
 */
@Controller
@RequestMapping("/shiti")
public class ShitiController extends BaseController {

    private String PREFIX = "/ShitiManage/shiti/";

    @Autowired
    private IShitiService shitiService;

    /**
     * 跳转到试题管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "shiti.html";
    }

    /**
     * 跳转到添加试题管理
     */
    @RequestMapping("/shiti_add")
    public String shitiAdd() {
        return PREFIX + "shiti_add.html";
    }

    /**
     * 跳转到修改试题管理
     */
    @RequestMapping("/shiti_update/{shitiId}")
    public String shitiUpdate(@PathVariable Integer shitiId, Model model) {
        Shiti shiti = shitiService.selectById(shitiId);
        model.addAttribute("item",shiti);
        LogObjectHolder.me().set(shiti);
        return PREFIX + "shiti_edit.html";
    }

    /**
     * 获取试题管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return shitiService.selectList(null);
    }

    /**
     * 新增试题管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Shiti shiti) {
        shitiService.insert(shiti);
        return SUCCESS_TIP;
    }

    /**
     * 删除试题管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer shitiId) {
        shitiService.deleteById(shitiId);
        return SUCCESS_TIP;
    }

    /**
     * 修改试题管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Shiti shiti) {
        shitiService.updateById(shiti);
        return SUCCESS_TIP;
    }

    /**
     * 试题管理详情
     */
    @RequestMapping(value = "/detail/{shitiId}")
    @ResponseBody
    public Object detail(@PathVariable("shitiId") Integer shitiId) {
        return shitiService.selectById(shitiId);
    }
}
