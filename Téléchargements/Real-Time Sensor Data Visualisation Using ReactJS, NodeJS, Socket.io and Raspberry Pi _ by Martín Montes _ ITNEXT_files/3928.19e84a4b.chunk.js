(self.webpackChunklite=self.webpackChunklite||[]).push([[3928],{14856:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(67294);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=r.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25}),o=r.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)"}),a=r.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),s=r.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const u=function(e){return r.createElement("svg",i({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),l,o,a,s)}},66802:(e,n,t)=>{"use strict";t.d(n,{R4:()=>i,Ue:()=>l,xG:()=>o,Hp:()=>a});var r=t(93661),i=function(e,n,t){var r,i;return"undefined"!=typeof window&&e&&n&&!!(window.ApplePaySession&&null!==(r=window.ApplePaySession)&&void 0!==r&&r.supportsVersion(t)&&null!==(i=window.ApplePaySession)&&void 0!==i&&i.canMakePayments())},l=function(e,n){var t="";switch(n){case"CA":return e===r.FM.Monthly&&(t="monthlyCad"),e===r.FM.Yearly&&(t="yearlyCad"),t;default:return t}};function o(e){var n=e.amount,t=e.currency,r=e.locale,i=e.floatingDigits,l=void 0===i?[2,2]:i,o=e.isLongFormat,a=void 0!==o&&o,s=r||"undefined"!=typeof window&&window.navigator.language||"en-US",u=t||"USD";if(!Intl)return"".concat(n," ").concat(u);try{var c=new Intl.NumberFormat(s,{style:"currency",currency:u,minimumFractionDigits:l[0],maximumFractionDigits:l[1],currencyDisplay:"narrowSymbol"}).format(n);return a?"".concat(c," ").concat(t):c}catch(e){return String(n)}}var a=function(e,n,t){var r=String(e);return t?"".concat(r," ").concat(n):r}},82405:(e,n,t)=>{"use strict";t.d(n,{b3:()=>P,Iq:()=>F,MT:()=>T,Fp:()=>U});var r=t(63038),i=t.n(r),l=t(28655),o=t.n(l),a=t(71439),s=t(46829),u=t(67294),c=t(5977),d=t(77520),m=t(25550),v=t(25267),f=t(67701),p=t(26350),b=t(50563),w=t(93310),g=t(77355),S=t(47230),h=t(18627),y=t(66411),E=t(92661),V=t(43487),C=t(50458),_=t(68216);function I(){var e=o()(["\n  mutation UnfollowCollectionMutation($id: ID!) {\n    unfollowCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isFollowing\n      }\n    }\n  }\n"]);return I=function(){return e},e}function k(){var e=o()(["\n  mutation FollowCollectionMutation($id: ID!) {\n    followCollection(targetCollectionId: $id) {\n      __typename\n      id\n      viewerEdge {\n        __typename\n        id\n        isFollowing\n      }\n    }\n  }\n"]);return k=function(){return e},e}function x(){var e=o()(["\n  fragment CollectionFollowButton_collection on Collection {\n    __typename\n    id\n    name\n    slug\n    ...collectionUrl_collection\n    ...SusiClickable_collection\n  }\n  ","\n  ","\n"]);return x=function(){return e},e}function M(){var e=o()(["\n  fragment CollectionFollowButton_post on Post {\n    __typename\n    id\n  }\n"]);return M=function(){return e},e}var P=(0,a.Ps)(M()),F=(0,a.Ps)(x(),_.nf,p.Os),N=(0,a.Ps)(k()),O=(0,a.Ps)(I()),T=function(e,n){var t=(0,s.useMutation)(O),r=i()(t,1)[0];return u.useCallback((function(){return r({variables:{id:e},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,b.im)("followedCollections",!1)}})}})}),[e])},U=function(e){var n,t=e.buttonSize,r=e.buttonStyleFn,l=e.collection,o=e.post,a=e.simpleLink,C=e.susiEntry,_=void 0===C?"follow_card":C,I=e.preventParentClick,k=(0,V.v9)((function(e){return e.config.authDomain})),x=(0,m.r)().viewerId,M=(0,h.Av)(),P=(0,y.pK)(),F=(0,c.TH)(),O=(0,E.$B)(F.pathname),U=null==O||null===(n=O.route)||void 0===n?void 0:n.name,R=(0,f.gY)(l),A=R.viewerEdge,B=R.loading,L=function(e,n){var t=(0,s.useMutation)(N),r=i()(t,1)[0];return u.useCallback((function(){return r({variables:{id:e},optimisticResponse:{followCollection:{__typename:"Collection",id:e,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e,"-viewerId:").concat(n),isFollowing:!0}}},update:function(t){t.modify({id:"User:".concat(n),fields:{missionControl:(0,b.im)("followedCollections",!0),followingCollectionConnection:(0,b.Hc)(e)}})}})}),[e])}(l.id,x),j=T(l.id,x),Y=u.useCallback((function(e){I&&e.preventDefault(),null!=A&&A.isFollowing||(M.event("collection.followed",{collectionId:l.id,followSource:P}),L())}),[l,A,I,P]),$=u.useCallback((function(e){I&&e.preventDefault(),M.event("collection.unfollowed",{collectionId:l.id,followSource:P}),j()}),[I,P]),G=!(null==A||!A.isFollowing),z=r?r(!!G):G?"OBVIOUS":"STRONG";return a?u.createElement(w.r,{onClick:G?$:Y},u.createElement(g.x,{display:"flex",flexDirection:"row"},G?"Unfollow publication":"Follow publication")):u.createElement(v.I,null,(function(e){return e?u.createElement(S.z,{size:t,onClick:G?j:L,buttonStyle:z,loading:B},G?"Following":"Follow"):u.createElement(p.R9,{collection:l,buttonStyle:G?"OBVIOUS":"STRONG",isButton:!0,buttonSize:"REGULAR",operation:"register",actionUrl:D(k,l,o)||"",susiEntry:_,pageSource:(0,d.x)(U,"register")},G?"Following":"Follow")}))},D=function(e,n,t){return n.slug&&(t&&t.id?(0,C.TAb)(e,n.slug,t.id):(0,C.LlO)(e,n.slug))}},76107:(e,n,t)=>{"use strict";t.d(n,{b:()=>r});var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MembershipUpsellModal_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},61279:(e,n,t)=>{"use strict";t.d(n,{DI:()=>x,nj:()=>M,oT:()=>O});var r=t(59713),i=t.n(r),l=t(63038),o=t.n(l),a=t(28655),s=t.n(a),u=t(82492),c=t.n(u),d=t(71439),m=t(46829),v=t(67294),f=t(25735),p=t(9354),b=t(75880),w=t(18627),g=t(66411),S=t(78285);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(){var e=s()(["\n  mutation fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe($userId: ID!) {\n    fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe(userId: $userId) {\n      __typename\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return E=function(){return e},e}function V(){var e=s()(["\n  mutation unsubscribeNewsletterV3($newsletterV3Id: ID!) {\n    unsubscribeNewsletterV3(newsletterV3Id: $newsletterV3Id)\n  }\n"]);return V=function(){return e},e}function C(){var e=s()(["\n  mutation subscribeNewsletterV3($newsletterV3Id: ID!, $shouldRecordConsent: Boolean) {\n    subscribeNewsletterV3(\n      newsletterV3Id: $newsletterV3Id\n      shouldRecordConsent: $shouldRecordConsent\n    )\n  }\n"]);return C=function(){return e},e}function _(){var e=s()(["\n  fragment useNewsletterV3Subscription_newsletterV3_viewerEdge on NewsletterV3 {\n    viewerEdge {\n      id\n      isSubscribed\n    }\n  }\n"]);return _=function(){return e},e}function I(){var e=s()(["\n  fragment useNewsletterV3Subscription_user on User {\n    id\n    username\n    newsletterV3 {\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n  }\n  ","\n"]);return I=function(){return e},e}function k(){var e=s()(["\n  fragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n    id\n    type\n    slug\n    name\n    collection {\n      slug\n    }\n    user {\n      id\n      name\n      username\n      newsletterV3 {\n        id\n      }\n    }\n  }\n"]);return k=function(){return e},e}var x=(0,d.Ps)(k()),M=(0,d.Ps)(I(),x),P=((0,d.Ps)(_()),(0,d.Ps)(C())),F=(0,d.Ps)(V()),N=(0,d.Ps)(E(),x),O=function(e){var n=e.newsletterV3,t=e.creator,r=e.newsletterName,i=n||{},l=i.id,a=i.type,s=i.slug,u=i.collection,d=(null==n?void 0:n.user)||t,h=null!=r?r:null==n?void 0:n.name,E=v.useState(!1),V=o()(E,2),C=V[0],_=V[1],I=(0,p.T)({newsletterSlug:s,collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username}),k=I.viewerEdge,x=I.loading,O=(0,f.VB)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),T=v.useState(!1),U=o()(T,2),D=U[0],R=U[1];v.useEffect((function(){R(!(null==k||!k.isSubscribed))}),[null==k?void 0:k.isSubscribed]);var A=(0,w.Av)(),B=(0,g.Qi)(),L=(0,S.w)();C&&A.event("newsletterV3.subscribe.error",{newsletterV3Id:l});var j=function(e,n,t){if(t){var r={id:"User:".concat(null==d?void 0:d.id),fragment:M,fragmentName:"useNewsletterV3Subscription_user"},i=e.readFragment(r);e.writeFragment(y(y({},r),{},{data:y(y({},i),{},{newsletterV3:t})}))}if(k){var l=e.readQuery({query:p.p,variables:{newsletterSlug:s,collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username}}),o=c()({},l,{newsletterV3:{viewerEdge:{isSubscribed:n}}});e.writeQuery({query:p.p,variables:{newsletterSlug:s||"",collectionSlug:null==u?void 0:u.slug,username:null==d?void 0:d.username},data:o})}if(n&&O){var a=e.readQuery({query:b.J4,variables:{userId:null==d?void 0:d.id}}),m=c()({},a,{user:{viewerEdge:{isFollowing:!0}}});e.writeQuery({query:b.J4,variables:{userId:(null==d?void 0:d.id)||""},data:m})}},Y=(0,m.useMutation)(P,{onCompleted:function(e){var n=e.subscribeNewsletterV3;_(!n),n&&(A.event("newsletterV3.subscribeClicked",{newsletterV3Id:l,source:B}),R(!0))},update:function(e){j(e,!0)}}),$=o()(Y,1)[0],G=(0,m.useMutation)(F,{onCompleted:function(e){var n=e.unsubscribeNewsletterV3;_(!n),n&&(R(!1),L({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:h||null,newsletterType:a||null,unsubscribeFn:function(){return R(!1)}}}))},update:function(e){j(e,!1)}}),z=o()(G,1)[0],H=(0,m.useMutation)(N,{onCompleted:function(e){var n=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;_(!n),n&&(A.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.id,source:B}),R(!0))},update:function(e,n){var t,r=y({},null===(t=n.data)||void 0===t?void 0:t.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);j(e,!0,r)}}),W=o()(H,1)[0];return{isSubscribed:D,hasError:C,setSubscribe:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_(!1),e&&!n&&null!=t&&t.id?W({variables:{userId:null==t?void 0:t.id}}):e&&null!=n&&n.id?$({variables:{newsletterV3Id:null==n?void 0:n.id,shouldRecordConsent:r}}):null!=n&&n.id?z({variables:{newsletterV3Id:null==n?void 0:n.id}}):_(!0)},loading:x}}},93661:(e,n,t)=>{"use strict";t.d(n,{FM:()=>l,d5:()=>m,kr:()=>v,OS:()=>f});var r,i,l,o=t(59713),a=t.n(o),s=t(66802),u=t(25735),c=t(91157);!function(e){e.Monthly="monthly",e.Yearly="yearly",e.YearlyStaff="yearlyStaff",e.YearlyPriceSaved="yearlyPriceSaved",e.YearlyStaffPriceSaved="YearlyStaffPriceSaved"}(l||(l={}));var d={CA:{plan:(r={},a()(r,l.Monthly,5),a()(r,l.Yearly,50),a()(r,l.YearlyStaff,1),a()(r,l.YearlyPriceSaved,10),a()(r,l.YearlyStaffPriceSaved,49),r),currency:"CAD"},US:{plan:(i={},a()(i,l.Monthly,5),a()(i,l.Yearly,50),a()(i,l.YearlyStaff,1),a()(i,l.YearlyPriceSaved,10),a()(i,l.YearlyStaffPriceSaved,49),i),currency:"USD"}},m=function(){var e=(0,c.x)(),n=e.loading,t=e.geolocation,r=!!(0,u.VB)({name:"enable_lite_canada_plan",placeholder:!1}),i=!n&&t&&t.country?t.country:"";return r&&"CA"===i?"CA":"US"},v=function(e){var n=e.membershipType,t=e.country,r=d[t],i=r.currency,o=r.plan[n||l.Yearly];if(!o)throw new Error("Unavailable membership price");return{amount:o,currency:i}},f=function(e){var n=e.membershipType,t=e.excludeCurrencySign,r=void 0!==t&&t,i=e.isLongFormat,l=void 0!==i&&i,o=m(),a=v({membershipType:n,country:o}),u=a.amount,c=a.currency;return r?(0,s.Hp)(u,c,l):(0,s.xG)({amount:u,currency:c,floatingDigits:[0,0],isLongFormat:l})}},9354:(e,n,t)=>{"use strict";t.d(n,{T:()=>s,p:()=>u});var r=t(28655),i=t.n(r),l=t(46829),o=t(71439);function a(){var e=i()(["\n  query NewsletterV3ViewerEdge($newsletterSlug: ID!, $collectionSlug: ID, $username: ID) {\n    newsletterV3(\n      newsletterSlug: $newsletterSlug\n      collectionSlug: $collectionSlug\n      username: $username\n    ) {\n      ... on NewsletterV3 {\n        id\n        viewerEdge {\n          id\n          isSubscribed\n        }\n      }\n    }\n  }\n"]);return a=function(){return e},e}var s=function(e){var n,t=e.newsletterSlug,r=void 0===t?"":t,i=e.collectionSlug,o=e.username,a=(0,l.useQuery)(u,{variables:{newsletterSlug:r,collectionSlug:i,username:o},ssr:!1,skip:!r&&!o}),s=a.loading,c=a.error,d=a.data;return s?{loading:s}:c?{error:c}:{viewerEdge:null==d||null===(n=d.newsletterV3)||void 0===n?void 0:n.viewerEdge}},u=(0,o.Ps)(a())},62685:(e,n,t)=>{"use strict";t.d(n,{$:()=>r,o:()=>V});var r,i=t(67154),l=t.n(i),o=t(63038),a=t.n(o),s=t(6479),u=t.n(s),c=t(46829),d=t(67294),m=t(98863),v=t(6443),f=t(81978),p=t(77355),b=t(93310),w=t(73917),g=t(87691),S=t(29746),h=t(18627),y=t(14646);!function(e){e.CTA="CTA",e.DISMISSED="DISMISSED"}(r||(r={}));var E=function(e){var n=e.children,t=e.flag,i=e.text,o=e.renderFn,s=e.viewer,m=e.padding,v=void 0===m?16:m,E=e.placement,V=e.darkTheme,C=e.dismissText,_=void 0===C?"Got it":C,I=e.onDismiss,k=e.preventParentClick,x=u()(e,["children","flag","text","renderFn","viewer","padding","placement","darkTheme","dismissText","onDismiss","preventParentClick"]),M=(0,h.Av)(),P=d.useState(!1),F=a()(P,2),N=F[0],O=F[1],T=(0,c.useMutation)(f.a,{variables:{userId:s.id,flag:t}}),U=a()(T,1)[0],D=(0,y.I)(),R=d.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.DISMISSED;O(!1),U(),I&&I(),M.event("user.dismissedPopover",{flag:t,action:e})}),[N,I]);d.useEffect((function(){return O(!0)}),[]);var A=d.useCallback((function(){return d.createElement(p.x,{minWidth:"200px",padding:(0,S.a)(v)},d.createElement(g.F,{scale:"S",color:"WHITE"},i),d.createElement(p.x,{marginTop:"8px"},d.createElement(g.F,{scale:"S",color:V?"WHITE":void 0},d.createElement(b.r,{onClick:function(e){k&&e.preventDefault(),R(r.DISMISSED)}},d.createElement("span",{className:D(w.u)},_)))))}),[R,v,i,k]);return d.createElement(w.J,l()({disablePortalOverlay:!0,hide:R,isVisible:N,popoverRenderFn:o?o(R):A,darkTheme:!0,placement:E},x),n)},V=function(e){var n=e.children,t=e.flag,r=e.isVisible,i=void 0===r||r,o=u()(e,["children","flag","isVisible"]),a=(0,m.f)().isWorkingPreview,s=(0,v.H)().value;return a||null!=s&&s.dismissableFlags.includes(t)||!s||!i?n:d.createElement(E,l()({flag:t,viewer:s},o),n)}},27927:(e,n,t)=>{"use strict";t.d(n,{X:()=>ie,w:()=>le});var r=t(28655),i=t.n(r),l=t(63038),o=t.n(l),a=t(71439),s=t(67294),u=t(46829),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},d=t(25735),m=t(6443),v=t(14818),f=t(13791),p=t(77355),b=t(8126),w=t(87691),g=t(18627),S=t(66411),h=t(43487),y=t(87498),E=t(78870),V=t(50458),C="after_subscribe_membership_upsell",_=function(e){var n=e.user,t=e.isVisible,r=e.hide,i=(0,h.v9)((function(e){return e.config.authDomain})),l=(0,g.Av)(),a=(0,m.H)(),_=a.value,I=a.loading,k=!!(0,d.VB)({name:"enable_referred_memberships",placeholder:!1});s.useEffect((function(){var e;I||null!=_&&_.postSubscribeMembershipUpsellShownAt||(l.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:C}),M())}),[I]);var x=(0,u.useMutation)(c,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==_?void 0:_.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),M=o()(x,1)[0];return k?s.createElement(S.cW,{source:{name:C}},s.createElement(f.v,{isVisible:t,hide:r,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,t;l.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:C}),t=(0,E.Rk)((0,V.c5p)(i),{subscribeToUserId:n.id,source:C}),window.location.href=t},showCancelButton:!0,isDestructiveAction:!1},s.createElement(p.x,{marginBottom:"24px"},s.createElement(v.z,{miroId:n.imageId||y.gG,alt:n.name||"",diameter:80,freezeGifs:!1})),s.createElement(p.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},s.createElement(b.F1,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),s.createElement(p.x,{marginBottom:"32px"},s.createElement(w.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",n.name," and other writers you read. Get full access to every story on Medium.")))):null},I=t(76107),k=t(77280),x=t(61279),M=t(93661),P=t(98863),F=t(26350),N=t(43822),O=t(62685),T=t(47230),U=t(73917),D=t(26244),R=t(1383),A=t(14646),B=t(31889),L=t(34135),j=t(97217),Y=t(78285);function $(){return($=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var G=s.createElement("path",{d:"M14 7.29L15.6 9 18 6M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),z=s.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52"});const H=function(e){return s.createElement("svg",$({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),G,z)};function W(){return(W=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Q=s.createElement("path",{d:"M24 13l2 2 3-3.5M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),q=s.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const J=function(e){return s.createElement("svg",W({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),Q,q)};function K(){return(K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var X=s.createElement("path",{d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),Z=s.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11"});const ee=function(e){return s.createElement("svg",K({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),X,Z)};var ne=t(14856),te=t(68894);function re(){var e=i()(["\n  fragment UserSubscribeButton_user on User {\n    id\n    isPartnerProgramEnrolled\n    name\n    viewerEdge {\n      id\n      isFollowing\n      isUser\n    }\n    viewerIsUser\n    newsletterV3 {\n      id\n      ...useNewsletterV3Subscription_newsletterV3\n    }\n    ...useNewsletterV3Subscription_user\n    ...MembershipUpsellModal_user\n  }\n  ","\n  ","\n  ","\n"]);return re=function(){return e},e}var ie=function(e){var n=e.user,t=e.showFirstUseToolTip,r=void 0!==t&&t,i=e.showMembershipUpsellModal,l=void 0!==i&&i,a=e.showPostFollowSubscribeTooltip,u=void 0!==a&&a,c=e.hidePostFollowSubscribeTooltip,v=void 0===c?function(){}:c,f=e.isVisible,b=void 0===f||f,y=e.isCompact,C=void 0!==y&&y,I=s.useRef(null),$=(0,A.I)(),G=(0,B.F)(),z=(0,m.H)().value,W=(0,te.O)(!1),Q=o()(W,3),q=Q[0],K=Q[1],X=Q[2],Z=n.newsletterV3,re=(0,Y.w)(),ie=(0,g.Av)(),le=(0,S.pK)(),oe=(0,S.Qi)(),ae=(0,k.PM)(),se=(0,x.oT)({newsletterV3:Z,creator:n,newsletterName:n.name||void 0}),ue=se.isSubscribed,ce=se.hasError,de=se.loading,me=se.setSubscribe,ve=j.T3.WRITER_SUBSCRIPTIONS_TOOLTIP,fe=!(null==z||!z.dismissableFlags.includes(ve)),pe=!!(0,d.VB)({name:"enable_referred_memberships",placeholder:!1}),be=(0,h.v9)((function(e){return e.config.authDomain})),we=(0,E.Rk)((0,V.c5p)(be),{subscribeToUserId:n.id,source:oe}),ge=!(null==z||!z.mediumMemberAt),Se=s.useState(!1),he=o()(Se,2),ye=he[0],Ee=he[1],Ve=s.useState(!1),Ce=o()(Ve,2),_e=Ce[0],Ie=Ce[1],ke=!fe&&r&&!!z&&!ue,xe=(0,S.P7)(ae||"").susiEntry,Me=void 0===xe?"":xe,Pe=["newsletter_v3_promo","writer_subscription_landing"].includes(Me),Fe=["newsletter_v3_promo"].includes(Me),Ne=(0,M.OS)({membershipType:M.FM.Monthly}),Oe=!1,Te=function(){var e;!Oe&&b&&Ue()&&(ie.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=n.newsletterV3)||void 0===e?void 0:e.id)||"",source:le}),Oe=!0)},Ue=function(){var e;if(!I.current)return!1;var n=null===(e=I.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};s.useEffect((function(){return Te(),window&&L.V6.on("scroll",Te),function(){L.V6.off("scroll",Te)}}),[]),s.useEffect((function(){Te()}),[b]);var De=(0,te.O)(!1),Re=o()(De,3),Ae=Re[0],Be=Re[1],Le=Re[2],je=function(e,n){var t=(0,m.H)(),r=t.value,i=t.loading,l=s.useRef(null),o=!!(0,d.VB)({name:"enable_referred_memberships",placeholder:!1}),a=!(null==r||!r.mediumMemberAt),u=(0,k.PM)(),c=(0,S.P7)(u||"").susiEntry,v=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===c?"":c);if(i)return!1;if(null!==l.current)return l.current;var f=o&&v&&!a&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=r&&r.postSubscribeMembershipUpsellShownAt);return l.current=f,f}(n),Ye=s.useState(!1),$e=o()(Ye,2),Ge=$e[0],ze=$e[1];s.useEffect((function(){l&&ue&&!Ge&&je?Be():Le()}),[ue,Ge,je]),s.useEffect((function(){ae&&!je&&Pe&&ue&&(!Fe&&oe===Me||Fe)&&re({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:n.name,newsletterType:j.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return me(!1)}}})}),[ae,ue]),s.useEffect((function(){if(ue&&_e&&Z){var e=pe&&!ge&&!!n.isPartnerProgramEnrolled;e&&ie.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:Z.id,source:oe}),Ee(e),Ie(!1)}}),[ue,_e,Z]);var He=(0,P.f)().isWorkingPreview;if(ce||n.viewerEdge.isUser&&!He)return null;var We,Qe=ue?"OBVIOUS":"STRONG",qe=function(e,n){return function(t){return{stroke:n?t.baseColor.background.normal:e,height:C?"23px":"36px",width:C?"23px":"36px"}}},Je=$(qe(G.accentColor.fill.normal,de)),Ke=$(qe(G.accentColor.background,de));We=ue?C?s.createElement(H,{className:Je}):s.createElement(J,{className:Je}):C?s.createElement(ee,{className:Ke}):s.createElement(ne.Z,{className:Ke});var Xe=s.createElement(T.z,{loading:de,buttonStyle:Qe,onClick:function(){var e;Ie(!ue),z?ue?me(!1):z&&z.allowEmailAddressSharingEditorWriter?me(!0,!1):K():null!==(e=n.newsletterV3)&&void 0!==e&&e.id?ie.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.newsletterV3.id,source:oe}):ie.event("user.LOSubscribeClicked",{targetUserId:n.id,source:oe})},padding:"0","aria-label":"Subscribe"},We),Ze=function(){return s.createElement(p.x,{padding:"14px 12px 20px",maxWidth:"220px"},s.createElement(w.F,{tag:"div",scale:"S",color:"DARKER"},s.createElement("strong",null,"You're subscribed to ",n.name,". Become a member for more.")," Get full access to every story on Medium for ",Ne," a month."),s.createElement(p.x,{paddingTop:"8px"},s.createElement(N.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:we,width:"150px",onClick:function(){ie.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:Z.id,source:oe})}},s.createElement(p.x,{textAlign:"center"},s.createElement(w.F,{scale:"S",color:"WHITE"},"Become a member")))))},en=function(){return s.createElement(p.x,{padding:"10px 12px",maxWidth:"166px"},s.createElement(w.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",n.name," publishes."))},nn=function(e){var n=e.children;return s.createElement(U.J,{isVisible:!!v&&!ue,hide:v,placement:"bottom",popoverRenderFn:en,targetDistance:10,role:"tooltip"},n)},tn=function(e){var n=e.children;return s.createElement(U.J,{isVisible:!de&&ye,hide:function(){return Ee(!1)},placement:"bottom",popoverRenderFn:Ze,targetDistance:10,role:"tooltip"},n)},rn=function(e){var n=e.children;return s.createElement(D.$,{isVisible:!de&&!ue,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:en,role:"tooltip",targetDistance:10},n)},ln=function(e){var n=e.children;return s.createElement(O.o,{isVisible:!de,flag:ve,targetDistance:10,text:"You can now subscribe to get stories delivered directly to your inbox.",darkTheme:!0},n)},on=function(e){var n=e.children;return ke?s.createElement(ln,null,n):u&&!ue?s.createElement(nn,null,n):ye?s.createElement(tn,null,n):s.createElement(rn,null,n)};return s.createElement("div",{ref:I},s.createElement(on,null,s.createElement(p.x,null,z&&s.createElement(R.Q,{onConfirm:function(){me(!0,!0)},isVisible:q,hide:X,titleText:"Confirm your subscription to ".concat(n.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),z?Xe:s.createElement(F.R9,{operation:"register",newsletterV3:Z,user:n,actionUrl:Z?(0,V.Zul)(Z.id):(0,V.lcz)(n.id),susiEntry:"subscribe_user"},Xe))),Ae&&s.createElement(_,{user:n,isVisible:Ae,hide:function(){ze(!0),Le()}}))},le=(0,a.Ps)(re(),x.DI,x.nj,I.b)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3928.19e84a4b.chunk.js.map