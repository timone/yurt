if (self.CavalryLogger) { CavalryLogger.start_js(["VGFmv"]); }

__d("KeyframesAsyncSession",["Promise","requireDeferred","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("FBKeyframesLoggedSession");a=function(){__p&&__p();function a(c){var d=this;this.$3=function(){var c=a.timestamp();b("promiseDone")(d.$1,function(a){return a.error(c)})};this.$1=g.load().then(function(a){return new a(c)});this.$2=this.$1.then(function(a){return a.getPerformanceLogIfEnabled()})}a.timestamp=function(){return{value:Date.now()}};var c=a.prototype;c.scheduleDecode=function(c,d){__p&&__p();var e=c.then(function(){return a.timestamp()}),f=c.then(function(){return d}).then(function(){return a.timestamp()}),g=d.then(function(a){return a&&a.pluginsLoader!=null&&a.pluginsLoader.getPluginTable instanceof Function?a.pluginsLoader.getPluginTable():[]});c=b("Promise").all([this.$1,e]).then(function(a){var c=a[0];a=a[1];c=c.startDecode(a);return b("Promise").all([c,f,g])});b("promiseDone")(c,function(a){var b=a[0],c=a[1];a=a[2];return b(c,a)},this.$3)};c.maybeGetPerformanceLog=function(){return this.$2};return a}();e.exports=a}),null);
__d("KeyframesDecodedAssetRequest",["Promise","requireDeferred","XHRRequest","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("KeyframesAssetDecoder"),h=b("requireDeferred")("KeyframesRenderer");function i(a){return!a||typeof a!=="string"?b("Promise").reject("Request: invalid uri "+a):new(b("Promise"))(function(c,d){new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a){return d(a)}).setAbortHandler(function(a){return d(a)}).setResponseHandler(function(a){return c(a)}).send()})}a=function(){__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=!1;a=b("Promise").all([typeof a==="string"?i(a):a,g.load()]);this.$2=a.then(function(a){var b=a[0];a=a[1];return a.fromDocumentBytes(b)});c.scheduleDecode(a,this.$2);b("promiseDone")(this.$2,function(){return d.$1=!0},function(){return d.$1=!0})}var c=a.prototype;c.isDone=function(){return this.$1};c.getAsset=function(){return this.$2};c.getRenderer=function(a){return b("Promise").all([this.$2,h.load(),a.maybeGetPerformanceLog()]).then(function(a){var b=a[0],c=a[1];a=a[2];return new c(b,a)})};return a}();e.exports=a}),null);
__d("Keyframes",["Promise","Bootloader","KeyframesAsyncSession","KeyframesDecodedAssetRequest","NetworkStatus","XHRRequest","emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h={};function i(a,c){__p&&__p();if(!a||typeof a!=="string")return b("Promise").reject("Request: invalid uri "+a);var d=g[a];if(d)return d;d=new(b("Promise"))(function(c,d){var e=function(a){b("NetworkStatus").reportError(),d(a)};new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a){return e(a)}).setAbortHandler(function(a){return e(a)}).setResponseHandler(function(a){return c(a)}).send()});c===!0&&(g[a]=d);return d}a={requestRenderer:function(a,c){c=new(b("KeyframesAsyncSession"))(c);h[a]||(h[a]=new(b("KeyframesDecodedAssetRequest"))(a,c));return h[a].getRenderer(c)},preload:function(a){h[a]||i(a,!0),b("Bootloader").preloadModules(["KeyframesRenderer","FBKeyframesLoggedSession","KeyframesAssetDecoder"])},load:function(a,c){if(!h[a]){c=new(b("KeyframesAsyncSession"))(c);h[a]=new(b("KeyframesDecodedAssetRequest"))(a,c)}return b("Promise").all([h[a].getAsset()]).then(b("emptyFunction"))},requestRendererFromBytes:function(a,c){c=new(b("KeyframesAsyncSession"))(c);return new(b("KeyframesDecodedAssetRequest"))(a,c).getRenderer(c)},loadFromBytes:function(a,c){c=new(b("KeyframesAsyncSession"))(c);return new(b("KeyframesDecodedAssetRequest"))(a,c).getAsset()},hasLoaded:function(a){return!!(h[a]&&h[a].isDone())},clearCache:function(){h={},g={}}};e.exports=a}),null);
__d("Keyframes.react",["FBLogger","Keyframes","React","createCancelableFunction","promiseDone","testID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=a.width;a=a.height;c={width:c||0,height:a||0};return b("React").jsx("div",{style:c})}function h(a){var c=a.width;a=a.height;return b("React").jsx(g,{width:c,height:a})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={error:!1,renderer:null},c.$6=function(a){c.setState({renderer:a,error:!1}),c.props.onLoad&&c.props.onLoad(a)},c.$7=function(a){c.setState({renderer:null,error:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.seekToProgress=function(a){this.state.renderer&&this.state.renderer.seekToProgress(a)};d.componentDidMount=function(){this.$4(this.props.source)};d.componentWillUnmount=function(){this.state.renderer&&this.state.renderer.pause(),this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel()};d.componentDidUpdate=function(a,b){if(this.props.source!==a.source||this.props.projectName!==a.projectName||this.props.assetName!=null&&a.assetName!=null&&this.props.assetName!==a.assetName||a.assetID!=null&&this.props.assetID!=null&&this.props.assetID!==a.assetID)this.$4(this.props.source);else{var c=this.state.renderer;c!==b.renderer?this.$5(b.renderer,c):c&&((a.width!==this.props.width||a.height!==this.props.height)&&(c.resetDimensions(),this.props.width&&c.setWidth(this.props.width),this.props.height&&c.setHeight(this.props.height)),a.muted!==this.props.muted&&(this.props.muted?c.mute():c.unMute()),a.startAt!==this.props.startAt&&a.endAt!==this.props.endAt&&c.setStartAndEndAt(this.props.startAt,this.props.endAt),a.startAt!==this.props.startAt&&c.setStartAt(this.props.startAt),a.endAt!==this.props.endAt&&c.setEndAt(this.props.endAt),a.repeatCount!==this.props.repeatCount&&c.repeatCount(this.props.repeatCount),a.onError!==this.props.onError&&c.onError(this.props.onError),a.onRepeatEnd!==this.props.onRepeatEnd&&c.onRepeatEnd(this.props.onRepeatEnd),a.onProgress!==this.props.onProgress&&c.onProgress(this.props.onProgress),a.initialProgress!==this.props.initialProgress&&c.seekToProgress(this.props.initialProgress),a.playing!==this.props.playing&&(this.props.playing?c.play():(c.pause(),this.props.resetOnPause&&c.repeatCount(this.props.repeatCount).seekToProgress(this.props.initialProgress))),c.redrawIfNeeded())}};d.$5=function(a,b){if(!this.$1)return;b&&(b.onError(this.props.onError).onRepeatEnd(this.props.onRepeatEnd).onProgress(this.props.onProgress).setStartAt(this.props.startAt).setEndAt(this.props.endAt).repeatCount(this.props.repeatCount),this.props.width&&b.setWidth(this.props.width),this.props.height&&b.setHeight(this.props.height),this.props.initialProgress&&b.seekToProgress(this.props.initialProgress),this.props.muted?b.mute():b.unMute(),this.props.playing?b.play():b.pause(),b.redrawIfNeeded());a&&b?this.$1.replaceChild(b.getElement(),a.getElement()):(a&&this.$1.removeChild(a.getElement()),b&&this.$1.appendChild(b.getElement()))};d.$8=function(a){return a instanceof ArrayBuffer?b("Keyframes").requestRendererFromBytes(a,this.$9()):b("Keyframes").requestRenderer(a,this.$9())};d.$4=function(a){this.$2&&this.$2.cancel(),this.$3&&this.$3.cancel(),!a?this.$7():(this.$2=b("createCancelableFunction")(this.$6),this.$3=b("createCancelableFunction")(this.$7),b("promiseDone")(this.$8(a),this.$2,this.$3))};d.$9=function(){return this.props.assetID?{projectName:this.props.projectName,assetID:this.props.assetID}:{projectName:this.props.projectName,assetName:this.props.assetName||"__FIXME__missing_react_asset_name"}};d.render=function(){var a=this,c=this.props,d=c.className,e=c.height,f=c.style;c=c.width;c=this.state.renderer?null:this.state.error?this.props.errorPlaceholder||b("React").jsx(h,{width:c,height:e}):this.props.placeholder||b("React").jsx(g,{width:c,height:e});e=this.props.mutator&&this.state.renderer&&b("React").cloneElement(this.props.mutator,{__renderer:this.state.renderer});return b("React").jsxs("div",babelHelpers["extends"]({className:d},b("testID")(this.props.testid),{ref:function(b){return a.$1=b},style:babelHelpers["extends"]({display:"inline-block",lineHeight:0,fontSize:0},f),children:[c,e]}))};return c}(b("React").Component);a.defaultProps={initialProgress:0,resetOnPause:!1,playing:!0,repeatCount:Infinity,startAt:0,endAt:1};e.exports=a}),null);
__d("UFIReactionsAnimatedKeyframesIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.supportsReaction=function(a){return!!b("UFIReactionsKeyframesAssets").reactions[a]};var d=c.prototype;d.render=function(){var a=this.props,c=a.animate,d=a.className,e=a.maxSize;a=a.reactionID;var f=b("UFIReactionsKeyframesAssets").initialProgress[a]||0,g=b("UFIReactionsKeyframesAssets").reactions[a];return g?b("React").jsx(b("Keyframes.react"),{projectName:"feedback_reactions",assetName:b("UFIReactionTypes").reactions[a].name,className:d,source:g,width:e,height:e,playing:c,initialProgress:f,resetOnPause:!0}):b("React").jsx("div",{style:{width:e,height:e}})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("getVendorPrefixedEventName",["fbjs/lib/ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}var g={animationend:a("Animation","AnimationEnd"),animationiteration:a("Animation","AnimationIteration"),animationstart:a("Animation","AnimationStart"),transitionend:a("Transition","TransitionEnd")},h={},i={};b("fbjs/lib/ExecutionEnvironment").canUseDOM&&(i=document.createElement("div").style,"AnimationEvent"in window||(delete g.animationend.animation,delete g.animationiteration.animation,delete g.animationstart.animation),"TransitionEvent"in window||delete g.transitionend.transition);function c(a){if(h[a])return h[a];else if(!g[a])return a;var b=g[a];for(var c in b)if(Object.prototype.hasOwnProperty.call(b,c)&&c in i)return h[a]=b[c];return""}e.exports=c}),null);
__d("ReactTransitionEvents",["fbjs/lib/ExecutionEnvironment","getVendorPrefixedEventName"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[];function a(){var a=b("getVendorPrefixedEventName")("animationend"),c=b("getVendorPrefixedEventName")("transitionend");a&&g.push(a);c&&g.push(c)}b("fbjs/lib/ExecutionEnvironment").canUseDOM&&a();function h(a,b,c){a.addEventListener(b,c,!1)}function i(a,b,c){a.removeEventListener(b,c,!1)}c={addEndEventListener:function(a,b){if(g.length===0){window.setTimeout(b,0);return}g.forEach(function(c){h(a,c,b)})},removeEndEventListener:function(a,b){if(g.length===0)return;g.forEach(function(c){i(a,c,b)})}};e.exports=c}),null);
__d("UFIReactionsDialogLayerImpl.react",["csx","cx","invariant","BrowserSupport","CSS","DataStore","DOM","DOMQuery","Focus","Layer","Locale","Parent","React","ReactDOM","ReactTransitionEvents","RTLKeys","Style","SubscriptionsHandler","TabbableElements","Vector","ViewportBounds","cancelAnimationFrame","clearTimeout","ge","getElementPosition","getOverlayZIndex","memoize","prop-types","renderSubtreeIntoContainer_DO_NOT_USE","requestAnimationFrameAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j="_1oxh",k="_2r6k",l="_2r6j",m=b("BrowserSupport").hasCSSAnimations(),n="_22uo",o="_6fqy",p=200,q={},r=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.updatePosition=function(){__p&&__p();var a=this.getInsertParent(),c=this.getCausalElement(),d=b("Vector").getElementPosition(c),e=b("Vector").getElementPosition(a);d=d.sub(e);e=b("Vector").getElementDimensions(a).x;b("Locale").isRTL()&&(d.x=e-d.x);e=b("Vector").getViewportDimensions().x;var f=b("Vector").getElementDimensions(this.getContentRoot()).x;d.x=Math.min(d.x,e-f);b("Locale").isRTL()?q.right=d.x+"px":q.left=d.x+"px";q.top=d.y+"px";q.zIndex=this._getZIndex(c,a);e=this.getRoot();e!=null||i(0,4781);b("Style").apply(e,q);return!0};d._getZIndex=function(a,c){__p&&__p();a=b("getOverlayZIndex")(a,c);var d=b("Parent").byClass(c,"fbPhotoSnowliftContainer"),e=d&&b("DOMQuery").scry(d,".stageWrapper")[0];e&&(a=Math.max(a,b("getOverlayZIndex")(e,d)));e=b("ge")("pagelet_sidebar");if(e){d=b("DOMQuery").scry(e,".fbChatSidebar")[0];e=b("DOMQuery").scry(c,"._13pa")[0];d&&e==null&&(a=Math.max(a,parseInt(b("Style").get(d,"z-index"),10)+1))}return a};d.getContentRoot=function(){return this.contentRoot};d._buildWrapper=function(a,c){b("CSS").addClass(c,"_49v-");this.contentRoot=c;a=document.createElement("div");b("CSS").addClass(a,"_1oxj");a.appendChild(c);return a};return a}(b("Layer"));a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this,c,d)||this;e.onTransitionHide=function(){b("ReactTransitionEvents").removeEndEventListener(e.layer.getContentRoot(),e.onTransitionHide),e.finishHide()};e.onTransitionShow=function(){var a=e.layer.getContentRoot();a!=null||i(0,4782);b("ReactTransitionEvents").removeEndEventListener(a,e.onTransitionShow);var c=b("requestAnimationFrameAcrossTransitions")(function(){b("CSS").removeClass(a,l)});e.handler.addSubscriptions({remove:function(){b("cancelAnimationFrame")(c)}})};e.onKeyDown=function(a){__p&&__p();var c=a.keyCode;if(e.props.isScreenReader)return;if(c===b("RTLKeys").ESC||c===b("RTLKeys").RETURN||c===b("RTLKeys").TAB){e.props.onLayerBlur&&e.props.onLayerBlur(a);var d=e.root.current,f=b("TabbableElements").find(e.getContextualLayerParent()),g=null,h=[];c=c===b("RTLKeys").TAB&&a.shiftKey;for(var i=0;i<f.length;i++)if(f[i].tabIndex>-1){if(d.compareDocumentPosition(f[i])&4){g=f[i];break}c&&h.push(f[i])}h.length&&(g=h[h.length-1]);g&&(b("Focus").set(g),a.preventDefault(),a.stopPropagation())}};e.getGlobalContainer=b("memoize")(function(){return b("ge")("globalContainer")});e.onParentLayerHide=e.finishHide.bind(babelHelpers.assertThisInitialized(e));e.root=b("React").createRef();return e}var d=c.prototype;d.componentDidMount=function(){var a=this.root.current;this.layer=new r({causalElement:a,insertParent:a},document.createElement("div"));b("DOM").appendContent(a,this.layer.getRoot());this.handler=new(b("SubscriptionsHandler"))();this.props.onLayerBlur&&this.handler.addSubscriptions(this.layer.subscribe("blur",this.props.onLayerBlur));this.handler.addSubscriptions(this.layer.subscribe("beforeshow",this.beforeShow.bind(this)),this.layer.subscribe("aftershow",this.afterShow.bind(this)),this.layer.subscribe("starthide",this.startHide.bind(this)));this.isInDocument()&&this.renderLayer()};d.componentDidUpdate=function(a){this.renderLayer()};d.componentWillUnmount=function(){__p&&__p();if(this.layer){var a=this.layer.getContentRoot();b("ReactDOM").unmountComponentAtNode(this.layer.getContentRoot());b("ReactTransitionEvents").removeEndEventListener(a,this.onTransitionHide);b("ReactTransitionEvents").removeEndEventListener(a,this.onTransitionShow);this.handler.release();this.handler=null;this.layer.destroy();this.layer=null}};d.isInDocument=function(){var a=this.root.current;return a&&document.body.contains(a)};d.afterShow=function(){__p&&__p();var a=this;this.root.current!=null&&b("CSS").removeClass(this.root.current,"accessible_elem");var c=this.layer.getContentRoot();c!=null||i(0,4783);var d=b("getElementPosition")(c).y,e=b("ViewportBounds").getTop();b("CSS").conditionClass(c,j,!!(d&&d<e));if(m){b("ReactTransitionEvents").addEndEventListener(c,this.onTransitionShow);b("CSS").addClass(c,n);b("CSS").addClass(c,o);b("CSS").addClass(c,l);var f=b("setTimeoutAcrossTransitions")(function(){a.props.setAnimatingDock(!1),b("CSS").removeClass(c,o)},p);this.handler.addSubscriptions({remove:function(){b("clearTimeout")(f)}})}if(this.props.focusOnShow!==!1){d=b("TabbableElements").find(c)[0];d&&d.focus()}};d.beforeShow=function(){m&&this.props.setAnimatingDock(!0);var a=this.getContextualLayerParent();this.props.isScreenReader?this.layer.setInsertParent(this.layer.getCausalElement()):a!==this.layer.getInsertParent()&&(this.layer.setInsertParent(a),this.setParentLayerSubscription(a))};d.setParentLayerSubscription=function(a){__p&&__p();if(a!==this.getGlobalContainer()){this.parentLayerSubscription&&this.parentLayerSubscription.unsubscribe();this.parentLayer=null;return}a=a;var c=null;while(a!==null){c=b("DataStore").get(a,"layer");if(c)break;a=a.parentNode}if(c&&c!==this.parentLayer){this.parentLayerSubscription&&this.parentLayerSubscription.unsubscribe();a=c.subscribe("hide",this.onParentLayerHide);this.handler.addSubscriptions(a);this.parentLayerSubscription=a;this.parentLayer=c}};d.startHide=function(){if(m&&this.isInDocument()){var a=this.layer.getContentRoot();a!=null||i(0,4784);b("ReactTransitionEvents").addEndEventListener(a,this.onTransitionHide);b("CSS").addClass(a,k)}else this.finishHide();return!1};d.finishHide=function(){this.root.current!=null&&b("CSS").addClass(this.root.current,"accessible_elem");var a=this.layer.getContentRoot();a!=null||i(0,4785);m&&(b("CSS").removeClass(a,j),b("CSS").removeClass(a,k),b("CSS").removeClass(a,n));this.layer.setInsertParent(this.layer.getCausalElement());this.layer.finishHide()};d.getContextualLayerParent=function(){var a=this.root.current;if(a instanceof Element){a=b("Parent").byClass(a,"uiContextualLayerParent");if(a instanceof HTMLElement)return a}return document.body};d.renderLayer=function(){__p&&__p();var a=this,c=this.props;c.focusOnShow;var d=c.isDarkBackground;c.isScreenReader;var e=c.noBackground;c.onLayerBlur;c.onLayerRender;var f=c.semiTransparentBackground;c.setAnimatingDock;c.shown;c=babelHelpers.objectWithoutPropertiesLoose(c,["focusOnShow","isDarkBackground","isScreenReader","noBackground","onLayerBlur","onLayerRender","semiTransparentBackground","setAnimatingDock","shown"]);b("renderSubtreeIntoContainer_DO_NOT_USE")(this,b("React").jsxs("div",babelHelpers["extends"]({},c,{className:"_1oxk",onKeyDown:this.onKeyDown,children:[this.props.children,b("React").jsx("div",{className:"_41nt"+(d?" _3_jc":"")+(f?" _6la8":"")+(e?" hidden_elem":""),style:{height:this.props.height}})]})),this.layer.getContentRoot(),function(){a.layer&&a.layer.conditionShow(a.props.shown),a.props.onLayerRender&&a.props.onLayerRender()})};d.render=function(){return b("React").jsx("div",{className:"_2r6l accessible_elem",ref:this.root})};return c}(b("React").Component);a.propTypes={shown:b("prop-types").bool,isScreenReader:b("prop-types").bool,onLayerRender:b("prop-types").func};e.exports=a}),null);
__d("UFIReactionsMenuImpl.react",["cx","fbt","CometReactionIcon.react","Event","React","ReactDOM","RTLKeys","SubscriptionsHandler","UFIReactionsDialogLayerImpl.react","UFIReactionTypes","addFocusEvents","gkx","joinClasses","shallowCompare"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=8,j=44,k=39,l=b("UFIReactionTypes").reactions,m=h._("\u0420\u0435\u0430\u043a\u0446\u0438\u0438"),n=b("addFocusEvents")("span");a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.$2=function(){e.subscriptionsHandler!=null&&(e.subscriptionsHandler.release(),e.subscriptionsHandler=null)};e.focusSelected=function(){var a=b("ReactDOM").findDOMNode(e.refs[e.state.selectedIndex]);a&&a.focus()};e.onLayerRender=function(){e.state.hasKeyboardFocus&&e.focusSelected()};e.onKeyDown=function(a){switch(a.keyCode){case b("RTLKeys").RETURN:a.preventDefault();var c=e.state.supportedReactions[e.state.selectedIndex];e.props.initialReaction===c&&(c=b("UFIReactionTypes").NONE);c!==null&&c!==void 0&&e.props.onReactionClick&&e.props.onReactionClick(c,a);break;case b("RTLKeys").getLeft():case b("RTLKeys").getRight():a.preventDefault();e.setState({selectedIndex:Math.max(0,Math.min(e.state.selectedIndex+(a.keyCode===b("RTLKeys").getLeft()?-1:1),e.state.supportedReactions.length-1))},e.focusSelected);break}};e.setAnimatingDock=function(a){e.setState({isAnimatingDock:a})};d=c.supportedReactions.filter(function(a){return l[a]});var f=c.allowKeyboardFocus?Math.max(0,d.indexOf(c.initialReaction)):-1;e.state={hasKeyboardFocus:c.allowKeyboardFocus,isAnimatingDock:!1,prevPropsShown:c.shown,shouldRenderMenu:c.shown,selectedIndex:f,supportedReactions:d};e.hasAnimatedIcons=b("gkx")("991383");e.animatedIconsUsePackage=b("gkx")("991384");return e}c.getDerivedStateFromProps=function(a,b){if(!b.shouldRenderMenu&&a.shown)return{shouldRenderMenu:!0,prevPropsShown:a.shown,supportedReactions:a.supportedReactions.filter(function(a){return l[a]})};return!a.shown&&b.prevPropsShown?{hasKeyboardFocus:a.allowKeyboardFocus,selectedIndex:-1,prevPropsShown:a.shown,supportedReactions:a.supportedReactions.filter(function(a){return l[a]})}:{supportedReactions:a.supportedReactions.filter(function(a){return l[a]}),prevPropsShown:a.shown}};var d=c.prototype;d.componentDidMount=function(){this.props.allowKeyboardFocus&&this.focusSelected(),this.props.isLongPressing&&this.$1()};d.componentWillUnmount=function(){this.$2()};d.componentDidUpdate=function(a,b){this.props.allowKeyboardFocus&&!a.allowKeyboardFocus&&this.focusSelected(),this.props.isLongPressing&&!a.isLongPressing?this.$1():!this.props.isLongPressing&&a.isLongPressing&&this.$2()};d.$1=function(){__p&&__p();var a=this,c,d;this.$2();this.subscriptionsHandler=new(b("SubscriptionsHandler"))();this.subscriptionsHandler.addSubscriptions((c=b("Event")).listen(document.documentElement,"touchmove",function(b){b.preventDefault();var c=b.touches[0];c=document.elementFromPoint(c.clientX,c.clientY);!c.getAttribute("data-reaction")&&c.parentElement&&(c=c.parentElement);c=parseInt(c.getAttribute("data-reaction"),10)||null;c!==d&&(d&&a.onReactionMouseLeave(d,b),c&&a.onReactionMouseEnter(c,b),d=c)}),c.listen(document.documentElement,"mousemove",function(c){if(b("gkx")("893099")){var e=document.elementFromPoint(c.clientX,c.clientY);if(e!=null){!e.getAttribute("data-reaction")&&e.parentElement&&(e=e.parentElement);e=parseInt(e.getAttribute("data-reaction"),10)||null;e!==d&&(d&&a.onReactionMouseLeave(d,c),e&&a.onReactionMouseEnter(e,c),d=e)}}}),c.listen(document.documentElement,"touchcancel",this.$2),c.listen(document.documentElement,"touchend",function(b){a.$2(),d&&a.onReactionClick(d,b)}),c.listen(document.documentElement,"mouseup",function(c){b("gkx")("893099")&&(a.$2(),d&&a.props.shown&&a.onReactionClick(d,c))}))};d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onDragStart=function(a){a.preventDefault()};d.onKeyboardFocus=function(a,b){this.setState({hasKeyboardFocus:!0,selectedIndex:a}),this.props.onFocus&&this.props.onFocus(b)};d.onReactionClick=function(a,b,c,d){c===void 0;d===void 0;b.preventDefault();if(!this.state.isAnimatingDock){var e;this.props.onReactionClick&&(e=this.props).onReactionClick.apply(e,arguments)}};d.onReactionMouseEnter=function(a,b){this.setState({selectedIndex:this.props.supportedReactions.indexOf(a)}),this.props.onReactionMouseEnter&&this.props.onReactionMouseEnter(a)};d.onReactionMouseLeave=function(a,b){this.setState({selectedIndex:-1}),this.props.onReactionMouseLeave&&this.props.onReactionMouseLeave(a)};d.render=function(){__p&&__p();var a=this,c=this.state.selectedIndex,d=this.state.supportedReactions.map(function(d,e){var f=l[d].display_name,g=a.onReactionClick.bind(a,d),h=Math.max(0,a.state.supportedReactions.indexOf(a.props.initialReaction))===e,i=a.props.icon,j=a.hasAnimatedIcons&&i&&i.supportsReaction&&i.supportsReaction(d);if(j){var m=a.props.allowAnimationPlayback&&a.props.shown;i=b("React").jsx(i,{animate:m,className:"_1ef0",selectedIndex:a.state.selectedIndex,maxSize:k,reactionID:d,usePackage:a.animatedIconsUsePackage})}else i=b("React").jsx(b("CometReactionIcon.react"),{reactionType:d,size:48});return b("React").jsx(n,{"aria-pressed":a.props.initialReaction===d,"aria-label":f,className:"_iuw"+(c===e?" _iuy":""),"data-testid":"reaction_"+(a.state.isAnimatingDock?"animating_":"")+d,href:"#",onClick:g,onDragStart:a.onDragStart,onKeyboardFocus:a.onKeyboardFocus.bind(a,e),onMouseUp:a.props.onReactionMouseUp,onMouseDown:a.props.onReactionMouseDown,onMouseEnter:a.onReactionMouseEnter.bind(a,d),onMouseLeave:a.onReactionMouseLeave.bind(a,d),onTouchStart:a.onDragStart,onTouchEnd:g,ref:e,role:"button",tabIndex:h&&(!a.props.shown||c===-1||c===e)?0:-1,children:b("React").jsx("div",{className:"_39m"+(j?" _1ef2":""),"data-reaction":d,children:b("React").jsxs("div",{className:"_39n",children:[i,b("React").jsx("div",{className:"_d6l",children:b("React").jsx("div",{className:"_4sm1",children:f})})]})})},"reaction_"+d)});if(!this.state.shouldRenderMenu)return null;d=b("React").jsx("div",{className:b("joinClasses")("_iu-"+(this.state.hasKeyboardFocus?" _5wkt":"")+" _628b",this.props.className),"data-testid":"UFIReactionsMenu"+(this.state.isAnimatingDock?"_animating":""),onKeyDown:this.onKeyDown,"aria-label":m,ref:"root",role:"toolbar",children:d});return this.props.shouldRenderInline===!0?d:b("React").jsx(b("UFIReactionsDialogLayerImpl.react"),{height:j+i,focusOnShow:this.props.focusOnShow,setAnimatingDock:this.setAnimatingDock,isDarkBackground:this.props.isDarkBackground,isScreenReader:this.props.isScreenReader,onLayerBlur:this.props.onBlur,onLayerRender:this.onLayerRender,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,noBackground:this.props.noBackground,semiTransparentBackground:this.props.semiTransparentBackground,shown:this.props.shown,children:d})};return c}(b("React").Component);e.exports=a}),null);
__d("UFIReactionsMenuWithAnimatedIcons.react",["cx","requireDeferred","React","UFIReactionsAnimatedKeyframesIcon.react","UFIReactionsMenuImpl.react","createCancelableFunction","joinClasses","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("requireDeferred")("KeyframesEnvironment");a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={allowAnimationPlayback:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this;!this.state.allowAnimationPlayback&&h.getModuleIfRequired()!=null&&(this.$1=b("createCancelableFunction")(function(){a.setState({allowAnimationPlayback:!0})}),h.onReady(function(c){b("promiseDone")(c.whenRenderLoopHasBeenStableOnce(),a.$1)}))};d.componentWillUnmount=function(){this.$1&&(this.$1.cancel(),this.$1=null)};d.render=function(){var a=b("joinClasses")("_1ef3",this.props.className);return b("React").jsx(b("UFIReactionsMenuImpl.react"),babelHelpers["extends"]({allowAnimationPlayback:this.state.allowAnimationPlayback},this.props,{className:a,icon:b("UFIReactionsAnimatedKeyframesIcon.react"),children:this.props.children}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("CubicBezier",[],(function(a,b,c,d,e,f){__p&&__p();var g=.005;a=function(){"use strict";__p&&__p();function a(a,b){this.cx=3*a[0],this.bx=3*(b[0]-a[0])-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*a[1],this.by=3*(b[1]-a[1])-this.cy,this.ay=1-this.cy-this.by}var b=a.prototype;b.sampleCurveX=function(a){return((this.ax*a+this.bx)*a+this.cx)*a};b.solve=function(a){a=this.solveCurveX(a);return((this.ay*a+this.by)*a+this.cy)*a};b.solveCurveX=function(a){__p&&__p();var b,c,d,e;for(d=a,c=0;c<8;c++){e=this.sampleCurveX(d)-a;if(Math.abs(e)<g)return d;b=(3*this.ax*d+2*this.bx)*d+this.cx;if(Math.abs(b)<1e-6)break;d-=e/b}b=0;c=1;d=a;if(d<b)return b;if(d>c)return c;while(b<c){e=this.sampleCurveX(d);if(Math.abs(e-a)<g)return d;a>e?b=d:c=d;d=(c-b)/2+b}return d};return a}();e.exports=a}),null);
__d("SimpleFBAuthenticatedXHRRequest",["invariant","CurrentUser","DTSG","DTSGUtils","ServerJSDefine","SprinkleConfig","XHRRequest","isFacebookURI"],(function(a,b,c,d,e,f,g){__p&&__p();var h=1;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c)||this;var e={__dyn:b("ServerJSDefine").getLoadedModuleHash(),__req:(h++).toString(36),__ajax__:1,__a:1,__user:b("CurrentUser").getID()};a.prototype.setData.call(babelHelpers.assertThisInitialized(c),babelHelpers["extends"]({},d,e));return c}var d=c.prototype;d.send=function(){__p&&__p();var c=this;if(!b("isFacebookURI")(this.getURI()))return a.prototype.send.call(this);if(b("DTSG").getCachedToken){var d=b("DTSG").getCachedToken();if(d)return this.sendOnDTSGToken(d);else{b("DTSG").getToken().done(function(a){return c.sendOnDTSGToken(a)});return this}}else this.sendOnDTSGToken(b("DTSG").getToken())};d.sendOnDTSGToken=function(c){if(c){a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),{fb_dtsg:c}));if(b("SprinkleConfig").param_name){var d;a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),(d={},d[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(c),d)))}}return a.prototype.send.call(this)};d.setData=function(a){g(0,5518)};c.parseResponse=function(a){return JSON.parse(a.substr(9))};c.getPayload=function(a){a=c.parseResponse(a).payload;return a.payload?a.payload:a};return c}(b("XHRRequest"));e.exports=a}),null);
__d("XFantailLogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/fantail/",{service:{type:"String",required:!0}})}),null);
__d("FantailLogQueue",["ChannelClientID","CircularBuffer","PHPQuerySerializer","SimpleFBAuthenticatedXHRRequest","XFantailLogController","destroyOnUnload","setIntervalAcrossTransitions","sprintf"],(function(a,b,c,d,e,f){__p&&__p();var g,h={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};a=function(){"use strict";__p&&__p();function a(a){this.$2=a,this.$3=new(b("CircularBuffer"))(200),b("setIntervalAcrossTransitions")(this.$4.bind(this),30*1e3),b("destroyOnUnload")(this.$4.bind(this))}a.get=function(b){a.$1=a.$1||{};a.$1[b]=a.$1[b]||new a(b);return a.$1[b]};var c=a.prototype;c.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.DEBUG,a].concat(c))};c.info=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.INFO,a].concat(c))};c.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.WARN,a].concat(c))};c.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.ERROR,a].concat(c))};c.$5=function(a,c){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=b("sprintf").apply(void 0,[c].concat(e));this.$3.write({log_time:Date.now(),log:g,severity:a,device_id:b("ChannelClientID").getID()})};c.$4=function(){var a=this.$3.read();if(a.length>0){var c={log_time:[],log:[],severity:[],device_id:[]};a.forEach(function(a){c.log_time.push(a.log_time),c.log.push(a.log),c.severity.push(a.severity),c.device_id.push(a.device_id)});this.$3.clear();a=b("XFantailLogController").getURIBuilder().setString("service",this.$2).getURI();new(b("SimpleFBAuthenticatedXHRRequest"))(a,c).setMethod("POST").setDataSerializer((g||(g=b("PHPQuerySerializer"))).serialize).setRequestHeader("Content-Type","application/x-www-form-urlencoded").send()}};return a}();e.exports=a}),null);
__d("KeyframesLoop",["Run","TimeSlice","emptyFunction","gkx","performanceNow","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=1e3,i=new Set();function j(a){var c=(g||(g=b("performanceNow")))();a.callback(Math.min(c-(a.previousTime||c),h));a.previousTime=c;a.framesRemaining-=1;a.framesRemaining<=0&&a.cancel()}function k(a){i.size>0&&(i.forEach(j),b("requestAnimationFramePolyfill")(k))}b("gkx")("708253")||b("Run").onLeave(function(){i.forEach(function(a){return a.cancel()})});window.addEventListener("focus",function(){i.forEach(function(a){return a.previousTime=(g||(g=b("performanceNow")))()-16.67})});a=function(){__p&&__p();function a(a){this.framesRemaining=Infinity,this.callback=a,this.previousTime=0}var c=a.prototype;c.start=function(a){a===void 0&&(a=Infinity),this.framesRemaining=a,this.$1||(i.size===0&&b("requestAnimationFramePolyfill")(k),i.add(this),this.previousTime=(g||(g=b("performanceNow")))(),this.$1=b("TimeSlice").getGuardedContinuation("KeyframesLoop"))};c.cancel=function(){this.$1&&(this.$1(b("emptyFunction")),this.$1=null,i["delete"](this))};c.isRunning=function(){return!!this.$1};return a}();e.exports=a}),null);
__d("KeyframesEnvironment",["Promise","KeyframesLoop","Run","debounceCore","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=24;var g=1e3/a,h=325;function i(a){a===void 0&&(a=h);return new(b("Promise"))(function(c){var d=b("debounceCore")(function(a){a.cancel(),c()},a),e=new(b("KeyframesLoop"))(function(a){a>g&&d(e)});d(e)})}var j=new(b("Promise"))(function(a){b("Run").onAfterLoad(function(){a()})});function k(a){return j.then(function(){return i(a)})}var l=k(),m=!1;b("promiseDone")(l,function(){m=!0});c={waitForRenderLoopToStabilize:function(a){return i(a)},waitForRenderLoopToStabilizeOncePageIsLoaded:function(a){return k(a)},whenRenderLoopHasBeenStableOnce:function(){return l},hasRenderLoopBeenStableOnce:function(){return m}};e.exports=c}),null);