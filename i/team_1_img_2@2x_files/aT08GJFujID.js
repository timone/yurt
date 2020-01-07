if (self.CavalryLogger) { CavalryLogger.start_js(["R4K0F"]); }

__d("XFeedSeeFirstNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","MenuStaticItem","QE2Logger","Run","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=1,j="live_notifs",k={follow:0,see_first:0,see_more:0,highlights_only:0,subscribe_all_live_notifications:j,subscribe_suggested_live_notifications:j,subscribe_none_live_notifications:j};a=function(){"use strict";__p&&__p();function a(a,c,d,e,f){__p&&__p();var g=this;this.$1=c;this.$2=d;this.$3=f;this.$4=e;this.$5=a;this.$6=null;this.$7=new(b("SubscriptionsHandler"))();this.$5.getPopover().subscribe("show",function(){b("QE2Logger").logExposureForUser("feed_control_highlight_only")});this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();a==="unfollow"?(b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$3.id}),b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,{profile_id:this.$3.id}),this.$4&&this.$4.hide(),this.$5.getPopover().hideLayer()):(this.setSelected(a),a==="see_first"?(this.$4&&(this.$4.hide(),this.logNux("see_first_selected")),b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!0,see_more:!1,highlights_only:!1})):a==="see_more"?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!0,highlights_only:!1}):a==="highlights_only"?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!0}):b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!1}))}.bind(this));this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,b){if(g.$3.id!==b.profile_id)return;b.see_first?g.setSelected("see_first"):b.see_more?g.setSelected("see_more"):b.highlights_only?g.setSelected("highlights_only"):g.setSelected("follow")}));this.$7.addSubscriptions(b("Arbiter").subscribe("revert",this.handleResponse.bind(this)));this.$4&&(this.$4.show(),this.logNux("imp"),this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(),"._50zy"),"click",this.logNux.bind(this,"xout"))));b("Run").onLeave(this.cleanUp.bind(this))}var c=a.prototype;c.logNux=function(a){var c=b("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setData({event:a,id:this.$3.id}).send()};c.getButtons=function(){return b("DOM").scry(this.$1,"._3oz-")};c.getSelected=function(){var a=this.getButtons(),c=null;a.forEach(function(a){var d=a.getAttribute("data-status");b("CSS").matchesSelector(a,"._52-0")&&(c=d)});return c};c.setSelected=function(a){__p&&__p();this.$6=this.getSelected();var c=this.getButtons(),d=k[a];c.forEach(function(c){if(d===j)return;var e=c.getAttribute("data-status");e===a?b("CSS").addClass(c,"_52-0"):b("CSS").removeClass(c,"_52-0")});this.$2.forEachItem(function(c){if(!c.getValue)return;var e=c.getValue(),f=k[e];if(e==="unfollow")return;c=c.getRoot();e===a?b("CSS").addClass(c,"_52-0"):f===d&&b("CSS").removeClass(c,"_52-0")})};c.handleResponse=function(a,b){if(b.id!==this.$3.id||b.location!==i)return;a==="revert"&&this.revert()};c.revert=function(){if(this.$6===null)return;this.setSelected(this.$6)};c.cleanUp=function(){this.$7&&this.$7.release(),this.$7=null,this.$1=null,this.$2=null,this.$3=null};return a}();e.exports=a}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c._onMenuDone=function(a){};return b}(b("PopoverMenu"));e.exports=a}),null);
__d("ProfileEngagementTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setBrowseSessionID=function(a){this.$1.browse_session_id=a;return this};c.setContentID=function(a){this.$1.content_id=a;return this};c.setEngagementType=function(a){this.$1.engagement_type=a;return this};c.setEventMetadata=function(a){this.$1.event_metadata=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setIsemployee=function(a){this.$1.isemployee=a;return this};c.setItemSubtype=function(a){this.$1.item_subtype=a;return this};c.setItemType=function(a){this.$1.item_type=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setProductBucket=function(a){this.$1.product_bucket=a;return this};c.setProfileIDDummy=function(a){this.$1.profile_id_dummy=a;return this};c.setProfileSessionID=function(a){this.$1.profile_session_id=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setSubsurface=function(a){this.$1.subsurface=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTabName=function(a){this.$1.tab_name=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={appid:!0,appversion:!0,browse_session_id:!0,content_id:!0,engagement_type:!0,event_metadata:!0,isemployee:!0,item_subtype:!0,item_type:!0,name:!0,product_bucket:!0,profile_id_dummy:!0,profile_session_id:!0,sessionid:!0,subsurface:!0,surface:!0,tab_name:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ProfileTimelineUITypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventMetadata=function(a){this.$1.event_metadata=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setProfileID=function(a){this.$1.profile_id=a;return this};c.setRelationshipType=function(a){this.$1.relationship_type=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUIComponent=function(a){this.$1.ui_component=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,event_metadata:!0,profile_id:!0,relationship_type:!0,time:!0,ui_component:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("DoublyLinkedListMap",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this._head=null,this._tail=null,this._nodes={},this._nodeCount=0}var b=a.prototype;b.get=function(a){a=(a=this._nodes[a])!=null?a.data:a;return a?a:null};b.getIndex=function(a){var b=this._head;for(var c=0;b;b=b.next,c++)if(b.key===a)return c;return null};b._insert=function(a,b,c,d){c&&!this._nodes[c]&&(c=null);c&&this._nodes[c]?c=this._nodes[c]:c=d?this._head:this._tail;b={data:b,key:a,next:null,prev:null};c&&(this.remove(a),d?(b.prev=c.prev,c.prev&&(c.prev.next=b),c.prev=b,b.next=c):(b.next=c.next,c.next&&(c.next.prev=b),c.next=b,b.prev=c));b.prev===null&&(this._head=b);b.next===null&&(this._tail=b);this._nodes[a]=b;this._nodeCount++;return this};b.insertBefore=function(a,b,c){return this._insert(a,b,c,!0)};b.insertAfter=function(a,b,c){return this._insert(a,b,c,!1)};b.prepend=function(a,b){return this.insertBefore(a,b,this._head&&this._head.key)};b.append=function(a,b){return this.insertAfter(a,b,this._tail&&this._tail.key)};b.remove=function(a){__p&&__p();var b=this._nodes[a];if(b){var c=b.next,d=b.prev;c&&(c.prev=d);d&&(d.next=c);this._head===b&&(this._head=c);this._tail===b&&(this._tail=d);delete this._nodes[a];this._nodeCount--}return this};b.find=function(a){for(var b=this._head;b;b=b.next)if(a(b.data))return b.key;return null};b.reduce=function(a,b){for(var c=this._head;c;c=c.next)b=a(c.data,b);return b};b.exists=function(a){return!!this._nodes[a]};b.isEmpty=function(){return!this._head};b.reset=function(){this._head=null,this._tail=null,this._nodes={},this._nodeCount=0};b.map=function(a){for(var b=this._head;b;b=b.next)a(b.data)};b.getCount=function(){return this._nodeCount};b.getHead=function(){var a;return(a=this._head)!=null?a.data:a};b.getTail=function(){var a;return(a=this._tail)!=null?a.data:a};b.getNext=function(a){return(a=this._nodes[a])!=null?(a=a.next)!=null?a.data:a:a};b.getPrev=function(a){return(a=this._nodes[a])!=null?(a=a.prev)!=null?a.data:a:a};b.getHeadKey=function(){var a;return(a=this._head)!=null?a.key:a};b.getTailKey=function(){var a;return(a=this._tail)!=null?a.key:a};return a}();e.exports=a}),null);
__d("ProfileOverviewSection",["CallbackDependencyManager","DOMScroll","DoublyLinkedListMap","TidyArbiterMixin","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=new(b("CallbackDependencyManager"))(),i={};a=function(){"use strict";__p&&__p();function a(a,c,d){this.id=a,this.label=d,this.nodeID=c,this._isLoaded=!1,this._parentSection=null,this.childSections=new(b("DoublyLinkedListMap"))(),i[a]=this,window.setTimeout(function(){return h.satisfyPersistentDependency(a)},0)}var c=a.prototype;c.reset=function(){this.childSections.map(function(a){return a.reset()})};c.appendSection=function(a){this.childSections.append(a.id,a),a._parentSection=this};c.freeze=function(){this.freezeChildren()};c.freezeChildren=function(){var a=this.childSections.getHead();while(a)a.isActive()||a.freeze(),a=a.getNext()};c.getParent=function(){return this._parentSection};c.getChildren=function(){return this.childSections};c.getNext=function(){return this._parentSection&&this._parentSection.childSections.getNext(this.id)};c.getPrev=function(){return this._parentSection&&this._parentSection.childSections.getPrev(this.id)};c.isActive=function(){var a=this;while(a){if(a.id===g)return!0;a=a._parentSection}return!1};c.isLoaded=function(){return this._isLoaded};c.setIsLoaded=function(a){this._isLoaded=a;return this};c.scrollTo=function(){if(!b("ge")(this.nodeID))return;b("DOMScroll").scrollTo(this.getNode(),!0,!1,0,0,b("DOMScroll").scrollTo.bind(this).bind(null,this.getNode(),0))};c.thaw=function(){this.thawChildren()};c.thawChildren=function(){var a=this.childSections.getHead();while(a)a.thaw(),a=a.getNext()};c.getNode=function(){throw new Error("This function needs to be implemented in children.")};a.callWithSection=function(a,b){h.registerCallback(function(){b(i[a])},[a])};a.setActiveSectionID=function(a){g=a};a.resetGlobalState=function(){g=null,h=new(b("CallbackDependencyManager"))(),i={}};return a}();Object.assign(a,b("TidyArbiterMixin"));e.exports=a}),null);
__d("ProfileTabUtils",["ProfileTabConst"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a===null||a===void 0||a===b("ProfileTabConst").TIMELINE||a===b("ProfileTabConst").WALL}var h={isActivityLogTab:function(a){return a===b("ProfileTabConst").ALL_ACTIVITY||a===b("ProfileTabConst").APPROVAL},isTimelineOverviewTab:function(a){return a===b("ProfileTabConst").TIMELINE_OVERVIEW},isOverviewTab:function(a){return a===b("ProfileTabConst").INFO||a===b("ProfileTabConst").OVERVIEW},isTimelineTab:g,isMapTab:function(a){return a===b("ProfileTabConst").MAP},tabHasFixedAds:function(a){return!0},tabHasScrubber:function(a){return h.isActivityLogTab(a)},tabHasStickyHeader:function(a){return g(a)||h.isTimelineOverviewTab(a)},getIDForCollectionToken:function(a){return"pagelet_timeline_app_collection_"+a},getIDForSectionKey:function(a){return"pagelet_timeline_medley_"+a},isMedleyTab:function(a){return!h.isTimelineTab(a)&&!h.isTimelineOverviewTab(a)},normalizeTabKey:function(a){return h.isTimelineTab(a)?b("ProfileTabConst").TIMELINE:a},getIDForTabKey:function(a){if(h.isTimelineTab(a))return"timeline_tab_content";return h.isTimelineOverviewTab(a)?"timeline_overview":"timeline-medley"},getPageletForTabKey:function(a){if(h.isTimelineTab(a))return"TimelineJumperColumn";return h.isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}};e.exports=h}),null);
__d("TimelineComponentKeys",[],(function(a,b,c,d,e,f){a={CONTENT:"content",ESCAPE_HATCH:"escape_hatch",OVERVIEW_CONTAINER:"overview_container",NAV:"nav",SCRUBBER:"scrubber",STICKY_HEADER:"sticky_header",STICKY_HEADER_NAV:"sticky_header_nav",STICKY_HEADER_VIEW_SWITCHER:"sticky_header_view_switcher"};e.exports=a}),null);
__d("TimelineConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({DS_LOADED:"timeline-capsule-loaded",DS_COLUMN_HEIGHT_DIFFERENTIAL:"timeline-column-diff-height",SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:"TimelineConstants/sectionExpand",SECTION_LOADING:"TimelineConstants/sectionLoading",SECTION_LOADED:"TimelineConstants/sectionLoaded",SECTION_FULLY_LOADED:"TimelineConstants/sectionFullyLoaded",SECTION_REGISTERED:"TimelineConstants/sectionRegistered",UNIT_SEGMENT_LOADED:"TimelineConstants/unitSegmentLoaded"});e.exports=a}),null);
__d("findTag",["ErrorSerializer","TAALOpcodes","$"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c){__p&&__p();var d=b("$")(a);if(!c){if(d instanceof HTMLElement)return d;throw new Error(b("ErrorSerializer").stringify({message:'Element with ID "%s" is not an HTMLElement',params:[a],taalOpcodes:[b("TAALOpcodes").PREVIOUS_FILE]}))}var e=d.tagName.toLowerCase();if(e!==c)throw new Error(b("ErrorSerializer").stringify({message:"Expected $('%s') to be of type '%s' but got '%s' instead.",params:[a,c,e],taalOpcodes:[b("TAALOpcodes").PREVIOUS_FILE]}));return d};e.exports=a}),null);
__d("TimelineController",["Arbiter","BlueBar","CSS","DataStore","Event","ProfileTabConst","ProfileTabUtils","Run","TidyArbiter","TimelineComponentKeys","TimelineConstants","UITinyViewportAction","URI","Vector","findTag","forEachObject","ge","queryThenMutateDOM","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g,h=740,i="top",j="paddingTop",k="paddingTop",l=null,m=!1,n=null,o=null,p={},q={},r=null,s=[],t=null,u=null;b("Vector").getViewportDimensions();var v=!1,w=!1,x=!1;function y(a,b,c){c===void 0&&(c=[]);if(p[a])return p[a][b].apply(p[a],c);q[a]=q[a]||{};q[a][b]=c;return!1}function z(){v&&(v=D(b("ge")("rightCol"),k,J.getCurrentScrubber()));if(w){var a=b("ge")("pagelet_above_header_timeline");a&&(w=D(a,i))}x&&(x=D(b("BlueBar").getBar(),j))}function A(){u=b("Vector").getScrollPosition()}function B(){z(),u&&b("ProfileTabUtils").tabHasStickyHeader(l)&&y(b("TimelineComponentKeys").STICKY_HEADER,"check",[u.y]),y(b("TimelineComponentKeys").CONTENT,"checkCurrentSectionChange")}function C(){b("queryThenMutateDOM")(A,B,"TimelineController/scrollListener")}function D(a,c,d){__p&&__p();if(!a||!u)return!1;if(u.y<=0){E(a,c);return!1}if(d&&b("CSS").hasClass(d.getRoot(),"fixed_elem")){E(a,c);return!1}d=parseInt(a.style[c],10)||0;u.y<d?(b("CSS").addClass(a,"timeline_fixed"),a.style[c]=u.y+"px"):b("CSS").removeClass(a,"timeline_fixed");return!0}function E(a,c){a.style[c]="0px",b("CSS").removeClass(a,"timeline_fixed")}function F(){b("Vector").getViewportDimensions()}function G(){b("queryThenMutateDOM")(F,function(){y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"adjustMenuHeights"),u&&y(b("TimelineComponentKeys").STICKY_HEADER,"check",[u.y])},"TimelineController/resize")}function H(a,c){__p&&__p();a=b("Vector").getScrollPosition();c=Math.min(c,a.y);a=b("ge")("rightCol");a&&(a.style[k]=c+"px",v=!0);J.showAboveHeaderContent(c);x=b("UITinyViewportAction").isTinyHeight();if(x){a=b("BlueBar").getBar();a&&(a.style[j]=c+"px")}b("Arbiter").inform("reflow")}function I(){__p&&__p();while(s.length)s.pop().remove();b("forEachObject")(p,function(a,b){a.reset&&a.reset()});l=null;n=null;p={};q={};t=null;m=!1;w=!1;if(v){var a=b("ge")("rightCol");a&&E(a,k)}v=!1;if(x){a=b("BlueBar").getBar();a&&E(a,j);x=!1}b("DataStore").purge(b("TimelineConstants").DS_LOADED)}var J={init:function(a,c,d){__p&&__p();if(m)return;b("ProfileTabUtils").isTimelineTab(c)&&(c=b("ProfileTabConst").TIMELINE);m=!0;n=a;o=d.relationship_type;r=d.session_token;s.push(b("Event").listen(window,"scroll",C),b("Event").listen(window,"resize",G));b("tidyEvent")(b("TidyArbiter").subscribe("TimelineCover/coverCollapsed",H));b("Run").onLeave(I);a=new(g||(g=b("URI")))(window.location).getQueryData();J.registerCurrentKey(c,a.subkey)},showAboveHeaderContent:function(a){var c=b("Vector").getScrollPosition();a=Math.min(a,c.y);c=b("findTag")("pagelet_above_header_timeline");if(c.firstChild){var d=b("findTag")("above_header_timeline_placeholder");d.style.height=c.offsetHeight+"px";c.style.top=a+"px";w=!0}},registerCurrentKey:function(a,c){__p&&__p();l=a;t=a!==b("ProfileTabConst").MAP&&b("Vector").getViewportDimensions().y<h&&b("ProfileTabUtils").tabHasScrubber(a);if(!t){var d=b("BlueBar").getBar();t=d&&d.offsetTop}b("Arbiter").inform("TimelineController/sectionKeyChange",[a,c],"state");y(b("TimelineComponentKeys").STICKY_HEADER,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").OVERVIEW_CONTAINER,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,"handleTabChange",[a,c]);C()},getProfileID:function(){return n},getRelationshipType:function(){return o},getSessionToken:function(){return r},getCurrentKey:function(){return l},getCurrentScrubber:function(){return p[b("TimelineComponentKeys").SCRUBBER]},getCurrentStickyHeaderNav:function(){return p[b("TimelineComponentKeys").STICKY_HEADER_NAV]},scrubberHasLoaded:function(a){b("CSS").conditionClass(a.getRoot(),"fixed_elem",!t)},sectionHasChanged:function(a,c){a=[a,c];y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"updateSection",a);y(b("TimelineComponentKeys").SCRUBBER,"updateSection",a)},navigateToSection:function(a){y(b("TimelineComponentKeys").CONTENT,"navigateToSection",[a])},adjustStickyHeaderWidth:function(){y(b("TimelineComponentKeys").STICKY_HEADER,"adjustWidth")},dismissStickyHeaderConfirmationBar:function(){y(b("TimelineComponentKeys").STICKY_HEADER,"dismissConfirmationBar")},hideStickyHeaderNavSectionMenu:function(){y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"hideSectionMenu")},register:function(a,c){p[a]=c,q[a]&&(b("forEachObject")(q[a],function(b,c){y(a,c,b)}),delete q[a])}};e.exports=J}),null);
__d("ProfileTimelineUILogger",["Banzai","ProfileTimelineUITypedLogger","TimelineController"],(function(a,b,c,d,e,f){__p&&__p();var g="profile_timeline_ui";function h(a,c,d){var e=b("TimelineController").getProfileID(),f=b("TimelineController").getRelationshipType();b("Banzai").isEnabled(g)&&e!=null&&f!=null&&new(b("ProfileTimelineUITypedLogger"))().setEvent(a).setUIComponent(c).setProfileID(e).setRelationshipType(f).setEventMetadata(d).log()}a={logCoverNavItemClick:function(a){h("click","cover_nav_item",{tab_key:a})},logCoverNavMoreItemClick:function(a){h("click","cover_nav_more_item",{tab_key:a})},logScrubberClick:function(a){h("click","scrubber",{section_key:a})},logStickyHeaderImpression:function(){h("view","sticky_header",{})},logStickyHeaderNavItemClick:function(a){h("click","sticky_header_nav_item",{tab_key:a})},logStickyHeaderScrubberClick:function(a){h("click","sticky_header_scrubber",{section_key:a})},logStickyHeaderNavItemWithJumperClick:function(a){h("click","sticky_header_nav_item_with_jumper",{tab_key:a})},logStickyHeaderScrubberWithJumperClick:function(a){h("click","sticky_header_scrubber_with_jumper",{section_key:a})},logJumperRecentStoriesButtonClick:function(a){h("click","jumper_recent_stories_button",{cursor:a})},logJumperMoreStoriesSpinnerView:function(a){h("view","jumper_more_stories_spinner",{cursor:a})},logTabLoadSuccess:function(a){h("load","tab",a!=null?{tab_key:a}:{})}};e.exports=a}),null);
__d("TimelineCoverCollapse",["DOMDimensions","Style","TidyArbiter","$","getViewportDimensions"],(function(a,b,c,d,e,f){f.collapse=function(a,c){c--;a=b("getViewportDimensions")().height;var d=b("DOMDimensions").getDocumentDimensions().height;a=a+c;d<=a&&b("Style").set(b("$")("globalContainer"),"min-height",a+"px");window.scrollBy(0,c);b("TidyArbiter").inform("TimelineCover/coverCollapsed",c,"state")}}),null);