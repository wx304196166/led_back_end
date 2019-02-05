const Service = require('egg').Service;

class CrudService extends Service {
  // 分页列表
  async queryPageList(tableName, size, current, map) {
    const {
      mysql
    } = this.app;
    const total = await mysql.query(`select count(id) from ${tableName}`);
    const table = await mysql.query(
      `select * from ${tableName} where name like '%${map.name}%' limit ${(current-1)*size} , ${size}`
    );

    return {
      success: true,
      result: {
        records: table,
        total: total[0]['count(id)']
      }
    };
  }
  // 创建
  async create(tableName, data) {
    data.modification_time = this.app.mysql.literals.now;
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
    const flag = result.affectedRows === 1
    if (flag) {
      return {
        success: true,
        result
      }
    }
    return {
      success: false,
      message: result.message
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