(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),s=n.n(i),a=n(13),d=n.n(a),r=(n(20),n(4)),o=n(14),j=n.n(o),l=(n(38),n(39),n.p+"static/media/cloud1.7deddd7e.png"),u=n.p+"static/media/cloud2.aa9fde0e.png",p=n.p+"static/media/cloud3.5eb22167.png",m=n.p+"static/media/cloud4.277ceeda.png",h=n.p+"static/media/cloud5.24f80ed6.png";var b=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(null),d=Object(r.a)(a,2),o=d[0],b=d[1];function g(e,t){var n=new Date(0);n.setSeconds(e);var c=n.getTime()+6e4*n.getTimezoneOffset();return new Date(c+1e3*t).toLocaleTimeString()}return Object(c.jsxs)("div",{id:"App",children:[Object(c.jsx)("div",{id:"clouds",children:[l,u,p,m,h].map((function(e,t){return Object(c.jsx)("img",{id:"i"+(t+1),src:e,alt:""},t)}))}),Object(c.jsxs)("div",{id:"content",children:[Object(c.jsx)("input",{spellCheck:"false",autoComplete:"off",id:"input",onChange:function(e){return s(e.target.value)},placeholder:"enter city name..."}),Object(c.jsx)("button",{id:"btn",onClick:function(){""!==n.trim()&&j.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("caf296e0ce821b81e46d2df84c527bc6","&units=metric")).then((function(e){var t=e.data;b(t),document.getElementById("input").value=t.name+(t.sys.country?", "+t.sys.country:""),document.getElementById("App").style.background="n"===t.weather[0].icon[2]?"linear-gradient(160deg, #000000 0%, #505050 100%)":"linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)"})).catch((function(e){return console.log(e)}))},children:"checkout"}),null!==o?Object(c.jsxs)("div",{id:"desccont",children:[Object(c.jsxs)("div",{id:"tempcont",children:[Object(c.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(o.weather[0].icon,"@2x.png"),alt:""}),Object(c.jsxs)("p",{id:"temp",children:[o.main.temp,"\xb0C"]})]}),Object(c.jsx)("p",{id:"desc",children:o.weather[0].main}),Object(c.jsx)("p",{id:"time",children:function(e){var t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset(),c=new Date(n+1e3*e);return c.toDateString()+" "+c.toLocaleTimeString()}(o.timezone)}),Object(c.jsxs)("section",{id:"maxmincont",children:[Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:"Min"}),Object(c.jsxs)("p",{children:[o.main.temp_min,"\xb0C"]})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:"Max"}),Object(c.jsxs)("p",{children:[o.main.temp_max,"\xb0C"]})]})]}),Object(c.jsxs)("section",{id:"maxmincont",children:[Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:"Sunrise"}),Object(c.jsx)("p",{children:g(o.sys.sunrise,o.timezone)})]}),Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:"Sunset"}),Object(c.jsx)("p",{children:g(o.sys.sunset,o.timezone)})]})]})]}):null]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};d.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.1201bf1d.chunk.js.map