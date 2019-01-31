const Service = require('egg').Service;

class CrudService extends Service {
  // 分页列表
  async index(tableName, params) {
    const {
      current,
      size,
      map
    } = params

    const table = await this.app.mysql.select(tableName, {
      where: map, // WHERE 条件
      limit: size, // 返回数据量
      offset: current * size, // 数据偏移量
    });
    return table;
  }
  // 创建
  async create(tableName, data) {
    const result = await this.app.mysql.insert(tableName, data);
    if (result.message) {
      return {
        success: false,
        message: result.message
      }
    }
    return {
      success: true,
      result
    }
  }
  // 更新
  async update(tableName, data) {
    const result = await this.app.mysql.update(tableName, data);
    if (result.message) {
      return {
        success: false,
        message: result.message
      }
    }
    return {
      success: true,
      result
    }
  }
  // 删除
  async destroy(tableName, id) {
    const result = await this.app.mysql.delete(tableName, {
      id
    });
    if (result.message) {
      return {
        success: false,
        message: result.message
      }
    }
    return {
      success: true,
      result
    }
  }
}

module.exports = CrudService;