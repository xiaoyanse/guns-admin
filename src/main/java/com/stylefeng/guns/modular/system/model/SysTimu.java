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
 * 题目列表
 * </p>
 *
 * @author stylefeng123
 * @since 2018-05-03
 */
@TableName("sys_timu")
public class SysTimu extends Model<SysTimu> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 题目对应的试题编号
     */
    @TableField("timu_shiti_no")
    private String timuShitiNo;
    /**
     * 题目内容
     */
    @TableField("timu_name")
    private String timuName;
    /**
     * 题目类型（0是单选，1是多选，2是填空）
     */
    @TableField("timu_type")
    private Integer timuType;
    /**
     * 第一个选项
     */
    @TableField("timu_op1")
    private String timuOp1;
    /**
     * 第一个选项对应的分数
     */
    @TableField("timu_op1_score")
    private Integer timuOp1Score;
    /**
     * 第二个选项
     */
    @TableField("timu_op2")
    private String timuOp2;
    /**
     * 第二个选项对应的分数
     */
    @TableField("timu_op2_score")
    private Integer timuOp2Score;
    /**
     * 第三个选项
     */
    @TableField("timu_op3")
    private String timuOp3;
    /**
     * 第三个选项对应的分数
     */
    @TableField("timu_op3_score")
    private Integer timuOp3Score;
    /**
     * 第四个选项
     */
    @TableField("timu_op4")
    private String timuOp4;
    /**
     * 第四个选项对应的分数
     */
    @TableField("timu_op4_score")
    private Integer timuOp4Score;
    /**
     * 第五个选项
     */
    @TableField("timu_op5")
    private String timuOp5;
    /**
     * 第五个选项对应的分数
     */
    @TableField("timu_op5_score")
    private Integer timuOp5Score;
    /**
     * 第六个选项
     */
    @TableField("timu_op6")
    private String timuOp6;
    /**
     * 第六个选项对应的分数
     */
    @TableField("timu_op6_score")
    private Integer timuOp6Score;
    /**
     * 试题添加时间
     */
    @TableField("timu_add_time")
    private String timuAddTime;
    /**
     * 管理员编号
     */
    @TableField("timu_add_mag_no")
    private String timuAddMagNo;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTimuShitiNo() {
        return timuShitiNo;
    }

    public void setTimuShitiNo(String timuShitiNo) {
        this.timuShitiNo = timuShitiNo;
    }

    public String getTimuName() {
        return timuName;
    }

    public void setTimuName(String timuName) {
        this.timuName = timuName;
    }

    public Integer getTimuType() {
        return timuType;
    }

    public void setTimuType(Integer timuType) {
        this.timuType = timuType;
    }

    public String getTimuOp1() {
        return timuOp1;
    }

    public void setTimuOp1(String timuOp1) {
        this.timuOp1 = timuOp1;
    }

    public Integer getTimuOp1Score() {
        return timuOp1Score;
    }

    public void setTimuOp1Score(Integer timuOp1Score) {
        this.timuOp1Score = timuOp1Score;
    }

    public String getTimuOp2() {
        return timuOp2;
    }

    public void setTimuOp2(String timuOp2) {
        this.timuOp2 = timuOp2;
    }

    public Integer getTimuOp2Score() {
        return timuOp2Score;
    }

    public void setTimuOp2Score(Integer timuOp2Score) {
        this.timuOp2Score = timuOp2Score;
    }

    public String getTimuOp3() {
        return timuOp3;
    }

    public void setTimuOp3(String timuOp3) {
        this.timuOp3 = timuOp3;
    }

    public Integer getTimuOp3Score() {
        return timuOp3Score;
    }

    public void setTimuOp3Score(Integer timuOp3Score) {
        this.timuOp3Score = timuOp3Score;
    }

    public String getTimuOp4() {
        return timuOp4;
    }

    public void setTimuOp4(String timuOp4) {
        this.timuOp4 = timuOp4;
    }

    public Integer getTimuOp4Score() {
        return timuOp4Score;
    }

    public void setTimuOp4Score(Integer timuOp4Score) {
        this.timuOp4Score = timuOp4Score;
    }

    public String getTimuOp5() {
        return timuOp5;
    }

    public void setTimuOp5(String timuOp5) {
        this.timuOp5 = timuOp5;
    }

    public Integer getTimuOp5Score() {
        return timuOp5Score;
    }

    public void setTimuOp5Score(Integer timuOp5Score) {
        this.timuOp5Score = timuOp5Score;
    }

    public String getTimuOp6() {
        return timuOp6;
    }

    public void setTimuOp6(String timuOp6) {
        this.timuOp6 = timuOp6;
    }

    public Integer getTimuOp6Score() {
        return timuOp6Score;
    }

    public void setTimuOp6Score(Integer timuOp6Score) {
        this.timuOp6Score = timuOp6Score;
    }

    public String getTimuAddTime() {
        return timuAddTime;
    }

    public void setTimuAddTime(String timuAddTime) {
        this.timuAddTime = timuAddTime;
    }

    public String getTimuAddMagNo() {
        return timuAddMagNo;
    }

    public void setTimuAddMagNo(String timuAddMagNo) {
        this.timuAddMagNo = timuAddMagNo;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "SysTimu{" +
        "id=" + id +
        ", timuShitiNo=" + timuShitiNo +
        ", timuName=" + timuName +
        ", timuType=" + timuType +
        ", timuOp1=" + timuOp1 +
        ", timuOp1Score=" + timuOp1Score +
        ", timuOp2=" + timuOp2 +
        ", timuOp2Score=" + timuOp2Score +
        ", timuOp3=" + timuOp3 +
        ", timuOp3Score=" + timuOp3Score +
        ", timuOp4=" + timuOp4 +
        ", timuOp4Score=" + timuOp4Score +
        ", timuOp5=" + timuOp5 +
        ", timuOp5Score=" + timuOp5Score +
        ", timuOp6=" + timuOp6 +
        ", timuOp6Score=" + timuOp6Score +
        ", timuAddTime=" + timuAddTime +
        ", timuAddMagNo=" + timuAddMagNo +
        "}";
    }
}
