(this["webpackJsonpsleep-tracker"]=this["webpackJsonpsleep-tracker"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=function(e){return r.a.createElement("h2",{className:"header"},e.title)},u=a(1),s=a(5),i=a(2),E=function(e,t){switch(t.type){case"UPDATE_SLEEPHOURSGOAL":return Object(i.a)({},e,{sleepHoursGoal:t.payload});case"DELETE_SLEEPENTRY":return Object(i.a)({},e,{sleepEntries:e.sleepEntries.filter((function(e){return e.id!==t.payload}))});case"ADD_SLEEPENTRY":return Object(i.a)({},e,{sleepEntries:[t.payload].concat(Object(s.a)(e.sleepEntries))});default:return e}},m={sleepHoursGoal:8,sleepEntries:[]},p=Object(n.createContext)(m),d=function(e){var t=e.children,a=Object(n.useReducer)(E,m),l=Object(u.a)(a,2),c=l[0],o=l[1];return r.a.createElement(p.Provider,{value:{sleepHoursGoal:c.sleepHoursGoal,sleepEntries:c.sleepEntries,updateSleepHoursGoal:function(e){o({type:"UPDATE_SLEEPHOURSGOAL",payload:e})},deleteSleepEntry:function(e){o({type:"DELETE_SLEEPENTRY",payload:e})},addSleepEntry:function(e){o({type:"ADD_SLEEPENTRY",payload:e})}}},t)},f=function(){var e=Object(n.useContext)(p),t=e.sleepHoursGoal,a=e.updateSleepHoursGoal,l=r.a.useState(),c=Object(u.a)(l,2)[1],o=r.a.useCallback((function(){return c({})}),[]);return r.a.createElement("div",null,r.a.createElement("h4",null,"My Goal"),r.a.createElement("h1",null,r.a.createElement("span",{contentEditable:!0,onInput:function(e){var n;(n=+(n=e.target.innerHTML))<=24?(a(n),o()):(a(t),o())}},t)," ","hours"))},v=function(e){var t=parseInt(e/1e3,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60);return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)},b=function(){var e,t=Object(n.useContext)(p),a=t.sleepHoursGoal,l=t.sleepEntries,c=l.reduce((function(e,t){return t.durationHours>=a&&(e+=1),e}),0),o=l.filter((function(e){return e.durationHours<a}));if(0!==o.length){var u=36e5*o.reduce((function(e,t){return e+(a-t.durationHours)}),0)/o.length;e=v(u)}else e="0:00";return console.log(o),console.log(e),r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Rested Days"),r.a.createElement("p",{className:"stats plus"},c)),r.a.createElement("div",null,r.a.createElement("h4",null,"AVG Deficit"),r.a.createElement("p",{className:"stats minus"},e||"0:00")))},g=function(e){var t=e.sleepEntry,a=Object(n.useContext)(p),l=a.sleepHoursGoal,c=a.deleteSleepEntry,o=t.id,u=t.date,s=(t.startTime,t.endTime,t.notes,t.durationHHMM),i=t.durationHours;return r.a.createElement("li",{className:i<l?"minus":"plus"},u.toDateString()," ",r.a.createElement("span",null,s),r.a.createElement("button",{className:"delete-btn",onClick:function(){return c(o)}},"x"))},S=function(){var e=Object(n.useContext)(p).sleepEntries;return r.a.createElement("div",null,r.a.createElement("h3",null,"Entries"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(g,{key:e.id,sleepEntry:e})}))))},h=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),s=o[0],i=o[1],E=Object(n.useState)(null),m=Object(u.a)(E,2),d=m[0],f=m[1],b=Object(n.useState)(""),g=Object(u.a)(b,2),S=g[0],h=g[1],H=Object(n.useContext)(p).addSleepEntry,y=(new Date).toLocaleTimeString("en-us",{timeZoneName:"short"}).split(" ")[2],D=(new Date).toDateString();return Object(n.useEffect)((function(){if(a){var e=a.toDateString();if(s){var t=s.toLocaleTimeString(),n=new Date("".concat(e," ").concat(t," ").concat(y));n.getHours()>=12&&n.setHours(n.getHours()-24),i(n)}if(d){var r=d.toLocaleTimeString(),l=new Date("".concat(e," ").concat(r," ").concat(y));f(l)}}}),[a]),r.a.createElement("div",null,r.a.createElement("h3",null,"Add new entry"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&s&&d){var t=d.getTime()-s.getTime();if(t<0)alert("Enter a valid time range.");else{var n=v(t),r=t/36e5,l={id:Math.floor(1e12*Math.random()),date:a,startTime:s,endTime:d,notes:S,durationHHMM:n,durationHours:r};H(l)}}}},r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"date",onChange:function(e){return l(new Date(e.target.value+" "+y))}})),r.a.createElement("label",{htmlFor:"amount"},"Start End"),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"time",onChange:function(e){var t;(t=a?new Date("".concat(a.toDateString()," ").concat(e.target.value," ").concat(y)):new Date("".concat(D," ").concat(e.target.value," ").concat(y))).getHours()>=12&&t.setHours(t.getHours()-24),i(t)}}),r.a.createElement("input",{type:"time",onChange:function(e){f(a?new Date("".concat(a.toDateString()," ").concat(e.target.value," ").concat(y)):new Date("".concat(D," ").concat(e.target.value," ").concat(y)))}})),r.a.createElement("label",{htmlFor:"note"},"Notes"),r.a.createElement("div",{className:"form-control"},r.a.createElement("textarea",{type:"text",autoComplete:"off",spellCheck:"false",autoCorrect:"off",onChange:function(e){return h(e.target.value)}})),r.a.createElement("button",{className:"btn"},"Add entry")))};a(11);var H=function(){return r.a.createElement(d,null,r.a.createElement(o,{title:"Sleep Tracker\u2122"}),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(S,null),r.a.createElement(h,null)))};c.a.render(r.a.createElement(H,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.aacb25ee.chunk.js.map