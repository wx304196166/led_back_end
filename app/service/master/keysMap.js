module.exports = {
  // 查询全表返回的字段
  queryAll: {
    brand_info: ['id', 'name'],
    classification_info: ['id', 'name','brand_id','label_id'],
    label_info: ['id', 'name'],

    customer_user_info: ['id', 'username'],
    admin_user_info: ['id', 'username'],

    integrate_info: ['id', 'name'],
    maintenance_info: ['id', 'name'],
    product_info: ['id', 'name','classification_id','brand_id','label_id','thumbnail','intro']
  },
  // 分页列表返回的字段
  queryPageList: {
    brand_info: '*',
    classification_info: '*',
    label_info: '*',

    customer_user_info: '*',
    admin_user_info: '*',

    integrate_info: '*',
    maintenance_info: '*',
    product_info: 'id,name,classification_id,brand_id,label_id,specifications,is_main'
  }
};