(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cc37d0c"],{"05a4":function(t,e,a){"use strict";var s=a("4611"),i=a.n(s);i.a},2058:function(t,e,a){"use strict";var s=a("e26c"),i=a.n(s);i.a},4611:function(t,e,a){},"544d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated fadeIn manage-classes"},[a("b-row",[a("b-col",{staticClass:"curriculum-content",attrs:{xs:"12",lg:"12"}},[a("b-card",{staticClass:"curriculum-card"},[a("template",{slot:"title"},[a("i",{staticClass:"icon-people"})]),a("b-card-body",[a("b-tabs",{staticClass:"curriculum-tabs"},[a("b-tab",{attrs:{active:""}},[a("template",{slot:"title"},[a("i",{staticClass:"icon-people"}),t._v(" Initial Training\n              ")]),a("b-button",{staticClass:"form-control btn-manage-classes ml-auto w-auto",attrs:{block:"",pill:"",size:"sm",variant:"primary"},on:{click:function(e){t.manageClassesModal=!0,t.is_initial=1}}},[t._v("Manage Classes")]),a("CurriculumTable",{attrs:{columns:t.columns,data:t.caregiverInitialCourseList,options:t.options,theme:t.theme},on:{getAllCaregiverCurriculum:t.getAllCaregiverCurriculum}})],2),a("b-tab",[a("template",{slot:"title"},[a("i",{staticClass:"icon-calendar"}),t._v(" Annual Compliance\n              ")]),a("b-alert",{attrs:{show:"",variant:"secondary"}},[a("i",{staticClass:"icon-info icons"}),t._v(" Due 1 year after initial/annual training was last completed (training anniversary). This curriculum will be repeated every year unless you add a second-year curriculum (using the ADD YEAR button).")]),a("b-button",{staticClass:"form-control btn-manage-classes ml-auto w-auto",attrs:{block:"",pill:"",size:"sm",variant:"primary"},on:{click:function(e){t.manageClassesModal=!0,t.is_initial=0}}},[t._v("Manage Classes")]),a("CurriculumTable",{attrs:{columns:t.columns,data:t.caregiverAnnualCourseList,options:t.options,theme:t.theme},on:{getAllCaregiverCurriculum:t.getAllCaregiverCurriculum}})],2)],1)],1)],2)],1)],1),a("b-modal",{staticClass:"modal-primary modal-header manage-classes",attrs:{title:"Create Caregiver"},on:{ok:function(e){t.manageClassesModal=!1}},scopedSlots:t._u([{key:"modal-header",fn:function(){return[a("b-button",{staticClass:"btn-4x modal-header-icon",attrs:{size:"lg",variant:"primary"}},[a("i",{staticClass:"cui-paperclip icons"})]),t._v("  "),a("h4",[t._v("Class Catalog")])]},proxy:!0}]),model:{value:t.manageClassesModal,callback:function(e){t.manageClassesModal=e},expression:"manageClassesModal"}},[a("div",{attrs:{md:"12",sm:"12"}},t._l(t.caregiverClassList,(function(t,e){return a("span",{key:e},[a("ClassContainer",{attrs:{data:t}})],1)})),0),a("div",{staticClass:"w-100 btn-manage",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-button",{staticClass:"mr-1 btn-manage-classes",attrs:{size:"md-4",pill:"",type:"submit",variant:"primary",block:""},on:{click:function(e){return t.saveManageClasses()}}},[t._v("\n          Save\n        ")]),a("b-button",{staticClass:"btn-manage-classes-cancel",attrs:{size:"md",pill:"",variant:"secondary"},on:{click:function(e){return t.closeManageClasses()}}},[t._v("\n          Cancel\n        ")])],1)]),a("div",{staticClass:"vld-parent"},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage,color:"#06b"},on:{"update:active":function(e){t.isLoading=e}}})],1)],1)},i=[],n=(a("a481"),a("bc3a")),r=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-client-table",{staticClass:"curriculum_table",attrs:{columns:t.columns,data:t.data,options:t.options,theme:t.theme,id:"dataTable"},scopedSlots:t._u([{key:"headings",fn:function(e){return a("div",{},[t._v("\n        "+t._s(e.headings)+"\n    ")])}},{key:"topic",fn:function(e){return a("div",{},t._l(e.row.topics,(function(e,s){return a("span",{key:s},[a("div",{staticClass:"tag-group-name"},[t._v(t._s(e))])])})),0)}},{key:"child_row",fn:function(e){return a("div",{},[a("div",{staticClass:"row-expanded-container"},[a("div",{staticClass:"curric-list-column-1"},[a("div",{staticClass:"curric-list-section"},[a("div",{staticClass:"curric-list-section-title"},[t._v("Class Description")]),t.readMoreActivated?t._e():a("div",[t._v(t._s(t.converHTML(e.row.description).slice(0,200)))]),t.readMoreActivated||""==e.row.description?t._e():a("a",{attrs:{href:"#"},on:{click:t.activateReadMore}},[t._v("\n              read more...\n            ")]),t.readMoreActivated?a("div",{domProps:{innerHTML:t._s(t.converHTML(e.row.description))}}):t._e(),t.readMoreActivated?a("a",{attrs:{href:"#"},on:{click:t.activateReadMore}},[t._v("\n              read less...\n            ")]):t._e()]),a("div",{staticClass:"curric-list-section"},[a("div",{staticClass:"curric-list-sub-section-size-half"},[a("div",{staticClass:"curric-list-section-title"},[t._v("Assigned date")]),a("div",{staticClass:"curric-list-sectino-content"},[t._v(t._s(e.row.assignDate))])]),a("div",{staticClass:"curric-list-sub-section-size-half"},[a("div",{staticClass:"curric-list-section-title"},[t._v("Assigned by")]),a("div",{staticClass:"curric-list-sectino-content"},[t._v(t._s(e.row.assignedBy))])])])]),a("div",{staticClass:"curric-list-button-controls"},[a("b-button",{staticClass:"dash-btn",attrs:{size:"sm",variant:"danger"},on:{click:function(a){return t.showRemoveClassModal(e.row)}}},[t._v("REMOVE CLASS")])],1),a("b-modal",{staticClass:"modal-primary",attrs:{title:"Are you sure?","ok-variant":"danger"},on:{ok:function(e){t.removeClassModal=!1,t.removeClass()}},model:{value:t.removeClassModal,callback:function(e){t.removeClassModal=e},expression:"removeClassModal"}},[t._v("\n          Confirm that you want to Remove Class "+t._s(t.selectedClassName)+"\n        ")])],1)])}}])}),a("div",{staticClass:"vld-parent"},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage,color:"#06b"},on:{"update:active":function(e){t.isLoading=e}}})],1)],1)},l=[],c=a("a026"),u=a("9ebe"),d=a("f1fb"),g=a("5661"),v=a("9062"),f=a.n(v),h=(a("e40d"),a("5596")),m=a.n(h),p={success:"success",error:"error",info:"info",warn:"warn"};m.a.init({types:p}),c["default"].use(u["ClientTable"]);var C={name:"CurriculumTable",props:["columns","data","options","theme"],components:{ClientTable:u["ClientTable"],Event:u["Event"],AsideToggler:d["b"],AppAside:d["a"],Loading:f.a},data:function(){return{readMoreActivated:!1,removeClassModal:!1,selectedClassName:"",selectedClassId:"",is_initial:1,userId:1,classIdList:[],assignedBy:"Segun Ogungbemi",isLoading:!1,fullPage:!0}},created:function(){this.userId=localStorage.user_id,this.assignedBy=localStorage.user_nm},methods:{rotateIcon:function(t){t.toggleClass("down")},activateReadMore:function(){this.readMoreActivated=!this.readMoreActivated},converHTML:function(t){var e=(new DOMParser).parseFromString(t,"text/html"),a=e.documentElement.textContent;return a},showRemoveClassModal:function(t){this.removeClassModal=!0,this.selectedClassName=t.class_name,this.selectedClassId=t.id},removeClass:function(){var t=this;this.isLoading=!0;var e=g["a"]+"/caregiverCurriculum/getAllCurriculumsByUserIdAndInitial/"+this.userId+"/"+this.is_initial;this.axios.get(e).then((function(e){t.caregiverCurriculums=e.data,console.log(t.caregiverCurriculums);for(var a=[],s=0;s<t.caregiverCurriculums.length;s++)t.caregiverCurriculums[s].class_id!=t.selectedClassId&&a.push(t.caregiverCurriculums[s].class_id);console.log(a);var i=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),n=g["a"]+"/caregiverCurriculum/updateByUserIdAndInitial/"+t.userId+"/"+t.is_initial;r.a.put(n,{classIdList:a,assigned_date:i,assigned_by:t.assignedBy}).then((function(e){var s={user_id:t.userId,classIdList:a};r.a.post(g["b"]+"/wp-json/custom-plugin/fn_assign_courses_MVEN",s).then((function(e){console.log("response==>"+e.data["status"]),"success"==e.data["status"]&&(m.a.success("Removed Class Successfully!","Success"),t.$emit("getAllCaregiverCurriculum",t.userId),t.isLoading=!1)}))})).catch((function(t){m.a.error("something went wrong!","Error"),console.log(t)}))}))}}},b=C,y=(a("68c2"),a("2877")),_=Object(y["a"])(b,o,l,!1,null,null,null),w=_.exports,L=a("7434"),M=a("a18c"),x={success:"success",error:"error",info:"info",warn:"warn"};m.a.init({types:x});var A={name:"curriculum",components:{CurriculumTable:w,ClassContainer:L["a"],Loading:f.a},data:function(){return{columns:["class_name","duration","topic"],manageClassesModal:!1,is_initial:1,userId:1,assignedBy:"Segun Ogungbemi",isLoading:!1,fullPage:!0,caregiverClassList:[],topicList:[],categoryList:[],caregiverCurriculums:[],caregiverActiveClassList:[],caregiverInitialCourseList:[],caregiverAnnualCourseList:[],options:{headings:{class:"Class",duration:"Duration",topics:"Topics"},sortable:["class"],filterable:["class","topic"],sortIcon:{base:"fa",up:"fa-sort-asc",down:"fa-sort-desc",is:"fa-sort"},pagination:{chunk:5,edge:!1,nav:"scroll"}},useVuex:!1,theme:"bootstrap4",template:"default"}},beforeCreate:function(){void 0!=localStorage.user_id&&"0"!=localStorage.user_id||M["a"].push({name:"Login"})},created:function(){this.userId=localStorage.user_id,this.assignedBy=localStorage.user_nm,this.isLoading=!0,this.getAllTopicList(),this.getCategory(),this.getAllCaregiverCurriculum()},methods:{getAllCaregiverClassList:function(){var t=this,e=g["a"]+"/caregiversClass/getCaregiversClassList";this.axios.get(e).then((function(e){t.caregiverClassList=[],t.caregiverInitialCourseList=[],t.caregiverAnnualCourseList=[];for(var a=0;a<e.data.length;a++){var s=e.data[a];s["topics"]=t.getTopicByClassId(e.data[a]["id"]),s["category"]=t.getCategoryByClassId(e.data[a]["id"]),s["active"]=t.checkExistTopic(e.data[a]["id"],t.is_initial),s["assignedBy"]=t.getAssignedDetails(e.data[a]["id"],"assignedBy"),s["assignDate"]=t.getAssignedDetails(e.data[a]["id"],"assignedDate"),s["readMoreActivated"]=!1,"true"==s["active"]&&("annual"==s["category"]?t.caregiverAnnualCourseList.push(s):t.caregiverInitialCourseList.push(s)),t.caregiverClassList.push(s),t.isLoading=!1}}))},checkExistTopic:function(t,e){for(var a=0;a<this.caregiverCurriculums.length;a++)if(this.caregiverCurriculums[a]["class_id"]==t&&this.caregiverCurriculums[a]["class_type"]==e)return"true";return"false"},getAssignedDetails:function(t,e){for(var a=0;a<this.caregiverCurriculums.length;a++)if(this.caregiverCurriculums[a]["class_id"]==t){if("assignedBy"==e)return this.caregiverCurriculums[a].assigned_by;var s=new Date(this.caregiverCurriculums[a].assigned_date),i=(s.getMonth()>8?s.getMonth()+1:"0"+(s.getMonth()+1))+"/"+(s.getDate()>9?s.getDate():"0"+s.getDate())+"/"+s.getFullYear();return i}return"false"},getAllTopicList:function(){var t=this,e=g["a"]+"/caregiversTopic/getAllCaregiversTopicList";this.axios.get(e).then((function(e){t.topicList=e.data}))},getTopicListByClassId:function(t){var e=g["a"]+"/caregiversTopic/getCaregiversTopicListByClassId/"+t;this.axios.get(e).then((function(t){}))},getCategory:function(t){var e=this,a=g["a"]+"/caregiversClass/getCourseCategory";this.axios.get(a).then((function(t){console.log(t),e.categoryList=t.data}))},getTopicByClassId:function(t){for(var e=[],a=0;a<this.topicList.length;a++)this.topicList[a]["class_id"]==t&&e.push(this.topicList[a]["topic_name"]);return e},getCategoryByClassId:function(t){for(var e=[],a=0;a<this.categoryList.length;a++)this.categoryList[a]["class_id"]==t&&"default"!=this.categoryList[a]["slug"]&&e.push(this.categoryList[a]["slug"]);return e},closeManageClasses:function(){this.getAllCaregiverClassList(),this.manageClassesModal=!1},saveManageClasses:function(){var t=this;this.isLoading=!0;for(var e=[],a=0;a<this.caregiverClassList.length;a++)"true"==this.caregiverClassList[a]["active"]&&e.push(this.caregiverClassList[a]["id"]);if(0==e.length){var s=g["a"]+"/caregiversClass/getDefaultCourses";this.axios.get(s).then((function(a){for(var s=0;s<a.data.length;s++)e[s]=a.data[s]["class_id"];t.assignCourses(e)}))}else this.assignCourses(e)},assignCourses:function(t){var e=this,a=this,s=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),i=g["a"]+"/caregiverCurriculum/updateByUserIdAndInitial/"+this.userId+"/"+this.is_initial;r.a.put(i,{classIdList:t,assigned_date:s,assigned_by:this.assignedBy}).then((function(a){var s={user_id:e.userId,classIdList:t};r.a.post(g["b"]+"/wp-json/custom-plugin/fn_assign_courses_MVEN",s).then((function(t){console.log("response==>"+t.data["status"]),"success"==t.data["status"]&&(m.a.success("Saved Classes Successfully!","Success"),e.getAllCaregiverCurriculum())}))})).catch((function(t){console.log(t),a.isLoading=!1,m.a.error("something went wrong!","Error")})),this.manageClassesModal=!1},getAllCaregiverCurriculum:function(){var t=this,e=g["a"]+"/caregiverCurriculum/getAllCurriculumsByUserIdAndInitial/"+this.userId+"/"+this.is_initial;this.axios.get(e).then((function(e){t.caregiverCurriculums=e.data,t.getAllCaregiverClassList()}))}},computed:{}},k=A,I=(a("2058"),Object(y["a"])(k,s,i,!1,null,null,null));e["default"]=I.exports},5513:function(t,e,a){},"68c2":function(t,e,a){"use strict";var s=a("5513"),i=a.n(s);i.a},7434:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-options"},["true"==t.data.active?a("span",[a("div",{staticClass:"clearfix aside-class aside-class-active"},[a("div",{staticClass:"class-header"},[a("b-form-checkbox",{attrs:{name:"check-button",value:"true",uncheckedValue:"false",switch:""},model:{value:t.data.active,callback:function(e){t.$set(t.data,"active",e)},expression:"data.active"}}),t._v("\n           "),a("b-badge",{attrs:{variant:"success"}},[t._v(t._s(t.data.duration))]),t._v(" "),a("b",[t._v(t._s(t.data.class_name))])],1),a("div",{staticClass:"aside-classes"},t._l(t.data.topics,(function(e,s){return a("span",{key:s},[a("div",{staticClass:"aside-class-name"},[t._v(t._s(e))])])})),0)])]):t._e(),"true"!==t.data.active?a("span",[a("div",{staticClass:"clearfix aside-class aside-class-deactive"},[a("div",{staticClass:"class-header"},[a("b-form-checkbox",{attrs:{name:"check-button",value:"true",uncheckedValue:"false",switch:""},model:{value:t.data.active,callback:function(e){t.$set(t.data,"active",e)},expression:"data.active"}}),t._v("\n           "),a("b-badge",{attrs:{variant:"success"}},[t._v(t._s(t.data.duration))]),t._v(" "),a("b",[t._v(t._s(t.data.class_name))])],1),a("div",{staticClass:"aside-classes"},t._l(t.data.topics,(function(e,s){return a("span",{key:s},[a("div",{staticClass:"aside-class-name"},[t._v(t._s(e))])])})),0)])]):t._e()])},i=[],n=a("f1fb"),r={name:"ClassContainer",components:{cSwitch:n["n"]},props:["data"],data:function(){return{labelIcon:{dataOn:"✓",dataOff:"✕"}}}},o=r,l=(a("05a4"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=c.exports},9062:function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s="undefined"!=typeof window?window.HTMLElement:Object,i={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function n(t,e,a,s,i,n,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var r=n({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=n({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=n({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=n({name:"vue-loading",mixins:[i],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,s],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:r,Dots:o,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:this.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),a("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[a(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Object.assign({},e,s,{programmatic:!0}),r=new(t.extend(c))({el:document.createElement("div"),propsData:n}),o=Object.assign({},a,i);return Object.keys(o).map((function(t){r.$slots[t]=o[t]})),r}}};a(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=u(t,e,a);t.$loading=s,t.prototype.$loading=s},e.default=c}]).default}))},e26c:function(t,e,a){},e40d:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5cc37d0c.3c3a44fb.js.map