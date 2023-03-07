(function(){"use strict";var t={778:function(t,e,s){var a=s(9963),o=s(6252);function i(t,e,s,a,i,n){const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(r,{key:this.$store.state.reloadCounter})}var n={created(){this.$store.dispatch("tasks/load",{id:null,listname:null})}},r=s(3744);const d=(0,r.Z)(n,[["render",i]]);var l=d,u=s(2119);const c=t=>((0,o.dD)("data-v-d6c0fa54"),t=t(),(0,o.Cn)(),t),p={class:"wrapper"},m={class:"nav"},v=c((()=>(0,o._)("i",{class:"fa fa-plus",style:{"font-size":"34px"}},null,-1))),h={class:"mainbody"};function f(t,e,s,a,i,n){const r=(0,o.up)("todo-header"),d=(0,o.up)("router-link"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Task Tracker")])),_:1}),(0,o._)("div",m,[(0,o.Wm)(d,{to:"/api/create-list"},{default:(0,o.w5)((()=>[v])),_:1})]),(0,o._)("div",h,[(0,o.Wm)(l)])])}var k={created(){this.$store.dispatch("list/load")}};const g=(0,r.Z)(k,[["render",f],["__scopeId","data-v-d6c0fa54"]]);var _=g;const y={key:0,class:"edge-case"},w={key:1,id:"todolists"};function b(t,e,s,a,i,n){const r=(0,o.up)("edge-case"),d=(0,o.up)("display-list");return n.todolist.length?((0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.todolist,((t,e)=>((0,o.wg)(),(0,o.j4)(d,{key:t.id,id:t.id,index:e,listname:t.name,priority:t.priority,fav:t.favorites,deadline:t.deadline},null,8,["id","index","listname","priority","fav","deadline"])))),128))])):((0,o.wg)(),(0,o.iD)("div",y,[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)("No Todo lists to display")])),_:1})]))}var D=s(3577);const I=t=>((0,o.dD)("data-v-5ef661ea"),t=t(),(0,o.Cn)(),t),C={class:"list-box"},T={class:"list-box-header"},U={id:"previewcontent"},L=I((()=>(0,o._)("tr",null,[(0,o._)("th",null,"Title"),(0,o._)("th",null,"Deadline"),(0,o._)("th",null,"Priority"),(0,o._)("th",null,"status")],-1))),N={class:"list-box-footer"},$=["value"],x=I((()=>(0,o._)("i",{class:"material-icons w3-xlarge"},"delete",-1)));function P(t,e,s,a,i,n){const r=(0,o.up)("router-link"),d=(0,o.up)("preview-content"),l=(0,o.up)("base-button");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",T,[(0,o._)("p",null,[(0,o.Wm)(r,{onClick:e[0]||(e[0]=e=>t.getTasks({id:s.id})),to:n.viewTasks},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(s.listname),1)])),_:1},8,["to"]),(0,o._)("span",{onClick:e[1]||(e[1]=e=>t.update({id:s.id,value:!s.fav})),class:(0,D.C_)(n.favStatus)},null,2)]),(0,o._)("p",null,"Total Tasks: "+(0,D.zw)(n.getCount),1)]),(0,o._)("div",{onClick:e[2]||(e[2]=(...t)=>n.goToTasks&&n.goToTasks(...t)),class:"content"},[(0,o._)("table",U,[L,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.tasks,((t,e)=>((0,o.wg)(),(0,o.j4)(d,{key:t.id,id:t.id,index:e,name:t.name,priority:t.priority,status:t.status,fav:t.favorites,deadline:t.deadline},null,8,["id","index","name","priority","status","fav","deadline"])))),128))])]),(0,o._)("div",N,[(0,o._)("p",null,[(0,o.Uk)("Earliest Deadline: "),(0,o._)("input",{style:{border:"none",background:"inherit"},type:"date",value:s.deadline},null,8,$)]),(0,o._)("p",null,[(0,o.Wm)(l,{type:"button",onClick:e[3]||(e[3]=e=>t.deleteItem({id:s.id,index:s.index})),mode:"deleteMode"},{default:(0,o.w5)((()=>[x])),_:1})])])])}s(7658);var Z=s(6154),W=s(3907);function A(t,e,s,a,i,n){const r=(0,o.up)("base-tags");return(0,o.wg)(),(0,o.iD)("tr",null,[(0,o._)("td",null,(0,D.zw)(s.name),1),(0,o._)("td",null,(0,D.zw)(s.deadline),1),(0,o._)("td",null,[(0,o.Wm)(r,{tagmode:n.priorityTag},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.checkPriority),1)])),_:1},8,["tagmode"])]),(0,o._)("td",null,[(0,o.Wm)(r,{tagmode:n.statusTag},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.checkStatus),1)])),_:1},8,["tagmode"])])])}var S={props:["id","index","name","fav","deadline","priority","status"],computed:{checkPriority(){return"1"===this.priority?"Important":"2"===this.priority?"Urgent":"No Priority"},priorityTag(){return"1"===this.priority?"important button":"2"===this.priority?"urgent button":"nopriority button"},checkStatus(){return!0===this.status?"Completed":"Not Yet..."},statusTag(){return!0===this.status?"completed notbutton":"notyet notbutton"}}};const M=(0,r.Z)(S,[["render",A],["__scopeId","data-v-21f5878c"]]);var O=M,R={components:{PreviewContent:O},data(){return{tasks:{}}},props:["id","index","listname","deadline","priority","fav"],computed:{favStatus(){return{"fa fa-star notchecked":!this.fav,"fa fa-star checked":this.fav}},viewTasks(){return{name:"tasks",params:{listid:this.id}}},getCount(){return null!=this.$store.getters["tasks/getCountValue"][this.id]?this.$store.getters["tasks/getCountValue"][this.id]:0}},methods:{goToTasks(){this.$router.push(`/api/${this.id}`)},...(0,W.nv)({update:"list/update",deleteItem:"list/delete",getTasks:"tasks/load"})},created(){Z.Z.get(this.$store.state.API_URL+"tasks/",{params:{list:this.id}}).then((t=>{this.tasks=t.data}))}};const j=(0,r.Z)(R,[["render",P],["__scopeId","data-v-5ef661ea"]]);var F=j,V={components:{DisplayList:F},computed:{todolist(){return this.$store.getters["list/getListData"]}},created(){this.$store.dispatch("list/load"),this.$store.dispatch("tasks/load",{id:null})}};const z=(0,r.Z)(V,[["render",b],["__scopeId","data-v-1ebf81f0"]]);var Y=z;const E=t=>((0,o.dD)("data-v-a452037e"),t=t(),(0,o.Cn)(),t),H={class:"todo-tasks-header"},K=E((()=>(0,o._)("i",{class:"fa fa-arrow-left"},null,-1))),q={key:0},J={key:1};function B(t,e,s,a,i,n){const r=(0,o.up)("router-link"),d=(0,o.up)("base-button"),l=(0,o.up)("edge-case"),u=(0,o.up)("display-tasks");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",H,[(0,o.Wm)(r,{to:n.goTolists},{default:(0,o.w5)((()=>[K,(0,o.Uk)(" View Lists ")])),_:1},8,["to"]),(0,o._)("h3",null,(0,D.zw)(n.listname[s.listid]),1),(0,o.Wm)(d,{mode:"addMode",onClick:e[0]||(e[0]=e=>t.addTask({id:s.listid}))},{default:(0,o.w5)((()=>[(0,o.Uk)("+ Add Task")])),_:1})]),n.todotasks.length?((0,o.wg)(),(0,o.iD)("table",J,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.todotasks,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.id,id:t.id,name:t.name,note:t.description,priority:t.priority,status:t.status,deadline:t.deadline,favorite:t.favorite,selectedListId:s.listid},null,8,["id","name","note","priority","status","deadline","favorite","selectedListId"])))),128))])):((0,o.wg)(),(0,o.iD)("div",q,[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Uk)("No tasks currently")])),_:1})]))],64)}const G=t=>((0,o.dD)("data-v-4a178249"),t=t(),(0,o.Cn)(),t),Q={class:"task-header"},X={style:{display:"flex","flex-direction":"row","align-items":"center"}},tt=G((()=>(0,o._)("option",{value:"None",selected:""},"No Priority",-1))),et=G((()=>(0,o._)("option",{value:"1"},"Important",-1))),st=G((()=>(0,o._)("option",{value:"2"},"Urgent",-1))),at=[tt,et,st],ot=G((()=>(0,o._)("option",{value:"false"},"Incomplete",-1))),it=G((()=>(0,o._)("option",{value:"true"},"Complete",-1))),nt=[ot,it],rt=G((()=>(0,o._)("i",{class:"material-icons w3-large"},"delete",-1))),dt={class:"task-body"},lt={class:"task-footer"};function ut(t,e,s,i,n,r){const d=(0,o.up)("base-dropdown"),l=(0,o.up)("base-button");return(0,o.wg)(),(0,o.iD)("tr",null,[(0,o._)("div",Q,[(0,o._)("div",X,[(0,o._)("span",{onClick:e[0]||(e[0]=(...t)=>r.toggleFavorite&&r.toggleFavorite(...t)),class:(0,D.C_)(r.favStatus)},null,2),(0,o._)("td",null,[(0,o.wy)((0,o._)("input",{class:(0,D.C_)(r.taskNameStyle),id:"taskname",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>n.enteredTask=t),placeholder:"Set Task Name..."},null,2),[[a.nr,n.enteredTask]])])]),(0,o._)("td",null,[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("select",{name:"select","onUpdate:modelValue":e[2]||(e[2]=t=>n.enteredPriority=t)},at,512),[[a.bM,n.enteredPriority]])])),_:1})]),(0,o._)("td",null,[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("select",{name:"select","onUpdate:modelValue":e[3]||(e[3]=t=>n.enteredStatus=t)},nt,512),[[a.bM,n.enteredStatus]])])),_:1})]),(0,o.Wm)(l,{mode:"deleteMode",onClick:e[4]||(e[4]=t=>r.deleteTask())},{default:(0,o.w5)((()=>[rt])),_:1})]),(0,o._)("div",dt,[(0,o.wy)((0,o._)("textarea",{rows:"10",cols:"50","onUpdate:modelValue":e[5]||(e[5]=t=>n.enteredNote=t),placeholder:"Add Some Note?"},null,512),[[a.nr,n.enteredNote]])]),(0,o._)("div",lt,[(0,o._)("td",null,[(0,o.Uk)("Deadline: "),(0,o.wy)((0,o._)("input",{type:"date","onUpdate:modelValue":e[6]||(e[6]=t=>n.enteredDeadline=t),format:"yyyy-mm-dd",placeholder:"Set Deadline"},null,512),[[a.nr,n.enteredDeadline]])]),(0,o.Wm)(l,{mode:"saveMode",onClick:e[7]||(e[7]=t=>r.invokeUpdate())},{default:(0,o.w5)((()=>[(0,o.Uk)("Save")])),_:1})])])}var ct={props:["selectedListId","id","name","note","priority","status","deadline","favorite"],data(){return{enteredTask:this.name,enteredNote:this.note,enteredPriority:this.priority,enteredStatus:this.status,enteredDeadline:this.deadline,enteredFavorite:this.favorite,errorDialog:!1}},computed:{favStatus(){return!0===this.enteredFavorite?"fa fa-star checked":"fa fa-star notchecked"},taskNameStyle(){return!1===this.errorDialog?"tasknameInput":"tasknameErrorInput"}},methods:{toggleFavorite(){this.enteredFavorite=!this.enteredFavorite},invokeUpdate(){const t={taskId:this.id,values:{name:this.enteredTask,description:this.enteredNote,priority:this.enteredPriority,status:this.enteredStatus,deadline:this.enteredDeadline,favorite:this.enteredFavorite,list:this.selectedListId}},e=this.$store.getters["tasks/getTaskData"],s=e.filter((t=>t.name==this.enteredTask)),a=e.filter((t=>t.id==this.id));console.log(s,a,this.id,"abcdefghijkl"),""!==this.enteredTask?void 0===this.id&s.length>0?this.errorDialog=!0:(this.$store.dispatch("tasks/update",t),this.errorDialog=!1,console.log("Task Details Saved!")):this.errorDialog=!0},deleteTask(){this.$store.dispatch("tasks/delete",{id:this.id})}}};const pt=(0,r.Z)(ct,[["render",ut],["__scopeId","data-v-4a178249"]]);var mt=pt,vt={components:{DisplayTasks:mt},props:["listid"],computed:{todotasks(){return this.$store.getters["tasks/getTaskData"]},listname(){return this.$store.getters["list/listNamesObject"]},goTolists(){return{name:"lists"}}},created(){this.$store.dispatch("tasks/load",{id:this.listid})},methods:{...(0,W.nv)({addTask:"tasks/add"})}};const ht=(0,r.Z)(vt,[["render",B],["__scopeId","data-v-a452037e"]]);var ft=ht;const kt=(0,o._)("h3",null,"Whoops! Invalid URL.",-1);function gt(t,e){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[kt,(0,o._)("h4",null,[(0,o.Uk)("May be try this "),(0,o.Wm)(s,{to:"/api/lists/"},{default:(0,o.w5)((()=>[(0,o.Uk)("View Lists")])),_:1})])],64)}const _t={},yt=(0,r.Z)(_t,[["render",gt]]);var wt=yt;const bt=t=>((0,o.dD)("data-v-12cb7b96"),t=t(),(0,o.Cn)(),t),Dt={class:"inputCard"},It=bt((()=>(0,o._)("header",null,[(0,o._)("p",null,"Create List")],-1))),Ct={key:0,class:"errormsg"};function Tt(t,e,s,i,n,r){const d=(0,o.up)("base-button");return(0,o.wg)(),(0,o.iD)("div",Dt,[It,(0,o._)("form",{onSubmit:e[2]||(e[2]=(0,a.iM)((e=>t.submitList({name:n.enteredName})),["prevent"]))},[(0,o.wy)((0,o._)("input",{type:"text",id:"listname",name:"listname",placeholder:"List Name","onUpdate:modelValue":e[0]||(e[0]=t=>n.enteredName=t),onKeyup:e[1]||(e[1]=(0,a.D2)((e=>t.submitList({name:n.enteredName})),["enter"]))},null,544),[[a.nr,n.enteredName]]),r.errorDialog?((0,o.wg)(),(0,o.iD)("p",Ct,"List name should not be empty!")):(0,o.kq)("",!0),(0,o.Wm)(d,{type:"submit",mode:"addMode"},{default:(0,o.w5)((()=>[(0,o.Uk)("Add")])),_:1})],32)])}var Ut={data(){return{enteredName:""}},computed:{errorDialog(){return this.$store.getters["createlist/getErrorMsg"]}},methods:{...(0,W.nv)({submitList:"createlist/submitListName"})}};const Lt=(0,r.Z)(Ut,[["render",Tt],["__scopeId","data-v-12cb7b96"]]);var Nt=Lt;const $t=(0,u.p7)({history:(0,u.PO)(),routes:[{path:"/",redirect:"/api/lists"},{name:"api",path:"/api",component:_,children:[{name:"lists",path:"lists",component:Y},{name:"createlist",path:"create-list",component:Nt,props:!0},{name:"tasks",path:":listid",component:ft,props:!0}]},{path:"/:NotFound(.*)",component:wt}],linkActiveClass:"active"});var xt=$t,Pt={namespaced:!0,state(){return{todolist:[],listNamesArray:{},tasksCount:0,API_URL:"http://18.204.15.28:8000/api/"}},mutations:{load(t){Z.Z.get(t.API_URL+"lists").then((e=>{t.todolist=e.data;for(const s of t.todolist)t.listNamesArray[s.id]=s.name;console.log(t.todolist,t.listNamesArray)}))},delete(t,e){const s=e.id,a=e.index;Z.Z["delete"](t.API_URL+`lists/${s}`).then((e=>{t.todolist.splice(a,1),console.log(e.data)})).catch(),console.log("Delete List Mutation")},update(t,e){const s=e.id,a=t.todolist.findIndex((t=>t.id===s)),o=e.value;console.log(o,s),Z.Z.patch(t.API_URL+`lists/${s}`,{favorites:o}).then((()=>{t.todolist[a].favorites=o})).catch((t=>{console.log(t)}))}},actions:{load(t){t.commit("load")},delete(t,e){t.commit("delete",e)},update(t,e){t.commit("update",e)}},getters:{getListData(t){return t.todolist},listNamesObject(t){return t.listNamesArray}}},Zt={namespaced:!0,state(){return{todotasks:[],taskCount:{},API_URL:"http://18.204.15.28:8000/api/"}},mutations:{load(t,e){t.todotasks=e},add(t,e){const s={name:"",description:"",priority:"None",status:!1,favorite:!1,deadline:"1979-01-01",list:e.id};t.todotasks.push(s)},update(t,e){const s=e.taskId,a=e.values;void 0===s?Z.Z.post(t.API_URL+"tasks/",a):Z.Z.put(t.API_URL+`tasks/${s}`,a).then((()=>{const e=t.todotasks.findIndex((t=>t.id===s));t.todotasks[e]=a})).catch((t=>{console.log(JSON.stringify(t))}))},delete(t,e){const s=e.id;if(void 0===s)t.todotasks.pop();else{console.log(t.currentListId,t.API_URL,"----------");const e=t.todotasks.findIndex((t=>t.id===s));Z.Z["delete"](t.API_URL+`tasks/${s}`),t.todotasks.splice(e,1)}},setTaskCount(t,e){t.taskCount=e}},actions:{load(t,e){const s=e.id;t.currentListId=s,console.log(t.currentListId),Z.Z.get("http://18.204.15.28:8000/api/tasks/").then((e=>{const a=e.data;t.taskCount={};for(const s of a)s.list in t.taskCount?t.taskCount[s.list]+=1:t.taskCount[s.list]=1;t.commit("load",a.filter((t=>t.list==s))),t.commit("setTaskCount",t.taskCount)})).catch()},add(t,e){t.commit("add",e)},update(t,e){t.commit("update",e)},delete(t,e){t.commit("delete",e)}},getters:{getTaskData(t){return t.todotasks},getCountValue(t){return t.taskCount}}},Wt={namespaced:!0,state(){return{errorMsg:!1,API_URL:"http://18.204.15.28:8000/api/"}},mutations:{submitListName(t,e){const s=e.name.toLowerCase(),a=s.charAt(0).toUpperCase(),o=a+s.slice(1);console.log(o,"Submitted Name"),""!==o.trim()?(Z.Z.post(t.API_URL+"lists/",{name:o,priority:"1",deadline:"2023-02-23",favorites:!1}).then((e=>{t.errorMsg=!1,console.log(e.data,"fregdfgfdfdb")})),xt.push("/api/lists/")):t.errorMsg=!0}},actions:{submitListName(t,e){t.commit("submitListName",e)}},getters:{getErrorMsg(t){return t.errorMsg}}};const At=(0,W.MT)({modules:{list:Pt,tasks:Zt,createlist:Wt},state(){return{abcdef:"dsvdsf",API_URL:"http://18.204.15.28:8000/api/"}},mutations:{},actions:{},getters:{}});var St=At;function Mt(t,e,s,a,i,n){return(0,o.wg)(),(0,o.iD)("header",{class:(0,D.C_)(s.mode)},[(0,o._)("h2",null,[(0,o.WI)(t.$slots,"default",{},void 0,!0)])],2)}var Ot={props:["mode"]};const Rt=(0,r.Z)(Ot,[["render",Mt],["__scopeId","data-v-0889e2f0"]]);var jt=Rt;const Ft=t=>((0,o.dD)("data-v-d85ca986"),t=t(),(0,o.Cn)(),t),Vt=Ft((()=>(0,o._)("h3",null," TODO's Footer ",-1))),zt=[Vt];function Yt(t,e){return(0,o.wg)(),(0,o.iD)("div",null,zt)}const Et={},Ht=(0,r.Z)(Et,[["render",Yt],["__scopeId","data-v-d85ca986"]]);var Kt=Ht;function qt(t,e,s,a,i,n){return(0,o.wg)(),(0,o.iD)("div",{class:(0,D.C_)(s.mode)},[(0,o.WI)(t.$slots,"default",{},void 0,!0)],2)}var Jt={props:["mode"]};const Bt=(0,r.Z)(Jt,[["render",qt],["__scopeId","data-v-6401d7d0"]]);var Gt=Bt;const Qt=["type"];function Xt(t,e,s,a,i,n){return(0,o.wg)(),(0,o.iD)("button",{type:s.type,class:(0,D.C_)(s.mode)},[(0,o.WI)(t.$slots,"default",{},void 0,!0)],10,Qt)}var te={props:["type","mode"]};const ee=(0,r.Z)(te,[["render",Xt],["__scopeId","data-v-4d04e4b8"]]);var se=ee;const ae={class:"dropdown"};function oe(t,e){return(0,o.wg)(),(0,o.iD)("div",ae,[(0,o.WI)(t.$slots,"default",{},void 0,!0)])}const ie={},ne=(0,r.Z)(ie,[["render",oe],["__scopeId","data-v-5710cb20"]]);var re=ne;function de(t,e,s,a,i,n){return(0,o.wg)(),(0,o.iD)("button",{type:"disable",class:(0,D.C_)(s.tagmode)},[(0,o.WI)(t.$slots,"default",{},void 0,!0)],2)}var le={props:["tagmode"]};const ue=(0,r.Z)(le,[["render",de],["__scopeId","data-v-43a8d703"]]);var ce=ue;const pe={class:"edge-case"};function me(t,e){return(0,o.wg)(),(0,o.iD)("div",pe,[(0,o._)("p",null,[(0,o.WI)(t.$slots,"default",{},void 0,!0)])])}const ve={},he=(0,r.Z)(ve,[["render",me],["__scopeId","data-v-b8b4c824"]]);var fe=he;const ke=(0,a.ri)(l);ke.use(xt),ke.use(St),ke.component("todo-header",jt),ke.component("todo-footer",Kt),ke.component("base-card",Gt),ke.component("base-button",se),ke.component("base-dropdown",re),ke.component("base-tags",ce),ke.component("edge-case",fe),ke.mount("#app")}},e={};function s(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,o,i){if(!a){var n=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],i=t[u][2];for(var r=!0,d=0;d<a.length;d++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[d])}))?a.splice(d--,1):(r=!1,i<n&&(n=i));if(r){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,o,i]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,i,n=a[0],r=a[1],d=a[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(d)var u=d(s)}for(e&&e(a);l<n.length;l++)i=n[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},a=self["webpackChunktodos"]=self["webpackChunktodos"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(778)}));a=s.O(a)})();
//# sourceMappingURL=app.46a28369.js.map