'use strict';
const utils = {
  // 下划线转换驼峰
  toHump(name) {
    return name.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  },
  // 驼峰转换下划线
  toLine(name) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
}
module.exports = utils;