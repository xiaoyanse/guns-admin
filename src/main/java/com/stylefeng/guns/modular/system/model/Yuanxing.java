package com.stylefeng.guns.modular.system.model;

import java.io.Serializable;

import com.baomidou.mybatisplus.enums.IdType;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 远行表
 * </p>
 *
 * @author xiaoyanse123
 * @since 2018-04-23
 */
@TableName("usr_yuanxing")
public class Yuanxing extends Model<Yuanxing> {

    private static final long serialVersionUID = 1L;

    /**
     * id，key
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 元素名称
     */
    private String yuansu;
    /**
     * 序号，可以是数字或者汉字
     */
    private String xuhao;
    /**
     * 任务名称
     */
    private String name;
    /**
     * 任务说明
     */
    private String shuoming;
    /**
     * 积分规则
     */
    private String jifen;
    /**
     * 满分
     */
    private Integer manfen;
    /**
     * 场地描述
     */
    private String address;
    /**
     * 完成方法（指定地点/随地）
     */
    private String way;
    /**
     * 是否完成
     */
    private String ifdone;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getYuansu() {
        return yuansu;
    }

    public void setYuansu(String yuansu) {
        this.yuansu = yuansu;
    }

    public String getXuhao() {
        return xuhao;
    }

    public void setXuhao(String xuhao) {
        this.xuhao = xuhao;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShuoming() {
        return shuoming;
    }

    public void setShuoming(String shuoming) {
        this.shuoming = shuoming;
    }

    public String getJifen() {
        return jifen;
    }

    public void setJifen(String jifen) {
        this.jifen = jifen;
    }

    public Integer getManfen() {
        return manfen;
    }

    public void setManfen(Integer manfen) {
        this.manfen = manfen;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWay() {
        return way;
    }

    public void setWay(String way) {
        this.way = way;
    }

    public String getIfdone() {
        return ifdone;
    }

    public void setIfdone(String ifdone) {
        this.ifdone = ifdone;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "Yuanxing{" +
        "id=" + id +
        ", yuansu=" + yuansu +
        ", xuhao=" + xuhao +
        ", name=" + name +
        ", shuoming=" + shuoming +
        ", jifen=" + jifen +
        ", manfen=" + manfen +
        ", address=" + address +
        ", way=" + way +
        ", ifdone=" + ifdone +
        "}";
    }
}
