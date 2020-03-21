(this["webpackJsonpsleep-tracker"]=this["webpackJsonpsleep-tracker"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=function(){var e=Math.floor(2*Math.random()+1)%2===0?"\ud83c\udf19":"\ud83d\udca4";return r.a.createElement("h2",{className:"header"},"Restly.app",r.a.createElement("sup",null,r.a.createElement("sup",null,e)))},s=a(1),u=a(5),i=a(2),m=function(e,t){var a;switch(t.type){case"UPDATE_SLEEPHOURSGOAL":return localStorage.setItem("sleepHoursGoal",t.payload),Object(i.a)({},e,{sleepHoursGoal:t.payload});case"DELETE_SLEEPENTRY":return a=e.sleepEntries.filter((function(e){return e.id!==t.payload})),localStorage.setItem("sleepEntries",JSON.stringify(a)),Object(i.a)({},e,{sleepEntries:a});case"ADD_SLEEPENTRY":return a=[t.payload].concat(Object(u.a)(e.sleepEntries)),localStorage.setItem("sleepEntries",JSON.stringify(a)),Object(i.a)({},e,{sleepEntries:a});default:return e}},E={sleepHoursGoal:+localStorage.getItem("sleepHoursGoal")||8,sleepEntries:localStorage.getItem("sleepEntries")?JSON.parse(localStorage.getItem("sleepEntries")).map((function(e){return e.dateAdded=new Date(e.dateAdded),e.date=new Date(e.date),e.startTime=new Date(e.startTime),e.endTime=new Date(e.endTime),e})):[]},p=Object(n.createContext)(E),d=function(e){var t=e.children,a=Object(n.useReducer)(m,E),l=Object(s.a)(a,2),c=l[0],o=l[1];return r.a.createElement(p.Provider,{value:{sleepHoursGoal:c.sleepHoursGoal,sleepEntries:c.sleepEntries,updateSleepHoursGoal:function(e){o({type:"UPDATE_SLEEPHOURSGOAL",payload:e})},deleteSleepEntry:function(e){o({type:"DELETE_SLEEPENTRY",payload:e})},addSleepEntry:function(e){o({type:"ADD_SLEEPENTRY",payload:e})}}},t)},f=function(){var e=Object(n.useContext)(p),t=e.sleepHoursGoal,a=e.updateSleepHoursGoal,l=Object(n.useState)(),c=Object(s.a)(l,2)[1],o=r.a.useCallback((function(){return c({})}),[]);return r.a.createElement("div",null,r.a.createElement("h4",null,"My Goal ",r.a.createElement("span",{className:"hint"},"(click to edit)")),r.a.createElement("h1",null,r.a.createElement("span",{contentEditable:!0,onInput:function(e){var n;(n=+(n=e.target.innerHTML))<=24?(a(n),o()):(a(t),o())}},t)," ","hours",r.a.createElement("span",{className:"hint"}," per night")))},g=function(e){var t=parseInt(e/1e3,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60);return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)},S=function(){var e,t=Object(n.useContext)(p),a=t.sleepHoursGoal,l=t.sleepEntries,c=l.reduce((function(e,t){return t.durationHours>=a&&(e+=1),e}),0),o=l.filter((function(e){return e.durationHours<a}));if(0!==o.length){var s=36e5*o.reduce((function(e,t){return e+(a-t.durationHours)}),0)/o.length;e=g(s)}else e="0:00";return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Rested Nights"),r.a.createElement("p",{className:"stats plus"},c)),r.a.createElement("div",null,r.a.createElement("h4",null,"AVG Deficit"),r.a.createElement("p",{className:"stats minus"},e||"0:00")))},v=function(e){var t=e.sleepEntry,a=Object(n.useContext)(p),l=a.sleepHoursGoal,c=a.deleteSleepEntry,o=t.id,s=t.date,u=t.startTime,i=t.endTime,m=(t.notes,t.durationHHMM),E=t.durationHours,d=u.toLocaleTimeString().substring(0,5),f=i.toLocaleTimeString().substring(0,5);return r.a.createElement("li",{className:E<l?"minus":"plus"},s.toDateString()," ",r.a.createElement("span",{className:"timeRange"},"(",d,"\u2192",f,")")," ",r.a.createElement("span",null,m),r.a.createElement("button",{className:"delete-btn",onClick:function(){return c(o)}},"x"))},b=function(){var e=Object(n.useContext)(p).sleepEntries;return r.a.createElement("div",null,r.a.createElement("h3",null,"Entries"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,sleepEntry:e})}))))},h=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(null),E=Object(s.a)(m,2),d=E[0],f=E[1],S=Object(n.useState)(""),v=Object(s.a)(S,2),b=v[0],h=v[1],D=Object(n.useContext)(p).addSleepEntry,O=(new Date).toLocaleTimeString("en-us",{timeZoneName:"short"}).split(" ")[2],y=(new Date).toDateString();return Object(n.useEffect)((function(){if(a){var e=a.toDateString();if(u){var t=u.toLocaleTimeString(),n=new Date("".concat(e," ").concat(t," ").concat(O));n.getHours()>=12&&n.setHours(n.getHours()-24),i(n)}if(d){var r=d.toLocaleTimeString(),l=new Date("".concat(e," ").concat(r," ").concat(O));f(l)}}}),[a]),r.a.createElement("div",null,r.a.createElement("h3",null,"Add new entry"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&u&&d){var t=d.getTime()-u.getTime();if(t<0)alert("Enter a valid time range.");else{var n=g(t),r=t/36e5,l={id:Math.floor(1e12*Math.random()),dateAdded:new Date,date:a,startTime:u,endTime:d,notes:b,durationHHMM:n,durationHours:r};D(l)}}}},r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"date",onChange:function(e){return l(new Date(e.target.value+" "+O))}})),r.a.createElement("label",{htmlFor:"amount"},"Start End"),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"time",onChange:function(e){var t;(t=a?new Date("".concat(a.toDateString()," ").concat(e.target.value," ").concat(O)):new Date("".concat(y," ").concat(e.target.value," ").concat(O))).getHours()>=12&&t.setHours(t.getHours()-24),i(t)}}),r.a.createElement("input",{type:"time",onChange:function(e){f(a?new Date("".concat(a.toDateString()," ").concat(e.target.value," ").concat(O)):new Date("".concat(y," ").concat(e.target.value," ").concat(O)))}})),r.a.createElement("label",{htmlFor:"note"},"Notes"),r.a.createElement("div",{className:"form-control"},r.a.createElement("textarea",{type:"text",autoComplete:"off",spellCheck:"false",autoCorrect:"off",onChange:function(e){return h(e.target.value)}})),r.a.createElement("button",{className:"btn"},"Add entry")))};a(11);var D=function(){return r.a.createElement(d,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(S,null),r.a.createElement(b,null),r.a.createElement(h,null)))};c.a.render(r.a.createElement(D,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.c7ba808f.chunk.js.map