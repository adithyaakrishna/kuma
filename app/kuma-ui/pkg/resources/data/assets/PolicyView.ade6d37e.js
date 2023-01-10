import{d as B,o as p,c as L,w as i,a as g,u as t,m as te,b as u,O as j,r as a,e as I,f as K,g as le,k as $,h as se,i as D,j as s,l as ne,v as oe,F as Q,n as Z,t as C,p as re,q as ie,s as ue,P as G,x as ce,y as pe,z as me,A as S,B as de,C as H,D as ye,E as ve,G as he}from"./index.0c4c6d47.js";import{p as W,D as fe}from"./patchQueryParam.3ef0b93e.js";import{F as _e}from"./FrameSkeleton.dadb91a1.js";import{_ as J}from"./LabelList.vue_vue_type_style_index_0_lang.028f90ba.js";import{T as ge}from"./TabsWidget.cf65448d.js";import{_ as be}from"./YamlView.vue_vue_type_script_setup_true_lang.812a5c39.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.16c6ba85.js";import"./ErrorBlock.39782751.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.e84843f4.js";import"./StatusBadge.e9f457ff.js";import"./TagList.0486290a.js";import"./index.58caa11d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.cc0862d4.js";import"./_commonjsHelpers.f037b798.js";const ke=B({__name:"DocumentationLink",props:{href:{type:String,required:!0}},setup(y){const c=y;return(T,E)=>(p(),L(t(j),{class:"docs-link",appearance:"outline",target:"_blank",to:c.href},{default:i(()=>[g(t(te),{icon:"externalLink",color:"currentColor",size:"16","hide-title":""}),u(`

    Documentation
  `)]),_:1},8,["to"]))}}),we=s("h4",null,"Dataplanes",-1),Pe=B({__name:"PolicyConnections",props:{mesh:{type:String,required:!0},policyType:{type:String,required:!0},policyName:{type:String,required:!0}},setup(y){const c=y,T=a(!1),E=a(!0),v=a(!1),k=a([]),h=a(""),w=I(()=>{const n=h.value.toLowerCase();return k.value.filter(({dataplane:o})=>o.name.toLowerCase().includes(n))});K(()=>c.policyName,function(){f()}),le(function(){f()});async function f(){v.value=!1,E.value=!0;try{const{items:n,total:o}=await $.getPolicyConnections({mesh:c.mesh,policyType:c.policyType,policyName:c.policyName});T.value=o>0,k.value=n!=null?n:[]}catch{v.value=!0}finally{E.value=!1}}return(n,o)=>{const P=se("router-link");return p(),D("div",null,[g(J,{"has-error":v.value,"is-loading":E.value,"is-empty":!T.value},{default:i(()=>[s("ul",null,[s("li",null,[we,u(),ne(s("input",{id:"dataplane-search","onUpdate:modelValue":o[0]||(o[0]=m=>h.value=m),type:"text",class:"k-input mb-4",placeholder:"Filter by name",required:"","data-testid":"dataplane-search-input"},null,512),[[oe,h.value]]),u(),(p(!0),D(Q,null,Z(t(w),(m,b)=>(p(),D("p",{key:b,class:"my-1","data-testid":"dataplane-name"},[g(P,{to:{name:"data-plane-detail-view",params:{mesh:m.dataplane.mesh,dataPlane:m.dataplane.name}}},{default:i(()=>[u(C(m.dataplane.name),1)]),_:2},1032,["to"])]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"])])}}}),De=y=>(ye("data-v-9d7eaa0b"),y=y(),ve(),y),Ee={key:0,class:"mb-4"},xe=De(()=>s("p",null,[s("strong",null,"Warning"),u(` This policy is experimental. If you encountered any problem please open an
            `),s("a",{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"issue")],-1)),Ne={class:"entity-heading","data-testid":"policy-single-entity"},Se={"data-testid":"policy-overview-tab"},Ce={class:"config-wrapper"},Te=B({__name:"PolicyView",props:{selectedPolicyName:{type:String,required:!1,default:null},policyPath:{type:String,required:!0},offset:{type:Number,required:!1,default:0}},setup(y){const c=y,T=[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"}],E=re(),v=ie(),k=ue(),h=a(!0),w=a(!1),f=a(null),n=a(!0),o=a(!1),P=a(!1),m=a(!1),b=a({}),x=a(null),A=a(null),O=a(c.offset),F=a({headers:[{label:"Actions",key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Type",key:"type"}],data:[]}),d=I(()=>k.state.policiesByPath[c.policyPath]),X=I(()=>k.state.policies.map(e=>{var l;return{length:(l=k.state.sidebar.insights.mesh.policies[e.name])!=null?l:0,label:e.pluralDisplayName,value:e.path,selected:e.path===v.name}})),Y=I(()=>`https://kuma.io/docs/${k.getters["config/getKumaDocsVersion"]}/policies/${d.value.path}/`);K(()=>v.params.mesh,function(){v.name===c.policyPath&&(h.value=!0,w.value=!1,n.value=!0,o.value=!1,P.value=!1,m.value=!1,f.value=null,z(0))}),z(c.offset);async function z(e){var M,U;O.value=e,W("offset",e>0?e:null),h.value=!0,f.value=null;const l=v.query.ns||null,r=v.params.mesh,N=d.value.path;try{let _;if(r!==null&&l!==null)_=[await $.getSinglePolicyEntity({mesh:r,path:N,name:l})],A.value=null;else{const q={size:G,offset:e},V=await $.getAllPolicyEntitiesFromMesh({mesh:r,path:N},q);_=(M=V.items)!=null?M:[],A.value=V.next}if(_.length>0){F.value.data=_.map(V=>ae(V)),m.value=!1,w.value=!1;const q=(U=c.selectedPolicyName)!=null?U:_[0].name;await R({name:q,mesh:r,path:N})}else F.value.data=[],m.value=!0,w.value=!0,o.value=!0}catch(_){_ instanceof Error?f.value=_:console.error(_),w.value=!0}finally{h.value=!1,n.value=!1}}function ee(e){E.push({name:e.value})}function ae(e){if(!e.mesh)return e;const l=e,r={name:"mesh-detail-view",params:{mesh:e.mesh}};return l.meshRoute=r,l}async function R(e){P.value=!1,n.value=!0,o.value=!1;try{const l=await $.getSinglePolicyEntity({mesh:e.mesh,path:d.value.path,name:e.name});if(l){const r=["type","name","mesh"];b.value=ce(l,r),W("policy",b.value.name),x.value=pe(l)}else b.value={},o.value=!0}catch(l){P.value=!0,console.error(l)}finally{n.value=!1}}return(e,l)=>t(d)?(p(),D("div",{key:0,class:H(["relative",t(d).path])},[t(d).isExperimental?(p(),D("div",Ee,[g(t(me),{appearance:"warning"},{alertMessage:i(()=>[xe]),_:1})])):S("",!0),u(),g(_e,null,{default:i(()=>[g(fe,{"selected-entity-name":b.value.name,"page-size":t(G),error:f.value,"is-loading":h.value,"empty-state":{title:"No Data",message:`There are no ${t(d).pluralDisplayName} present.`},"table-data":F.value,"table-data-is-empty":m.value,next:A.value,"page-offset":O.value,onTableAction:R,onLoadData:z},{additionalControls:i(()=>[g(t(de),{label:"Policies",items:t(X),"label-attributes":{class:"visually-hidden"},appearance:"select","enable-filtering":!0,onSelected:ee},{"item-template":i(({item:r})=>[s("span",{class:H({"policy-type-empty":r.length===0})},C(r.label),3)]),_:1},8,["items"]),u(),g(ke,{href:t(Y),"data-testid":"policy-documentation-link"},null,8,["href"]),u(),e.$route.query.ns?(p(),L(t(j),{key:0,class:"back-button",appearance:"primary",icon:"arrowLeft",to:{name:t(d).path}},{default:i(()=>[u(`
            View all
          `)]),_:1},8,["to"])):S("",!0)]),default:i(()=>[u(`
        >
        `)]),_:1},8,["selected-entity-name","page-size","error","is-loading","empty-state","table-data","table-data-is-empty","next","page-offset"]),u(),w.value===!1?(p(),L(ge,{key:0,"has-error":f.value!==null,error:f.value,"is-loading":h.value,tabs:T,"initial-tab-override":"overview"},{tabHeader:i(()=>[s("h1",Ne,C(t(d).singularDisplayName)+": "+C(b.value.name),1)]),overview:i(()=>[g(J,{"has-error":P.value,"is-loading":n.value,"is-empty":o.value},{default:i(()=>[s("div",Se,[s("ul",null,[(p(!0),D(Q,null,Z(b.value,(r,N)=>(p(),D("li",{key:N},[s("h4",null,C(N),1),u(),s("p",null,C(r),1)]))),128))])])]),_:1},8,["has-error","is-loading","is-empty"]),u(),s("div",Ce,[x.value!==null?(p(),L(be,{key:0,id:"code-block-policy","has-error":P.value,"is-loading":n.value,"is-empty":o.value,content:x.value,"is-searchable":""},null,8,["has-error","is-loading","is-empty","content"])):S("",!0)])]),"affected-dpps":i(()=>[x.value!==null?(p(),L(Pe,{key:0,mesh:x.value.mesh,"policy-name":x.value.name,"policy-type":t(d).path},null,8,["mesh","policy-name","policy-type"])):S("",!0)]),_:1},8,["has-error","error","is-loading"])):S("",!0)]),_:1})],2)):S("",!0)}});const He=he(Te,[["__scopeId","data-v-9d7eaa0b"]]);export{He as default};
