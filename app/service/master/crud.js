const Service = require('egg').Service;
const keysMap = require('./keysMap');
class CrudService extends Service {
  // 获取表条数
  async queryNumber(tableNames){
    const mysql = this.app.mysql;
    const result=[];
    for(const name of tableNames){
      const total = await mysql.query(`select count(id) from ${name}_info`);
      if(total[0]&&total[0]['count(id)']){
        result.push(total[0]['count(id)']);
      }else{
        result.push(0);
      }
    }
    return {
      success: true,
      result
    };
  }
  // 查询全表
  async queryAll(tableName) {
    const result = await this.app.mysql.select(tableName, {
      columns: keysMap.queryAll[tableName]
    });
    return {
      success: true,
      result
    };
  }  
  // 根据id查询多条数据
  async queryMany(tableName, ids, range) {
    const mysql = this.app.mysql;
    let condition = '';

    ids.forEach((id, index) => {
      if (index != ids.length - 1) {
        condition += `${mysql.escape(id)},`;
      } else {
        condition += mysql.escape(id)
      }
    });
    const result = await mysql.query(`select ${range||keysMap.queryPageList[tableName]} from ${tableName} where id in (${condition})`);
    return {
      success: true,
      result
    };
  }
  // 分页列表
  async queryPageList(tableName, size, current, map) {
    const mysql = this.app.mysql;
    const total = await mysql.query(`select count(id) from ${tableName}`);
    const key = Object.keys(map)[0];
    const table = await mysql.query(
      `select ${keysMap.queryPageList[tableName]} from ${tableName} where ${key} like '%${map[key]}%' limit ${(current-1)*size} , ${size}`
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
    const mysql = this.app.mysql;
    let condition = '';
    ids.forEach((id, index) => {
      if (index != ids.length - 1) {
        condition += `${mysql.escape(id)},`;
      } else {
        condition += mysql.escape(id)
      }
    });
    result = await mysql.query(`delete from ${tableName} where id in (${condition})`);
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