/*
Navicat MySQL Data Transfer

Source Server         : local-mysql
Source Server Version : 100125
Source Host           : localhost:3306
Source Database       : led_db

Target Server Type    : MYSQL
Target Server Version : 100125
File Encoding         : 65001

Date: 2019-02-11 23:26:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_user_info
-- ----------------------------
DROP TABLE IF EXISTS `admin_user_info`;
CREATE TABLE `admin_user_info` (
  `id` varchar(32) NOT NULL COMMENT '用户id，唯一识别符',
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '用户密码',
  `modification_user_type` tinyint(1) NOT NULL,
  `modification_user_id` varchar(32) NOT NULL,
  `modification_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_user_info
-- ----------------------------
INSERT INTO `admin_user_info` VALUES ('asdwang', 'wang', '11cb8bae9fb1e6f805746093e0b474d9', '0', 'b210cb8acccd4226b3321e9eb038c662', '2019-02-07 17:14:22');
INSERT INTO `admin_user_info` VALUES ('b210cb8acccd4226b3321e9eb038c662', 'admin', '11cb8bae9fb1e6f805746093e0b474d9', '0', 'b210cb8acccd4226b3321e9eb038c662', '2019-02-03 20:00:37');
INSERT INTO `admin_user_info` VALUES ('dsazhang', 'zhang', '11cb8bae9fb1e6f805746093e0b474d9', '0', 'b210cb8acccd4226b3321e9eb038c662', '2019-02-07 17:14:33');
INSERT INTO `admin_user_info` VALUES ('zxcguan', 'guan', '11cb8bae9fb1e6f805746093e0b474d9', '0', 'b210cb8acccd4226b3321e9eb038c662', '2019-02-07 17:14:35');

-- ----------------------------
-- Table structure for brand_info
-- ----------------------------
DROP TABLE IF EXISTS `brand_info`;
CREATE TABLE `brand_info` (
  `id` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT '品牌名称',
  `remark` varchar(200) DEFAULT '' COMMENT '品牌备注信息',
  `modification_time` datetime NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  `modification_user_type` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand_info
-- ----------------------------
INSERT INTO `brand_info` VALUES ('106785b067654cc2885a5fe5feac2aae', '品牌测试2', '品牌测试2', '2019-02-10 19:35:39', 'asdwang', '0');
INSERT INTO `brand_info` VALUES ('a3ad16a1212c46618c36b9e2bbd4259e', '品牌测试1', '品牌测试1', '2019-02-10 19:35:33', 'asdwang', '0');
INSERT INTO `brand_info` VALUES ('de8ee6038d8c47ea8d3031aa516056d0', '品牌测试3', '品牌测试3', '2019-02-10 19:35:45', 'asdwang', '0');

-- ----------------------------
-- Table structure for classification_info
-- ----------------------------
DROP TABLE IF EXISTS `classification_info`;
CREATE TABLE `classification_info` (
  `id` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT '分类名称',
  `brand_id` varchar(2048) DEFAULT NULL COMMENT '关联品牌ID',
  `label_id` varchar(2048) DEFAULT NULL COMMENT '关联标签ID',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_user_type` tinyint(1) NOT NULL,
  `modification_user_id` varchar(32) NOT NULL,
  `modification_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classification_info
-- ----------------------------
INSERT INTO `classification_info` VALUES ('19655a44963a4e83b866120d6e9f5a9d', '分类测试1', 'a3ad16a1212c46618c36b9e2bbd4259e', '3f99493980bf434780eef60582ee02dd', '', '0', 'asdwang', '2019-02-10 19:41:53');
INSERT INTO `classification_info` VALUES ('2895d37603b84512a90f408a1e438b4f', '分类测试2', '106785b067654cc2885a5fe5feac2aae', '2ca9ecc8466b47dcb685c7db56f3635e', '', '0', 'asdwang', '2019-02-10 19:52:22');
INSERT INTO `classification_info` VALUES ('678c908a9b80434f8296cc0e83e97e3b', '分类测试3', 'a3ad16a1212c46618c36b9e2bbd4259e,106785b067654cc2885a5fe5feac2aae,de8ee6038d8c47ea8d3031aa516056d0', '3f99493980bf434780eef60582ee02dd,2ca9ecc8466b47dcb685c7db56f3635e,42895ec5735f4cf28a0036b5328b0e38', '', '0', 'asdwang', '2019-02-10 19:53:56');

-- ----------------------------
-- Table structure for customer_user_info
-- ----------------------------
DROP TABLE IF EXISTS `customer_user_info`;
CREATE TABLE `customer_user_info` (
  `id` varchar(32) NOT NULL,
  `username` varchar(100) NOT NULL COMMENT '登录名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `real_name` varchar(100) NOT NULL COMMENT '客户真实姓名',
  `phone` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL COMMENT '邮箱',
  `points` smallint(5) unsigned zerofill NOT NULL COMMENT '积分',
  `grade` tinyint(3) unsigned zerofill NOT NULL COMMENT '等级',
  `modification_time` datetime NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL,
  `modification_user_type` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer_user_info
-- ----------------------------
INSERT INTO `customer_user_info` VALUES ('5c2958b586c6463385b5bc3d33c3d325', 'wang', '11cb8bae9fb1e6f805746093e0b474d9', 'wang', '123456', '123456', '00000', '000', '2019-02-08 11:03:18', '5c2958b586c6463385b5bc3d33c3d325', '1');

-- ----------------------------
-- Table structure for integrate_info
-- ----------------------------
DROP TABLE IF EXISTS `integrate_info`;
CREATE TABLE `integrate_info` (
  `id` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT '集成方案名称',
  `main_id` varchar(32) NOT NULL COMMENT '主产品id',
  `main_specification` varchar(50) NOT NULL COMMENT '规格',
  `main_level` tinyint(3) unsigned NOT NULL COMMENT '规格',
  `main_vertical` tinyint(3) unsigned NOT NULL COMMENT '规格',
  `main_clearnce` tinyint(3) unsigned zerofill NOT NULL COMMENT '规格',
  `related_list` varchar(1024) DEFAULT NULL COMMENT '关联产品id',
  `modification_time` varchar(20) NOT NULL COMMENT '修改时间',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  `modification_user_type` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of integrate_info
-- ----------------------------
INSERT INTO `integrate_info` VALUES ('31436b0fba304391910b92c6acb8b844', 'test', 'main-product', '300,200', '3', '2', '000', '[{\"id\":\"MCTRL4K\",\"number\":3}]', '2019-02-08 14:21:11', 'test', '5c2958b586c6463385b5bc3d33c3d325', '1');
INSERT INTO `integrate_info` VALUES ('62f4c21016264950af92daba3d0e3001', 'test3', 'main-product', '300,200', '3', '2', '000', '[]', '2019-02-08 14:26:08', 'test3', '5c2958b586c6463385b5bc3d33c3d325', '1');
INSERT INTO `integrate_info` VALUES ('ac902ed99f864d2eadc541a93a67385a', 'test2', 'main-product', '300,200', '3', '2', '000', '[{\"id\":\"MCTRL4K\",\"number\":1},{\"id\":\"cardA8s\",\"number\":2},{\"id\":\"CVT4K-S\",\"number\":3}]', '2019-02-08 14:22:55', 'test2', '5c2958b586c6463385b5bc3d33c3d325', '1');
INSERT INTO `integrate_info` VALUES ('dfe2b70956004a01ac56b961e99db639', 'test5', 'main-product', '300,200', '3', '2', '000', '[{\"id\":\"cardA8s\",\"number\":2}]', '2019-02-08 14:32:50', 'test5', '5c2958b586c6463385b5bc3d33c3d325', '1');

-- ----------------------------
-- Table structure for label_info
-- ----------------------------
DROP TABLE IF EXISTS `label_info`;
CREATE TABLE `label_info` (
  `id` varchar(32) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT '标签名称',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_time` datetime NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  `modification_user_type` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of label_info
-- ----------------------------
INSERT INTO `label_info` VALUES ('2ca9ecc8466b47dcb685c7db56f3635e', '标签测试2', '标签测试2', '2019-02-10 19:36:49', 'asdwang', '0');
INSERT INTO `label_info` VALUES ('3f99493980bf434780eef60582ee02dd', '标签测试1', '标签测试1', '2019-02-10 19:36:13', 'asdwang', '0');
INSERT INTO `label_info` VALUES ('42895ec5735f4cf28a0036b5328b0e38', '标签测试3', '标签测试3', '2019-02-10 19:35:17', 'asdwang', '0');

-- ----------------------------
-- Table structure for maintenance_info
-- ----------------------------
DROP TABLE IF EXISTS `maintenance_info`;
CREATE TABLE `maintenance_info` (
  `id` varchar(32) NOT NULL,
  `product_id` varchar(50) NOT NULL COMMENT '产品ID',
  `sn` varchar(100) NOT NULL DEFAULT '' COMMENT 'sn号',
  `contract` varchar(100) NOT NULL COMMENT '合同号',
  `purchase_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '购买日期',
  `warranty_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '质保日期',
  `warranty_period` smallint(6) NOT NULL COMMENT '质保期限',
  `modification_time` datetime NOT NULL COMMENT '修改时间',
  `modification_user_type` tinyint(4) NOT NULL,
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of maintenance_info
-- ----------------------------
INSERT INTO `maintenance_info` VALUES ('97ad0b4084414c4093db03162c7af73f', '8becb3a879334acd8c20bca8cebad70e', '1111111111', '1111111111111', '2019-02-11 00:00:00', '2021-02-15 00:00:00', '30', '2019-02-11 15:01:45', '0', 'asdwang');

-- ----------------------------
-- Table structure for product_info
-- ----------------------------
DROP TABLE IF EXISTS `product_info`;
CREATE TABLE `product_info` (
  `id` varchar(32) NOT NULL,
  `name` varchar(50) NOT NULL COMMENT '产品名称',
  `classification_id` varchar(32) NOT NULL COMMENT '分类ID，只允许关联一个',
  `brand_id` varchar(32) DEFAULT NULL,
  `label_id` varchar(2048) DEFAULT NULL,
  `img_list` varchar(512) DEFAULT '' COMMENT '产品展示图，图片url，最多8个',
  `thumbnail` varchar(128) DEFAULT NULL,
  `intro` varchar(512) DEFAULT '' COMMENT '产品简介',
  `specifications` varchar(1024) DEFAULT NULL COMMENT '产品规格，可存多个',
  `product_id` varchar(2048) DEFAULT NULL COMMENT '关联产品id，可存多个',
  `detail` longtext COMMENT '图文富文本信息',
  `is_main` tinyint(1) NOT NULL COMMENT '是否为主产品',
  `remark` varchar(200) DEFAULT '' COMMENT '备注信息',
  `modification_time` datetime NOT NULL COMMENT '修改时间',
  `modification_user_id` varchar(32) NOT NULL COMMENT '修改人',
  `modification_user_type` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_info
-- ----------------------------
INSERT INTO `product_info` VALUES ('3c4c59279b874f7796d35531fe4deb28', '产品测试4', '19655a44963a4e83b866120d6e9f5a9d', 'a3ad16a1212c46618c36b9e2bbd4259e', '3f99493980bf434780eef60582ee02dd', '', 'thumbnail_8becb3a879334acd8c20bca8cebad70e_0.png', '产品测试4', '300*100', '', '<p>产品测试4</p>', '0', '', '2019-02-11 23:14:01', 'asdwang', '0');
INSERT INTO `product_info` VALUES ('7a4de5073e3f40559ad8e14add24fa4f', '产品测试3', '678c908a9b80434f8296cc0e83e97e3b', 'de8ee6038d8c47ea8d3031aa516056d0', '3f99493980bf434780eef60582ee02dd,2ca9ecc8466b47dcb685c7db56f3635e,42895ec5735f4cf28a0036b5328b0e38', '', 'thumbnail_8becb3a879334acd8c20bca8cebad70e_0.png', '产品测试3', '500*400,400*300,300*200', '8becb3a879334acd8c20bca8cebad70e,af29d21d55ef4dc2ab874968dad83670,7a4de5073e3f40559ad8e14add24fa4f', '<p>产品测试3</p>', '1', '', '2019-02-11 00:52:13', 'asdwang', '0');
INSERT INTO `product_info` VALUES ('8becb3a879334acd8c20bca8cebad70e', '产品测试1', '19655a44963a4e83b866120d6e9f5a9d', 'a3ad16a1212c46618c36b9e2bbd4259e', '3f99493980bf434780eef60582ee02dd', 'imgs_8becb3a879334acd8c20bca8cebad70e_0.png', 'thumbnail_8becb3a879334acd8c20bca8cebad70e_0.png', '产品测试1', '300*200', '', '<p>产品测试1</p>', '1', '', '2019-02-10 22:15:03', 'asdwang', '0');
INSERT INTO `product_info` VALUES ('af29d21d55ef4dc2ab874968dad83670', '产品测试2', '678c908a9b80434f8296cc0e83e97e3b', '106785b067654cc2885a5fe5feac2aae', '3f99493980bf434780eef60582ee02dd,2ca9ecc8466b47dcb685c7db56f3635e,42895ec5735f4cf28a0036b5328b0e38', 'imgs_af29d21d55ef4dc2ab874968dad83670_0.png', 'thumbnail_af29d21d55ef4dc2ab874968dad83670_0.png', '产品测试2', '300*200', '', '<p>产品测试2</p>', '0', '', '2019-02-10 23:18:01', 'asdwang', '0');
