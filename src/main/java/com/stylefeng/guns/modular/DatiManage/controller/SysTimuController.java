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
import com.stylefeng.guns.modular.system.model.SysTimu;
import com.stylefeng.guns.modular.DatiManage.service.ISysTimuService;

/**
 * 答题页面控制器
 *
 * @author fengshuonan
 * @Date 2018-05-03 10:51:56
 */
@Controller
@RequestMapping("/sysTimu")
public class SysTimuController extends BaseController {

    private String PREFIX = "/DatiManage/sysTimu/";

    @Autowired
    private ISysTimuService sysTimuService;

    /**
     * 跳转到答题页面首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "sysTimu.html";
    }

    /**
     * 跳转到添加答题页面
     */
    @RequestMapping("/sysTimu_add")
    public String sysTimuAdd() {
        return PREFIX + "sysTimu_add.html";
    }

    /**
     * 跳转到修改答题页面
     */
    @RequestMapping("/sysTimu_update/{sysTimuId}")
    public String sysTimuUpdate(@PathVariable Integer sysTimuId, Model model) {
        SysTimu sysTimu = sysTimuService.selectById(sysTimuId);
        model.addAttribute("item",sysTimu);
        LogObjectHolder.me().set(sysTimu);
        return PREFIX + "sysTimu_edit.html";
    }

    /**
     * 获取答题页面列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return sysTimuService.selectList(null);
    }

    /**
     * 新增答题页面
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(SysTimu sysTimu) {
        sysTimuService.insert(sysTimu);
        return SUCCESS_TIP;
    }

    /**
     * 删除答题页面
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer sysTimuId) {
        sysTimuService.deleteById(sysTimuId);
        return SUCCESS_TIP;
    }

    /**
     * 修改答题页面
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(SysTimu sysTimu) {
        sysTimuService.updateById(sysTimu);
        return SUCCESS_TIP;
    }

    /**
     * 答题页面详情
     */
    @RequestMapping(value = "/detail/{sysTimuId}")
    @ResponseBody
    public Object detail(@PathVariable("sysTimuId") Integer sysTimuId) {
        return sysTimuService.selectById(sysTimuId);
    }
}
