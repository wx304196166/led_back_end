/*
Navicat MySQL Data Transfer

Source Server         : local-mysql
Source Server Version : 100125
Source Host           : localhost:3306
Source Database       : led_db

Target Server Type    : MYSQL
Target Server Version : 100125
File Encoding         : 65001

Date: 2019-01-21 17:17:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_user_info
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_info`;
CREATE TABLE `admin_user_info` (
  `ID` varchar(32) NOT NULL COMMENT '用户id，唯一识别符',
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_user_info
-- ----------------------------
INSERT INTO `admin_user_info` VALUES ('asd', 'wang', '123456');
INSERT INTO `admin_user_info` VALUES ('b210cb8acccd4226b3321e9eb038c662', 'lisi', '123456');
INSERT INTO `admin_user_info` VALUES ('dsa', 'zhang', '123456');

-- ----------------------------
-- Table structure for brand_info
-- ----------------------------
DROP TABLE IF EXISTS `brand_info`;
CREATE TABLE `brand_info` (
  `ID` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '品牌名称',
  `remark` varchar(200) DEFAULT '' COMMENT '品牌备注信息',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand_info
-- ----------------------------

-- ----------------------------
-- Table structure for classification_info
-- ----------------------------
DROP TABLE IF EXISTS `classification_info`;
CREATE TABLE `classification_info` (
  `ID` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '分类名称',
  `brand_id` varchar(32) DEFAULT NULL COMMENT '关联品牌ID',
  `lable_id` varchar(32) DEFAULT NULL COMMENT '关联标签ID',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classification_info
-- ----------------------------

-- ----------------------------
-- Table structure for customer_user_info
-- ----------------------------
DROP TABLE IF EXISTS `customer_user_info`;
CREATE TABLE `customer_user_info` (
  `ID` varchar(32) NOT NULL,
  `login_name` varchar(50) NOT NULL COMMENT '登录名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `real_name` varchar(100) NOT NULL COMMENT '客户真实姓名',
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL COMMENT '邮箱',
  `points` int(10) unsigned zerofill DEFAULT NULL COMMENT '积分',
  `grade` varchar(32) DEFAULT '' COMMENT '等级',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `modification_user_id` int(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer_user_info
-- ----------------------------

-- ----------------------------
-- Table structure for integrate_info
-- ----------------------------
DROP TABLE IF EXISTS `integrate_info`;
CREATE TABLE `integrate_info` (
  `ID` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '集成方案名称',
  `classification_id` varchar(32) DEFAULT NULL COMMENT '分类id',
  `main_product_id` varchar(32) DEFAULT NULL COMMENT '主产品id',
  `main_product_intro` varchar(255) DEFAULT NULL COMMENT '主产品简介',
  `related_product_list` varchar(1024) DEFAULT NULL COMMENT '关联产品id',
  `brand_id_list` varchar(1024) DEFAULT NULL COMMENT '品牌id',
  `specifications` varchar(512) DEFAULT NULL COMMENT '规格',
  `img_list` varchar(255) DEFAULT NULL COMMENT '图片url，最多8个',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of integrate_info
-- ----------------------------

-- ----------------------------
-- Table structure for label_info
-- ----------------------------
DROP TABLE IF EXISTS `label_info`;
CREATE TABLE `label_info` (
  `ID` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '标签名称',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of label_info
-- ----------------------------

-- ----------------------------
-- Table structure for product_info
-- ----------------------------
DROP TABLE IF EXISTS `product_info`;
CREATE TABLE `product_info` (
  `ID` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '产品名称',
  `classification_id` varchar(32) NOT NULL COMMENT '分类ID，只允许关联一个',
  `brand_id` varchar(32) DEFAULT NULL,
  `label_id` varchar(32) DEFAULT NULL,
  `img_list` varchar(255) DEFAULT '' COMMENT '产品展示图，图片url，最多8个',
  `intro` varchar(255) DEFAULT '' COMMENT '产品简介',
  `specifications` varchar(512) DEFAULT NULL COMMENT '产品规格，可存多个',
  `related_product_list` varchar(1024) DEFAULT NULL COMMENT '关联产品id，可存多个',
  `detail` longtext COMMENT '图文富文本信息',
  `is_main` bit(1) DEFAULT NULL COMMENT '是否为主产品',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_info
-- ----------------------------
