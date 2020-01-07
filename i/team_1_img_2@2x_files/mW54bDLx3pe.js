if (self.CavalryLogger) { CavalryLogger.start_js(["q8aAI"]); }

__d("FBLoadShimmer.react",["cx","LoadingMarker.react","React","UserAgent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.className,d=a.height,e=a.style,f=a.width;a=a.disableAnimation;var g=b("UserAgent").isBrowser("Safari")&&b("UserAgent").isPlatform("Mac OS X");a="_1tt"+(a?" _300z":"")+(g?" _72_f":"");g=b("React").jsx("div",{className:b("joinClasses")(c,a),style:babelHelpers["extends"]({height:d!=null?d+"px":void 0,width:f!=null?f+"px":void 0},e)});return b("React").jsx(b("LoadingMarker.react"),{children:g})}e.exports=a}),null);
__d("FBProfilePhotoShadow.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);d=b("React").Children.only(d);return b("React").jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,"_38vo"),children:b("React").cloneElement(d,{className:b("joinClasses")(d.props.className,"_44ma")})}))};return c}(b("React").Component);e.exports=a}),null);
__d("HelpLiteFlyoutBootloader",["regeneratorRuntime","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:j.loadFlyoutWithHelpType(null);case 1:case"end":return a.stop()}},null,this)},loadFlyoutWithHelpType:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("JSResource")("HelpLiteFlyout").__setRef("HelpLiteFlyoutBootloader").load());case 2:c=h.sent;if(!g){h.next=6;break}c.refreshHelp();return h.abrupt("return");case 6:g=!0;a&&j.setHelpType(a);h.next=10;return b("regeneratorRuntime").awrap(this._getDeferredFlyoutElements().getPromise());case 10:d=h.sent,e=d.flyout,f=d.flyoutRoot,c.registerFlyoutToggler(e,f),c.loadBody();case 15:case"end":return h.stop()}},null,this)},setHelpType:function(a){i=a},getHelpType:function(){return i},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})}};e.exports=j}),null);
__d("PopoverAsyncMenu",["Bootloader","Event","KeyStatus","PopoverMenu","VirtualCursorStatus","setImmediate"],(function(a,b,c,d,e,f){__p&&__p();var g={},h=0;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,i,j){c=a.call(this,c,d,null,i)||this;c._endpoint=f;c._endpointData=j||{};c._loadingMenu=e;c._instanceId=h++;g[c._instanceId]=babelHelpers.assertThisInitialized(c);c._mouseoverListener=b("Event").listen(d,"mouseover",c.fetchMenu.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d._onLayerInit=function(){var a=this;!this._menu&&this._loadingMenu&&this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe("key",this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:b("KeyStatus").isKeyDown(),isVirtualCursorTriggered:b("VirtualCursorStatus").isVirtualCursorTriggered()};b("setImmediate")(function(){return a.fetchMenu()})};d._onPopoverHide=function(){a.prototype._onPopoverHide.call(this),this._triggerInfo=null};d._refetchMenu=function(){this._menu&&(this._menu.destroy(),this._fetched=!1,this._mouseoverListener=b("Event").listen(this.getTriggerElem(),"mouseover",this.fetchMenu.bind(this)))};d.fetchMenu=function(){var a=this;if(this._fetched)return;b("Bootloader").loadModules(["AsyncRequest"],function(b){new b().setURI(a._endpoint).setData(Object.assign({pmid:a._instanceId},a._endpointData)).send()},"PopoverAsyncMenu");this._fetched=!0;this._mouseoverListener&&(this._mouseoverListener.remove(),this._mouseoverListener=null)};d._setFocus=function(a){var b=this._triggerInfo||{},c=b.isKeyDown;b=b.isVirtualCursorTriggered;this.setInitialFocus(a,c||b);this._triggerInfo=null};c.setMenu=function(a,b){a=g[a];a.setMenu(b);a._setFocus(b)};c.disableTypeaheadActivationForInstance=function(a){a=g[a];a._isTypeaheadActivationDisabled=!0};c.getInstance=function(a){return g[a]};c.getInstanceByTriggerElem=function(a){var b=null;Object.keys(g).forEach(function(c){g[c]._triggerElem==a&&(b=g[c])});return b};return c}(b("PopoverMenu"));e.exports=a}),null);
__d("SystemEvents",["ArbiterMixin","Cookie","ErrorPubSub","ExecutionEnvironment","SystemEventsInitialData","TimeSlice","UserActivity","UserAgent_DEPRECATED","clearTimeout","gkx","mixin","setIntervalAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=1e3;c=function(c){__p&&__p();babelHelpers.inheritsLoose(d,c);function d(){__p&&__p();var d;d=c.call(this)||this;d.$SystemEvents12=function(){var a=d.$SystemEvents7();d.$SystemEvents2!=a&&(d.$SystemEvents2=a,d.inform(d.USER,a));d.$SystemEvents13()};d.USER="SystemEvents/USER";d.ONLINE="SystemEvents/ONLINE";d.TIME_TRAVEL="SystemEvents/TIME_TRAVEL";d.$SystemEvents1=b("SystemEventsInitialData").ORIGINAL_USER_ID;d.$SystemEvents2=d.$SystemEvents1;d.$SystemEvents3=a.navigator!=null?a.navigator.onLine:!1;d.$SystemEvents4=Date.now();b("ExecutionEnvironment").canUseDOM&&d.$SystemEvents6();return d}var e=d.prototype;e.isPageOwner=function(a){return(a||this.$SystemEvents7())==this.$SystemEvents1};e.isOnline=function(){return!!(b("UserAgent_DEPRECATED").chrome()||this.$SystemEvents3)};e.checkTimeTravel=function(){var a=Date.now(),b=a-this.$SystemEvents4;this.$SystemEvents4=a;(b<0||b>1e4)&&this.inform(this.TIME_TRAVEL,b)};e.$SystemEvents6=function(){this.$SystemEvents8(),this.$SystemEvents9(),this.$SystemEvents10(),this.$SystemEvents11()};e.$SystemEvents8=function(){var a=this,c=b("TimeSlice").guard(function(){a.$SystemEvents3||(a.$SystemEvents3=!0,a.inform(a.ONLINE,a.$SystemEvents3))},"SystemEvents onOnline"),d=b("TimeSlice").guard(function(){a.$SystemEvents3&&(a.$SystemEvents3=!1,a.inform(a.ONLINE,a.$SystemEvents3))},"SystemEvents onOffline");b("UserAgent_DEPRECATED").ie()?b("UserAgent_DEPRECATED").ie()>=11?(window.addEventListener("online",c,!1),window.addEventListener("offline",d,!1)):b("UserAgent_DEPRECATED").ie()>=8?window.attachEvent("onload",function(){document.body.ononline=c,document.body.onoffline=d}):b("setIntervalAcrossTransitions")(function(){(navigator.onLine?c:d)()},h):window.addEventListener&&(window.addEventListener("online",c,!1),window.addEventListener("offline",d,!1))};e.$SystemEvents13=function(){b("clearTimeout")(this.$SystemEvents5),this.$SystemEvents5=b("setTimeoutAcrossTransitions")(this.$SystemEvents12,h)};e.$SystemEvents9=function(){var a=this;if(self!==top&&b("gkx")("678677"))return;b("UserActivity").subscribe(function(){a.$SystemEvents13()});this.$SystemEvents13()};e.$SystemEvents10=function(){b("setIntervalAcrossTransitions")(this.checkTimeTravel.bind(this),h)};e.$SystemEvents11=function(){b("setIntervalAcrossTransitions")(function(){window.onerror!=(g||(g=b("ErrorPubSub"))).onerror&&(window.onerror=(g||(g=b("ErrorPubSub"))).onerror)},h)};e.$SystemEvents7=function(){return b("Cookie").get("c_user")||"0"};return d}(b("mixin")(b("ArbiterMixin")));e.exports=new c()}),3);
__d("XFRXHandleChevronClickController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/frx/handle_chevron_click/",{})}),null);
__d("FRXHandleChevronClick",["AsyncRequest","Event","XFRXHandleChevronClickController"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c,d,e){b("Event").listen(a,"click",function(){new(b("AsyncRequest"))().setURI(b("XFRXHandleChevronClickController").getURIBuilder().getURI()).setMethod("POST").setData({reportable_ent_id:c,frx_entry_point:d,nfx_story_location:e}).send()})}};e.exports=a}),null);
__d("DockingElement",["cx","AbstractDockingElement","Arbiter","CSS","DOM","DOMDimensions","Style","UIGridColumnsConfig","UITinyViewportAction","UserAgent","getElementPosition"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari < 11");a=function(){"use strict";__p&&__p();function a(a){this.$12=a,this.$9=b("DOM").create("div"),b("CSS").addClass(this.$9,"_1pfm"),b("Style").set(this.$9,"position","relative"),b("DOM").replace(this.$12,this.$9),b("DOM").appendContent(this.$9,this.$12),this.$8=0,this.$6=!1,this.register(),this.update()}var c=a.prototype;c.register=function(){b("AbstractDockingElement").register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};c.subscribe=function(a,c,d){this.$1||(this.$1=new(b("Arbiter"))());return this.$1.subscribe(a,c,d)};c.__queryDOM=function(){var a=b("getElementPosition")(this.getPlaceholder()),c=b("DOMDimensions").getElementDimensions(this.$12);c.width>0&&c.height>0?(this.$11=a,this.$5=c):this.$6=!0};c.__updateWithCache=function(){__p&&__p();if(this.$6||this.$11==null||this.$8==null){this.$6=!1;return}var a=this.$8,c=this.getPlaceholder(),d=!b("UIGridColumnsConfig").responsive_rhc_when_narrow&&b("UITinyViewportAction").isTiny();if(!d&&this.$11!=null&&this.$11.y<=a){!this.$7&&this.$12.parentNode&&(b("CSS").addClass(this.$12,"fixed_elem"),this.$7=!0);var e;this.$4!==a&&(e={},e.top=a+"px",this.$4=a);d=this.$5.width;d!==this.$3&&(e=e||{},e.width=d+"px",this.$3=d);if(h){a=this.$11.x;a!==this.$2&&(e=e||{},e.left=a+"px",this.$2=a)}e&&b("Style").apply(this.$12,e);d=this.$5.height;b("Style").set(c,"height",d+"px");(d+1<this.$10||d-1>this.$10)&&(this.$10=d,this.$1&&this.$1.inform("changedheight"))}else this.$7&&(b("Style").set(c,"height",""),b("Style").apply(this.$12,{left:"",top:"",width:""}),b("CSS").removeClass(this.$12,"fixed_elem"),this.$7=!1,this.$2=null,this.$3=null,this.$4=null)};c.update=function(){this.__queryDOM(),this.__updateWithCache()};c.getPlaceholder=function(){return this.$9};c.getRoot=function(){return this.$12};c.setOffset=function(a){this.$8=a;this.update();return this};return a}();e.exports=a}),null);
__d("PopoverLoadingMenu",["cx","BehaviorsMixin","DOM","PopoverMenuInterface","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this)||this;c._config=b||{};c._theme=b.theme||{};return c}var d=c.prototype;d.getRoot=function(){if(!this._root){var a;this._root=(a=b("DOM")).create("div",{className:b("joinClasses")("_54nq",this._config.className,this._theme.className)},a.create("div",{className:"_54ng"},a.create("div",{className:"_54nf _54af"},a.create("span",{className:"_54ag"}))));this._config.behaviors&&this.enableBehaviors(this._config.behaviors)}return this._root};return c}(b("PopoverMenuInterface"));Object.assign(a.prototype,b("BehaviorsMixin"),{_root:null});e.exports=a}),null);
__d("EntityPageLayoutDockingElement",["DockingElement","EntityPageDockingElementController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.register=function(){b("EntityPageDockingElementController").register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this))};return c}(b("DockingElement"));e.exports=a}),null);
__d("ContextualLayerPositionClassOnContext",["cx","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("reposition",this._updateClassName.bind(this)),this._layer.isShown()&&this._updateClassName()};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null,this._prevClassName&&(b("CSS").removeClass(this._layer.getContext(),this._prevClassName),this._prevClassName=null)};c._updateClassName=function(a,c){a=this._layer.getContext();c=h(c);if(this._prevClassName){if(this._prevClassName===c)return;b("CSS").removeClass(a,this._prevClassName)}b("CSS").addClass(a,c);this._prevClassName=c};return a}();function h(a){__p&&__p();var b=a.getAlignment();a=a.getPosition();if(a==="below")if(b==="left")return"_nk";else if(b==="right")return"_nl";else return"_nm";else if(a==="above")if(b==="left")return"_nn";else if(b==="right")return"_no";else return"_np";else if(a==="left")return"_nq";else return"_nr"}Object.assign(a.prototype,{_subscription:null,_prevClassName:null});e.exports=a}),null);
__d("arrayStableSort",[],(function(a,b,c,d,e,f){function a(a,b){return a.map(function(a,b){return{data:a,index:b}}).sort(function(a,c){return b(a.data,c.data)||a.index-c.index}).map(function(a){return a.data})}e.exports=a}),null);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="developers"}e.exports=a}),null);
__d("FantailLogger",["FantailConfig"],(function(a,b,c,d,e,f){__p&&__p();var g=b("FantailConfig").FantailLogQueue;a={debug:function(a,b){var c;for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];g&&(c=g.get(a)).debug.apply(c,[b].concat(e))},info:function(a,b){var c;for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];g&&(c=g.get(a)).info.apply(c,[b].concat(e))},warn:function(a,b){var c;for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];g&&(c=g.get(a)).warn.apply(c,[b].concat(e))},error:function(a,b){var c;for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];g&&(c=g.get(a)).error.apply(c,[b].concat(e))}};e.exports=a}),null);
__d("MqttWsClientTypedLoggerLite",["Banzai","generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig")}),null);
__d("SkywalkerUtils",["CurrentLocale","RTISubscriptionManagerConfig"],(function(a,b,c,d,e,f){__p&&__p();a={patchContext:function(a){a=a||{};a.locale=b("CurrentLocale").get();if(b("RTISubscriptionManagerConfig").assimilator){var c=b("RTISubscriptionManagerConfig").assimilator;c.tierType!=null&&(a.tierType=c.tierType);c.sandboxIP!=null&&c.sandboxPort!=null&&c.sandboxHostname!=null&&(a.sandboxIP=c.sandboxIP,a.sandboxPort=c.sandboxPort,a.sandboxHostname=c.sandboxHostname)}return a}};e.exports=a}),null);
__d("MqttLogger",["BanzaiODS","ChannelClientID","FantailLogger","FBLogger","Log","LogHistory","MqttEnv","MqttUtils","MqttWsClientTypedLoggerLite","Random","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MqttEnv").Env,h=b("MqttWsClientTypedLoggerLite").log,i=b("Random").coinflip,j="mqtt_client",k="MqttJsClient",l=100,m=null,n={CONNECT:"mqtt_client_connect",DISCONNECT:"mqtt_client_disconnect",PUBLISH:"mqtt_client_publish",CLIENT_ERROR:"mqtt_client_error",PUBLISH_TIMEOUT:"mqtt_qos1_publish_timeout",SOCKET_DISCONNECT:"mqtt_protocol_error"};a=function(){__p&&__p();a.getInstance=function(){m||(m=new a());return m};function a(){this.$1=b("LogHistory").getInstance(j),this.$2=0,this.$3=b("gkx")("778292"),this.$4=Date.now(),this.$5=b("ChannelClientID").getID()}var c=a.prototype;c.setAppId=function(a){this.$2===0&&(this.$2=a)};c.eventLogConnect=function(a){var c=a.sessionID,d=a.connectionStatus,e=a.duration,f=a.hostname,h=a.attemptNumber;a.failTotal;a.successTotal;var i=a.subscribedTopics,j=a.publishes,k=a.errorCode;a=a.errorMessage;var l=d?"success":"failed";this.bumpCounter(n.CONNECT+"."+l);l={device_id:this.$5,session_id:c,logged_in:g.isUserLoggedInNow(),href:window.location.hostname,connection_status:d,duration:e,hostname:f,feature_availability:b("MqttUtils").getWSAvailability(),attempt_number:h,subscribed_topics:i,publishes:j,error_code:k,error_message:a};this.$6(n.CONNECT,l)};c.eventLogPull=function(a){var b=a.pullEventName,c=a.sessionID,d=a.status,e=a.duration,f=a.hostname;a=a.errorMessage;c={device_id:this.$5,session_id:c,logged_in:g.isUserLoggedInNow(),href:window.location.hostname,connection_status:d,duration:e,hostname:f,error_message:a};this.$6(b,c)};c.eventLogPullFinish=function(a){var b=a.pullEventName,c=a.sessionID,d=a.duration,e=a.errorMessage,f=a.publishReceived;a=a.publishSent;c={device_id:this.$5,session_id:c,logged_in:g.isUserLoggedInNow(),href:window.location.hostname,duration:d,error_message:e,publish_received:f,publish_sent:a};this.$6(b,c)};c.eventLogDisconnect=function(a){var b=a.sessionID,c=a.errorCode,d=a.errorMessage;a=a.duration;this.bumpCounter(n.DISCONNECT);b={device_id:this.$5,session_id:b,href:window.location.hostname,duration:a,error_code:c,error_message:d};this.$6(n.DISCONNECT,b)};c.eventLogSocketError=function(a){var c=a.sessionID,d=a.errorCode;a=a.errorMessage;if(!b("gkx")("1186740"))return;c={device_id:this.$5,session_id:c,href:window.location.hostname,error_code:d,error_message:a};this.$6(n.SOCKET_DISCONNECT,c)};c.eventLogPublish=function(a){var b=a.topic,c=a.qos,d=a.payloadSizeBytes,e=a.success,f=a.protocol;a=a.errorMessage;this.bumpCounter(n.PUBLISH+"."+b);b={device_id:this.$5,href:window.location.hostname,topic:b,qos:c,payload_size_bytes:d,success:e?1:0,protocol:f,error_message:a};this.$6(n.PUBLISH,b)};c.logError=function(a,c){var d=this;g.scheduleLoggingCallback(function(){try{b("FBLogger")(j).catching(a).mustfix(c),d.$7(b("FantailLogger").error,c)}catch(a){}})};c.eventLogPublishTimeout=function(a){a=a.topic;a={device_id:this.$5,href:window.location.hostname,topic:a};this.$6(n.PUBLISH_TIMEOUT,a)};c.eventLogMiscellaneousError=function(a){a=a.errorMessage;a={device_id:this.$5,logged_in:g.isUserLoggedInNow(),href:window.location.hostname,error_message:a,time_passed:Date.now()-this.$4};this.$6(n.CLIENT_ERROR,a)};c.logIfLoggedOut=function(){if(!b("gkx")("1186990")||g.isUserLoggedInNow())return;var a={logged_in:g.isUserLoggedInNow(),href:window.location.href,error_message:"Not logged in",time_passed:Date.now()-this.$4};this.$6(n.CLIENT_ERROR,a)};c.logErrorWarn=function(a,c){var d=this;g.scheduleLoggingCallback(function(){try{b("FBLogger")(j).catching(a).warn(c),d.$7(b("FantailLogger").warn,c)}catch(a){}})};c.logWarn=function(a,c){var d=this;g.scheduleLoggingCallback(function(){try{d.$1.warn(a,c),d.$7(b("FantailLogger").warn,c)}catch(a){}})};c.debugTrace=function(a,c){var d=this;g.scheduleLoggingCallback(function(){try{d.$1.debug(a,c),d.$7(b("FantailLogger").debug,c)}catch(a){}})};c.bumpCounter=function(a){var c=this;if(!i(l))return;g.scheduleLoggingCallback(function(){c.$2!==0&&b("BanzaiODS").bumpEntityKey(2966,"mqtt_ws_client",c.$2+"."+a,l),b("BanzaiODS").bumpEntityKey(2966,"mqtt_ws_client",a,l)})};c.$6=function(a,c){var d=this;g.scheduleLoggingCallback(function(){c.event_type=a;c.app_id=d.$2;c.online=d.$8();var e=JSON.stringify(c);d.$1.log(a,e);a!==n.DISCONNECT&&h(c);d.$7(b("FantailLogger").info,e)})};c.$7=function(a,c){g.scheduleLoggingCallback(function(){b("gkx")("676936")&&a(k,c)})};c.$8=function(){return window.navigator&&window.navigator.onLine!==void 0?window.navigator.onLine:!1};return a}();e.exports=a}),null);
__d("MqttEnvInitializer",["CurrentUser","JSScheduler","MqttEnv","MqttLogger","Random","WebStorage","clearTimeout","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("MqttEnv").MqttGkNames,i=b("MqttEnv").Env,j="mqtt:",k={genGk:function(a){__p&&__p();switch(a){case h.mqtt_waterfall_log_client_sampling:return b("gkx")("832242");case h.messenger_uses_mqtt_rollout:return!0;case h.mqtt_ws_polling_enabled:return!0;case h.mqtt_ws_forced_polling_only:return b("gkx")("865724");case h.mqtt_send_unload_event:return b("gkx")("901339");case h.mqtt_ws_reconnect_reset:return b("gkx")("807517");case h.mqtt_lp_use_fetch:return b("gkx")("945829");case h.mqtt_fast_lp:return b("gkx")("1001007");case h.mqtt_lp_no_delay:return b("gkx")("1066746");case h.mqtt_enable_publish_over_polling:return b("gkx")("968609");default:b("MqttLogger").getInstance().logError(new Error("unknown gk"),"Unknown GK value "+a);return!1}},useJSScheduler:function(a){return b("gkx")("987139")?a:null},initialize:function(){__p&&__p();i.initialize(b("Random").random,b("CurrentUser").isLoggedInNow,b("clearTimeout"),b("setTimeoutAcrossTransitions"),function(){return b("MqttLogger").getInstance()},k.genGk,null,k.useJSScheduler(b("JSScheduler").scheduleNormalPriCallback),k.useJSScheduler(b("JSScheduler").scheduleLoggingPriCallback),function(a,c){var d=(g||(g=b("WebStorage"))).getLocalStorage();if(d){d=d.getItem(j+a);if(d!=null)return d}return c},function(a,c){var d=(g||(g=b("WebStorage"))).getLocalStorage();d&&(c==null?d.removeItem(j+a):d.setItem(j+a,c))})}};e.exports=k}),null);
__d("FBMqttChannel",["MqttChannel","MqttEnvInitializer","MqttWebConfig"],(function(a,b,c,d,e,f){"use strict";b("MqttEnvInitializer").initialize();e.exports=new(b("MqttChannel"))({endpoint:(a=b("MqttWebConfig")).endpoint,pollingEndpoint:a.pollingEndpoint,userFbid:a.fbid,appId:a.appID,initialSubscribedTopics:a.subscribedTopics,capabilities:a.capabilities,clientCapabilities:a.clientCapabilities,chatVisibility:a.chatVisibility})}),null);
__d("exponentialBackoff",["MqttEnv"],(function(a,b,c,d,e,f){__p&&__p();var g=b("MqttEnv").Env;function a(a,b){__p&&__p();b===void 0&&(b=null);var c=null,d=0;function e(){__p&&__p();for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];var i=function(){a.apply(b,f)};if(c===null){var j=Math.max(0,Math.pow(2,Math.min(d,6))*(1e3+g.random()*100)-2e3);c=g.setTimeout(function(){i(),c=null},j)}d++}e.reset=function(){d=0,c!=null&&(g.clearTimeout(c),c=null)};e.isPending=function(){return c!=null};return e}e.exports=a}),null);