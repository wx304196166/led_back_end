(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-66d3"],{"44Km":function(e,t,a){"use strict";a.r(t);var l=a("P2sY"),o=a.n(l),i=a("t3Un"),n="customer_user",r={queryPageList:function(e){return Object(i.a)({url:"/master/queryPageList/"+n,method:"post",data:e})},create:function(e){return Object(i.a)({url:"/master/create/"+n,method:"post",data:e})},update:function(e){return Object(i.a)({url:"/master/update/"+n,method:"post",data:e})},batchDelete:function(e){return Object(i.a)({url:"/master/batchDelete/"+n,method:"delete",data:e})}},s={model:{id:"",username:"",password:"",modification_user_id:"",modification_user_type:0},tableColumn:[{label:"账号",prop:"username"},{label:"姓名",prop:"real_name"},{label:"联系电话",prop:"phone"},{label:"邮箱",prop:"email"}]},d={data:function(){return{dialogTitle:"添加",sels:[],addDialog:!1,detailDialog:!1,deleteDialog:!1,editDialog:!1,isEdit:!1,tableData:[],model:s.model,reset:o()({},s.model),column:s.tableColumn,page:{current:1,map:{username:""},size:10,total:0},rule:{}}},created:function(){this.reset.modification_user_id=this.$store.getters.token,this.model.modification_user_id=this.$store.getters.token,this.initPageData()},methods:{search:function(){this.page.current=1,this.initPageData()},add:function(){this.addDialog=!0,this.dialogTitle="添加",this.resetForm("form")},remove:function(){var e=this,t=this.sels.map(function(e){return e.id});r.batchDelete(t).then(function(t){0===t.code?(e.$message.success("删除成功"),e.initPageData(e.page.current),e.deleteDialog=!1):e.$message.error("删除失败")}).catch(function(){e.$message.error("删除失败.")})},dialogClose:function(){this.resetForm("form")},handleCurrentChange:function(e){this.page.current=e,this.initPageData()},initPageData:function(){var e=this;r.queryPageList(this.page).then(function(t){e.tableData=[],0===t.code?(e.page.total=t.data.total,e.tableData=t.data.records):(e.tableData=[],e.page.total=0),e.$refs.table.clearSelection()})},showModel:function(e,t){"detail"===e?(this.isEdit=!1,this.detailDialog=!0,this.model=o()({},t)):"edit"===e&&(this.dialogTitle="修改",this.isEdit=!0,this.addDialog=!0,this.model=o()({},t))},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?t.isEdit?r.update(t.model).then(function(e){0===e.code?(t.$message.success("修改成功"),t.initPageData(t.page.current),t.addDialog=!1):t.$message.error("修改失败："+e.msg)}).catch(function(){t.$message.error("修改失败.")}):r.create(t.model).then(function(e){0===e.code?(t.$message.success("添加成功"),t.initPageData(t.page.current),t.addDialog=!1):t.$message.error("添加失败："+e.msg)}).catch(function(){t.$message.error("添加失败.")}):t.$message.error("请检查填写数据.")})},resetForm:function(e){this.isEdit||(this.$refs[e].clearValidate(),this.model=o()({},this.reset))},selsChange:function(e){this.sels=e},delGroup:function(){this.isEdit=!1,this.deleteDialog=!0},handleSelCurrentChange:function(e,t,a){this.$refs.table.toggleRowSelection(e)}}},c=(a("I9RT"),a("KHd+")),u=Object(c.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search-box"},[e._v("\n    用户账号\n    "),a("el-input",{staticStyle:{margin:"0 12px"},attrs:{placeholder:"请输入搜索内容"},nativeOn:{keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.page.map.username,callback:function(t){e.$set(e.page.map,"username",t)},expression:"page.map.username"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("div",{staticStyle:{marginTop:"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add()}}},[e._v("添加\n      ")]),e._v(" "),a("el-button",{attrs:{disabled:0===e.sels.length,type:"danger"},on:{click:e.delGroup}},[e._v("批量删除\n      ")])],1)],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!0,stripe:""},on:{"row-click":e.handleSelCurrentChange,"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),e._l(e.column,function(e){return a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":!0}})}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("a",{staticClass:"abtn",on:{click:function(a){e.showModel("detail",t.row)}}},[e._v("详情")]),e._v(" |\n            "),a("a",{staticClass:"abtn",on:{click:function(a){e.showModel("edit",t.row)}}},[e._v("修改")])])]}}])})],2)],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right","margin-right":"2%"},attrs:{"page-size":e.page.size,total:e.page.total,layout:"prev, pager, next,total"},on:{"current-change":e.handleCurrentChange,"current-page":e.page.current}}),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t},close:e.dialogClose}},[a("el-form",{ref:"form",staticStyle:{width:"80%"},attrs:{model:e.model,rules:e.rule,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"real_name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.model.real_name,callback:function(t){e.$set(e.model,"real_name",t)},expression:"model.real_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{"margin-left":"20%"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确定")]),e._v(" "),e.isEdit?e._e():a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")]),e._v(" "),e.isEdit?a("el-button",{on:{click:function(t){e.addDialog=!1}}},[e._v("取消")]):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.detailDialog,title:"查看详细信息"},on:{"update:visible":function(t){e.detailDialog=t},close:e.dialogClose}},[a("el-form",{ref:"formDetail",staticStyle:{width:"80%"},attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"real_name"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.real_name,callback:function(t){e.$set(e.model,"real_name",t)},expression:"model.real_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1)],1)],1),e._v(" "),a("el-dialog",{staticClass:"deleteDialog",attrs:{visible:e.deleteDialog,title:"删除确认",width:"40%"},on:{"update:visible":function(t){e.deleteDialog=t}}},[a("span",{staticStyle:{"text-align":"center"}},[e._v("确认要删除吗?")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.remove}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.deleteDialog=!1}}},[e._v("取消")])],1)])],1)},[],!1,null,"371a117a",null);u.options.__file="index.vue";t.default=u.exports},I9RT:function(e,t,a){"use strict";var l=a("e26R");a.n(l).a},e26R:function(e,t,a){}}]);