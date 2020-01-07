if (self.CavalryLogger) { CavalryLogger.start_js(["OCC+Z"]); }

__d("UFI2BanActorMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"FeedbackPageBanData!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"feedback_page_ban",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"FeedbackPageBanResponsePayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2BanActorMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"UFI2BanActorMutation",argumentDefinitions:a,selections:b},params:{operationKind:"mutation",name:"UFI2BanActorMutation",id:"2353097554735989",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2FeedbackReactMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"FeedbackReactData!",defaultValue:null},{kind:"LocalArgument",name:"useDefaultActor",type:"Boolean",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"detection_analytics_enabled",args:null,storageKey:null},d=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],e={kind:"ScalarField",alias:null,name:"key",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},h={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},i={kind:"ScalarField",alias:"i18n_reaction_count",name:"reaction_count_reduced",args:null,storageKey:null},j={kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2FeedbackReactMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_react",storageKey:null,args:b,concreteType:"FeedbackReactResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"FragmentSpread",name:"UFI2ReactionActionLink_feedback",args:null},{kind:"FragmentSpread",name:"UFI2ReactionsCount_feedback",args:null},{kind:"FragmentSpread",name:"UFI2CommentTopReactions_feedback",args:null},{kind:"FragmentSpread",name:"UFI2CommentTopReactionsWrapper_feedback",args:null},{kind:"FragmentSpread",name:"UFI2TopReactions_feedback",args:null},{kind:"FragmentSpread",name:"UFI2FeedbackReactMutation_feedback",args:null}]},c]}]},operation:{kind:"Operation",name:"UFI2FeedbackReactMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_react",storageKey:null,args:b,concreteType:"FeedbackReactResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"can_viewer_react",args:d,storageKey:null},{kind:"LinkedField",alias:null,name:"viewer_feedback_reaction_info",storageKey:null,args:d,concreteType:"FeedbackReactionInfo",plural:!1,selections:[e,f,g]},f,{kind:"LinkedField",alias:null,name:"viewer_actor",storageKey:null,args:d,concreteType:null,plural:!1,selections:[g,f,h]},{kind:"LinkedField",alias:null,name:"supported_reactions",storageKey:null,args:null,concreteType:"FeedbackReaction",plural:!0,selections:[e]},{kind:"LinkedField",alias:null,name:"associated_video",storageKey:null,args:null,concreteType:"Video",plural:!1,selections:[f]},{kind:"LinkedField",alias:null,name:"top_reactions",storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"TopReactionsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"reaction_count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"FeedbackReactionInfo",plural:!1,selections:[e,f,{kind:"ScalarField",alias:null,name:"reaction_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"localized_name",args:null,storageKey:null}]},i]}]},{kind:"LinkedField",alias:null,name:"reactors",storageKey:null,args:null,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[j,{kind:"ScalarField",alias:null,name:"count_reduced",args:null,storageKey:null}]},i,{kind:"LinkedField",alias:null,name:"important_reactors",storageKey:"important_reactors(first:2)",args:[{kind:"Literal",name:"first",value:2}],concreteType:"ImportantReactorsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"nodes",storageKey:null,args:null,concreteType:null,plural:!0,selections:[g,h,f]}]},{kind:"LinkedField",alias:"reaction_count",name:"reactors",storageKey:null,args:null,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[j]}]},c]}]},params:{operationKind:"mutation",name:"UFI2FeedbackReactMutation",id:"2580813318646067",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2FeedbackReactMutation_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"ScalarField",alias:null,name:"key",args:null,storageKey:null}];return{kind:"Fragment",name:"UFI2FeedbackReactMutation_feedback",type:"Feedback",metadata:{mask:!1},argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor",type:"Boolean"}],selections:[{kind:"LinkedField",alias:null,name:"associated_video",storageKey:null,args:null,concreteType:"Video",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"top_reactions",storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"TopReactionsEdge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"reaction_count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"FeedbackReactionInfo",plural:!1,selections:a}]}]},{kind:"LinkedField",alias:null,name:"reactors",storageKey:null,args:null,concreteType:"ReactorsOfContentConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"viewer_feedback_reaction_info",storageKey:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:"FeedbackReactionInfo",plural:!1,selections:a}]}}();e.exports=a}),null);
__d("UFI2UnhideCommentMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"CommentUnhideData!",defaultValue:null},{kind:"LocalArgument",name:"isComet",type:"Boolean!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"spam_display_mode",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"is_hidden_by_viewer",args:null,storageKey:null},f={kind:"ScalarField",alias:null,name:"is_hidden_by_content_owner",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2UnhideCommentMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"comment_unhide",storageKey:null,args:b,concreteType:"CommentUnhideResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"comment",storageKey:null,args:null,concreteType:"Comment",plural:!1,selections:[c,d,e,f,{kind:"FragmentSpread",name:"UFI2CommentMenu_comment",args:null},{kind:"Condition",passingValue:!0,condition:"isComet",selections:[{kind:"FragmentSpread",name:"CometUFICommentMenu_comment",args:null}]}]}]}]},operation:{kind:"Operation",name:"UFI2UnhideCommentMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"comment_unhide",storageKey:null,args:b,concreteType:"CommentUnhideResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"comment",storageKey:null,args:null,concreteType:"Comment",plural:!1,selections:[c,d,e,f,{kind:"Condition",passingValue:!1,condition:"isComet",selections:[{kind:"ScalarField",alias:null,name:"legacy_fbid",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"author",storageKey:null,args:null,concreteType:null,plural:!1,selections:[g,c,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"group_comment_info",storageKey:null,args:null,concreteType:"GroupCommentInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"is_author_muted",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"group_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_report_comment_to_admin_with_tags",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_viewer_block_author",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"legacy_token",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"comment_menu_tooltip",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"comment_menu_items",storageKey:null,args:null,concreteType:null,plural:!0,selections:[g,{kind:"InlineFragment",type:"CommentMenuItemDeleteAndRemoveMember",selections:[{kind:"ScalarField",alias:null,name:"show_remove_content_options",args:null,storageKey:null}]}]},{kind:"ScalarField",alias:null,name:"is_author_banned_by_content_owner",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"parent_feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"viewer_acts_as_page",storageKey:null,args:null,concreteType:"Page",plural:!1,selections:[c]}]},{kind:"ScalarField",alias:null,name:"create_detailed_report_uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"us_structured_reporting_enabled",args:null,storageKey:null}]},{kind:"Condition",passingValue:!0,condition:"isComet",selections:[{kind:"ScalarField",alias:null,name:"should_show_comment_menu",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"comment_menu_items",storageKey:null,args:null,concreteType:null,plural:!0,selections:[g,{kind:"InlineFragment",type:"CommentMenuItemRemoveTag",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemRemoveTag_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemDelete",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDelete_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemDeleteAndRemoveMember",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDeleteAndRemoveMember_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemDivider",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDivider_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemEdit",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemEdit_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemReportToAdmins",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemReportToAdmins_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemGiveFeedbackOrReport",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemGiveFeedbackOrReport_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemHide",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemHide_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemBanCommenter",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenter_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemMuteMember",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteMember_commentMenuItem",fragmentPropName:"commentMenuItem"}]},{kind:"InlineFragment",type:"CommentMenuItemRemoveWithFeedback",selections:[{kind:"ModuleImport",documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemRemoveWithFeedback_commentMenuItem",fragmentPropName:"commentMenuItem"}]}]},{kind:"ClientExtension",selections:[{kind:"ScalarField",alias:null,name:"optimistic_action",args:null,storageKey:null}]}]}]}]}]},params:{operationKind:"mutation",name:"UFI2UnhideCommentMutation",id:"2412224812223063",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2TypingSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"FeedbackTypingSubscribeData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c=[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"FragmentSpread",name:"UFI2TypingIndicator_feedback",args:null}]}],d=[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_eligible_for_real_time_updates",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"feedback_typers",storageKey:null,args:null,concreteType:"FeedbackTypersConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"other_count",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"subscription_target_id",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2TypingSubscription",type:"Subscription",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_typing_subscribe",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"FeedbackStartTypingResponsePayload",selections:c},{kind:"InlineFragment",type:"FeedbackStopTypingResponsePayload",selections:c}]}]},operation:{kind:"Operation",name:"UFI2TypingSubscription",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback_typing_subscribe",storageKey:null,args:b,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"InlineFragment",type:"FeedbackStartTypingResponsePayload",selections:d},{kind:"InlineFragment",type:"FeedbackStopTypingResponsePayload",selections:d}]}]},params:{operationKind:"subscription",name:"UFI2TypingSubscription",id:"1747091242085427",text:null,metadata:{subscriptionName:"feedback_typing_subscribe"}}}}();e.exports=a}),null);
__d("UFICreatorInfo.react",["fbt","HelpLink.react","Image.react","React","URI","cxMargin","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a,c=this.getCreatorLink();switch(this.props.labelType){case"commented":a=g._("\u041f\u0440\u043e\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043b(-\u0430): {creator}",[g._param("creator",c)]);break;case"edited_comment":a=g._("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e {creator}",[g._param("creator",c)]);break;case"sent_message":a=g._("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e {creator}",[g._param("creator",c)]);break;case"page_admin_note":a=g._("\u0410\u0432\u0442\u043e\u0440 \u0437\u0430\u043c\u0435\u0442\u043a\u0438: {creator}",[g._param("creator",c)]);break;default:return b("React").jsx("span",{})}return b("React").jsxs("span",{children:[a,b("React").jsx(b("HelpLink.react"),{tooltip:this.getHelpText()})]})};d.getCreatorLink=function(){switch(this.props.creatorType){case"application":case"gray_account":case"indirect_admin":return b("React").jsx("a",{className:"uiLinkSubtle","data-hover":"tooltip","data-tooltip-content":this.getTooltipText(),children:this.props.creatorName});case"business_admin":return b("React").jsx("a",{className:"uiLinkSubtle",href:this.props.profileURI,children:this.props.creatorName});case"direct_admin":return this.getProfileLinkWithHovercard();case"former_admin":return b("React").jsxs("span",{className:"uiLinkSubtle",children:[b("React").jsx(b("Image.react"),{src:"/images/privacy/cant-see.png",width:9,height:9,className:"_3-8_"}),this.getProfileLinkWithHovercard()]});default:return b("React").jsx("span",{className:"uiLinkSubtle",children:this.props.creatorName})}};d.getTooltipText=function(){switch(this.props.creatorType){case"application":return this.getApplicationText();case"gray_account":return this.getGrayAccountText();case"indirect_admin":return this.getIndirectAdminText()}return null};d.getProfileLinkWithHovercard=function(){if(!this.props.profileURI)return b("React").jsx("span",{children:this.props.creatorName});var a=new(h||(h=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:this.props.creatorID}).addQueryData({type:"page_admin",extragetparams:JSON.stringify({directed_target_id:this.props.pageID})});return b("React").jsx("a",{className:"uiLinkSubtle","data-hovercard":a,href:this.props.profileURI,children:this.props.creatorName})};d.getApplicationText=function(){switch(this.props.labelType){case"commented":return g._("\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 {application}.",[g._param("application",this.props.creatorName)]);case"edited_comment":return g._("\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c {application}.",[g._param("application",this.props.creatorName)]);case"sent_message":return g._("\u042d\u0442\u043e \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043a\u0435\u043c-\u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 {application}.",[g._param("application",this.props.creatorName)]);case"page_admin_note":return g._("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043a\u0430\u043a\u0438\u043c-\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u00ab{application}\u00bb.",[g._param("application",this.props.creatorName)])}return null};d.getIndirectAdminText=function(){switch(this.props.labelType){case"commented":return g._("\u041f\u0440\u043e\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b {page}.",[g._param("page",this.props.creatorName)]);case"edited_comment":return g._("\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0441 {page}.",[g._param("page",this.props.creatorName)]);case"sent_message":return g._("\u042d\u0442\u043e \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043a\u0435\u043c-\u043b\u0438\u0431\u043e \u0441 {page}.",[g._param("page",this.props.creatorName)]);case"page_admin_note":return g._("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043a\u0435\u043c-\u0442\u043e \u0441\u043e \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u00ab{page}\u00bb.",[g._param("page",this.props.creatorName)])}return null};d.getGrayAccountText=function(){switch(this.props.labelType){case"commented":return g._("\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0442 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 Facebook.");case"edited_comment":return g._("\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0442 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 Facebook.");case"sent_message":return g._("\u042d\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0442 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 Facebook.");case"page_admin_note":return g._("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0442 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 Facebook.")}return null};d.getHelpText=function(){switch(this.props.labelType){case"commented":return g._("\u0422\u043e\u043b\u044c\u043a\u043e \u0442\u0435, \u043a\u0442\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u043e\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439, \u043c\u043e\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044c, \u043a\u0442\u043e \u043e\u0441\u0442\u0430\u0432\u0438\u043b \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439.");case"edited_comment":return g._("\u0422\u043e\u043b\u044c\u043a\u043e \u0442\u0435, \u043a\u0442\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u043e\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439, \u043c\u043e\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044c, \u043a\u0442\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043b \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439");case"sent_message":return g._("\u0422\u043e\u043b\u044c\u043a\u043e \u0442\u0435, \u043a\u0442\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u043e\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439, \u043c\u043e\u0433\u0443\u0442 \u0432\u0438\u0434\u0435\u0442\u044c, \u043a\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.");case"page_admin_note":return g._("\u0422\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u043b\u044e\u0434\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u0434\u0430\u043d\u043d\u043e\u0439 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439, \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443")}return null};return c}(b("React").Component);a.propTypes={creatorID:(c=b("prop-types")).string.isRequired,creatorType:c.string.isRequired,creatorName:c.string.isRequired,labelType:c.string.isRequired,pageID:c.string.isRequired,profileURI:c.string};e.exports=a}),null);
__d("XFBStoriesSingleStoryAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stories/view/async/",{card_id:{type:"FBID"},story_id:{type:"FBID"},auto_open_viewersheet:{type:"Bool",defaultValue:!1},story_action_source:{type:"String"}})}),null);
__d("FBStoriesRing",["csx","cx","Arbiter","CSS","DOM","FBStoriesLoggingConstants","XFBStoriesSingleStoryAsyncController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.element;this.$2=a.profileId;this.$3=a.storyId;this.$4=!1;a=b("DOM").scry(this.$1,"._6_ut");a.length>0&&(this.$4=!0);this.$5()}var c=a.prototype;c.$5=function(){__p&&__p();var a=this;b("Arbiter").subscribe("has_story_bucket_been_seen",function(c,d){if(a.$2===d){c=b("DOM").scry(a.$1,"._6_ut");c.length>0&&(b("CSS").removeClass(c[0],"_6_ut"),a.$4=!1)}});b("Arbiter").subscribe("update_next_thread_to_view",function(c,d){c=d.bucketOwnerId;d=d.threadId;if(a.$2===c&&a.$4){c=b("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id",a.$3).setFBID("card_id",d).setBool("auto_open_viewersheet",!1).setString("story_action_source",b("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();a.$1.setAttribute("ajaxify",c)}})};return a}();e.exports=a}),null);
__d("StickyRHC",["csx","Arbiter","DirectionalDockingElement","DockingElement","DOMDimensions","DOMQuery","Event","FullScreen","Run","SubscriptionsHandler","ViewportBounds","$","ge","getElementPosition","getViewportDimensions","removeFromArray","setImmediate","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=35,i=[],j;function k(a,c){__p&&__p();if(!c||!c.dom_id){i.forEach(l);return}a=b("$")(c.dom_id);for(var c=0;c<i.length;c++)if(b("DOMQuery").contains(i[c].getRoot(),a)){l(i[c]);return}}function l(a){var c=a.getRoot(),d=a.updateOffset.bind(a);a=b("DOMQuery").scry(c,"img.img");a.forEach(function(a){if(a.complete||a.getAttribute("height")||a.naturalHeight===void 0&&a.naturalHeight!==0)return;var c=function(){d(),e.remove(),f.remove(),g.remove()},e=b("Event").listen(a,"load",c),f=b("Event").listen(a,"error",c),g=b("Event").listen(a,"abort",c)});d()}function m(){if(b("FullScreen").isFullScreen())return;i.forEach(function(a){a.updateOffset()})}function n(a){var c,d=(c=b("DOMQuery")).scry(a,"._4-u2"),e=c.scry(a,"._4-u3"),f=c.scry(a,".uiHeader");c=c.scry(a,".ego_unit");return[].concat(d,e,f,c).filter(function(a){return r(a)!==0})}function o(a){return b("getElementPosition")(a).y}function p(a,b){return a-b}function q(){return r(b("ge")("pageFooter"))}function r(a){return a?b("DOMDimensions").getElementDimensions(a).height:0}var s=a(m);function a(a){return function(c){return b("Arbiter").subscribe(c,a)}}c=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=this;d===void 0&&(d=!0);this.$1=a;this.$2=c?new(b("DirectionalDockingElement"))(a):new(b("DockingElement"))(a);this.$3=d;this.$2.subscribe("changedheight",this.updateOffset.bind(this));this.updateOffset();l(this);i.length||(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(s("header_loaded"),s("responsive_rhc_loaded"),s("ad_home_pagelet_loaded"),s("comet_rhc_upsell_closed"),b("Arbiter").subscribe("netego_loaded",k),b("FullScreen").subscribe("changed",m),b("Event").listen(window,"resize",b("throttle")(m))));b("Run").onLeave(function(){return f.destroy()});i.push(this)}a.getInstances=function(){return i};var c=a.prototype;c.getRoot=function(){return this.$1};c.subscribe=function(a,b){return this.$2.subscribe(a,b)};c.destroy=function(){this.$2=null,b("removeFromArray")(i,this),!i.length&&j&&(j.release(),j=null)};c.unfixAndScrollBy=function(a){this.$2&&this.$2.unfixAndScrollBy(a)};c.updateOffset=function(){var a=this;b("setImmediate")(function(){a.$2&&a.$2.setOffset(a.calculateRHCOffset())})};c.calculateRHCOffset=function(){__p&&__p();var a=this.getRoot(),b=r(a),c=t(),d=u();if(b<d)return c;if(this.$3){var e=n(a).map(o).sort(p);a=b+o(a);for(var e=e,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;h=a-h;if(h<d)return c-(b-h)}}return c-(b-d)};return a}();function t(){return b("ViewportBounds").getTop()}function u(){var a=t(),c=b("getViewportDimensions")().height,d=q();return c-a-h-d}e.exports=c}),null);
__d("removeEmojiFromEditorState",["keyCommandBackspaceEmoji","keyCommandDeleteEmoji"],(function(a,b,c,d,e,f){"use strict";function a(a,c){switch(a){case"backspace":return b("keyCommandBackspaceEmoji")(c)||c;case"delete":return b("keyCommandDeleteEmoji")(c)||c;default:return c}}e.exports=a}),null);
__d("UFI2ReactionsMenu",["requireCond","cr:682215"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:682215")}),null);
__d("UFI2ActorPresenceProvider.react",["Arbiter","AvailableListConstants","PresenceStatus","React","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isActive:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this,c=this.props.actorID;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,function(){a.setState({isActive:b("PresenceStatus").get(c)===b("AvailableListConstants").ACTIVE})}))};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.render=function(){return this.props.children(this.state.isActive)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("UFI2BanActorMutation",["RelayModern","forEachUFI2DisplayCommentsConnection","UFI2BanActorMutation.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("UFI2BanActorMutation.graphql");e.exports={commit:function(a,c){__p&&__p();var d=c.actorId,e=c.feedbackId,f=c.pageId,g=c.targetUserId,j=c.undoBan;c.feedbackSource;c=function(a){__p&&__p();if(e==null)return;var c=a.get(e);if(!c)return;b("forEachUFI2DisplayCommentsConnection")(a,c,function(a){__p&&__p();a=a.getLinkedRecords("edges");if(!a)return;a.forEach(function(a){__p&&__p();if(!a)return;a=a.getLinkedRecord("node");if(!a)return;var b=a.getLinkedRecord("author");if(!b)return;if(b.getValue("id")===g){b=a.getValue("is_hidden_by_content_owner");a.setValue(j&&b!==!0?"none":"spam","spam_display_mode");a.setValue(!j,"is_author_banned_by_content_owner")}})})};return h(a,{mutation:i,optimisticResponse:{feedback_page_ban:{__typename:"FeedbackPageBanResponsePayload"}},optimisticUpdater:c,updater:c,variables:{input:{actor_id:d,ban_action:j?"UNDO_BAN":"BAN",page_id:f,target_user_id:g}}})}}}),null);
__d("UFI2FeedbackReactMutation",["invariant","requireCond","Bootloader","ChannelClientID","CurrentUser","FBLogger","FeedbackSourceType","JSEnumValueToGraphQLKey","RelayModern","RelayRuntime","UFIODSLogger","UFIReactionTypes","arrayStableSort","setTimeoutAcrossTransitions","cr:1088250","UFI2FeedbackReactMutation_feedback.graphql","UFI2FeedbackReactMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=b("RelayModern").commitMutation;b("RelayModern").graphql;var k=b("RelayRuntime").ConnectionHandler,l=b("RelayRuntime").applyOptimisticMutation,m=b("UFIReactionTypes").ordering,n=2,o=3e3,p=b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),1);h!==void 0?h:h=b("UFI2FeedbackReactMutation_feedback.graphql");var q=i!==void 0?i:i=b("UFI2FeedbackReactMutation.graphql");function a(a){__p&&__p();var c=a.actorID,d=a.environment,e=a.feedbackArg,f=a.input,h=a.useDefaultActor,i=f.feedback_source,j=f.feedback_reaction,k=(e=e.associated_video)==null?void 0:e.id;j!==0&&k!=null&&b("Bootloader").loadModules(["CreateLivingRoomActionLinkStore","LivingRoomCreationSource"],function(a,b){a.activateLivingRoomCTAForVideo(k,b.FEED_CTA_ON_REACT)},"UFI2FeedbackReactMutation");e={input:babelHelpers["extends"]({},f,{actor_id:c,feedback_source:i!=null?b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),i):void 0,session_id:b("ChannelClientID").getID()}),useDefaultActor:h};c=function(a){__p&&__p();var c=a.get(f.feedback_id);if(c==null){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",f.feedback_id).warn("UFI2FeedbackReactMutation: Could not find feedback in Relay store.");return}var d=s(a,f.feedback_id,c),e=c.getLinkedRecord("viewer_feedback_reaction_info",{use_default_actor:h}),i=e?e.getValue("key")||0:0;typeof i==="number"||g(0,3027);var k=c.getLinkedRecord("top_reactions",{orderby:["COUNT_DESC","REACTION_TYPE"]});if(!k){var l="client:top_reactions:"+f.feedback_id;k=a.create(l,"TopReactionsConnection")}u(a,k,j,i);if(j===0){if(e!==null){l=d.getValue("count");k=typeof l==="number"?l:1;d.setValue(k-1,"count")}c.setValue(null,"viewer_feedback_reaction_info",{use_default_actor:h})}else{if(e===null){i=d.getValue("count");l=typeof i==="number"?i:0;d.setValue(l+1,"count")}e=t(a,j);c.setLinkedRecord(e,"viewer_feedback_reaction_info",{use_default_actor:h})}k=d.getValue("count_reduced");if(parseInt(k,10).toString()===k){i=d.getValue("count");typeof i==="number"&&d.setValue(i.toString(),"count_reduced")}};i={mutation:q,optimisticUpdater:c,variables:e};return r(d,i,c,0,f,a.onError)}function r(a,c,d,e,f,g){__p&&__p();var h=j(a,babelHelpers["extends"]({},c,{onCompleted:function(a){a=c==null?void 0:(a=c.variables)==null?void 0:(a=a.input)==null?void 0:a.feedback_source;var d=Math.min(e+1,3);d=""+d+(e>=d?"+":"");a===p&&b("UFIODSLogger").bump("reaction.newsfeed.mutation.attempt."+d,"relay");b("UFIODSLogger").bump("reaction.mutation.attempt."+d,"relay");v(f)},onError:function(i){if(i.name==="GraphQLError")return g(i);h=l(a,babelHelpers["extends"]({},c,{optimisticUpdater:d}));if(e>=n)return g(i);b("setTimeoutAcrossTransitions")(function(){h&&h.dispose(),h=r(a,c,d,e+1,f,g)},o)}}));return{dispose:function(){h&&h.dispose(),h=null}}}function s(a,c,d){__p&&__p();var e=d.getLinkedRecord("reactors");if(!e){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",c).warn("Expected Feedback record proxy to have a reactors connection");c="client:reactors:"+c;e=a.get(c)||a.create(c,"ReactorsOfContentConnection");e.setValue(0,"count");e.setValue("0","count_reduced");d.setLinkedRecord(e,"reactors")}return e}function t(a,c){__p&&__p();c!==0||g(0,3028);var d="client:reaction_info:"+c,e=a.get(d);if(!e){e=a.create(d,"FeedbackReactionInfo");e.setValue(c,"key");a=b("UFIReactionTypes").reactions[c];a||g(0,3029,c);e.setValue(a.display_name,"localized_name");e.setValue(a.name.toUpperCase(),"reaction_type")}return e}function u(a,c,d,e){__p&&__p();var f=(c.getLinkedRecords("edges")||[]).map(function(a){if(!a)return null;var b=a.getLinkedRecord("node"),c=a.getValue("reaction_count")||0,d=b&&b.getValue("key")||0;typeof c==="number"&&typeof d==="number"||g(0,3027);return b&&c!==0&&d!==0?{count:c,edge:a,key:d}:null}).filter(Boolean);if(e){var h=f.find(function(a){return a.key===e});h&&h.count--}if(d){h=f.find(function(a){return a.key===d});if(!h){var i=t(a,d);a=k.createEdge(a,c,i,"TopReactionsEdge");h={count:0,edge:a,key:d};f.push(h)}h.count++}i=b("arrayStableSort")(f,function(a,b){return b.count-a.count||m.indexOf(a.key)-m.indexOf(b.key)}).filter(function(a){return a.count!==0}).map(function(a){var b=a.edge;a=a.count;b.setValue(a,"reaction_count");b.setValue((a=b.getValue("reaction_count_reduced"))!=null?a:"","reaction_count_reduced");return b});c.setLinkedRecords(i,"edges")}function v(a){if(!b("CurrentUser").isWorkUser())return;if(a.tracking==null)return;a=a.tracking[0];a=(a=JSON.parse((a=a)!=null?a:""))==null?void 0:a.top_level_post_id;a&&b("cr:1088250")&&b("cr:1088250")(a)}e.exports={commit:a}}),null);
__d("UFI2UnhideCommentMutation",["RelayModern","UFI2UnhideCommentMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("UFI2UnhideCommentMutation.graphql");function a(a,b){return h(a,{mutation:i,optimisticResponse:{comment_unhide:{comment:{id:b.commentId,spam_display_mode:"none"}}},variables:{input:{actor_id:b.actorId,comment_id:b.commentId,feedback_source:b.feedbackSource,site:"www"},isComet:b.isComet}})}e.exports={commit:a}}),null);
__d("UFI2TypingSubscription",["RelayModern","UFI2FeedbackSubscriptionTopicProvider","UFI2TypingSubscription.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("RelayModern").graphql;var h=b("RelayModern").requestSubscription,i=g!==void 0?g:g=b("UFI2TypingSubscription.graphql");b("UFI2FeedbackSubscriptionTopicProvider").registerProvider(i,"gqls/feedback_typing_subscribe/feedback_id_");function a(a,c,d,e){b("UFI2FeedbackSubscriptionTopicProvider").addSubscriptionTargetIDForFeedbackID(c,e);return h(a,{onNext:d&&d.onNext,subscription:i,variables:{input:{feedback_id:c}}})}e.exports={subscribe:a}}),null);