(this.webpackJsonpamy=this.webpackJsonpamy||[]).push([[0],[,function(e,a,t){e.exports={container:"Tile_container__3B4Yg",track:"Tile_track__2NpBT",main:"Tile_main__9Bs6s",song:"Tile_song__bDX2T",artist:"Tile_artist__3FiL9",label:"Tile_label__2tjXM",image:"Tile_image__VAH2Z",overlay:"Tile_overlay__1kRUF",showImg:"Tile_showImg__3n_hP",featureTitle:"Tile_featureTitle__3AvAS",drop:"Tile_drop__6jfcu",tools:"Tile_tools__2nIrj",heading:"Tile_heading__2nf7U",radio1Container:"Tile_radio1Container__1xdL8",radio1Square:"Tile_radio1Square__1EIaH",featureSquare:"Tile_featureSquare__249Gw"}},function(e,a,t){e.exports={container:"FrontTile_container__1LLQN",main:"FrontTile_main__1fctR",drop:"FrontTile_drop__xqF7M",date:"FrontTile_date__2gGdO",title:"FrontTile_title__1MDsE",features:"FrontTile_features__1C5o9",image:"FrontTile_image__2ZpFM",tools:"FrontTile_tools__1i4EU",heading:"FrontTile_heading__ZHzMx"}},,,,,function(e,a,t){e.exports={title:"App_title__27z2F",heading:"App_heading__1naiI",upload:"App_upload__lHwEp"}},,,,function(e,a,t){e.exports={title:"Tiles_title__3ELMY",container:"Tiles_container___teq1"}},,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),i=(t(19),t(13)),o=t(3),s=t(10),u=t.n(s),m=t(12),d=t(6),p=t(4),f=t.n(p),g=t(5),_=t(1),E=t.n(_),h=function(e){return r.a.createElement("section",{className:E.a.tools},r.a.createElement("button",{onClick:function(){e.renderImage()}},"Convert to .png")," - ",r.a.createElement("button",{onClick:function(){e.dispatch({type:"isFeature/set",payload:!e.isFeature})}},"Toggle feature"),r.a.createElement("br",null),e.isFeature&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"image"},"Background image"),r.a.createElement("input",{id:"image",type:"file",accept:".png, .jpg, .jpeg",onChange:function(a){var t=a.target;if(null!=t.files&&t.files.length>0){var n=t.files[0],r=document.createElement("img");r.src=URL.createObjectURL(n),e.addImage(r)}}})," - ",r.a.createElement("button",{onClick:function(){e.removeImage()}},"Remove image"),r.a.createElement("br",null),r.a.createElement("label",null,"Feature title:",r.a.createElement("input",{type:"text",value:e.feature,onChange:function(a){var t=a.target;e.dispatch({type:"feature/set",payload:t.value})}}))))},v=function(){return r.a.createElement("section",{className:E.a.radio1Container},"R",r.a.createElement("span",{className:E.a.drop},"a"),"dio 1",r.a.createElement("div",{className:E.a.radio1Square}))},b=function(e){return e.split("<br>").map((function(e,a,t){return t.length-1>a?r.a.createElement("span",{key:a},e,r.a.createElement("br",null)):e}))},y=function(e,a){var t=function(e){return e>9?e.toString():"0".concat(e)};return"_".concat(t(a),"--").concat(t(e.getMonth()+1),"-").concat(t(e.getDate()),".png")},T={showImg:!1,isFeature:!1,feature:"Enter feature..."},F=function(e,a){return Object(d.a)(e,(function(e){switch(a.type){case"showImage/set":e.showImg=a.payload;break;case"isFeature/set":e.isFeature=a.payload;break;case"feature/set":e.feature=a.payload}}))},N=function(e){var a=Object(n.useReducer)(F,T),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useRef)(null),s=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:E.a.heading},"Tile ",e.page),r.a.createElement("section",{ref:i,className:"".concat(E.a.container," ").concat(l.showImg?E.a.showImg:"")},r.a.createElement("div",{ref:s,className:E.a.image}),1===e.page&&r.a.createElement(v,null),l.isFeature&&r.a.createElement("div",{className:E.a.featureTitle},r.a.createElement("div",{className:E.a.featureSquare})," ",l.feature.toUpperCase().split("").map((function(e,a){return/A|E/.test(e)?r.a.createElement("span",{key:a,className:E.a.drop},e):e}))),e.data.map((function(e,a){return r.a.createElement("div",{key:a,className:E.a.track},r.a.createElement("div",{className:E.a.main},r.a.createElement("span",{className:E.a.artist},b(e.Artist)," -")," ",r.a.createElement("span",{className:E.a.song},b(e.Song))),r.a.createElement("div",{className:E.a.label},"(",e.Label,")"))}))),r.a.createElement(h,{addImage:function(e){if(c({type:"showImage/set",payload:!0}),null!=s.current){s.current.innerHTML="";var a=document.createElement("div");a.classList.add(E.a.overlay),s.current.appendChild(a),s.current.appendChild(e)}},removeImage:function(){c({type:"showImage/set",payload:!1}),null!=s.current&&(s.current.innerHTML="")},dispatch:c,isFeature:l.isFeature,feature:l.feature,renderImage:function(){null!=i.current&&f.a.toBlob(i.current).then((function(a){Object(g.saveAs)(a,y(new Date,e.page+1))}))}}))},w=t(2),j=t.n(w),C=function(){var e=new Date;return e.getFullYear().toString()+"-"+(e.getMonth()+1).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")},I=function(e,a){return Object(d.a)(e,(function(e){switch(a.type){case"feature/set":e.features=a.payload;break;case"date/set":e.date=a.payload}}))},k={date:C(),features:"Here's a feature \n another"},O=function(){var e=Object(n.useReducer)(I,k),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useRef)(null),i=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:j.a.heading},"Front tile"),r.a.createElement("section",{className:j.a.container,ref:i},r.a.createElement("div",{ref:c,className:j.a.image}),r.a.createElement("div",{className:j.a.main},r.a.createElement("div",{className:j.a.date},function(e){var a=e.split("-").map((function(e){return parseInt(e)})),t=new Date(a[0],--a[1],a[2]);return new Intl.DateTimeFormat("en-GB",{year:"2-digit",month:"2-digit",day:"2-digit"}).format(t).replace(/\//g,"-")}(t.date)),r.a.createElement("div",{className:j.a.title},r.a.createElement("span",null,"B",r.a.createElement("span",{className:j.a.drop},"E"),"NJI B."),r.a.createElement("span",null,"TR",r.a.createElement("span",{className:j.a.drop},"A"),"CKLIST")),r.a.createElement("div",{className:j.a.features},t.features))),r.a.createElement("div",{className:j.a.tools},r.a.createElement("button",{onClick:function(){null!=i.current&&f.a.toBlob(i.current).then((function(e){var a=t.date.split("-").map((function(e){return parseInt(e)})),n=new Date(a[0],--a[1],a[2]);Object(g.saveAs)(e,y(n,1))}))}},"Convert to .png"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"image"},"Background image: "),r.a.createElement("input",{id:"image",type:"file",accept:".png, .jpg, .jpeg",onChange:function(e){var a=e.target;if(null!=a.files&&a.files.length>0){var t=a.files[0],n=document.createElement("img");n.src=URL.createObjectURL(t),function(e){if(null!=c.current){c.current.innerHTML="";var a=document.createElement("div");a.classList.add(j.a.overlay),c.current.appendChild(a),c.current.appendChild(e)}}(n)}}}),r.a.createElement("br",null),r.a.createElement("label",null,"Features:"," ",r.a.createElement("textarea",{rows:3,value:t.features,onChange:function(e){var a=e.target;l({type:"feature/set",payload:a.value})}})),r.a.createElement("br",null),r.a.createElement("label",null,"Date:"," ",r.a.createElement("input",{type:"date",value:t.date,onChange:function(e){var a=e.target;""!==a.value?l({type:"date/set",payload:a.value}):l({type:"date/set",payload:C()})}}))))},S=t(11),L=t.n(S),A=function(e){return r.a.createElement("section",{className:L.a.container},r.a.createElement(O,null),e.data.reduce((function(e,a){return e.includes(a.Page)?e:[].concat(Object(m.a)(e),[a.Page])}),[]).map((function(a,t){return r.a.createElement(N,{key:t,page:a,data:e.data.filter((function(e){return e.Page===a}))})})))},R=t(7),B=t.n(R);var x=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:B.a.heading},r.a.createElement("h1",{className:B.a.title},"Amy's App"),r.a.createElement("fieldset",{className:B.a.upload},r.a.createElement("legend",null,"Upload a CSV file"),r.a.createElement("input",{type:"file",accept:".csv",onChange:function(e){var a=e.target;if(null!=a.files&&a.files.length>0){var t=a.files[0],n=new FileReader;n.onload=function(){"string"===typeof n.result&&u()().fromString(n.result).then((function(e){try{l(e.map((function(e){return Object(i.a)({},e,{Page:parseInt(e.Page)})})))}catch(a){console.error("invalid data")}}))},n.readAsText(t)}}}),t.length>0&&r.a.createElement("button",{onClick:function(){l([])}},"Clear tiles"),r.a.createElement("br",null),"Headers must be ",r.a.createElement("code",null,"Song,Artist,Label,Page"))),r.a.createElement(A,{data:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.b3c2227d.chunk.js.map