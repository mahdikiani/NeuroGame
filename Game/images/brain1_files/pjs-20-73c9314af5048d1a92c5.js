webpackJsonp([20],{P0Ho:function(e,a,t){"use strict";function r(e){var a=e.pin,t=e.types,r=a.promoter,i=a.videos;if(t.includes("oneTap"))return n.a.createElement(m.b,{paddingY:1},n.a.createElement(g.a,{text:(r||{}).full_name,icon:"arrow-up-right"}));if(t.includes("video")){var d=(i&&i.video_list[Object.keys(i.video_list)[0]]||{}).duration,s=void 0===d?0:d;return n.a.createElement(m.b,{paddingY:1},n.a.createElement(g.a,{text:Object(c.a)(s),icon:"play"}))}return t.includes("gif")?n.a.createElement(m.b,{paddingY:1},n.a.createElement(g.a,{icon:"gif"})):t.includes("product")?n.a.createElement(m.b,{paddingY:1},n.a.createElement(g.a,{text:Object(u.c)(a),icon:"tag"})):t.includes("recipe")?a.rich_summary&&a.rich_summary.aggregate_rating&&a.rich_summary.aggregate_rating.review_count?n.a.createElement(m.b,{paddingY:1},n.a.createElement(g.a,{text:a.rich_summary.aggregate_rating.review_count.toString(),icon:"star",rating:a.rich_summary&&a.rich_summary.aggregate_rating?a.rich_summary.aggregate_rating.rating_value:"",max_rating:a.rich_summary&&a.rich_summary.aggregate_rating?a.rich_summary.aggregate_rating.best_rating:""})):null:void 0}Object.defineProperty(a,"__esModule",{value:!0}),a.default=r;var i=t("d6ZO"),n=t.n(i),c=t("uOsP"),g=t("DZnV"),m=t("gEaE"),u=t("te8a")}});