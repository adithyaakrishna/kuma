import{E as I,cl as T,cm as B,P as F,L as N,s as q,co as K,x as V,k as E,i as o,o as c,j as u,a as i,w as s,c as h,e as f,A as _,l as d,t as b,F as D,n as w}from"./index.60b0f0ac.js";import{D as H,p as P}from"./patchQueryParam.ae688d93.js";import{E as R}from"./EnvoyData.7149ad2a.js";import{F as W}from"./FrameSkeleton.cbc6b8ea.js";import{_ as j}from"./LabelList.vue_vue_type_style_index_0_lang.bd2c37a0.js";import{S as G,a as M}from"./SubscriptionHeader.5a1c32ae.js";import{T as Q}from"./TabsWidget.5b63a728.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.548da37c.js";import"./EntityStatus.6fc3c7d6.js";import"./ErrorBlock.2ee4d08e.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.be7e4bb1.js";import"./TagList.b3d2d71f.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.85e36160.js";import"./_commonjsHelpers.f037b798.js";const U={name:"ZoneEgresses",components:{AccordionItem:T,AccordionList:B,DataOverview:H,EnvoyData:R,FrameSkeleton:W,LabelList:j,SubscriptionDetails:G,SubscriptionHeader:M,TabsWidget:Q,KButton:F,KCard:N},props:{offset:{type:Number,required:!1,default:0}},data(){return{isLoading:!0,isEmpty:!1,error:null,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:q,next:null,subscriptionsReversed:[],pageOffset:this.offset}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.loadData(0)}},beforeMount(){this.loadData(this.offset)},methods:{tableAction(n){const a=n;this.getEntity(a)},async loadData(n){this.pageOffset=n,P("offset",n>0?n:null),this.isLoading=!0,this.isEmpty=!1;const a=this.$route.query.ns||null,r=this.pageSize;try{const{data:t,next:e}=await this.getZoneEgressOverviews(a,r,n);this.next=e,t.length?(this.isEmpty=!1,this.rawData=t,this.getEntity({name:t[0].name}),this.tableData.data=t.map(l=>{const{zoneEgressInsight:p={}}=l;return{...l,...K(p)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(t){t instanceof Error?this.error=t:console.error(t),this.isEmpty=!0}finally{this.isLoading=!1}},getEntity(n){var e,l;const a=["type","name"],r=this.rawData.find(p=>p.name===n.name),t=(l=(e=r==null?void 0:r.zoneEgressInsight)==null?void 0:e.subscriptions)!=null?l:[];this.subscriptionsReversed=Array.from(t).reverse(),this.entity=V(r,a)},async getZoneEgressOverviews(n,a,r){if(n)return{data:[await E.getZoneEgressOverview({name:n},{size:a,offset:r})],next:null};{const{items:t,next:e}=await E.getAllZoneEgressOverviews({size:a,offset:r});return{data:t!=null?t:[],next:e}}}}},X={class:"zoneegresses"},J={key:0};function Y(n,a,r,t,e,l){const p=o("KButton"),L=o("DataOverview"),z=o("LabelList"),S=o("SubscriptionHeader"),k=o("SubscriptionDetails"),x=o("AccordionItem"),A=o("AccordionList"),O=o("KCard"),y=o("EnvoyData"),Z=o("TabsWidget"),C=o("FrameSkeleton");return c(),u("div",X,[i(C,null,{default:s(()=>{var v;return[i(L,{"selected-entity-name":(v=e.entity)==null?void 0:v.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,"page-offset":e.pageOffset,onTableAction:l.tableAction,onLoadData:a[0]||(a[0]=m=>l.loadData(m))},{additionalControls:s(()=>[n.$route.query.ns?(c(),h(p,{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:"zoneegresses"}},{default:s(()=>[f(`
            View all
          `)]),_:1})):_("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","next","page-offset","onTableAction"]),f(),e.isEmpty===!1?(c(),h(Z,{key:0,"has-error":e.error!==null,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:s(()=>[d("div",null,[d("h1",null,"Zone Egress: "+b(e.entity.name),1)])]),overview:s(()=>[i(z,null,{default:s(()=>[d("div",null,[d("ul",null,[(c(!0),u(D,null,w(e.entity,(m,g)=>(c(),u("li",{key:g},[m?(c(),u("h4",J,b(g),1)):_("",!0),f(),d("p",null,b(m),1)]))),128))])])]),_:1})]),insights:s(()=>[i(O,{"border-variant":"noBorder"},{body:s(()=>[i(A,{"initially-open":0},{default:s(()=>[(c(!0),u(D,null,w(e.subscriptionsReversed,(m,g)=>(c(),h(x,{key:g},{"accordion-header":s(()=>[i(S,{details:m},null,8,["details"])]),"accordion-content":s(()=>[i(k,{details:m,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":s(()=>[i(y,{"data-path":"xds","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":s(()=>[i(y,{"data-path":"stats","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":s(()=>[i(y,{"data-path":"clusters","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading","tabs"])):_("",!0)]}),_:1})])}const de=I(U,[["render",Y]]);export{de as default};