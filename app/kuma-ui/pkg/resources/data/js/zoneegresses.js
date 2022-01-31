(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zoneegresses"],{"0b6d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.details.globalInstanceId||t.details.connectTime||t.details.disconnectTime?n("div",[n("h5",{staticClass:"overview-tertiary-title"},[t._v(" General Information: ")]),n("ul",[t.details.globalInstanceId?n("li",[n("strong",[t._v("Global Instance ID:")]),t._v(" "),n("span",{staticClass:"mono"},[t._v(t._s(t.details.globalInstanceId))])]):t._e(),t.details.controlPlaneInstanceId?n("li",[n("strong",[t._v("Control Plane Instance ID:")]),t._v(" "),n("span",{staticClass:"mono"},[t._v(t._s(t.details.controlPlaneInstanceId))])]):t._e(),t.details.connectTime?n("li",[n("strong",[t._v("Last Connected:")]),t._v(" "+t._s(t._f("readableDate")(t.details.connectTime))+" ")]):t._e(),t.details.disconnectTime?n("li",[n("strong",[t._v("Last Disconnected:")]),t._v(" "+t._s(t._f("readableDate")(t.details.disconnectTime))+" ")]):t._e()])]):t._e(),t.detailsIterator?n("div",[n("ul",{staticClass:"overview-stat-grid"},t._l(t.detailsIterator,(function(e,a){return n("li",{key:a},[n("h6",{staticClass:"overview-tertiary-title"},[t._v(" "+t._s(t._f("humanReadable")(a))+": ")]),n("ul",t._l(e,(function(e,a){return n("li",{key:a},[n("strong",[t._v(t._s(t._f("humanReadable")(a))+":")]),t._v(" "),n("span",{staticClass:"mono"},[t._v(t._s(t._f("formatError")(t._f("formatValue")(e))))])])})),0)])})),0)]):n("KAlert",{staticClass:"mt-4",attrs:{appearance:"info"},scopedSlots:t._u([{key:"alertIcon",fn:function(){return[n("KIcon",{attrs:{icon:"portal"}})]},proxy:!0},{key:"alertMessage",fn:function(){return[t._v(" There are no subscription statistics for "),n("strong",[t._v(t._s(t.details.id))])]},proxy:!0}])})],1)},i=[],r=(n("d3b7"),n("25f0"),n("c9e9")),s=n("bc1e"),o={name:"SubscriptionDetails",filters:{formatValue:function(t){return t?parseInt(t,10).toLocaleString("en").toString():0},readableDate:function(t){return Object(s["f"])(t)},humanReadable:function(t){return Object(s["b"])(t)},formatError:function(t){return"--"===t?"error calculating":t}},props:{details:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},computed:{detailsIterator:function(){var t;if(this.isDiscoverySubscription){var e=this.details.status,n=(e.lastUpdateTime,e.total,Object(r["a"])(e,["lastUpdateTime","total"]));return n}return null===(t=this.details.status)||void 0===t?void 0:t.stat}}},c=o,l=(n("f426"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"65d19712",null);e["a"]=u.exports},"0f12":function(t,e,n){},"2a6a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zoneegresses"},[!1===t.multicluster?n("MultizoneInfo"):n("FrameSkeleton",[n("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"table-data":t.tableData,"table-data-is-empty":t.isEmpty,next:t.next},on:{tableAction:t.tableAction,loadData:function(e){return t.loadData(e)}},scopedSlots:t._u([{key:"additionalControls",fn:function(){return[t.$route.query.ns?n("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:{name:"zoneegresses"}}},[n("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()]},proxy:!0}])}),!1===t.isEmpty?n("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},scopedSlots:t._u([{key:"tabHeader",fn:function(){return[n("div",[n("h3",[t._v(" Zone Egress: "+t._s(t.entity.name))])]),n("div",[n("EntityURLControl",{attrs:{name:t.entity.name}})],1)]},proxy:!0},{key:"overview",fn:function(){return[n("LabelList",[n("div",[n("ul",t._l(t.entity,(function(e,a){return n("li",{key:a},[e?n("h4",[t._v(" "+t._s(a)+" ")]):t._e(),n("p",[t._v(" "+t._s(e)+" ")])])})),0)])])]},proxy:!0},{key:"insights",fn:function(){return[n("KCard",{attrs:{"border-variant":"noBorder"},scopedSlots:t._u([{key:"body",fn:function(){return[n("Accordion",{attrs:{"initially-open":0}},t._l(t.subscriptionsReversed,(function(e,a){return n("AccordionItem",{key:a,scopedSlots:t._u([{key:"accordion-header",fn:function(){return[n("SubscriptionHeader",{attrs:{details:e}})]},proxy:!0},{key:"accordion-content",fn:function(){return[n("SubscriptionDetails",{attrs:{details:e,"is-discovery-subscription":""}})]},proxy:!0}],null,!0)})})),1)]},proxy:!0}],null,!1,2672485894)})]},proxy:!0}],null,!1,2476273761)}):t._e()],1)],1)},i=[],r=(n("7db0"),n("a630"),n("d81d"),n("b0c0"),n("3ca3"),n("96cf"),n("c964")),s=n("f3f3"),o=n("9b02"),c=n.n(o),l=n("2f62"),u=n("1d3a"),d=n("bc1e"),p=n("0f82"),f=n("1d10"),m=n("2778"),v=n("6663"),h=n("251b"),b=n("0ada"),y=n("dbf3"),_=n("c6ec"),g=n("520d"),x=n("3ddf"),E=n("0b6d"),O=n("c8b4"),I=n("3f31"),w={name:"ZoneEgresses",components:{FrameSkeleton:f["a"],DataOverview:m["a"],Tabs:h["a"],LabelList:b["a"],Accordion:g["a"],AccordionItem:x["a"],SubscriptionDetails:E["a"],SubscriptionHeader:O["a"],MultizoneInfo:I["a"],EntityURLControl:v["a"]},metaInfo:{title:"ZoneEgresses"},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"}],entity:{},rawData:[],pageSize:_["h"],next:null,subscriptionsReversed:[]}},computed:Object(s["a"])({},Object(l["c"])({multicluster:"config/getMulticlusterStatus"})),watch:{$route:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.multicluster&&this.loadData()},tableAction:function(t){var e=t;this.getEntity(e)},loadData:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"0",e.isLoading=!0,e.isEmpty=!1,i=e.$route.query.ns||null,n.prev=4,n.next=7,Object(u["a"])({getAllEntities:p["a"].getAllZoneEgressOverviews.bind(p["a"]),getSingleEntity:p["a"].getZoneEgressOverview.bind(p["a"]),size:e.pageSize,offset:a,query:i});case 7:r=n.sent,o=r.data,c=r.next,e.next=c,o.length?(e.isEmpty=!1,e.rawData=o,e.getEntity({name:o[0].name}),e.tableData.data=o.map((function(t){var e=t.zoneEgressInsight,n=void 0===e?{}:e;return Object(s["a"])(Object(s["a"])({},t),Object(y["m"])(n))}))):(e.tableData.data=[],e.isEmpty=!0),n.next=19;break;case 14:n.prev=14,n.t0=n["catch"](4),e.hasError=!0,e.isEmpty=!0,console.error(n.t0);case 19:return n.prev=19,e.isLoading=!1,n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[4,14,19,22]])})))()},getEntity:function(t){var e=["type","name"],n=this.rawData.find((function(e){return e.name===t.name})),a=c()(n,"zoneEgressInsight.subscriptions",[]);this.subscriptionsReversed=Array.from(a).reverse(),this.entity=Object(d["d"])(n,e)}}},k=w,S=n("2877"),C=Object(S["a"])(k,a,i,!1,null,null,null);e["default"]=C.exports},"2ee4":function(t,e,n){"use strict";n("0f12")},"3ddf":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.accordionItemClasses},[n("button",{staticClass:"accordion-item-header",attrs:{"aria-expanded":t.visible},on:{click:t.open}},[t._t("accordion-header")],2),n("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start}},[t.visible?n("div",{staticClass:"px-4"},[t._t("accordion-content")],2):t._e()])],1)},i=[],r=(n("caad"),n("c975"),n("a434"),n("2532"),{name:"AccordionItem",inject:["parentAccordion"],data:function(){return{index:null}},computed:{visible:function(){return this.parentAccordion.multipleOpen?this.parentAccordion.active.includes(this.index):this.index===this.parentAccordion.active},accordionItemClasses:function(){return["relative border-b py-2",{active:this.visible}]}},created:function(){this.index=this.parentAccordion.count++},methods:{hideItem:function(){this.parentAccordion.multipleOpen?this.parentAccordion.active.splice(this.parentAccordion.active.indexOf(this.index),1):this.parentAccordion.active=null},showItem:function(){this.parentAccordion.multipleOpen?this.parentAccordion.active.push(this.index):this.parentAccordion.active=this.index},open:function(){this.visible?this.hideItem():this.showItem()},start:function(t){t.style.height="".concat(t.scrollHeight,"px")},end:function(t){t.style.height="auto"}}}),s=r,o=(n("9cd3"),n("2877")),c=Object(o["a"])(s,a,i,!1,null,"6f89660e",null);e["a"]=c.exports},"3f31":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KEmptyState",{scopedSlots:t._u([{key:"title",fn:function(){return[n("KIcon",{staticClass:"kong-icon--centered",attrs:{icon:"dangerCircle",size:"42"}}),t._v(" "+t._s(t.productName)+" is running in Standalone mode. ")]},proxy:!0},{key:"message",fn:function(){return[n("p",[t._v(" To access this page, you must be running in "),n("strong",[t._v("Multi-Zone")]),t._v(" mode. ")])]},proxy:!0},{key:"cta",fn:function(){return[n("KButton",{attrs:{to:"https://kuma.io/docs/"+t.version+"/documentation/deployments/",target:"_blank",appearance:"primary"}},[t._v(" Learn More ")])]},proxy:!0}])})},i=[],r=n("f3f3"),s=n("2f62"),o=n("c6ec"),c={name:"MultizoneInfo",data:function(){return{productName:o["k"]}},computed:Object(r["a"])({},Object(s["c"])({version:"config/getVersion"}))},l=c,u=n("2877"),d=Object(u["a"])(l,a,i,!1,null,null,null);e["a"]=d.exports},"520d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"accordion"},[t._t("default")],2)},i=[],r=(n("a9e3"),{name:"Accordion",props:{initiallyOpen:{type:[Number,Array],default:null},multipleOpen:{type:Boolean,default:!1}},data:function(){var t;return t=null!==this.initiallyOpen?this.initiallyOpen:this.multipleOpen?[]:null,{parentAccordion:{count:0,active:t,multipleOpen:this.multipleOpen}}},provide:function(){return{parentAccordion:this.parentAccordion}}}),s=r,o=(n("2ee4"),n("2877")),c=Object(o["a"])(s,a,i,!1,null,"790cd898",null);e["a"]=c.exports},6663:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-testid":"entity-url-control"}},[n("KClipboardProvider",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",[n("p",[t._v(t._s(t.confirmationText))])])]},proxy:!0}],null,!0)},[n("KButton",{attrs:{appearance:"secondary",size:"small"},on:{click:function(){a(t.shareUrl)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("KIcon",{attrs:{"view-box":"0 0 16 16",icon:"externalLink"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(t.copyButtonText)+" ")])],1)]}}])})],1)},i=[],r=(n("99af"),n("b0c0"),n("ac1f"),n("5319"),{name:"EntityURLControl",props:{name:{type:String,default:""},copyButtonText:{type:String,default:"Copy URL"},confirmationText:{type:String,default:"URL copied to clipboard!"},mesh:{type:String,default:""}},computed:{shareUrl:function(){var t="".concat(window.location.href.replace(window.location.hash,""),"#"),e=this.$router.resolve({name:this.$route.name,params:{mesh:this.mesh},query:{ns:this.name}}).resolved.fullPath;return"".concat(t).concat(e)}}}),s=r,o=n("2877"),c=Object(o["a"])(s,a,i,!1,null,null,null);e["a"]=c.exports},"9cd3":function(t,e,n){"use strict";n("e593")},a434:function(t,e,n){"use strict";var a=n("23e7"),i=n("23cb"),r=n("a691"),s=n("50c4"),o=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var n,a,u,d,p,f,y=o(this),_=s(y.length),g=i(t,_),x=arguments.length;if(0===x?n=a=0:1===x?(n=0,a=_-g):(n=x-2,a=v(m(r(e),0),_-g)),_+n-a>h)throw TypeError(b);for(u=c(y,a),d=0;d<a;d++)p=g+d,p in y&&l(u,d,y[p]);if(u.length=a,n<a){for(d=g;d<_-a;d++)p=d+a,f=d+n,p in y?y[f]=y[p]:delete y[f];for(d=_;d>_-a+n;d--)delete y[d-1]}else if(n>a)for(d=_-a;d>g;d--)p=d+a-1,f=d+n-1,p in y?y[f]=y[p]:delete y[f];for(d=0;d<n;d++)y[d+g]=arguments[d+2];return y.length=_-a+n,u}})},c8b4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"text-lg font-medium"},[n("span",{staticClass:"color-green-400"},[t._v(" Connect time: "+t._s(t._f("rawReadableDateFilter")(t.details.connectTime))+" ")]),t.details.disconnectTime?n("span",{staticClass:"ml-4 color-red-400"},[t._v(" Disconnect time: "+t._s(t._f("rawReadableDateFilter")(t.details.disconnectTime))+" ")]):t._e()])},i=[],r=n("bc1e"),s={name:"SubscriptionHeader",filters:{rawReadableDateFilter:function(t){return Object(r["i"])(t)}},props:{details:{type:Object,required:!0}}},o=s,c=n("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},e593:function(t,e,n){},efd6:function(t,e,n){},f426:function(t,e,n){"use strict";n("efd6")}}]);