if (self.CavalryLogger) { CavalryLogger.start_js(["tm0Fj"]); }

__d("MentionResultsPropTypes",["React","SearchableEntry","SelectionState","prop-types"],(function(a,b,c,d,e,f){c={viewID:(a=b("prop-types")).string.isRequired,selection:a.instanceOf(b("SelectionState")).isRequired,contextComponent:a.object.isRequired,mentionableEntries:a.array.isRequired,highlightedMentionable:a.instanceOf(b("SearchableEntry")),onMentionSelect:a.func.isRequired,onMentionHighlight:a.func.isRequired,onMentionRenderHighlight:a.func.isRequired};e.exports=c}),null);
__d("MentionsLayer.react",["Bootloader","Locale","MentionResultsPropTypes","React","areEqual","prop-types"],(function(a,b,c,d,e,f){__p&&__p();var g,h=!1,i=b("Locale").isRTL(),j,k,l,m,n=5;c=b("React").createClass({displayName:"MentionsLayer",propTypes:babelHelpers["extends"]({},b("MentionResultsPropTypes"),{typeaheadView:(a=b("prop-types")).func.isRequired,typeaheadViewProps:a.object,autoflip:a.bool,reverseOrder:a.bool,position:a.oneOf(["above","below"])}),getInitialState:function(){return{bootloaded:h}},getDefaultProps:function(){return{offset:n}},componentDidMount:function(){var a=this;this.state.bootloaded||o(function(){a.isMounted()&&a.setState({bootloaded:!0})})},_onMentionSelect:function(a,b){b.preventDefault(),this.props.onMentionSelect(a,b)},shouldComponentUpdate:function(a,c){return this.state.bootloaded!==c.bootloaded||!(g||(g=b("areEqual")))(this.props.mentionableEntries,a.mentionableEntries)||this.props.highlightedMentionable!==a.highlightedMentionable||this.props.characterOffset!==a.characterOffset},render:function(){__p&&__p();if(!this.state.bootloaded)return null;var a=this.props.mentionableEntries,c=this.props.selection;c=c.isCollapsed()&&c.getHasFocus()&&a&&a.length;var d=null,e=this.props.typeaheadViewProps,f=!1;e&&e.positionAtContext?f=!0:c&&(d=m(this.props.characterOffset,i));e={};this.props.autoflip&&(e.ContextualLayerAutoFlip=k,e.ContextualLayerUpdateOnScroll=l);var g=this.props.typeaheadView;return b("React").jsx(j,{shown:c,context:this.props.contextComponent,contextBounds:d,containerWidthMatchContext:f,offsetY:this.props.offset,offsetX:this.props.offset,position:this.props.position||"below",behaviors:e,shouldSetARIAProperties:!1,children:b("React").jsx("div",{"data-testid":"mentions-contextual-layer",children:b("React").jsx(g,{id:this.props.viewID,viewProps:this.props.typeaheadViewProps,highlightedEntry:this.props.highlightedMentionable,reverseOrder:this.props.reverseOrder,entries:a||[],onSelect:this._onMentionSelect,onHighlight:this.props.onMentionHighlight,onRenderHighlight:this.props.onMentionRenderHighlight})})})}});function o(a){b("Bootloader").loadModules(["ContextualLayer.react","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","getMentionableRect"],function(b,c,d,e){j=b,k=c,l=d,m=e,h=!0,a()},"MentionsLayer.react")}e.exports=c}),null);
__d("CenteredContainer.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=(this.props.vertical?"_3bwv":"")+(this.props.horizontal?" _3bww":""),c=b("React").Children.map(this.props.children,function(a){return b("React").jsx("div",{className:"_3bwx",children:a})}),d=b("joinClasses")(this.props.className,this.props.fullHeight?"_5bpf":"");return b("React").jsx("div",babelHelpers["extends"]({},this.props,{className:d,children:b("React").jsx("div",{className:a,children:b("React").jsx("div",{className:"_3bwy",children:c})})}))};return c}(b("React").Component);a.propTypes={fullHeight:b("prop-types").bool,vertical:b("prop-types").bool,horizontal:b("prop-types").bool};a.defaultProps={fullHeight:!1,vertical:!1,horizontal:!0};e.exports=a}),null);
__d("getDOMImageSize",["EncryptedImg","URI"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){a.onload=null,a.onerror=null,a.onreadystatechange=null,a._callback=null,a._thisObj=null,a._srcStr=null,a.parentNode&&a.parentNode.removeChild(a)}function i(){var a=this;a._callback&&a._callback.call(a._thisObj,a.naturalWidth||a.width,a.naturalHeight||a.height,a._srcStr);h(a)}function j(){var a=this;a.readyState==="complete"&&i.call(a)}function k(){var a=this;a._callback&&a._callback.call(a._thisObj,0,0,a._srcStr);h(a)}function l(a,c,d){__p&&__p();d=d||null;if(!a){c.call(d,0,0,"");return}var e=document.body;if(!e){setTimeout(l.bind(this,a,c,d),500);return}var f;if(typeof a==="string")f=a;else if(typeof a==="object")if(typeof a.width==="number"&&typeof a.height==="number"){if(typeof a.src==="string"){f=a.src;if(a.naturalWidth&&a.naturalHeight){c.call(d,a.naturalWidth,a.naturalHeight,f);return}}if(typeof a.uri==="string"){f=a.uri;if(a.width&&a.height){c.call(d,a.width,a.height,f);return}}}else a instanceof(g||(g=b("URI")))&&(f=a.toString());if(!f){c(0,0,a);return}a=document.createElement("img");a.onreadystatechange=j;a.onload=i;a.onerror=k;a._callback=c;a._thisObj=d;a._srcStr=f;b("EncryptedImg").isEncrypted(f)?b("EncryptedImg").insertIntoDOM(f,a):a.src=f;a.style.cssText="\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  ".replace(/\s+/," ");e.insertBefore(a,e.firstChild)}e.exports=l}),null);
__d("CachedDOMImageSizePool",["debounce","getDOMImageSize"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){this.$1={},this.$2=c,this.$3=0,this.$4=a,this.$5=b("debounce")(this.$6,5e3,this),this.$7={},this.$8={}}var c=a.prototype;c.get=function(a,c,d){if(!a){c.call(d,0,0,a);return}var e=this.$1[a];e?(e.lastAccessTime=Date.now(),c.call(d,e.width,e.height,e.src)):this.$7[a]?(this.$7[a].push(c),this.$8[a].push(d)):(this.$7[a]=[c],this.$8[a]=[d],b("getDOMImageSize")(a,this.$9,this))};c.set=function(a,b,c){this.$3>this.$4&&this.$5();var d=this.$1;if(a&&!d[a]){b={width:b,height:c,src:a,lastAccessTime:Date.now()};d[a]=b;this.$3++}};c.$9=function(a,b,c){this.set(c,a,b);var d=this.$7[c],e=this.$8[c];for(var f=0,g=d.length;f<g;f++)d[f].call(e[f],a,b,c);delete this.$7[c];delete this.$8[c]};c.$6=function(){var a=Date.now(),b=this.$1,c=this.$3,d=this.$2;for(var e in b){var f=b[e];a-f.lastAccessTime>d&&(delete b[e],c--)}this.$3=c};return a}();e.exports=a}),null);
__d("ImagePositioner.react",["React","clamp"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props.width,c=this.props.height,d,e;switch(this.props.backgroundSize){case"cover":d="cover";e=!1;break;case"coverinside":d="cover";e=!0;break;case"contain":d="contain";e=!1;break;case"containinside":d="contain";e=!0;break;case"fitWidth":d="fitWidth";e=!0;break}var f=this.props.imageWidth,g=this.props.imageHeight,h=a/c,i=f/g;d==="contain"&&((f>a||!e)&&i>=h?(f=a,g=f/i):(g>c||!e)&&(g=c,f=g*i));d=="fitWidth"&&(f=a,g=a/i);d==="cover"&&((f>a||!e)&&i>=h?(g=c,f=g*i):(g>c||!e)&&(f=a,g=f/i));h=this.$1(f,g);c=this.props.children(h);return c&&b("React").Children.only(c)};d.$1=function(a,b){var c=["50%","50%"],d=this.$2;this.props.backgroundPosition?c=this.props.backgroundPosition.split(" "):this.props.backgroundFocus&&(c=this.props.backgroundFocus.split(" "),d=this.$3);return{width:Math.round(a)+"px",height:Math.round(b)+"px",left:d(c[0],a,this.props.width),top:d(c[1]||c[0],b,this.props.height)}};d.$2=function(a,b,c){var d=parseFloat(a),e=a.substr(d.toString().length);return e==="px"?a:Math.round((c-b)*(d/100))+"px"};d.$3=function(a,c,d){var e=parseFloat(a);a=a.substr(e.toString().length);if(c<d)return"0";a=a==="px"?e:Math.round(c*(e/100));e=a-d/2;e=b("clamp")(e,0,c-d);return-e+"px"};return c}(b("React").PureComponent);a.defaultProps={backgroundSize:"contain"};e.exports=a}),null);
__d("BackgroundImage.react",["cx","invariant","CachedDOMImageSizePool","Image.react","ImagePositioner.react","React","XUISpinner.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();a="(-?(\\d+\\.)?\\d+(px|\\%))";var i=new RegExp("^"+a+"?(\\s"+a+")?$","g"),j=new(b("CachedDOMImageSizePool"))(50,10*60*1e3);d=b("React").createClass({displayName:"BackgroundImage",propTypes:{alt:(c=b("prop-types")).string,children:c.node,className:c.string,src:c.string,width:c.number.isRequired,height:c.number.isRequired,backgroundSize:c.oneOf(["contain","cover","containinside","coverinside","fitWidth"]),cropTransform:c.object,loadingIndicatorStyle:c.oneOf(["none","large","small"]),backgroundPosition:function(a,b,c){c=a[b];c&&(typeof c==="string"||h(0,4499,c),c.match(i)||h(0,4500,c));a.backgroundFocus==null||a.backgroundPosition==null||h(0,4501)},backgroundFocus:function(a,b,c){c=a[b];c&&(typeof c==="string"||h(0,4502,c),c.match(i)||h(0,4503,c));a.backgroundFocus==null||a.backgroundPosition==null||h(0,4501)},onImageLoad:c.func,optimizeResizeSpeed:c.bool,onContextMenu:c.func},getInitialState:function(){return{imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:!0}},getDefaultProps:function(){return{optimizeResizeSpeed:!1,loadingIndicatorStyle:"none"}},componentDidMount:function(){this._resolveImageSize()},componentDidUpdate:function(a){this.props.src!==this.state.imageSrc&&this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:!0},this._resolveImageSize)},_resolveImageSize:function(){var a=this.state.imageSrc;a&&j.get(a,this._onImageSizeResolved,this)},render:function(){var a={width:this.props.width+"px",height:this.props.height+"px"},c=b("joinClasses")(this.props.className,"_5f0d");return b("React").jsxs("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),style:babelHelpers["extends"]({},this.props.style||{},a),onContextMenu:this.props.onContextMenu,children:[this._renderImage(),this._renderContent(),this._renderLoadingIndicator()]}))},_renderLoadingIndicator:function(){return!this.state.loading||this.props.loadingIndicatorStyle==="none"?null:b("React").jsx("div",{className:"_1qe- _5lar",children:b("React").jsx("div",{className:"_1qe_",children:b("React").jsx("div",{className:"_1qf0",children:b("React").jsx(b("XUISpinner.react"),{size:this.props.loadingIndicatorStyle})})})})},_renderContent:function(){if(this.props.children)return b("React").jsx("div",{className:"_1qe-",children:b("React").jsx("div",{className:"_1qe_",children:b("React").jsx("div",{className:"_1qf0",children:this.props.children})})})},_renderImage:function(){var a=this;return!this.state.imageWidth||!this.state.imageHeight?null:b("React").jsx(b("ImagePositioner.react"),{imageWidth:this.state.imageWidth,imageHeight:this.state.imageHeight,width:this.props.width,height:this.props.height,backgroundPosition:this.props.backgroundPosition,backgroundSize:this.props.backgroundSize,backgroundFocus:this.props.backgroundFocus,children:function(c){var d=c.width,e=c.height,f=c.left;c=c.top;return b("React").jsx(b("Image.react"),{alt:a.props.alt,className:"_5i4g"+(a.props.optimizeResizeSpeed?" _5sjv":""),style:babelHelpers["extends"]({width:d,height:e,left:f,top:c},a.props.cropTransform),src:a.state.imageSrc})}})},_onImageSizeResolved:function(a,b,c){if(!this.isMounted()||this.state.imageSrc!==c)return;c=this.props.onImageLoad?this.props.onImageLoad.bind(null,a,b):void 0;this.setState({imageWidth:a,imageHeight:b,loading:!1},c)}});e.exports=d}),null);
__d("ScaledImage.react",["cx","Image.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.height,e=a.imageSize,f=a.width;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","height","imageSize","width"]);var g={height:d,width:f},h=e.width/e.height,i=f/d;if(h>i){h=d/e.height;i=e.width*h;h={height:d,left:-Math.floor((i-f)/2),width:i}}else{i=f/e.width;e=e.height*i;h={height:e,top:-Math.floor((e-d)/2),width:f}}return b("React").jsx("div",{className:b("joinClasses")(c,"uiScaledImageContainer"),style:g,children:b("React").jsx(b("Image.react"),babelHelpers["extends"]({style:h},a))})};return c}(b("React").Component);a.propTypes={height:(c=b("prop-types")).number.isRequired,imageSize:c.shape({height:c.number.isRequired,width:c.number.isRequired}).isRequired,width:c.number.isRequired};e.exports=a}),null);
__d("FBCircularGlyph.react",["cx","Image.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c=this.props,d=c.circleSize,e=c.glyph,f=c.glyphSize;c=babelHelpers.objectWithoutPropertiesLoose(c,["circleSize","glyph","glyphSize"]);return(a=b("React")).jsx("div",babelHelpers["extends"]({},c,{className:b("joinClasses")("_32qy",c.className),style:babelHelpers["extends"]({width:d,height:d},c.style),children:a.jsx("div",{className:"_32qz",children:a.jsx("div",{className:"_32q-",children:a.jsx(b("Image.react"),{src:e,width:f,height:f})})})}))};return c}(b("React").Component);a.propTypes={circleSize:(c=b("prop-types")).number,glyph:c.oneOfType([c.object,c.string])};e.exports=a}),null);
__d("BUIComponent",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").Component;c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("BUIProgressBar.react",["cx","BUIComponent","ErrorMarker.react","Image.react","LoadingMarker.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=248;a={background:"default",isBuffering:!1,isSuccess:!1,isError:!1,height:"medium",width:h,color:"blue",flexibleWidth:!1,padding:!0,representsWait:!0,isComplete:!1,useAltCompleteVisuals:!0};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$BUIProgressBar3=function(){if(c.props.flexibleWidth)return{width:"100%"};var a=+c.props.width;return{width:(a>h?h:a)+"px"}},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$BUIProgressBar1=function(){if(!this.props.icon&&!this.props.message)return null;var a;this.props.icon&&(a=b("React").jsx(b("Image.react"),{className:"__q1",src:this.props.icon}));return b("React").jsxs("div",{className:"__q2","data-testid":this.props.dataTestId,children:[a,this.props.message]})};d.$BUIProgressBar2=function(){var a=this.props.background;if(this.props.isBuffering)return b("React").jsx("div",{className:"__q3",style:{width:"100%"}});var c=this.props.percentage||0;c<0&&(c=0);c>100&&(c=100);return b("React").jsx("div",{className:"_65ab"+(a==="default"?" __q6":"")+(a==="transparent"?" _65ac":""),children:b("React").jsx("div",{className:"__q7",style:{width:c+"%"}})})};d.render=function(){var a=b("joinClasses")("__qa"+(this.props.isComplete===!0?" __qb":"")+(this.props.isComplete===!0&&this.props.useAltCompleteVisuals?" _6age":"")+(this.props.isError===!0?" __qc":"")+(this.props.height==="small"?" _2tr-":"")+(this.props.color==="gray"?" _2tr_":"")+(this.props.padding===!0?" _2m-z":""),this.props.className);a=b("React").jsxs("div",{className:a,style:this.$BUIProgressBar3(),children:[this.$BUIProgressBar2(),this.$BUIProgressBar1()]});this.props.representsWait&&!this.props.isComplete&&(a=b("React").jsx(b("LoadingMarker.react"),{children:a}));this.props.isError&&(a=b("React").jsx(b("ErrorMarker.react"),{children:a}));return a};return c}(b("BUIComponent"));c.propTypes={background:(d=b("prop-types")).oneOf(["default","transparent"]),dataTestId:d.string,icon:d.object,isBuffering:d.bool,isError:d.bool,isSuccess:d.bool,message:d.node,percentage:d.number,height:d.oneOf(["small","medium"]),width:d.number,color:d.oneOf(["gray","blue"]),flexibleWidth:d.bool,padding:d.bool,representsWait:d.bool,isComplete:d.bool,useAltCompleteVisuals:d.bool};c.defaultProps=a;e.exports=c}),null);
__d("AbstractActionList.react",["React","ReactFragment"],(function(a,b,c,d,e,f){__p&&__p();var g=b("React").jsx("span",{"aria-hidden":"true",children:" \xb7 "});a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!0,c=b("React").Children.map(this.props.children,function(c){if(!c)return c;if(a){a=!1;return c}return b("ReactFragment").create({BULLET:g,child:c})});return b("React").jsx("div",babelHelpers["extends"]({},this.props,{children:c}))};return c}(b("React").Component);e.exports=a}),null);
__d("ActionList.react",["AbstractActionList.react","React","joinClasses"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("AbstractActionList.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"fsm fwn fcg"),children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("MenuSeparator.react",["MenuSeparator"],(function(a,b,c,d,e,f){function a(a){a.isReactLegacyFactory={},a.type=a}c=b("MenuSeparator");a(c);e.exports=c}),null);
__d("ScrollableArea.react",["cx","Bootloader","React","ReactDOM","ScrollBoundaryContain","Style","SubscriptionsHandler","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="uiScrollableArea native",i="uiScrollableAreaWrap scrollable",j="uiScrollableAreaBody",k="uiScrollableAreaContent";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$4=function(a){if(d.$2)return;d.$1=a.fromNative(b("ReactDOM").findDOMNode(d.refs.root),{fade:d.props.fade,persistent:d.props.persistent,shadow:d.props.shadow===void 0?!0:d.props.shadow,tabIndex:d.props.tabIndex});d.$5();(d.props.onScroll||d.props.onEndReached||d.props.onTopReached)&&d.$1&&d.$1.subscribe("scroll",d.$6)};d.$6=function(){d.props.onScroll&&d.props.onScroll(),d.$1&&d.$1.isScrolledToBottom()?d.props.onEndReached&&d.props.onEndReached():d.$1&&d.$1.isScrolledToTop()&&(d.props.onTopReached&&d.props.onTopReached())};d.$3=new(b("SubscriptionsHandler"))();return d}var d=c.prototype;d.render=function(){var a={height:this.props.height},c=Object.assign({},this.props);delete c.maxHeight;delete c.fade;delete c.persistent;delete c.contain;return b("React").jsx("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,h),ref:"root",role:this.props.role,style:babelHelpers["extends"]({},this.props.style||{},a),children:b("React").jsx("div",{className:i,ref:"wrap",role:this.props.role,style:{maxHeight:this.props.maxHeight},children:b("React").jsx("div",{className:j,ref:"body",role:this.props.role,children:b("React").jsx("div",{className:k,role:this.props.contentRole||this.props.role,children:this.props.children})})})}))};d.getArea=function(){return this.$1};d.componentDidMount=function(){var a=b("Bootloader").loadModules(["ScrollableArea"],this.$4,"ScrollableArea.react");this.$3.addSubscriptions(a);a=b("ReactDOM").findDOMNode(this.refs.wrap);if(a&&this.props.contain){a=b("ScrollBoundaryContain").applyToElem(a);a&&this.$3.addSubscriptions(a)}};d.componentDidUpdate=function(a){a.width!==this.props.width&&this.$5();a=this.getArea();a&&a.throttledAdjustGripper()};d.componentWillUnmount=function(){this.$1&&this.$1.destroy(),this.$2=!0,this.$3.release()};d.$5=function(){var a=b("ReactDOM").findDOMNode(this.refs.body);b("Style").set(a,"width",this.props.width+"px")};return c}(b("React").Component);a.propTypes={width:(c=b("prop-types")).number,height:c.oneOfType([c.number,c.string]),maxHeight:c.oneOfType([c.number,c.string]),onScroll:c.func,onEndReached:c.func,onTopReached:c.func,shadow:c.bool,fade:c.bool,persistent:c.bool,role:c.string,contentRole:c.string,contain:c.bool};a.defaultProps={contain:!0};e.exports=a}),null);
__d("XUICardSection.react",["cx","React","XUIBlock","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;a.background;var c=a.children,d=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["background","children","className"]);d=b("joinClasses")(d,"_4-u3",b("XUIBlock").getBackgroundClass(this.props));return b("React").jsx("div",babelHelpers["extends"]({},a,{className:d,children:c}))};return c}(b("React").Component);a.propTypes=b("XUIBlock").propTypes;a.defaultProps=b("XUIBlock").getDefaultProps();e.exports=a}),null);
__d("SUIFocusUtil",["Focus","VirtualCursorStatus"],(function(a,b,c,d,e,f){"use strict";a={setFocus:function(a){b("VirtualCursorStatus"),b("Focus").set(a)}};e.exports=a}),null);
__d("SUISpinnerTestSlow.react",["cx","fbt","LoadingMarker.react","React","SUIComponent","SUITheme","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=Math.PI;a=.75;var j=1.5;c={arcSpread:a,background:"light",size:"large"};d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$SUISpinner3=function(a){c.$SUISpinner1=a},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$SUISpinner2()};d.componentDidUpdate=function(){this.$SUISpinner2()};d.$SUISpinner2=function(){__p&&__p();var a=this.$SUISpinner1,c=a&&a.getContext("2d");if(!a||!c)return;var d=b("SUITheme").get(this).SUISpinner,e=d.sizes[this.props.size],f=e.border;e=e.diameter;var g=window.devicePixelRatio||1,h=this.props.background==="dark",k=h?d.darkActiveColor:d.activeColor;h=h?d.darkBackgroundColor:d.backgroundColor;d=e/2*g;e=f*g;f=(d+e)*2;a.height=a.width=f;a.style.width=a.style.height=f/g+"px";c.lineCap="round";c.lineWidth=e;a=f/2;c.beginPath();c.arc(a,a,d,0,2*i);c.strokeStyle=h;c.stroke();c.beginPath();c.arc(a,a,d,j*i,(j+this.props.arcSpread)%2*i);c.strokeStyle=k;c.stroke()};d.render=function(){var a=this.props.animationDuration,c=b("SUITheme").get(this).SUISpinner;c=c.sizes[this.props.size];var d=c.border;c=c.diameter;c=c+d*2;d={};a!==void 0&&(d.style={animationDuration:a+"ms"});return b("React").jsx(b("LoadingMarker.react"),{children:b("React").jsx("span",{"aria-busy":!0,"aria-valuemax":360,"aria-valuemin":0,"aria-valuetext":h._("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),className:b("joinClasses")("_4cgy",this.props.className,this.props.margin),"data-testid":this.props["data-testid"],role:"progressbar",style:babelHelpers["extends"]({},this.props.style,{height:c,width:c}),children:b("React").jsx("canvas",babelHelpers["extends"]({className:"_1lid",ref:this.$SUISpinner3},d))})})};return c}(b("SUIComponent"));d.propTypes={background:(f=b("prop-types")).oneOf(["dark","light"]).isRequired,className:f.string,margin:f.string,size:f.oneOf(["large","small"]).isRequired,theme:f.instanceOf(b("SUITheme"))};d.defaultProps=c;e.exports=d}),null);
__d("LayerFitHeightToScreen",["DOMVector","Event","Style","SubscriptionsHandler","Vector","debounce"],(function(a,b,c,d,e,f){__p&&__p();var g=12;a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;this.$3=function(){__p&&__p();var a=c.$1.getContent();for(var d=0;d<2;d++)a&&(a=a.children[0]);if(!a)return;d=b("Vector").getElementPosition(a).y;var e=b("Vector").getViewportDimensions().y,f=b("DOMVector").getScrollPosition().y;e=e-(d-f)-g;b("Style").apply(a,{maxHeight:e+"px",overflowX:"hidden",overflowY:"auto"});c.$1.inform("resize",{height:e})};this.$1=a;this.$2=null}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("Event").listen(window,"resize",b("debounce")(this.$3)),this.$1.subscribe("show",this.$3),this.$1.subscribe("reposition",this.$3))};c.disable=function(){this.$2&&(this.$2.release(),this.$2=null)};return a}();e.exports=a}),null);
__d("FBOverlayElement.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();var h={horizontal:{left:"_32rg",right:"_32rh",fit:"_32rg _32rh",center:"_1cy5"},vertical:{top:"_32ri",bottom:"_32rj",fit:"_32ri _32rj",middle:"_1cy6"}};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").Children.only(this.props.children),c=b("joinClasses")(a.props.className,"_32rk",h.horizontal[this.props.horizontal],h.vertical[this.props.vertical]);return b("React").cloneElement(a,{className:c})};return c}(b("React").PureComponent);a.propTypes={horizontal:b("prop-types").oneOf(["left","right","fit","center"]),vertical:b("prop-types").oneOf(["top","bottom","fit","middle"])};a.defaultProps={horizontal:"fit",vertical:"fit"};e.exports=a}),null);
__d("AbstractCheckboxInput.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("React").createRef(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.useLabel,e=a["data-testid"];a=babelHelpers.objectWithoutPropertiesLoose(a,["className","useLabel","data-testid"]);return!d?b("React").jsx("input",babelHelpers["extends"]({},a,{"data-testid":e,className:c,ref:this.$1,type:"checkbox"})):b("React").jsxs("label",{className:b("joinClasses")(c,"_kv1"),"data-testid":e,children:[b("React").jsx("input",babelHelpers["extends"]({},a,{className:null,ref:this.$1,type:"checkbox"})),b("React").jsx("span",{className:"_66ul","data-hover":this.props.tooltip!=null?"tooltip":null,"data-tooltip-content":this.props.tooltip})]})};d.focusInput=function(){this.$1.current&&this.$1.current.focus()};d.blurInput=function(){this.$1.current&&this.$1.current.blur()};d.setIndeterminate=function(){this.$1.current&&(this.$1.current.indeterminate=!0)};d.isIndeterminate=function(){return this.$1.current?this.$1.current.indeterminate:!1};return c}(b("React").Component);a.defaultProps={useLabel:!0};e.exports=a}),null);
__d("FBToggleSwitch.react",["cx","AbstractCheckboxInput.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onToggle&&c.props.disabled!==!0&&c.props.onToggle(a.target.checked)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a="_ypo"+(this.props.animate?" _ypp":"")+(this.props.disabled?" _ypq":"")+(this.props.size==="large"?" _1dfi":""),c,d;this.props.indeterminate===!0?d=this.props.checked:c=this.props.checked;return b("React").jsx(b("AbstractCheckboxInput.react"),babelHelpers["extends"]({},this.props,{checked:c,className:b("joinClasses")(this.props.className,a),defaultChecked:d,onChange:this.$1,children:void 0}))};return c}(b("React").Component);a.propTypes={animate:(c=b("prop-types")).bool,indeterminate:c.bool,onToggle:c.func,disabled:c.bool,tooltip:c.oneOfType([c.node,c.string]),size:c.oneOf(["normal","large"])};e.exports=a}),null);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g={isSupported:function(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")},copy:function(a,c){__p&&__p();c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d},copyAsync:function(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g.copy(a)?b("Promise").resolve():b("Promise").reject()}};e.exports=g}),null);
__d("LayoutColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return b("React").jsx("div",babelHelpers["extends"]({ref:c},a,{className:b("joinClasses")(d,"_4bl7"),children:e}))}e.exports=b("React").forwardRef(a)}),null);
__d("LayoutFillColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return b("React").jsx("div",babelHelpers["extends"]({ref:c},a,{className:b("joinClasses")(d,"_4bl9"),children:e}))}e.exports=b("React").forwardRef(a)}),null);
__d("Layout.react",["cx","LayoutColumn.react","LayoutFillColumn.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!1,d=!1,e=this.props,f=e.children,g=e.className;e=babelHelpers.objectWithoutPropertiesLoose(e,["children","className"]);b("React").Children.forEach(f,function(b){if(!b)return;b.type===c.FillColumn?d=!0:d&&(a=!0)});return b("React").jsx("div",babelHelpers["extends"]({},e,{className:b("joinClasses")(g,a?"_5aj7":"clearfix _ikh"),children:f}))};return c}(b("React").Component);a.Column=b("LayoutColumn.react");a.FillColumn=b("LayoutFillColumn.react");e.exports=a}),null);
__d("List.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.className,d=a.border,e=a.direction,f=a.spacing,g=a.valign,h=a.edgepadding;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","border","direction","spacing","valign","edgepadding"]);e==="vertical"&&(g=null);e=(e==="vertical"?"_4kg":"")+(e==="horizontal"?" _4ki":"")+(g==="top"?" _509-":"")+(g==="middle"?" _509_":"")+(g==="bottom"?" _50a0":"");var i;(f!=="none"||d!=="none")&&(i=(d==="none"?"_6-i":"")+(d==="light"?" _4ks":"")+(d==="medium"?" _4kt":"")+(d==="dark"?" _4ku":""));var j;f!=="none"&&(j=(h?"":"_6-h")+(f==="small"?" _704":"")+(f==="medium"?" _6-j":"")+(f==="large"?" _703":""));c=b("joinClasses")(c,"uiList",e,i,j);return b("React").jsx("ul",babelHelpers["extends"]({className:c},a))};return c}(b("React").Component);a.propTypes={border:(c=b("prop-types")).oneOf(["none","light","medium","dark"]),spacing:c.oneOf(["none","small","medium","large"]),direction:c.oneOf(["vertical","horizontal"]),valign:c.oneOf(["baseline","top","middle","bottom"]),edgepadding:c.bool};a.defaultProps={border:"medium",spacing:"medium",direction:"vertical",valign:"top",edgepadding:!1};e.exports=a}),null);
__d("xuiglyph",[],(function(a,b,c,d,e,f){e.exports=function(a){throw new Error("xuiglyph: Unexpected xuiglyph call.")}}),null);
__d("TypeaheadView.react",["cx","React","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.extraRendererProps,d=a.isVisible,e=a.Renderer,f=a.onMouseDown;a=babelHelpers.objectWithoutPropertiesLoose(a,["extraRendererProps","isVisible","Renderer","onMouseDown"]);return b("React").jsx("div",{className:(d?"":"typeaheadViewHidden")+" _7729",onMouseDown:f,children:e?b("React").jsx(e,babelHelpers["extends"]({},a,c)):null})};return c}(b("React").Component);a.propTypes={entries:(c=b("prop-types")).array.isRequired,extraRendererProps:c.object,highlightedEntry:c.object,isVisible:c.bool,queryString:c.string,Renderer:c.func,selectedEntry:c.object};e.exports=a}),null);
__d("TypeaheadViewPropTypes",["React","prop-types"],(function(a,b,c,d,e,f){"use strict";c={controlleeID:(a=b("prop-types")).string,highlightedEntry:a.object,entries:a.array.isRequired,onSelect:a.func.isRequired,onHighlight:a.func,onRenderHighlight:a.func,role:a.string,scrolled:a.bool};e.exports=c}),null);