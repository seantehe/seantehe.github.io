webpackJsonp([12],{"2c0Q":function(e,t){},"6jEG":function(e,t,n){function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,i){try{var o=t[r](i),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});e(c)}return a("next")})}}var r=this,i=window,o=i.$,c=i.MB;i.wx;c.f.inSharing=!0,c.initInstall=function(){o("#splash").hide(),o("#loading").hide(),o.timeago.settings.lang=window.MBLocale,o("abbr.timeago").timeago(),o("#workspace").show().on("click",".cover.wechat, .cover.iphone, .cover.ipad",function(e){return o(e.target).closest(".cover").hide()});var e=o("a.install"),t=e.data("token"),n=e.data("plan"),a=e.data("exportable");e.click(function(e){return c.isWechat()?(e.preventDefault(),o(".cover.wechat").show(),c.mp("点击了微信安装")):c.isiPad()?(o(".cover.ipad").show(),c.mp("点击了 iOS 安装")):c.isIOS()?(c.mp("点击了 iOS 安装"),o(".cover.iphone").show()):a?(c.mp("点击了安卓安装"),o(".cover.building").show(),void s(t).then(function(){return o(".cover.building").hide()}).catch(function(e){})):(c.mp("弹出了安卓安装付费提示"),void c.promptRenew("exportable",{format:"apk",role:"project",plan:n}))}),c.isWechat()&&o("#ios-download").click(function(e){e.preventDefault(),o(".cover.wechat").show()})};var s=function(){var e=a(regeneratorRuntime.mark(function e(t){var n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/app/"+t+"/build/apk.json","put");case 2:return e.next=5,m(5e3);case 5:return e.next=7,h("/app/"+t+"/status/apk.json","get");case 7:if(n=e.sent,a=n.progress,i=n.link,100===a){e.next=12;break}return e.abrupt("continue",2);case 12:return window.location=i,e.abrupt("return");case 16:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),h=function(e,t){return new Promise(function(n,a){return o.ajax({url:e,type:t,success:n,error:a})})},u=function(e){return new Promise(function(t,n){return o.getJSON(e,function(e){return t(e)}).fail(function(e,t,a){return n(a)})})},m=function(e){return new Promise(function(t){return setTimeout(t,e)})};c.load=function(e,t,n){if(!c.supportedBrowser())return o("#splash").hide(),void o("#loading").hide();l(e,t,n,window.MBData?p:d).then(function(e){return window.MBData?b(e):w(e)}).catch(function(e){})};var l=function(){var e=a(regeneratorRuntime.mark(function e(t,n,a,i){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=void 0,e.prev=1,a=a||c.localStorageDelegate[t+"_pwd"],e.next=5,i(t,a);case 5:o=e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),c.localStorageDelegate.removeItem(t+"_pwd");case 12:if(o){e.next=25;break}return e.prev=13,a=md5(prompt(I18N.credential_required)),e.next=17,i(t,a);case 17:o=e.sent,e.next=25;break;case 20:throw e.prev=20,e.t1=e.catch(13),console.log(e.t1),alert(n?I18N.invalid_credential:"Failed to load this App."),e.t1;case 25:return n&&(c.localStorageDelegate[t+"_pwd"]=a),e.abrupt("return",o);case 27:case"end":return e.stop()}},e,r,[[1,8],[13,20]])}));return function(t,n,a,r){return e.apply(this,arguments)}}(),d=function(){var e=a(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u("/app/"+t+".json?"+(new Date).valueOf()+(n?"&password="+n:"")));case 1:case"end":return e.stop()}},e,r)}));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=a(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.MBData.project.password||n===window.MBData.project.password){e.next=2;break}throw new Error("Local password invalid");case 2:return e.abrupt("return",window.MBData);case 3:case"end":return e.stop()}},e,r)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(e){o(".indicator").css("height","100%"),setTimeout(function(){return g(e)},300)},b=function(e){c.staticMap=function(){return"images/workspace/staticmap_"+window.MBLocale+".png"},e.project.splash="images/splash.png",e.screens.forEach(function(e){e.bgimage&&(e.bgimage=e.bgimage.replace(/^.+uploads.*?\//,""))}),e.widgets.forEach(function(e){e.image&&(e.image=e.image.replace(/^.+uploads.*?\//,""))}),e.widgetstates.forEach(function(e){e.image&&(e.image=e.image.replace(/^.+uploads.*?\//,""))}),o(".indicator").css("height","100%"),setTimeout(function(){return g(e)},300)},g=function(e){c.DEVICES=e.devices;var t=e.project.template?new Template:e.project.combo?new Combo:new Project;t.load(e.project),t.lsave(!1),Template.refresh(e.templates),Screen.refresh(e.screens),Widget.refresh(e.widgets),Link.refresh(e.links),Panel.refresh(e.panels),Screenstate.refresh(e.screenstates),Widgetstate.refresh(e.widgetstates),Panelstate.refresh(e.panelstates),Collaborator.refresh(e.collaborators),CommentThread.refresh(e.threads),Comment.refresh(e.comments),Team.refresh(e.teams),c.user=o("#workspace").data("user")||{},c.mpIdentify(),c.user.id&&(c.pusher=new Pusher,c.pusher.subscribe(t.cid)),c.isMobile()||(c.autoSaver=new AutoSaver),(new Image).src=c.staticMap(),o("title").html(t.name),o("#loading").hide(),!t.validated&&c.isMobile()&&c.alert({title:I18N.reminder,desc:'<p class="desc"><strong>该 demo 使用墨刀制作，墨刀是在线的原型工具，用于制作应用演示模型。</strong><p class="desc">任何要求转账、汇款、购买授权码的行为均是诈骗行为。除官方渠道 <a href="https://modao.cc">modao.cc</a> 外，通过其他渠道付费，墨刀概不负责。<p class="desc">付费用户可去除此提示。',confirmText:"知道了，我不会转账",isHTML:!0}),c.checkFA(function(){o(".box").hide(),c.currentProject=t,c.webpackInterface.init(),c.runner=new SharingRunner(t),c.runner.render()})}},AcyE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("AxSz"),r=n("sn4q"),i=n("0oll"),o=n("6QCI"),c=n("1C3V"),s=n("iNpB"),h=n("E7xn"),u=n("6jEG"),m=(n.n(u),n("EF4r")),l=(n.n(m),n("bjzn")),d=(n.n(l),n("2c0Q")),p=(n.n(d),n("aTD+"));n.n(p);MB.COMPONENTS=h.b;try{a.a.MB.webpackInterface=Object(r.a)(i.a),a.a.MB.setRunnerExtra=o.a,a.a.MB.renewMsg=s.a,a.a.MB.promptRenew=s.c,a.a.MB.messageBucket=Object(c.a)(c.b)}catch(e){console.warn("[UI:Preview] Failed to init:",e.stack||e)}},E7xn:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a=[{name:"label",icon_text:"文字",text:I18N.w.label,tb_text:"文字",icon_name:"text",width:33,height:23,fs:14,br:0,bs:0,ha:"center",va:"middle",z:5,lh:1.45},{name:"text_view",icon_text:"多行文字",text:I18N.w.text_view_placeholder,tb_text:"多行文字",icon_name:"paragraph",width:200,height:65,fs:14,br:0,bs:0,ha:"left",va:"top",z:5,lh:1.45},{name:"rounded_rect",icon_text:"矩形",text:"",icon_name:"rectangle",width:200,height:100,br:0,bs:1,fs:14,ha:"center",va:"middle",lh:1.45,z:5},{name:"circle_rect",icon_text:"圆形",text:"",icon_name:"circle",width:100,height:100,br:100,bs:1,fs:14,ha:"center",va:"middle",lh:1.45,z:5},{name:"triangleb",icon_text:"三角",text:"",icon_name:"triangle-top",width:40,height:30,z:5},{name:"triangletl",icon_text:"三角",text:"",icon_name:"triangle-left-bottom",width:40,height:40,z:5},{name:"hr",icon_text:"线条",text:"",icon_name:"horizontal-line",width:150,height:10,z:5,zoomable:"w,e,n"},{name:"ve",icon_text:"线条",text:"",icon_name:"vertical-line",width:10,height:150,z:5,zoomable:"n,s,w"},{name:"button",icon_text:"按钮",text:I18N.w.button,tb_text:"按钮",icon_name:"btn",width:80,height:30,fs:14,br:4,bs:1,ha:"center",va:"middle",z:5,icon:"",is:14,padding:8},{name:"image_view",icon_text:"图片",text:"",icon_name:"img",width:200,height:120,br:0,bs:0,z:5},{name:"icon_button",icon_text:"图标",text:"",icon:"star",icon_name:"smile",width:45,height:45,br:0,bs:0,is:24,z:5},{name:"tab_item",icon_text:"标签",text:I18N.w.tab_item,tb_text:"标签",icon_name:"icon-label",icon:"home",width:80,height:45,fs:12,is:24,z:5,ha:"center",zoomable:"w,e"},{name:"lr",icon_text:"链接区域",tb_text:"链接区域",icon_name:"link",width:45,height:45,br:0,bs:0,z:7},{icon_text:"网页",name:"webpage",text:"about:blank",tb_text:"网页",icon_name:"webpage",width:"100%",height:400,z:5,ha:"center"},{name:"pg",icon_text:"全局手势",icon_name:"gesture",icon:"tap",width:40,height:40,br:0,bs:0,z:7,zoomable:" "},{name:"sticky",icon_text:"批注",tb_text:"批注",icon_name:"sticker",width:204,height:170,padding:24,fs:12,lh:1.67,z:10},{name:"mtext_input",icon_text:"单行输入",text:I18N.w.mtext_input,tb_text:"单行输入",icon_name:"input",width:200,height:30,fs:14,br:0,bs:1,ha:"left",va:"middle",z:5,padding:8},{name:"mtextarea",icon_text:"多行输入",text:I18N.w.mtextarea,tb_text:"多行输入",icon_name:"textarea",width:280,height:100,fs:14,lh:1.45,br:0,bs:1,ha:"left",z:5,padding:8},{name:"mselect",icon_text:"下拉框",text:"1\n2\n3",tb_text:"下拉框",icon_name:"select",width:200,height:30,fs:14,bs:1,z:5,lh:1.45,padding:8},{name:"mfile_input",icon_text:"选择文件",tb_text:"文件选择",icon_name:"file",width:200,height:30,z:5,padding:8},{name:"mtooltip",icon_text:"聊天气泡",text:I18N.w.mtooltip,tb_text:"聊天气泡",icon_name:"tooltip",width:220,height:40,fs:14,br:5,ha:"left",va:"top",z:5,lh:1.45,bg:"#8DFA69",bc:"#5FE163",bs:1,padding:10},{name:"map_view",icon_text:"地图",text:"",icon_name:"map",width:"100%",height:230,z:4},{name:"mcheckbox2",icon_text:"复选框",icon_name:"checkbox",width:30,height:30,z:5,checked:!1},{name:"mradiobutton",icon_text:"单选框",icon_name:"radio",width:30,height:30,z:5,checked:!1},{name:"switch",icon_text:"开关按钮",text:"",icon_name:"toggle",width:50,height:30,br:0,bs:0,z:5,zoomable:" ",checked:!0},{name:"navigation_bar",icon_text:"标题栏",text:I18N.w.navbar_title,tb_text:"标题栏",icon_name:"header",width:"100%",height:55,fs:18,z:4,zoomable:"s",ha:"center",top:23},{name:"tab_bar",icon_text:"底栏",text:"",tb_text:"底栏",icon_name:"footer",width:"100%",height:45,z:4,zoomable:"n"},{name:"rectangle",icon_text:"空白通栏",text:"",icon_name:"bar",width:"100%",height:100,z:5,zoomable:"n,s"},{name:"search_bar",icon_text:"搜索框",text:I18N.w.search,tb_text:"搜索",icon_name:"search-input",width:"100%",height:45,fs:14,ha:"left",z:5,zoomable:"w,e"},{name:"keyboard",icon_text:"键盘",text:I18N.w.return,width:"100%",icon_name:"keyboard",z:3,zoomable:" ",numeric:!1},{name:"status_bar",icon_text:"状态栏",text:I18N.w.carrier,tb_text:"中国移动",icon_name:"battery",width:"100%",height:23,z:3,zoomable:" "}],r=a.reduce(function(e,t){return e[t.name]=t,e},{})}},["AcyE"]);
//# sourceMappingURL=preview-d0d59021529d32110107.js.map