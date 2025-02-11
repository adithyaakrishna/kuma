import{m as B}from"./vuex.esm-bundler-df5bd11e.js";import{j as K}from"./index-a8834e9c.js";import{m as z,b as O,a as H,P as W,D as q}from"./kongponents.es-3df60cd6.js";import{k as G}from"./kumaApi-db784568.js";import{k as j}from"./kumaDpServerUrl-b6bb30c6.js";import{k as S}from"./helpers-32595d9f.js";import{_ as L}from"./CodeBlock.vue_vue_type_style_index_0_lang-98064716.js";import{F as R,S as Y,E as X}from"./EntityScanner-9b947b61.js";import{E as Z}from"./EnvironmentSwitcher-03d5770b.js";import{d as J,a as T,w as o,u as b,o as m,g as t,P as Q,e as s,f as e,l as h,h as w,t as D,S as c,a2 as N,F as P,v as I,a4 as C,a1 as k,b as E,p as $,m as ee}from"./runtime-dom.esm-bundler-91b41870.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{P as te}from"./constants-31fdaf55.js";import"./_commonjsHelpers-87174ba5.js";import"./ClientStorage-efe299d9.js";const ae=J({__name:"HelperTooltip",props:{placement:{type:String,required:!1,default:void 0}},setup(a){const n=a;return(d,v)=>(m(),T(b(O),{class:"help-icon",trigger:"click",width:"100%","max-width":"300",placement:n.placement},{content:o(()=>[t("div",null,[Q(d.$slots,"default",{},void 0,!0)])]),default:o(()=>[s(b(z),{icon:"info",color:"var(--grey-500)",size:"16","hide-title":""}),e()]),_:3},8,["placement"]))}});const ne=x(ae,[["__scopeId","data-v-147bd2ca"]]),le={type:"Dataplane",mesh:null,name:null,networking:{}};const oe=`type: Dataplane
mesh: default
name: dp-echo-1
networking:
  address: 10.0.0.1
  inbound:
  - port: 10000
    servicePort: 9000
    tags:
      kuma.io/service: echo`,ie={name:"DataplaneWizardUniversal",EXAMPLE_CODE:oe,components:{CodeBlock:L,FormFragment:R,StepSkeleton:Y,EnvironmentSwitcher:Z,HelperTooltip:ne,EntityScanner:X,KAlert:H,KButton:W,KCard:q},data(){return{productName:te,randString:Math.random().toString(36).substring(2,8),schema:le,steps:[{label:"General",slug:"general"},{label:"Topology",slug:"topology"},{label:"Networking",slug:"networking"},{label:"Install",slug:"complete"}],tabs:[{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"dataplane"},{name:"example"},{name:"switch"}],startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,validate:{meshName:"",univDataplaneType:"dataplane-type-service",univDataplaneServiceName:"",univDataplaneId:"",univDataplaneCustomIdDisabled:!0,univDataplaneNetworkAddress:null,univDataplaneNetworkServicePort:null,univDataplaneNetworkServiceAddress:"127.0.0.1",univDataplaneNetworkDPPort:null,univDataplaneNetworkProtocol:"tcp"},formFields:{protocols:["tcp","http","grpc"]}}},computed:{...B({title:"config/getTagline",version:"config/getVersion",environment:"config/getEnvironment",meshes:"getMeshList"}),getDataplaneSchema(){const a=Object.assign({},this.schema),{meshName:n,univDataplaneType:d,univDataplaneServiceName:v,univDataplaneId:l,univDataplaneNetworkAddress:p,univDataplaneNetworkServicePort:f,univDataplaneNetworkServiceAddress:u,univDataplaneNetworkDPPort:g,univDataplaneNetworkProtocol:_}=this.validate;if(n)return a.name=l,a.mesh=n,d==="dataplane-type-service"?(a.networking.gateway&&delete a.networking.gateway,a.networking={address:p,inbound:[{port:g,servicePort:f,serviceAddress:u,tags:{"kuma.io/service":v,"kuma.io/protocol":_}}]}):d==="dataplane-type-gateway"&&(a.networking.inbound&&delete a.networking.inbound,a.networking={address:p,gateway:{tags:{"kuma.io/service":v}}}),a},generateDpTokenCodeOutput(){const{univDataplaneId:a}=this.validate;return`kumactl generate dataplane-token --name=${a} > kuma-token-${a}`},startDpCodeOutput(){const{univDataplaneId:a}=this.validate;return`kuma-dp run \\
      --cp-address=${j()} \\
      --dataplane=${`"${K(this.getDataplaneSchema)}"`} \\
      --dataplane-token-file=kuma-token-${a}`},nextDisabled(){const{meshName:a,univDataplaneServiceName:n,univDataplaneId:d,univDataplaneNetworkAddress:v,univDataplaneNetworkServicePort:l,univDataplaneNetworkDPPort:p,univDataplaneNetworkProtocol:f}=this.validate;return a.length?this.$route.query.step==="1"?!(n&&d):this.$route.query.step==="2"?!(v&&l&&p&&f):!1:!0}},watch:{"validate.univDataplaneId"(a){this.validate.univDataplaneId=S(a)},"validate.univDataplaneServiceName"(a){const n=S(a);this.validate.univDataplaneServiceName=n,this.validate.univDataplaneServiceName===""?this.validate.univDataplaneId="":this.validate.univDataplaneId=S(`${a}-${this.randString}`)},"validate.univDataplaneNetworkServicePort"(a){const n=a.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkServicePort=n},"validate.univDataplaneNetworkDPPort"(a){const n=a.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkDPPort=n}},methods:{hideSiblings(){this.hideScannerSiblings=!0},scanForEntity(){const{meshName:a,univDataplaneId:n}=this.validate;this.scanComplete=!1,this.scanError=!1,!(!a||!n)&&G.getDataplaneFromMesh({mesh:a,name:n}).then(d=>{var v;((v=d==null?void 0:d.name)==null?void 0:v.length)>0?(this.isRunning=!0,this.scanFound=!0):this.scanError=!0}).catch(d=>{this.scanError=!0,console.error(d)}).finally(()=>{this.scanComplete=!0})},compeleteDataPlaneSetup(){this.$store.dispatch("updateSelectedMesh",this.validate.meshName),this.$router.push({name:"data-plane-list-view",params:{mesh:this.validate.meshName}})}}},r=a=>($("data-v-fcc70b3f"),a=a(),ee(),a),se={class:"wizard"},re={class:"wizard__content"},de=r(()=>t("h3",null,`
            Create Universal Dataplane
          `,-1)),pe=r(()=>t("h3",null,`
            To get started, please select on what Mesh you would like to add the Dataplane:
          `,-1)),ue=r(()=>t("p",null,`
            If you've got an existing Mesh that you would like to associate with your
            Dataplane, you can select it below, or create a new one using our Mesh Wizard.
          `,-1)),ce=r(()=>t("small",null,"Would you like to see instructions for Kubernetes? Use sidebar to change wizard!",-1)),me=r(()=>t("option",{disabled:"",value:""},`
                      Select an existing Mesh…
                    `,-1)),ve=["value"],he=r(()=>t("label",{class:"k-input-label mr-4"},`
                    or
                  `,-1)),_e=r(()=>t("h3",null,`
            Setup Dataplane Mode
          `,-1)),we=r(()=>t("p",null,`
            You can create a data plane for a service or a data plane for a Gateway.
          `,-1)),De={for:"service-dataplane"},fe=r(()=>t("span",null,`
                  Service Dataplane
                `,-1)),ke={for:"gateway-dataplane"},ge=r(()=>t("span",null,`
                  Gateway Dataplane
                `,-1)),ye=["disabled"],Se=r(()=>t("h3",null,`
            Networking
          `,-1)),be=r(()=>t("p",null,`
            It's time to now configure the networking settings so that the Dataplane
            can connect to the local service, and other data planes can consume
            your service.
          `,-1)),Ne=r(()=>t("p",null,[t("strong",null,"All fields below are required to proceed.")],-1)),Pe=["value","selected"],Ie={key:0},Ce={key:0},Ee=r(()=>t("h3",null,`
                Auto-Inject DPP
              `,-1)),Te=r(()=>t("h4",null,"Generate Dataplane Token",-1)),xe=r(()=>t("h4",null,"Start Dataplane Process",-1)),Ae=r(()=>t("h3",null,"Searching…",-1)),Me=r(()=>t("p",null,"We are looking for your dataplane.",-1)),Ue=r(()=>t("h3",null,"Done!",-1)),Fe={key:0},Ve=r(()=>t("p",null,`
                  Proceed to the next step where we will show you
                  your new Dataplane.
                `,-1)),Be=r(()=>t("h3",null,"Dataplane not found",-1)),Ke=r(()=>t("p",null,"We were unable to find your dataplane.",-1)),ze=r(()=>t("p",null,`
                Please return to the first step and make sure to select an
                existing Mesh, or create a new one.
              `,-1)),Oe=r(()=>t("h3",null,"Dataplane",-1)),He=r(()=>t("h3",null,"Example",-1)),We=r(()=>t("p",null,`
            Below is an example of a Dataplane resource output:
          `,-1));function qe(a,n,d,v,l,p){const f=h("KButton"),u=h("FormFragment"),g=h("KCard"),_=h("HelperTooltip"),y=h("CodeBlock"),A=h("EntityScanner"),M=h("KAlert"),U=h("EnvironmentSwitcher"),F=h("StepSkeleton");return m(),w("div",se,[t("div",re,[s(F,{steps:l.steps,"sidebar-content":l.sidebarContent,"footer-enabled":l.hideScannerSiblings===!1,"next-disabled":p.nextDisabled},{general:o(()=>[de,e(),t("p",null,`
            Welcome to the wizard to create a new Dataplane resource in `+D(a.title)+`.
            We will be providing you with a few steps that will get you started.
          `,1),e(),t("p",null,`
            As you know, the `+D(l.productName)+` GUI is read-only.
          `,1),e(),pe,e(),ue,e(),ce,e(),s(g,{class:"my-6","has-shadow":""},{body:o(()=>[s(u,{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""},{default:o(()=>[t("div",null,[c(t("select",{id:"dp-mesh","onUpdate:modelValue":n[0]||(n[0]=i=>l.validate.meshName=i),class:"k-input w-100","data-testid":"mesh-select"},[me,e(),(m(!0),w(P,null,I(a.meshes.items,i=>(m(),w("option",{key:i.name,value:i.name},D(i.name),9,ve))),128))],512),[[N,l.validate.meshName]])]),e(),t("div",null,[he,e(),s(f,{to:{name:"create-mesh"},appearance:"secondary"},{default:o(()=>[e(`
                    Create a new Mesh
                  `)]),_:1})])]),_:1})]),_:1})]),topology:o(()=>[_e,e(),we,e(),s(u,{"all-inline":"","equal-cols":"","hide-label-col":"","shift-right":""},{default:o(()=>[t("div",null,[t("label",De,[c(t("input",{id:"service-dataplane","onUpdate:modelValue":n[1]||(n[1]=i=>l.validate.univDataplaneType=i),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},null,512),[[C,l.validate.univDataplaneType]]),e(),fe]),e(),t("label",ke,[c(t("input",{id:"gateway-dataplane","onUpdate:modelValue":n[2]||(n[2]=i=>l.validate.univDataplaneType=i),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-gateway"},null,512),[[C,l.validate.univDataplaneType]]),e(),ge])])]),_:1}),e(),s(u,{"all-inline":"",title:"Service name","for-attr":"service-name"},{default:o(()=>[c(t("input",{id:"service-name","onUpdate:modelValue":n[3]||(n[3]=i=>l.validate.univDataplaneServiceName=i),"data-testid":"service-name",type:"text",class:"k-input w-100 mr-4"},null,512),[[k,l.validate.univDataplaneServiceName]])]),_:1}),e(),s(u,{"all-inline":"",title:"Dataplane ID","for-attr":"dataplane-id"},{default:o(()=>[t("div",null,[c(t("input",{id:"dataplane-id","onUpdate:modelValue":n[4]||(n[4]=i=>l.validate.univDataplaneId=i),type:"text",class:"k-input w-100",disabled:l.validate.univDataplaneCustomIdDisabled,"data-testid":"dataplane-id"},null,8,ye),[[k,l.validate.univDataplaneId]])]),e(),t("div",null,[s(f,{appearance:"secondary","data-testid":"edit-button",onClick:n[5]||(n[5]=i=>l.validate.univDataplaneCustomIdDisabled=!1)},{default:o(()=>[e(`
                Edit
              `)]),_:1}),e(),s(_,null,{default:o(()=>[e(`
                This is a unique ID for the Dataplane instance.
              `)]),_:1})])]),_:1})]),networking:o(()=>[Se,e(),be,e(),Ne,e(),s(u,{"all-inline":"",title:"Data Plane IP Address","for-attr":"network-address"},{default:o(()=>[c(t("input",{id:"network-address","onUpdate:modelValue":n[6]||(n[6]=i=>l.validate.univDataplaneNetworkAddress=i),type:"text",class:"k-input w-100","data-testid":"network-address"},null,512),[[k,l.validate.univDataplaneNetworkAddress]]),e(),s(_,null,{default:o(()=>[e(`
              The IP address that other services will use to consume this data plane.
            `)]),_:1})]),_:1}),e(),s(u,{"all-inline":"","fill-first":"",title:"Data Plane Port","for-attr":"network-dataplane-port"},{default:o(()=>[c(t("input",{id:"network-dataplane-port","onUpdate:modelValue":n[7]||(n[7]=i=>l.validate.univDataplaneNetworkDPPort=i),type:"text",class:"k-input w-100","data-testid":"network-dataplane-port"},null,512),[[k,l.validate.univDataplaneNetworkDPPort]]),e(),s(_,null,{default:o(()=>[e(`
              The data plane port (that other services will use to consume this service).
            `)]),_:1})]),_:1}),e(),s(u,{"all-inline":"",title:"Service IP Address","for-attr":"network-service-address"},{default:o(()=>[c(t("input",{id:"network-service-address","onUpdate:modelValue":n[8]||(n[8]=i=>l.validate.univDataplaneNetworkServiceAddress=i),type:"text",class:"k-input w-100"},null,512),[[k,l.validate.univDataplaneNetworkServiceAddress]]),e(),s(_,null,{default:o(()=>[e(`
              The address where your service is listening on the machine.
            `)]),_:1})]),_:1}),e(),s(u,{"all-inline":"",title:"Service Port","for-attr":"network-service-port"},{default:o(()=>[c(t("input",{id:"network-service-port","onUpdate:modelValue":n[9]||(n[9]=i=>l.validate.univDataplaneNetworkServicePort=i),type:"text",class:"k-input w-100","data-testid":"service-port"},null,512),[[k,l.validate.univDataplaneNetworkServicePort]]),e(),s(_,null,{default:o(()=>[e(`
              The port where your service is listening on the machine.
            `)]),_:1})]),_:1}),e(),s(u,{"all-inline":"",title:"Protocol","for-attr":"network-dataplane-protocol"},{default:o(()=>[c(t("select",{id:"network-dataplane-protocol","onUpdate:modelValue":n[10]||(n[10]=i=>l.validate.univDataplaneNetworkProtocol=i),class:"k-input w-100",name:"network-dataplane-protocol"},[(m(!0),w(P,null,I(l.formFields.protocols,(i,V)=>(m(),w("option",{key:V,value:i,selected:l.validate.univDataplaneNetworkProtocol===i},D(i),9,Pe))),128))],512),[[N,l.validate.univDataplaneNetworkProtocol]]),e(),s(_,null,{default:o(()=>[e(`
              The protocol of the service.
            `)]),_:1})]),_:1})]),complete:o(()=>[l.validate.meshName?(m(),w("div",Ie,[l.hideScannerSiblings===!1?(m(),w("div",Ce,[Ee,e(),t("p",null,`
                It's time to first generate the credentials so that `+D(a.title)+` will allow
                the Dataplane to successfully authenticate itself with the control plane,
                and then finally install the Dataplane process (powered by Envoy).
              `,1),e(),Te,e(),s(y,{id:"code-block-generate-token-command",language:"bash",code:p.generateDpTokenCodeOutput},null,8,["code"]),e(),xe,e(),s(y,{id:"code-block-stard-dp-command",language:"bash",code:p.startDpCodeOutput},null,8,["code"])])):E("",!0),e(),s(A,{"loader-function":p.scanForEntity,"should-start":!0,"has-error":l.scanError,"can-complete":l.scanFound,onHideSiblings:p.hideSiblings},{"loading-title":o(()=>[Ae]),"loading-content":o(()=>[Me]),"complete-title":o(()=>[Ue]),"complete-content":o(()=>[t("p",null,[e(`
                  Your Dataplane
                  `),l.validate.univDataplaneId?(m(),w("strong",Fe,D(l.validate.univDataplaneId),1)):E("",!0),e(`
                  was found!
                `)]),e(),Ve,e(),t("p",null,[s(f,{appearance:"primary",onClick:p.compeleteDataPlaneSetup},{default:o(()=>[e(`
                    View Your Dataplane
                  `)]),_:1},8,["onClick"])])]),"error-title":o(()=>[Be]),"error-content":o(()=>[Ke]),_:1},8,["loader-function","has-error","can-complete","onHideSiblings"])])):(m(),T(M,{key:1,appearance:"danger"},{alertMessage:o(()=>[ze]),_:1}))]),dataplane:o(()=>[Oe,e(),t("p",null,`
            In `+D(a.title)+`, a Dataplane resource represents a data plane proxy running
            alongside one of your services. Data plane proxies can be added in any Mesh
            that you may have created, and in Kubernetes, they will be auto-injected
            by `+D(a.title)+`.
          `,1)]),example:o(()=>[He,e(),We,e(),s(y,{id:"onboarding-dpp-universal-example",class:"sample-code-block mt-3",code:a.$options.EXAMPLE_CODE,language:"yaml"},null,8,["code"])]),switch:o(()=>[s(U)]),_:1},8,["steps","sidebar-content","footer-enabled","next-disabled"])])])}const lt=x(ie,[["render",qe],["__scopeId","data-v-fcc70b3f"]]);export{lt as default};
