(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01d7"],{aTLy:function(e,t,a){},"s+e8":function(e,t,a){"use strict";a.r(t);var l=a("P2sY"),o=a.n(l),r=a("t3Un"),i="maintenance",n={queryPageList:function(e){return Object(r.a)({url:"/master/queryPageList/"+i,method:"post",data:e})},create:function(e){return Object(r.a)({url:"/master/create/"+i,method:"post",data:e})},update:function(e){return Object(r.a)({url:"/master/update/"+i,method:"post",data:e})},batchDelete:function(e){return Object(r.a)({url:"/master/batchDelete/"+i,method:"delete",data:e})}},s={model:{id:"",product_id:"",sn:"",contract:"",purchase_date:"",warranty_date:"",warranty_period:"",modification_user_id:"",modification_user_type:0},tableColumn:[{label:"SN 号码",prop:"sn"},{label:"产品名称",prop:"product_id",hasMap:!0},{label:"合同编号",prop:"contract"},{label:"购买日期",prop:"purchase_date",isDate:!0},{label:"质保日期",prop:"warranty_date",isDate:!0},{label:"质保期限",prop:"warranty_period"}]},d=a("7Qib"),c={data:function(){return{dialogTitle:"添加",sels:[],addDialog:!1,detailDialog:!1,deleteDialog:!1,editDialog:!1,isEdit:!1,tableData:[],model:s.model,reset:o()({},s.model),column:s.tableColumn,page:{current:1,map:{sn:""},size:10,total:0},rule:{}}},computed:{map:function(){return this.$store.getters.map}},created:function(){this.reset.modification_user_id=this.$store.getters.token,this.model.modification_user_id=this.$store.getters.token,this.initPageData()},methods:{formatDate:function(e){return Object(d.c)(e,"{y}-{m}-{d}")},search:function(){this.page.current=1,this.initPageData()},add:function(){this.addDialog=!0,this.dialogTitle="添加",this.resetForm("form")},remove:function(){var e=this,t=this.sels.map(function(e){return e.id});n.batchDelete(t).then(function(t){0===t.code?(e.$message.success("删除成功"),e.initPageData(e.page.current),e.deleteDialog=!1):e.$message.error("删除失败")}).catch(function(){e.$message.error("删除失败.")})},dialogClose:function(){this.resetForm("form")},handleCurrentChange:function(e){this.page.current=e,this.initPageData()},initPageData:function(){var e=this;n.queryPageList(this.page).then(function(t){e.tableData=[],0===t.code?(e.page.total=t.data.total,e.tableData=t.data.records):(e.tableData=[],e.page.total=0),e.$refs.table.clearSelection()})},showModel:function(e,t){"detail"===e?(this.isEdit=!1,this.detailDialog=!0,this.model=o()({},t)):"edit"===e&&(this.dialogTitle="修改",this.isEdit=!0,this.addDialog=!0,this.model=o()({},t))},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?t.isEdit?n.update(t.model).then(function(e){0===e.code?(t.$message.success("修改成功"),t.initPageData(t.page.current),t.addDialog=!1):t.$message.error("修改失败："+e.msg)}).catch(function(){t.$message.error("修改失败.")}):n.create(t.model).then(function(e){0===e.code?(t.$message.success("添加成功"),t.initPageData(t.page.current),t.addDialog=!1):t.$message.error("添加失败："+e.msg)}).catch(function(){t.$message.error("添加失败.")}):t.$message.error("请检查填写数据.")})},resetForm:function(e){this.isEdit||(this.$refs[e].clearValidate(),this.model=o()({},this.reset))},selsChange:function(e){this.sels=e},delGroup:function(){this.isEdit=!1,this.deleteDialog=!0},handleSelCurrentChange:function(e,t,a){this.$refs.table.toggleRowSelection(e)}}},p=(a("zS6W"),a("KHd+")),u=Object(p.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"search-box"},[e._v("\n    SN号码\n    "),a("el-input",{staticStyle:{margin:"0 12px"},attrs:{placeholder:"请输入搜索内容"},nativeOn:{keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.page.map.sn,callback:function(t){e.$set(e.page.map,"sn",t)},expression:"page.map.sn"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("div",{staticStyle:{marginTop:"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add()}}},[e._v("添加\n      ")]),e._v(" "),a("el-button",{attrs:{disabled:0===e.sels.length,type:"danger"},on:{click:e.delGroup}},[e._v("批量删除\n      ")])],1)],1),e._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!0,stripe:""},on:{"row-click":e.handleSelCurrentChange,"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50px",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),e._l(e.column,function(t){return a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(l){return[t.hasMap?a("span",[e._v(e._s(e.map[t.prop][l.row[t.prop]]))]):t.isDate?a("span",[e._v(e._s(e.formatDate(l.row[t.prop])))]):a("span",[e._v(e._s(l.row[t.prop]))])]}}])})}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",align:"center",label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("a",{staticClass:"abtn",on:{click:function(a){e.showModel("detail",t.row)}}},[e._v("详情")]),e._v(" |\n            "),a("a",{staticClass:"abtn",on:{click:function(a){e.showModel("edit",t.row)}}},[e._v("修改")])])]}}])})],2)],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right","margin-right":"2%"},attrs:{"page-size":e.page.size,total:e.page.total,layout:"prev, pager, next,total"},on:{"current-change":e.handleCurrentChange,"current-page":e.page.current}}),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t},close:e.dialogClose}},[a("el-form",{ref:"form",staticStyle:{width:"80%"},attrs:{model:e.model,rules:e.rule,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"产品名称",prop:"product_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.model.product_id,callback:function(t){e.$set(e.model,"product_id",t)},expression:"model.product_id"}},e._l(e.map.product_id,function(e,t){return a("el-option",{key:t,attrs:{value:t,label:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"SN 号码",prop:"sn"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.model.sn,callback:function(t){e.$set(e.model,"sn",t)},expression:"model.sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"合同编号",prop:"contract"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.model.contract,callback:function(t){e.$set(e.model,"contract",t)},expression:"model.contract"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"购买日期",prop:"purchase_date"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.model.purchase_date,callback:function(t){e.$set(e.model,"purchase_date",t)},expression:"model.purchase_date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"质保日期",prop:"warranty_date"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.model.warranty_date,callback:function(t){e.$set(e.model,"warranty_date",t)},expression:"model.warranty_date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"质保期限",prop:"warranty_period"}},[a("el-input-number",{attrs:{min:0,placeholder:"请输入"},model:{value:e.model.warranty_period,callback:function(t){e.$set(e.model,"warranty_period",t)},expression:"model.warranty_period"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{"margin-left":"20%"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确定")]),e._v(" "),e.isEdit?e._e():a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")]),e._v(" "),e.isEdit?a("el-button",{on:{click:function(t){e.addDialog=!1}}},[e._v("取消")]):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.detailDialog,title:"查看详细信息"},on:{"update:visible":function(t){e.detailDialog=t},close:e.dialogClose}},[a("el-form",{ref:"formDetail",staticStyle:{width:"80%"},attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"产品名称",prop:"product_id"}}),e._v(" "),a("el-form-item",{attrs:{label:"SN 号码",prop:"sn"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.sn,callback:function(t){e.$set(e.model,"sn",t)},expression:"model.sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"合同编号",prop:"contract"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.contract,callback:function(t){e.$set(e.model,"contract",t)},expression:"model.contract"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"购买日期",prop:"purchase_date"}},[a("el-input",{attrs:{type:"textarea",readonly:""},model:{value:e.model.purchase_date,callback:function(t){e.$set(e.model,"purchase_date",t)},expression:"model.purchase_date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"质保日期",prop:"warranty_date"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.warranty_date,callback:function(t){e.$set(e.model,"warranty_date",t)},expression:"model.warranty_date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"质保期限",prop:"warranty_period"}},[a("el-input",{attrs:{readonly:""},model:{value:e.model.warranty_period,callback:function(t){e.$set(e.model,"warranty_period",t)},expression:"model.warranty_period"}})],1)],1)],1),e._v(" "),a("el-dialog",{staticClass:"deleteDialog",attrs:{visible:e.deleteDialog,title:"删除确认",width:"40%"},on:{"update:visible":function(t){e.deleteDialog=t}}},[a("span",{staticStyle:{"text-align":"center"}},[e._v("确认要删除吗?")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.remove}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.deleteDialog=!1}}},[e._v("取消")])],1)])],1)},[],!1,null,"e1cb54be",null);u.options.__file="index.vue";t.default=u.exports},zS6W:function(e,t,a){"use strict";var l=a("aTLy");a.n(l).a}}]);