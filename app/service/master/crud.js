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
    data.modification_time = new Date();
    const result = await this.app.mysql.insert(tableName, data);
    const flag = result.affectedRows === 1;
    if (flag) {
      return {
        success: true,
        result: 'ok'
      }
    }
    return {
      success: false,
      message: result.message
    }
  }
  // 更新
  async update(tableName, data) {
    const result = await this.app.mysql.update(tableName, data);
    const flag = result.affectedRows === 1;
    if (flag) {
      return {
        success: true,
        result: 'ok'
      }
    }
    return {
      success: false,
      message: result.message
    }
  }
  // 删除
  async destroy(tableName, ids) {
    let result;
    const {
      mysql
    } = this.app;
    if (ids.length > 1) {
      let condition = '';
      ids.forEach((id, index) => {
        if (index != ids.length - 1) {
          condition += `${mysql.escape(id)},`;
        } else {
          condition += mysql.escape(id)
        }
      });
      result = await mysql.query(`delete from ${tableName} where id in (${condition})`);
    } else {
      result = await mysql.delete(tableName, {
        id: ids[0]
      });
    }
    const flag = result.affectedRows === ids.length;

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
}

module.exports = CrudService;