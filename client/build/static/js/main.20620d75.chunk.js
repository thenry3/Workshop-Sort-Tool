(this.webpackJsonpworkshop_sort_tool=this.webpackJsonpworkshop_sort_tool||[]).push([[0],{27:function(e,t){},37:function(e,t,n){e.exports=n(52)},46:function(e,t){},47:function(e,t){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(15),s=n(5),l=n(7),u=n(8),d=n(10),f=n(9),b=n(11),h=n(1),m=n(2),p=n(6),v=n(23),j=n(29),O=n(16),g=n.n(O),y=n(30);function w(){var e=Object(h.a)(["\n  margin-top: 3vh;\n  border: black 1.5px solid;\n  text-align: center;\n  padding: 1vh 1vw;\n  align-self: center;\n  cursor: pointer;\n  transition: 0.1s;\n  margin: auto 2vw;\n  &:hover {\n    border: #00b4f5 1.5px solid;\n    color: #00b4f5;\n  }\n"]);return w=function(){return e},e}function S(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return S=function(){return e},e}function E(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return E=function(){return e},e}var k=Object(m.a)("div")(E()),x=Object(m.a)("div")(S()),C=Object(m.a)("div")(w()),A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).makeXLSX=n.makeXLSX.bind(globalThis),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"makeXLSX",value:function(){var e=this.props.data.columns,t=[];for(var n in this.props.data.matches)t.push([n.Name,n.Email]+n.Matches);e+=t;var a=g.a.utils.aoa_to_sheet(e),r=g.a.utils.book_new();r.SheetNames.push("Workshop Assignments"),r.Sheets["Workshop Assignments"]=a;for(var i=g.a.write(r,{bookType:"xlsx",type:"binary"}),o=new ArrayBuffer(i.length),c=new Uint8Array(o),s=0;s<i.length;s++)c[s]=255&i.charCodeAt(s);this.setState({loading:!1,blob:new Blob([o],{type:"application/octet-stream"})})}},{key:"componentWillMount",value:function(){this.setState({loading:!0}),console.log(this.props.data)}},{key:"downloadXLSX",value:function(){Object(y.saveAs)(this.state.blob,"wsAssignments.xlsx")}},{key:"render",value:function(){return this.state.loading?r.a.createElement("p",null,"LOADING MORE DICK!!!"):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement(C,null,"Download CSV"),r.a.createElement(C,{onClick:this.makeXLSX},"Download Excel"))))}}]),t}(r.a.Component);function F(){var e=Object(h.a)(["\n  margin-top: 3vh;\n  border: black 1.5px solid;\n  text-align: center;\n  padding: 1vh 1vw;\n  width: 30%;\n  align-self: center;\n  cursor: pointer;\n  transition: 0.1s;\n  &:hover {\n    border: #00b4f5 1.5px solid;\n    color: #00b4f5;\n  }\n"]);return F=function(){return e},e}function X(){var e=Object(h.a)(["\n  height: 1.6em;\n  width: 1.6em;\n  margin-right: 10px;\n  cursor: pointer;\n  &:hover {\n    color: #00b4f5;\n  }\n"]);return X=function(){return e},e}function M(){var e=Object(h.a)(["\n  height: 1.6em;\n  width: 1.6em;\n  cursor: pointer;\n  &:hover {\n    color: #00b4f5;\n  }\n"]);return M=function(){return e},e}function L(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 2vh;\n"]);return L=function(){return e},e}function D(){var e=Object(h.a)(["\n  line-height: 1;\n"]);return D=function(){return e},e}function I(){var e=Object(h.a)(["\n  font-size: 1vw;\n  margin: auto 0px;\n"]);return I=function(){return e},e}function T(){var e=Object(h.a)(["\n  display: flex;\n  margin-bottom: 1vh;\n  justify-content: space-between;\n  width: 25%;\n"]);return T=function(){return e},e}function _(){var e=Object(h.a)([""]);return _=function(){return e},e}function W(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return W=function(){return e},e}function B(){var e=Object(h.a)(["\n  color: black;\n  width: 100%;\n"]);return B=function(){return e},e}function N(){var e=Object(h.a)(["\n  font-size: 1vw;\n  margin-right: 2vw;\n"]);return N=function(){return e},e}function P(){var e=Object(h.a)([""]);return P=function(){return e},e}function U(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);return U=function(){return e},e}function z(){var e=Object(h.a)(['\n  display: flex;\n  flex-direction: column;\n  border: black solid 2px;\n  padding: 2vw;\n  font-family: "Montserrat", sans-serif;\n  width: 40%;\n']);return z=function(){return e},e}var G=Object(m.a)("div")(z()),J=Object(m.a)("div")(U()),K=Object(m.a)("input")(P()),R=Object(m.a)("p")(N()),V=Object(m.a)("hr")(B()),Y=Object(m.a)("div")(W()),q=Object(m.a)("p")(_()),$=Object(m.a)("div")(T()),H=Object(m.a)("p")(I()),Q=Object(m.a)("input")(D()),Z=Object(m.a)("div")(L()),ee=Object(m.a)(v.b)(M()),te=Object(m.a)(v.a)(X()),ne=Object(m.a)("div")(F()),ae=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).series=[1],n.renderseries=n.renderseries.bind(Object(p.a)(n)),n.updateSeries=n.updateSeries.bind(Object(p.a)(n)),n.addSeries=n.addSeries.bind(Object(p.a)(n)),n.deleteSeries=n.deleteSeries.bind(Object(p.a)(n)),n.storeFile=n.storeFile.bind(Object(p.a)(n)),n.parseAndSend=n.parseAndSend.bind(Object(p.a)(n)),n.set=n.set.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({numSeries:1,PrefFile:null,loading:!1})}},{key:"updateSeries",value:function(e){this.series[e.target.dataset.id]=parseInt(e.target.value),console.log(this.series)}},{key:"addSeries",value:function(){this.setState({numSeries:this.state.numSeries+1}),this.series.push(1)}},{key:"deleteSeries",value:function(){1!==this.state.numSeries&&(this.setState({numSeries:this.state.numSeries-1}),this.series.pop())}},{key:"renderseries",value:function(){for(var e=[],t=0;t<this.state.numSeries;t++)e.push(r.a.createElement($,null,r.a.createElement(H,null,"Series ",t+1),r.a.createElement(Q,{type:"number",min:"1",max:"100000","data-id":t,onChange:this.updateSeries})));return e}},{key:"storeFile",value:function(e){this.setState({PrefFile:e.target.files[0]})}},{key:"set",value:function(e,t){switch(t){case"matches":this.setState({matches:e});break;case"loading":this.setState({loading:e})}}},{key:"parseAndSend",value:function(){var e=new FileReader,t=this.series,n=this.set;this.setState({loading:!0}),e.onload=function(){fetch("https://thenry3.pythonanywhere.com/api/sort",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rows:e.result.toString().replace(/['"]+/g,"").split("\r"+j.EOL).map((function(e){return e.split(",")})),workshopsToAttend:t})}).then((function(e){400==e.status?console.log("YOU FUCKED UP"):(console.log(e.json()),n(e.json(),"matches"),n(!1,"loading"))}))},e.readAsBinaryString(this.state.PrefFile)}},{key:"render",value:function(){return this.state.matches?r.a.createElement(A,{data:this.state.matches}):this.state.loading?r.a.createElement("p",null,"LOADING MY DICK"):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null,r.a.createElement(J,null,r.a.createElement(R,null,"File uploaded ",r.a.createElement("strong",null,"MUST")," be in CSV format"),r.a.createElement(K,{type:"file",accept:".csv",required:!0,onChange:this.storeFile})),r.a.createElement(V,null),r.a.createElement(Y,null,r.a.createElement(q,null,"Input the number of workshops that students will be attending for each series"),r.a.createElement(Z,null,r.a.createElement(te,{onClick:this.deleteSeries}),r.a.createElement(ee,{onClick:this.addSeries})),this.renderseries()),r.a.createElement(ne,{onClick:this.parseAndSend},"Submit")))}}]),t}(r.a.Component);function re(){var e=Object(h.a)(["\n  font-size: 3vw;\n  font-weight: bold;\n"]);return re=function(){return e},e}function ie(){var e=Object(h.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Montserrat", sans-serif;\n']);return ie=function(){return e},e}var oe=Object(m.a)("div")(ie()),ce=Object(m.a)("p")(re()),se=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,r.a.createElement(ce,null,"wow ty for using my shit"),r.a.createElement(ae,null)))}}]),t}(r.a.Component);function le(){var e=Object(h.a)(["\n  margin: auto 1vw;\n  padding: 4vh 2vw;\n  ",":hover & {\n    color: #00b4f5;\n    border-bottom: solid #00b4f5 1px;\n    padding-bottom: 3vh;\n  }\n"]);return le=function(){return e},e}function ue(){var e=Object(h.a)(['\n  font-family: "Montserrat", sans-serif;\n  font-size: 1.1vw;\n  letter-spacing: 0.1em;\n  color: black;\n  text-decoration: none;\n']);return ue=function(){return e},e}function de(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return de=function(){return e},e}var fe=Object(m.a)("div")(de()),be=Object(m.a)(c.b)(ue()),he=Object(m.a)("p")(le(),be),me=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null,r.a.createElement(be,{to:"/"},r.a.createElement(he,null,"Tool")),r.a.createElement(be,{to:"/guidelines"},r.a.createElement(he,null,"Guidelines")),r.a.createElement(be,{to:"/about"},r.a.createElement(he,null,"About"))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(me,null),r.a.createElement(s.a,{exact:!0,path:"/",component:se}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.20620d75.chunk.js.map