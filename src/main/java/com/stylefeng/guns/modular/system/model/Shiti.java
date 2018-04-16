package com.stylefeng.guns.modular.system.model;

import java.io.Serializable;

import com.baomidou.mybatisplus.enums.IdType;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 试题列表
 * </p>
 *
 * @author xiaoyanse123
 * @since 2018-04-16
 */
@TableName("sys_shiti")
public class Shiti extends Model<Shiti> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 试题编号
     */
    @TableField("shiti_no")
    private String shitiNo;
    /**
     * 试题名称
     */
    @TableField("shiti_name")
    private String shitiName;
    /**
     * 试题数量
     */
    @TableField("shiti_num")
    private Integer shitiNum;
    /**
     * 试题类型
     */
    @TableField("shiti_type")
    private String shitiType;
    /**
     * 试题添加时间
     */
    @TableField("shiti_add_time")
    private String shitiAddTime;
    /**
     * 试题添加人编号
     */
    @TableField("shiti_add_mag_no")
    private String shitiAddMagNo;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getShitiNo() {
        return shitiNo;
    }

    public void setShitiNo(String shitiNo) {
        this.shitiNo = shitiNo;
    }

    public String getShitiName() {
        return shitiName;
    }

    public void setShitiName(String shitiName) {
        this.shitiName = shitiName;
    }

    public Integer getShitiNum() {
        return shitiNum;
    }

    public void setShitiNum(Integer shitiNum) {
        this.shitiNum = shitiNum;
    }

    public String getShitiType() {
        return shitiType;
    }

    public void setShitiType(String shitiType) {
        this.shitiType = shitiType;
    }

    public String getShitiAddTime() {
        return shitiAddTime;
    }

    public void setShitiAddTime(String shitiAddTime) {
        this.shitiAddTime = shitiAddTime;
    }

    public String getShitiAddMagNo() {
        return shitiAddMagNo;
    }

    public void setShitiAddMagNo(String shitiAddMagNo) {
        this.shitiAddMagNo = shitiAddMagNo;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "Shiti{" +
        "id=" + id +
        ", shitiNo=" + shitiNo +
        ", shitiName=" + shitiName +
        ", shitiNum=" + shitiNum +
        ", shitiType=" + shitiType +
        ", shitiAddTime=" + shitiAddTime +
        ", shitiAddMagNo=" + shitiAddMagNo +
        "}";
    }
}
