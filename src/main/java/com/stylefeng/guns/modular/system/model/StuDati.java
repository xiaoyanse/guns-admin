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
 * 答题页面表
 * </p>
 *
 * @author stylefeng123
 * @since 2018-05-03
 */
@TableName("stu_dati")
public class StuDati extends Model<StuDati> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 当前用户
     */
    @TableField("curent_user")
    private String curentUser;
    /**
     * 是否测试
     */
    @TableField("if_test")
    private String ifTest;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCurentUser() {
        return curentUser;
    }

    public void setCurentUser(String curentUser) {
        this.curentUser = curentUser;
    }

    public String getIfTest() {
        return ifTest;
    }

    public void setIfTest(String ifTest) {
        this.ifTest = ifTest;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "StuDati{" +
        "id=" + id +
        ", curentUser=" + curentUser +
        ", ifTest=" + ifTest +
        "}";
    }
}
