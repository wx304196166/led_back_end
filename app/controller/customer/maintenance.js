/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-19 22:45:44
 * @Description: 
 */
'use strict';

const Controller = require('../../core/base_controller');
class MaintenanceController extends Controller {

  async search() {
    const sn = this.ctx.query.sn;
    const result = await this.app.mysql.get('maintenance_info', {
      sn
    });
    if (result) {
      const product = await this.app.mysql.select('product_info', {
        where: {
          id: result.product_id
        },
        columns: ['name', 'classification_id', 'thumbnail'],
        limit: 1
      });
      if (product.length===1) {        
        result.productName = product[0].name;
        result.thumbnail = product[0].thumbnail;
        result.classification = product[0].classification_id;

        this.success(result);
        return;
      }
    }
    this.fail('Maintenance information does not exist');
  }

}

module.exports = MaintenanceController;