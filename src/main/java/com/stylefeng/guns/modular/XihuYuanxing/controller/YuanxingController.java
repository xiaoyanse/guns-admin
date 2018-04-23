package com.stylefeng.guns.modular.XihuYuanxing.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.Yuanxing;
import com.stylefeng.guns.modular.XihuYuanxing.service.IYuanxingService;

/**
 * 西湖定向控制器
 *
 * @author fengshuonan
 * @Date 2018-04-23 23:01:02
 */
@Controller
@RequestMapping("/yuanxing")
public class YuanxingController extends BaseController {

    private String PREFIX = "/XihuYuanxing/yuanxing/";

    @Autowired
    private IYuanxingService yuanxingService;

    /**
     * 跳转到西湖定向首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "yuanxing.html";
    }

    /**
     * 跳转到添加西湖定向
     */
    @RequestMapping("/yuanxing_add")
    public String yuanxingAdd() {
        return PREFIX + "yuanxing_add.html";
    }

    /**
     * 跳转到修改西湖定向
     */
    @RequestMapping("/yuanxing_update/{yuanxingId}")
    public String yuanxingUpdate(@PathVariable Integer yuanxingId, Model model) {
        Yuanxing yuanxing = yuanxingService.selectById(yuanxingId);
        model.addAttribute("item",yuanxing);
        LogObjectHolder.me().set(yuanxing);
        return PREFIX + "yuanxing_edit.html";
    }

    /**
     * 获取西湖定向列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return yuanxingService.selectList(null);
    }

    /**
     * 新增西湖定向
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Yuanxing yuanxing) {
        yuanxingService.insert(yuanxing);
        return SUCCESS_TIP;
    }

    /**
     * 删除西湖定向
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer yuanxingId) {
        yuanxingService.deleteById(yuanxingId);
        return SUCCESS_TIP;
    }

    /**
     * 修改西湖定向
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Yuanxing yuanxing) {
        yuanxingService.updateById(yuanxing);
        return SUCCESS_TIP;
    }

    /**
     * 西湖定向详情
     */
    @RequestMapping(value = "/detail/{yuanxingId}")
    @ResponseBody
    public Object detail(@PathVariable("yuanxingId") Integer yuanxingId) {
        return yuanxingService.selectById(yuanxingId);
    }
}
