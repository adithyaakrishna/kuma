import{G as I,cm as T,cn as B,O as F,N as q,P as K,cp as V,x as H,k as w,h as a,o as l,i as u,a as i,w as t,c as _,b,A as v,j as g,t as E,F as z,n as S}from"./index.0c4c6d47.js";import{D as P,p as L}from"./patchQueryParam.3ef0b93e.js";import{E as R}from"./EnvoyData.c4a7c96d.js";import{F as W}from"./FrameSkeleton.dadb91a1.js";import{_ as G}from"./LabelList.vue_vue_type_style_index_0_lang.028f90ba.js";import{S as j,a as M}from"./SubscriptionHeader.1e2428c1.js";import{T as Q}from"./TabsWidget.cf65448d.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.16c6ba85.js";import"./ErrorBlock.39782751.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.e84843f4.js";import"./StatusBadge.e9f457ff.js";import"./TagList.0486290a.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.cc0862d4.js";import"./_commonjsHelpers.f037b798.js";const U={name:"ZoneEgresses",components:{AccordionItem:T,AccordionList:B,DataOverview:P,EnvoyData:R,FrameSkeleton:W,LabelList:G,SubscriptionDetails:j,SubscriptionHeader:M,TabsWidget:Q,KButton:F,KCard:q},props:{selectedZoneEgressName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},data(){return{isLoading:!0,isEmpty:!1,error:null,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:K,next:null,subscriptionsReversed:[],pageOffset:this.offset}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.loadData(0)}},beforeMount(){this.loadData(this.offset)},methods:{tableAction(s){const n=s;this.getEntity(n)},async loadData(s){var r;this.pageOffset=s,L("offset",s>0?s:null),this.isLoading=!0,this.isEmpty=!1;const n=this.$route.query.ns||null,o=this.pageSize;try{const{data:e,next:c}=await this.getZoneEgressOverviews(n,o,s);this.next=c,e.length?(this.isEmpty=!1,this.rawData=e,this.getEntity({name:(r=this.selectedZoneEgressName)!=null?r:e[0].name}),this.tableData.data=e.map(p=>{const{zoneEgressInsight:y={}}=p,h=V(y);return{...p,status:h}})):(this.tableData.data=[],this.isEmpty=!0)}catch(e){e instanceof Error?this.error=e:console.error(e),this.isEmpty=!0}finally{this.isLoading=!1}},getEntity(s){var e,c;const n=["type","name"],o=this.rawData.find(p=>p.name===s.name),r=(c=(e=o==null?void 0:o.zoneEgressInsight)==null?void 0:e.subscriptions)!=null?c:[];this.subscriptionsReversed=Array.from(r).reverse(),this.entity=H(o,n),L("zoneEgress",this.entity.name)},async getZoneEgressOverviews(s,n,o){if(s)return{data:[await w.getZoneEgressOverview({name:s},{size:n,offset:o})],next:null};{const{items:r,next:e}=await w.getAllZoneEgressOverviews({size:n,offset:o});return{data:r!=null?r:[],next:e}}}}},X={class:"zoneegresses"},J={class:"entity-heading"},Y={key:0};function $(s,n,o,r,e,c){const p=a("KButton"),y=a("DataOverview"),h=a("LabelList"),k=a("SubscriptionHeader"),x=a("SubscriptionDetails"),A=a("AccordionItem"),O=a("AccordionList"),Z=a("KCard"),f=a("EnvoyData"),N=a("TabsWidget"),C=a("FrameSkeleton");return l(),u("div",X,[i(C,null,{default:t(()=>{var D;return[i(y,{"selected-entity-name":(D=e.entity)==null?void 0:D.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,"page-offset":e.pageOffset,onTableAction:c.tableAction,onLoadData:n[0]||(n[0]=m=>c.loadData(m))},{additionalControls:t(()=>[s.$route.query.ns?(l(),_(p,{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zoneegresses"}},{default:t(()=>[b(`
            View all
          `)]),_:1})):v("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","next","page-offset","onTableAction"]),b(),e.isEmpty===!1?(l(),_(N,{key:0,"has-error":e.error!==null,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:t(()=>[g("h1",J,`
            Zone Egress: `+E(e.entity.name),1)]),overview:t(()=>[i(h,null,{default:t(()=>[g("div",null,[g("ul",null,[(l(!0),u(z,null,S(e.entity,(m,d)=>(l(),u("li",{key:d},[m?(l(),u("h4",Y,E(d),1)):v("",!0),b(),g("p",null,E(m),1)]))),128))])])]),_:1})]),insights:t(()=>[i(Z,{"border-variant":"noBorder"},{body:t(()=>[i(O,{"initially-open":0},{default:t(()=>[(l(!0),u(z,null,S(e.subscriptionsReversed,(m,d)=>(l(),_(A,{key:d},{"accordion-header":t(()=>[i(k,{details:m},null,8,["details"])]),"accordion-content":t(()=>[i(x,{details:m,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":t(()=>[i(f,{"data-path":"xds","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":t(()=>[i(f,{"data-path":"stats","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":t(()=>[i(f,{"data-path":"clusters","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading","tabs"])):v("",!0)]}),_:1})])}const ge=I(U,[["render",$]]);export{ge as default};
