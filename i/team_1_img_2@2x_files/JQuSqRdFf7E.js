if (self.CavalryLogger) { CavalryLogger.start_js(["Sp+ie"]); }

__d("Button.react",["cx","AbstractButton.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};return c}(b("React").Component);a.propTypes={use:b("prop-types").oneOf(["special","confirm","default"]),size:b("prop-types").oneOf(["medium","large"]),suppressed:b("prop-types").bool};e.exports=a}),null);
__d("SpotlightViewerClose",["cx","fbt","React","TooltipLink.react","emptyFunction","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.position=="left"?"_5wx3":"_5wx4",c=b("React").jsx("span",{children:h._("\u041d\u0430\u0436\u043c\u0438\u0442\u0435 Esc, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c")});return b("React").jsx(b("TooltipLink.react"),{className:b("joinClasses")("_4-o9 _50-m _51an",a,this.props.isFixed?"_2chv":""),onClick:this.props.onClick,onKeyPress:this.props.onKeyPress,tooltip:c,tabIndex:"0"})};return c}(b("React").Component);a.propTypes={position:b("prop-types").oneOf(["left","right"]),isFixed:b("prop-types").bool,onKeyPress:b("prop-types").func};a.defaultProps={position:"right",isFixed:!1,onKeyPress:b("emptyFunction")};e.exports=a}),null);
__d("XGamesVideoStreamerDashboardController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gaming/streamer/",{star_alerts:{type:"Bool",defaultValue:!0},share_alerts:{type:"Bool",defaultValue:!0},reaction_alerts:{type:"Bool",defaultValue:!1},star_sounds:{type:"Enum",enumType:1},stream_chain_alerts:{type:"Bool",defaultValue:!0},supporter_alerts:{type:"Bool",defaultValue:!0},charitable_donation_alerts:{type:"Bool",defaultValue:!0},clip_alerts:{type:"Bool",defaultValue:!0},page:{type:"String"},ref_key:{type:"String"},ref:{type:"String"},external_ref:{type:"String"},no_cs_redirect:{type:"Bool",defaultValue:!1},use_tabbed_layout:{type:"Enum",enumType:1}})}),null);
__d("XLiveVideoBroadcastLaunchComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_map/composer_config/",{default_input_source:{type:"String"},composer_entry_point:{type:"String",required:!0},page_id:{type:"FBID"},game_id:{type:"FBID"},hide_input_toggle:{type:"Bool",defaultValue:!1},default_message:{type:"String"},is_rehearsal:{type:"Bool",defaultValue:!1}})}),null);
__d("XWoodhengeSignupFlowDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/becomesupporter/dialog/",{page_id:{type:"FBID",required:!0},surface:{type:"String"},entrypoint_surface:{type:"String"},post_id:{type:"String"}})}),null);