(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(3),o=s.n(c),n=s(4),a=s(5),d=s(7),r=s(6),l=s(1),i=s.n(l),u=(s(12),s(0)),h=[" Dumplings"," Carrot"," Eggs"," Ice cream"," Apple"," Bread"," Fish"," Honey"," Jam"," Garlic"],b=function(e){Object(d.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(n.a)(this,s);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.getMessage=function(){var t="";switch(e.state.selectedGoods.length){case 0:t="No goods selected";break;case 1:t="".concat(e.state.selectedGoods[0]," is selected");break;case 2:t="".concat(e.state.selectedGoods[0]," and ").concat(e.state.selectedGoods[1]," are selected");break;default:t="".concat(e.state.selectedGoods.slice(0,e.state.selectedGoods.length-1)," and ").concat(e.state.selectedGoods[e.state.selectedGoods.length-1]," are selected")}return t},e.getButton=function(t){return Object(u.jsx)("button",{type:"button",onClick:function(){e.selector(t)},children:e.state.selectedGoods.includes(t)?"Remove":"Add"})},e.selector=function(t){var s=e.state.selectedGoods;s.includes(t)?s.splice(s.indexOf(t),1):s.push(t),e.setState((function(e){return{selectedGoods:e.selectedGoods}}))},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:this.getMessage()}),Object(u.jsx)("ul",{children:h.map((function(t){return Object(u.jsxs)("li",{className:e.state.selectedGoods.includes(t)?"added":"",children:[t,e.getButton(t)]},t)}))})]})}}]),s}(i.a.Component),g=b;o.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.85152e20.chunk.js.map