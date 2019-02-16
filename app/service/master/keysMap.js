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
    product_info: ['id', 'name','classification_id','brand_id','label_id','thumbnail','intro','specifications','product_id','is_main']
  },
  // 分页列表返回的字段
  queryPageList: {
    brand_info: '*',
    classification_info: '*',
    label_info: '*',

    customer_user_info: 'id,username,real_name,phone,email,points,grade,modification_user_id,modification_user_type',
    admin_user_info: 'id,username',

    integrate_info: '*',
    maintenance_info: '*',
    product_info: 'id,name,classification_id,brand_id,label_id,img_list,thumbnail,specifications,product_id,is_main'
  }
};