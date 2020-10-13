(this.webpackJsonppathfind=this.webpackJsonppathfind||[]).push([[0],{166:function(e,t,a){e.exports=a(302)},171:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},294:function(e,t,a){},296:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),r=a.n(o),l=(a(171),a(16)),s=a(17),c=a(19),d=a(18),m=a(72),u=a(33),h=a.n(u),p=a(78),v=a(51),f=a(10),g=a(311),b=a(47),E=a(310),w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).renderTitle=function(){return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:"50px",marginLeft:"35px"}},i.a.createElement("p",{style:{fontSize:"30px",marginBottom:"5px",marginTop:"5px"}},"Pathfind"),i.a.createElement("p",{style:{fontSize:"15px",marginBottom:"5px",marginTop:"5px"}},"Visualization Tool"))},e.renderAlgorithms=function(){var t,a=e.props,n=a.algorithm,o=a.algorithms,r=a.onAlgorithmSelect,l=a.animateCompletion,s=[],c=Object(f.a)(o);try{var d=function(){var e=t.value;s.push(i.a.createElement(g.a,{key:e,className:"dropdown-item",onClick:function(){return r(e)}},e.charAt(0).toUpperCase()+e.slice(1)))};for(c.s();!(t=c.n()).done;)d()}catch(m){c.e(m)}finally{c.f()}return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link",style:{color:"black"}},"Algorithm:")),i.a.createElement("li",{className:"nav-item dropdown"},i.a.createElement(g.a,{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",disabled:2===l||3===l},n.charAt(0).toUpperCase()+n.slice(1)),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",style:{fontSize:"15px",padding:"0",margin:"0",border:"0px solid black"}},s)))},e.renderControlButtons=function(){var t=e.props,a=t.onVisualize,n=t.onPause,o=t.onReset,r=t.animateState,l=t.animateCompletion;return i.a.createElement("div",{className:"m-auto align-items-center"},i.a.createElement(g.a,{animated:!0,onClick:o,disabled:1===l},i.a.createElement(g.a.Content,{visible:!0},i.a.createElement(b.a,{name:"redo alternate"})),i.a.createElement(g.a.Content,{hidden:!0},"Reset")),i.a.createElement(g.a,{color:"purple",onClick:a,disabled:1!==l,animated:!0},i.a.createElement(g.a.Content,{visible:!0},"Visualize!"),i.a.createElement(g.a.Content,{hidden:!0},"Visualize!")),i.a.createElement(g.a,{animated:!0,onClick:n,disabled:1===l||4===l},i.a.createElement(g.a.Content,{visible:!0},i.a.createElement(b.a,{name:r||1===l||4===l?"pause":"play"})),i.a.createElement(g.a.Content,{hidden:!0},r||1===l||4===l?"Pause":"Play")))},e.renderAddons=function(){var t=e.props,a=t.onAddonSelect,n=t.selectedAddon,o=t.weight,r=t.onWeightSelect,l=t.animateCompletion;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"nav-item"},i.a.createElement("p",{className:"nav-link",style:{color:"black"}},"Add-on Nodes:")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(g.a.Group,null,i.a.createElement(g.a,{active:"barriers"===n,onClick:function(){return a("barriers")}},"Barrier"),i.a.createElement(g.a,{active:"weights"===n,onClick:function(){return a("weights")}},"Weighted: "+o),i.a.createElement(E.a,{simple:!0,className:"button icon",direction:"left",options:[{key:"weight_2",text:"2",value:2},{key:"weight_3",text:"3",value:3},{key:"weight_4",text:"4",value:4},{key:"weight_5",text:"5",value:5},{key:"weight_6",text:"6",value:6},{key:"weight_7",text:"7",value:7},{key:"weight_8",text:"8",value:8},{key:"weight_9",text:"9",value:9},{key:"weight_10",text:"10",value:10}],trigger:i.a.createElement(i.a.Fragment,null),onChange:r,disabled:1!==l}),i.a.createElement(g.a,{active:"checkpoints"===n,onClick:function(){return a("checkpoints")}},"Checkpoint"))))},e.renderClearDropdown=function(){var t=e.props,a=t.onClear,n=t.animateCompletion;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"nav-item dropdown",style:{marginLeft:"50px",marginRight:"35px"}},i.a.createElement(g.a,{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",color:"purple",disabled:1!==n},"Clear"),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown",style:{fontSize:"15px",padding:"0",margin:"0",border:"0px solid black"}},i.a.createElement(g.a,{className:"dropdown-item",color:"purple",onClick:function(){return a("board")}},"Clear Board"),i.a.createElement(g.a,{className:"dropdown-item",color:"purple",onClick:function(){return a("barriers")}},"Clear Barriers"),i.a.createElement(g.a,{className:"dropdown-item",color:"purple",onClick:function(){return a("weights")}},"Clear Weights"),i.a.createElement(g.a,{className:"dropdown-item",color:"purple",onClick:function(){return a("checkpoints")}},"Clear Checkpoints"))))},e.state={},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},this.renderTitle(),i.a.createElement("ul",{className:"navbar-nav",style:{fontSize:"15px"}},this.renderAlgorithms()),this.renderControlButtons(),i.a.createElement("ul",{className:"navbar-nav",style:{fontSize:"15px"}},this.renderAddons(),this.renderClearDropdown()))}}]),a}(n.Component),N=a(13),k=a(14),y=(a(288),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleClass=function(){var t=e.props,a=t.isStart,n=t.isEnd,i=t.isBarrier,o=t.isCheckpoint,r=t.isWeight;return a?"node start":n?"node end":i?"node barrier":r?"node weight":o?"node checkpoint":"node default"},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.isStart,n=e.isEnd,o=e.isCheckpoint,r=e.checkpointNumber,l=e.isWeight,s=e.weight,c=e.onMouseDown,d=e.onMouseUp,m=e.onMouseEnter;return i.a.createElement("td",{className:this.handleClass(),id:t,onMouseDown:function(e){return c(e,t)},onMouseUp:function(e){return d()},onMouseEnter:function(e){return m(t)},onContextMenu:function(e){return e.preventDefault()}},a&&i.a.createElement(N.a,{icon:k.b}),n&&i.a.createElement(N.a,{icon:k.d}),o&&i.a.createElement("span",{className:"fa-layers"},i.a.createElement("span",{className:"fa-layers-text checkpoint-label"},r.toString()),i.a.createElement(N.a,{icon:k.a})),l&&i.a.createElement("span",{className:"fa-layers"},i.a.createElement("span",{className:"fa-layers-text weight-label"},s.toString()),i.a.createElement(N.a,{icon:k.e})))}}]),a}(n.Component));function S(e,t,a){return new Promise((function(n,i){setTimeout((function(){var a,i=Object(f.a)(e);try{for(i.s();!(a=i.n()).done;){var o=a.value,r=document.getElementById(o.id);r.classList.contains(t)&&(r.classList.remove(t),r.offsetWidth),r.classList.add(t)}}catch(l){i.e(l)}finally{i.f()}n(!0)}),a)}))}function C(e){var t,a=Object(f.a)(e);try{for(a.s();!(t=a.n()).done;){var n,i=t.value,o=Object(f.a)(i);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.isStart?document.getElementById(r.id).className="node start":r.isEnd?document.getElementById(r.id).className="node end":r.isBarrier?document.getElementById(r.id).className="node barrier":r.isCheckpoint?document.getElementById(r.id).className="node checkpoint":r.isWeight?document.getElementById(r.id).className="node weight":document.getElementById(r.id).className="node default"}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}}function x(e,t){var a=t,n=null;if("board"===e){n=["isBarrier","isWeight","isCheckpoint"];for(var i=0;i<3;i++)a=j(n[i],a)}else"barriers"===e?n="isBarrier":"weights"===e?n="isWeight":"checkpoints"===e&&(n="isCheckpoint"),a=j(n,t);return a}function j(e,t){var a,n=t,i=Object(f.a)(n);try{for(i.s();!(a=i.n()).done;){var o,r=a.value,l=Object(f.a)(r);try{for(l.s();!(o=l.n()).done;){var s=o.value;s[e]=!1,"isCheckpoint"===e?s.checkpointNumber=NaN:"isWeight"===e&&(s.weight=1)}}catch(c){l.e(c)}finally{l.f()}}}catch(c){i.e(c)}finally{i.f()}return n}function O(e,t){for(var a=t.length,n=t[0].length,i=0;i<a;i++)for(var o=0;o<n;o++)if(t[i][o].id===e)return t[i][o]}function D(e,t){for(var a=t.length,n=t[0].length,i=0;i<a;i++)for(var o=0;o<n;o++)if(t[i][o].id===e)return{r:i,c:o}}function A(e){for(var t=e.length,a=e[0].length,n=0;n<t;n++)for(var i=0;i<a;i++)if(e[n][i].isStart)return e[n][i]}function P(e){for(var t=e.length,a=e[0].length,n=0;n<t;n++)for(var i=0;i<a;i++)if(e[n][i].isEnd)return e[n][i]}function W(e,t,a,n,i,o){var r,l=a,s=t.split("-"),c=[],d=Object(f.a)(s);try{for(d.s();!(r=d.n()).done;){var m=r.value;c.push(parseInt(m))}}catch(w){d.e(w)}finally{d.f()}var u=l[c[0]][c[1]],h=o;if(0===e)u.isStart||u.isEnd||u.isWeight||u.isCheckpoint||u.isBarrier||("barriers"===n?u.isBarrier=!0:"weights"===n?(u.isWeight=!0,u.weight=i):"checkpoints"===n&&(h.push(u),u.checkpointNumber=h.length,u.isCheckpoint=!0));else if(2===e){u.isBarrier=!1,u.isCheckpoint=!1;var p=o.findIndex((function(e){return e.id===u.id}));if(-1!==p){h.splice(p,1);var v,g=1,b=Object(f.a)(h);try{for(b.s();!(v=b.n()).done;){var E=O(v.value.id,l);l[E.location.row][E.location.column].checkpointNumber=g,g++}}catch(w){b.e(w)}finally{b.f()}}u.checkpointNumber=NaN,u.isWeight=!1,u.weight=1}return l[c[0]][c[1]]=u,{newGrid:l,newCheckpoints:h}}function B(e,t,a,n,i,o){var r={down:!0,button:e.button,onStart:!1,onEnd:!1},l=null,s=null,c=A(a),d=P(a);if(t===c.id)r.onStart=!0;else if(t===d.id)r.onEnd=!0;else{var m=W(e.button,t,a,n,i,o);l=m.newGrid,s=m.newCheckpoints}return{newGrid:l,newCheckpoints:s,mouse:r}}function I(e,t,a,n,i,o){var r=[],l={},s="",c=[];if(t.onStart){var d=O(e,a),m=function(e,t,a){var n=t,i=e,o=D(e.id,a),r=D(t.id,a),l=a;return t.isBarrier||t.isCheckpoint||t.isWeight||t.isEnd||(n.isStart=!0,i.isStart=!1,l[o.r][o.c]=i,l[r.r][r.c]=n),{newGrid:l,newNodeClone:n}}(A(a),d,a);r=m.newGrid,l=m.newNodeClone,s="start"}else if(t.onEnd){var u=O(e,a),h=function(e,t,a){var n=t,i=e,o=D(e.id,a),r=D(t.id,a),l=a;return t.isBarrier||t.isCheckpoint||t.isWeight||t.isStart||(n.isEnd=!0,i.isEnd=!1,l[o.r][o.c]=i,l[r.r][r.c]=n),{newGrid:l,newNodeClone:n}}(P(a),u,a);r=h.newGrid,l=h.newNodeClone,s="end"}else{var p=W(t.button,e,a,n,i,o);r=p.newGrid,c=p.newCheckpoints}return{newGrid:r,newNodeClone:l,changedNode:s,newCheckpoints:c}}var T=a(11),z=a(21);function M(e){for(var t=[],a=0;a<e.length;a++){for(var n=[],i=0;i<e[0].length;i++)n.push({id:a.toString()+"-"+i.toString(),location:{row:a,column:i},weight:e[a][i].weight,isStart:!1,isEnd:!1,isBarrier:e[a][i].isBarrier,isCheckpoint:!1,isWeight:e[a][i].isWeight});t.push(n)}return t}function R(e){var t,a={distanceToStart:1/0},n=0,i=0,o=Object(f.a)(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.distanceToStart<a.distanceToStart&&(a=r,i=n),n++}}catch(l){o.e(l)}finally{o.f()}return{closestUnvisited:a,closestIndex:i}}function G(e,t){var a=[];return t[e.location.row-1]&&(t[e.location.row-1][e.location.column].visited||a.push(t[e.location.row-1][e.location.column])),t[e.location.row][e.location.column+1]&&(t[e.location.row][e.location.column+1].visited||a.push(t[e.location.row][e.location.column+1])),t[e.location.row+1]&&(t[e.location.row+1][e.location.column].visited||a.push(t[e.location.row+1][e.location.column])),t[e.location.row][e.location.column-1]&&(t[e.location.row][e.location.column-1].visited||a.push(t[e.location.row][e.location.column-1])),a}function V(e){for(var t,a=function(e){return e.map((function(e){return e.map((function(e){return e.isBarrier?Object(z.a)(Object(z.a)({},e),{},{visited:!0,distanceToStart:e.isStart?0:1/0,prevNode:{row:NaN,column:NaN}}):Object(z.a)(Object(z.a)({},e),{},{visited:!1,distanceToStart:e.isStart?0:1/0,prevNode:{row:NaN,column:NaN}})}))}))}(e),n=[],i={isEnd:!1},o=[A(a)];!i.isEnd;){var r=R(o),l=r.closestUnvisited,s=r.closestIndex;if((i=l).distanceToStart===1/0)return{shortestPath:[],visitedNodes:n};i.visited=!0,o.splice(s,1);var c,d=G(i,a),m=Object(f.a)(d);try{var u=function(){var e=c.value,t=i.distanceToStart+e.weight;t<e.distanceToStart&&(e.distanceToStart=t,e.prevNode=i),a[e.location.row][e.location.column]=e;var n=o.findIndex((function(t){return t.id===e.id}));-1!==n?o[n]=e:o.push(e)};for(m.s();!(c=m.n()).done;)u()}catch(p){m.e(p)}finally{m.f()}a[i.location.row][i.location.column]=i,n.push([{id:i.id}])}var h=[];for(t=i.distanceToStart;!i.isStart;)h.unshift([{id:i.id}]),i=i.prevNode;return h.unshift([{id:i.id}]),{shortestPath:h,visitedNodes:n,shortestDistance:t}}function U(e,t){var a=t.row,n=t.column,i=[];return e.split("-").forEach((function(e){return i.push(parseInt(e))})),Math.abs(a-i[0])+Math.abs(n-i[1])}function F(e){var t,a={combinedDistance:1/0},n=0,i=0,o=Object(f.a)(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;r.combinedDistance<=a.combinedDistance&&(a=r,i=n),n++}}catch(l){o.e(l)}finally{o.f()}return{closestUnvisited:a,closestIndex:i}}function _(e,t){var a=[];return t[e.location.row-1]&&(t[e.location.row-1][e.location.column].visited||a.push(t[e.location.row-1][e.location.column])),t[e.location.row][e.location.column+1]&&(t[e.location.row][e.location.column+1].visited||a.push(t[e.location.row][e.location.column+1])),t[e.location.row+1]&&(t[e.location.row+1][e.location.column].visited||a.push(t[e.location.row+1][e.location.column])),t[e.location.row][e.location.column-1]&&(t[e.location.row][e.location.column-1].visited||a.push(t[e.location.row][e.location.column-1])),a}function L(e){for(var t,a=function(e,t){return e.map((function(e){return e.map((function(e){return e.isBarrier?Object(z.a)(Object(z.a)({},e),{},{visited:!0,distanceToStart:1/0,distanceToEnd:1/0,combinedDistance:1/0,prevNode:{row:NaN,column:NaN}}):Object(z.a)(Object(z.a)({},e),{},{visited:!1,distanceToStart:e.isStart?0:1/0,distanceToEnd:U(t,e.location),combinedDistance:e.isStart?0:1/0,prevNode:{row:NaN,column:NaN}})}))}))}(e,P(e).id),n=[],i={isEnd:!1},o=[A(a)];!i.isEnd;){var r=F(o),l=r.closestUnvisited,s=r.closestIndex;if((i=l).combinedDistance===1/0)return{shortestPath:[],visitedNodes:n};i.visited=!0,o.splice(s,1);var c,d=_(i,a),m=Object(f.a)(d);try{var u=function(){var e=c.value,t=i.distanceToStart+e.weight,n=i.distanceToStart+e.weight+e.distanceToEnd;t<e.distanceToStart&&(e.distanceToStart=t),n<e.combinedDistance&&(e.combinedDistance=n,e.prevNode=i),a[e.location.row][e.location.column]=e;var r=o.findIndex((function(t){return t.id===e.id}));-1!==r?o[r]=e:o.push(e)};for(m.s();!(c=m.n()).done;)u()}catch(p){m.e(p)}finally{m.f()}a[i.location.row][i.location.column]=i,n.push([{id:i.id}])}var h=[];for(t=i.distanceToStart;!i.isStart;)h.unshift([{id:i.id}]),i=i.prevNode;return h.unshift([{id:i.id}]),{shortestPath:h,visitedNodes:n,shortestDistance:t}}function J(e,t,a){var n=performance.now(),i=null;"dijkstra"===e?i=0===a.length?V(t):function(e,t){for(var a=A(e),n=P(e),i=[],o=[],r=0,l=0;l<=t.length;l++){var s=M(e);if(0===l){s[a.location.row][a.location.column].isStart=!0,s[t[l].location.row][t[l].location.column].isEnd=!0;var c=V(s),d=c.shortestPath,m=c.visitedNodes,u=c.shortestDistance;i.push.apply(i,Object(T.a)(d)),o.push.apply(o,Object(T.a)(m)),r+=u}else if(l===t.length){s[t[l-1].location.row][t[l-1].location.column].isStart=!0,s[n.location.row][n.location.column].isEnd=!0;var h=V(s),p=h.shortestPath,v=h.visitedNodes,f=h.shortestDistance;p.splice(0,1),i.push.apply(i,Object(T.a)(p)),o.push.apply(o,Object(T.a)(v)),r+=f}else{s[t[l-1].location.row][t[l-1].location.column].isStart=!0,s[t[l].location.row][t[l].location.column].isEnd=!0;var g=V(s),b=g.shortestPath,E=g.visitedNodes,w=g.shortestDistance;b.splice(0,1),i.push.apply(i,Object(T.a)(b)),o.push.apply(o,Object(T.a)(E)),r+=w}}return{shortestPath:i,visitedNodes:o,shortestDistance:r}}(t,a):"a*"===e&&(i=0===a.length?L(t):function(e,t){for(var a=A(e),n=P(e),i=[],o=[],r=0,l=0;l<=t.length;l++){var s=M(e);if(0===l){s[a.location.row][a.location.column].isStart=!0,s[t[l].location.row][t[l].location.column].isEnd=!0;var c=L(s),d=c.shortestPath,m=c.visitedNodes,u=c.shortestDistance;i.push.apply(i,Object(T.a)(d)),o.push.apply(o,Object(T.a)(m)),r+=u}else if(l===t.length){s[t[l-1].location.row][t[l-1].location.column].isStart=!0,s[n.location.row][n.location.column].isEnd=!0;var h=L(s),p=h.shortestPath,v=h.visitedNodes,f=h.shortestDistance;p.splice(0,1),i.push.apply(i,Object(T.a)(p)),o.push.apply(o,Object(T.a)(v)),r+=f}else{s[t[l-1].location.row][t[l-1].location.column].isStart=!0,s[t[l].location.row][t[l].location.column].isEnd=!0;var g=L(s),b=g.shortestPath,E=g.visitedNodes,w=g.shortestDistance;b.splice(0,1),i.push.apply(i,Object(T.a)(b)),o.push.apply(o,Object(T.a)(E)),r+=w}}return{shortestPath:i,visitedNodes:o,shortestDistance:r}}(t,a));var o=performance.now();return i.runtime=(o-n).toFixed(4),i}var q=a(46),Q=(a(289),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).renderAlgorithmDetails=function(){var t=e.props.algorithm,a="",n="";return"dijkstra"===t?(a="Dijkstra:",n="Finds the shortest path, supports weighted nodes"):"a*"===t&&(a="A*:",n="Finds the shortest path, supports weighted nodes, improves on Dijkstra's by adding an additional heuristic"),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("p",{style:{fontWeight:"bold",marginRight:"5px"}},a)),i.a.createElement("td",null,i.a.createElement("p",null,n)))))},e.renderShortestDistance=function(){var t=e.props,a=t.shortestDistance,n=4===t.animateCompletion&&0!==a?a:"N/A";return i.a.createElement("div",null,i.a.createElement("p",{style:{fontWeight:"bold"}},"Shortest Distance: "+n))},e.renderRuntime=function(){var t=e.props,a=t.runtime,n=4===t.animateCompletion&&0!==a?a.toString()+"ms":"N/A";return i.a.createElement("div",null,i.a.createElement("p",{style:{fontWeight:"bold"}},"Runtime: "+n))},e.renderNodesVisited=function(){var t=e.props,a=t.nodesVisited,n=4===t.animateCompletion&&0!==a?a:"N/A";return i.a.createElement("div",null,i.a.createElement("p",{style:{fontWeight:"bold"}},"Nodes Visited: "+n))},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"20px",fontSize:"20px"}},i.a.createElement("div",null,this.renderAlgorithmDetails()),i.a.createElement("div",null,this.renderShortestDistance()),i.a.createElement("div",null,this.renderRuntime()),i.a.createElement("div",null,this.renderNodesVisited()))}}]),a}(n.Component)),$=a(290),H=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={grid:[],algorithm:"dijkstra",algorithms:["dijkstra","a*"],animateState:!1,animateCompletion:1,visitedNodes:[],shortestPath:[],shortestDistance:0,runtime:0,algorithmIndex:0,shortestPathIndex:0,checkpoints:[],selectedAddon:"barriers",selectedWeight:5,mouse:{down:!1,button:NaN,onStart:!1,onEnd:!1}},e.dimensions={row:21,column:60},e.start={row:10,column:20},e.end={row:10,column:40},e.renderContainer=function(t){return i.a.createElement("table",{className:"node-grid",onMouseLeave:function(){return e.handleMouseUp()}},i.a.createElement("tbody",null,e.renderNodes(t)))},e.renderNodes=function(t){return t.map((function(t,a){return i.a.createElement("tr",{className:"node-row",key:a,id:a},t.map((function(t){return i.a.createElement(y,{key:t.id,id:t.id,location:t.location,weight:t.weight,isStart:t.isStart,isEnd:t.isEnd,isBarrier:t.isBarrier,isCheckpoint:t.isCheckpoint,checkpointNumber:t.checkpointNumber,isWeight:t.isWeight,onMouseDown:e.handleMouseDown,onMouseUp:e.handleMouseUp,onMouseEnter:e.handleMouseEnter})})))}))},e.animateAlgorithms=function(){var t=Object(p.a)(h.a.mark((function t(a,n,i,o,r){var l,s,c,d,m,u,p;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=o,c=2===(l=a);case 3:if(!c){t.next=12;break}return d=S.bind(Object(v.a)(e)),t.next=7,d(n[s],"visited",10);case 7:s++,c=e.state.animateState,s===n.length&&(c=!1,l=3),t.next=3;break;case 12:if(m=0,!(i.length>0)){t.next=25;break}m=r,u=3===l;case 16:if(!u){t.next=25;break}return p=S.bind(Object(v.a)(e)),t.next=20,p(i[m],"shortest-path",40);case 20:m++,u=e.state.animateState,m===i.length&&(l=4,console.log("Completed"),u=!1),t.next=16;break;case 25:e.setState({algorithmIndex:s,shortestPathIndex:m,animateCompletion:l,animateState:!1});case 26:case"end":return t.stop()}}),t)})));return function(e,a,n,i,o){return t.apply(this,arguments)}}(),e.handleVisualize=Object(p.a)(h.a.mark((function t(){var a,n,i,o,r,l,s,c,d,m,u,p,v;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.animateState,i=a.animateCompletion,o=a.grid,r=a.algorithm,l=a.shortestPathIndex,s=a.algorithmIndex,c=a.checkpoints,$(!1===n&&1===i),e.setState({animateState:!0,animateCompletion:2}),d=J(r,o,c),m=d.shortestPath,u=d.visitedNodes,p=d.shortestDistance,v=d.runtime,0===m.length&&q.b.error("No path to destination was found..."),e.setState({shortestPath:m,visitedNodes:u,shortestDistance:p,runtime:v}),console.log("Initiating"),t.next=9,e.animateAlgorithms(2,u,m,s,l);case 9:case"end":return t.stop()}}),t)}))),e.handlePausePlay=Object(p.a)(h.a.mark((function t(){var a,n,i,o,r,l,s,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.animateState,i=a.animateCompletion,o=a.shortestPath,r=a.visitedNodes,l=a.shortestPathIndex,s=a.algorithmIndex,$(2===i||3===i),c=!n,e.setState({animateState:c}),!0!==c){t.next=10;break}return console.log("Resuming"),t.next=8,e.animateAlgorithms(i,r,o,s,l);case 8:t.next=11;break;case 10:console.log("Paused");case 11:case"end":return t.stop()}}),t)}))),e.handleReset=function(){var t=e.state.grid;e.setState({animateState:!1}),setTimeout((function(){C(t),e.setState({animateCompletion:1,algorithmIndex:0,shortestPathIndex:0,visitedNodes:[],shortestPath:[],shortestDistance:0}),console.log("Terminated")}),11)},e.handleAlgorithmSelect=function(t){e.setState({algorithm:t}),e.handleReset()},e.handleAddonSelect=function(t){e.setState({selectedAddon:t})},e.handleWeightSelect=function(t,a){var n=a.value;e.setState({selectedWeight:n})},e.handleClear=function(t){var a=e.state,n=a.grid;if(1!==a.animateCompletion)return q.b.error("Please reset or wait for visualization to complete before clearing :)");var i=x(t,n);"checkpoints"!==t&&"board"!==t||e.setState({checkpoints:[]}),e.setState({grid:i})},e.handleMouseDown=function(t,a){var n=e.state,i=n.animateCompletion,o=n.grid,r=n.selectedAddon,l=n.selectedWeight,s=n.checkpoints;if(1!==i)return q.b.error("Please reset or clear the board before making changes!");var c=B(t,a,o,r,l,s),d=c.newGrid,m=c.newCheckpoints,u=c.mouse;null!==d&&null!==m&&e.setState({grid:d,checkpoints:m}),e.setState({mouse:u})},e.handleMouseEnter=function(t){var a=e.state,n=a.mouse,i=a.grid,o=a.selectedAddon,r=a.selectedWeight,l=a.checkpoints;if(n.down){var s=I(t,n,i,o,r,l),c=s.newGrid,d=s.newNodeClone,u=s.changedNode,h=s.newCheckpoints;n.onStart||n.onEnd?e.setState(Object(m.a)({},u,{row:d.location.row,column:d.location.column})):e.setState({checkpoints:h}),e.setState({grid:c})}},e.handleMouseUp=function(){var t={down:!1,button:NaN,onStart:!1,onEnd:!1};e.setState({mouse:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=function(e,t,a){for(var n=e.row,i=e.column,o=[],r=0;r<n;r++){for(var l=[],s=0;s<i;s++)l.push({id:r.toString()+"-"+s.toString(),location:{row:r,column:s},weight:1,isStart:r===t.row&&s===t.column,isEnd:r===a.row&&s===a.column,isBarrier:!1,isCheckpoint:!1,checkpointNumber:NaN,isWeight:!1});o.push(l)}return o}(this.dimensions,this.start,this.end);this.setState({grid:e})}},{key:"render",value:function(){var e=this.state,t=e.grid,a=e.animateState,n=e.animateCompletion,o=e.algorithm,r=e.algorithms,l=e.selectedAddon,s=e.shortestDistance,c=e.runtime,d=e.visitedNodes,m=e.selectedWeight;return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{onVisualize:this.handleVisualize,onPause:this.handlePausePlay,onReset:this.handleReset,animateState:a,animateCompletion:n,algorithm:o,algorithms:r.filter((function(e){return e!==o})),onAlgorithmSelect:this.handleAlgorithmSelect,onAddonSelect:this.handleAddonSelect,selectedAddon:l,onClear:this.handleClear,weight:m,onWeightSelect:this.handleWeightSelect}),i.a.createElement("div",null,this.renderContainer(t)),i.a.createElement(Q,{shortestDistance:s,runtime:c,nodesVisited:d.length,animateCompletion:n,algorithm:o}))}}]),a}(n.Component),K=(a(294),function(){return i.a.createElement("div",{className:"info-menu"},i.a.createElement("div",{className:"content-separator-2",style:{marginBottom:"25px"}}),i.a.createElement("div",{className:"legend"},i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.b,size:"2x"}),i.a.createElement("p",{className:"legend-item-label"},"Start")),i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.d,size:"2x"}),i.a.createElement("p",{className:"legend-item-label"},"End")),i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.c,className:"barrier-icon",size:"2x"}),i.a.createElement("p",{className:"legend-item-label"},"Barrier")),i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.e,size:"2x",className:"weight-icon"}),i.a.createElement("p",{className:"legend-item-label"},"Weight")),i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.a,size:"2x",className:"checkpoint-icon"}),i.a.createElement("p",{className:"legend-item-label"},"Checkpoint")),i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.c,className:"visited-icon",size:"2x"}),i.a.createElement("p",{className:"legend-item-label"},"Visited")),i.a.createElement("div",{className:"legend legend-item"},i.a.createElement(N.a,{icon:k.c,className:"shortest-path-icon",size:"2x"}),i.a.createElement("p",{className:"legend-item-label"},"Shortest Path"))),i.a.createElement("div",{className:"content-separator-2",style:{marginTop:"25px"}}),i.a.createElement("div",{className:"quick-guide"},i.a.createElement("h2",{className:"header"},"Quick Guide"),i.a.createElement("table",{className:"menu-table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"table-column"},i.a.createElement("div",{className:"list-item"},i.a.createElement("p",{className:"list-item-label"},"Select an algorithm along the top left and click visualize!"),i.a.createElement("div",{className:"content-separator"})),i.a.createElement("div",{className:"list-item"},i.a.createElement("p",{className:"list-item-label"},"Select an addon on the top right and left click/drag along the board to add addons."),i.a.createElement("div",{className:"content-separator"})),i.a.createElement("div",{className:"list-item"},i.a.createElement("p",{className:"list-item-label"},"Right click/drag along the board to remove any addons."))),i.a.createElement("td",{className:"table-column"},i.a.createElement("div",{className:"list-item"},i.a.createElement("p",{className:"list-item-label"},"Click reset to change the board or perform another visualization."),i.a.createElement("div",{className:"content-separator"})),i.a.createElement("div",{className:"list-item"},i.a.createElement("p",{className:"list-item-label"},"Click and drag the start and end nodes to move the starting and ending points of the visualization."),i.a.createElement("div",{className:"content-separator"})),i.a.createElement("div",{className:"list-item"},i.a.createElement("p",{className:"list-item-label"},"While visualizing, changing the board will be disabled. Click reset to make any changes."))))))))}),X=(a(295),a(296),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q.a,null),i.a.createElement(H,null),i.a.createElement(K,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(297),a(298),a(301);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.dd53fb2c.chunk.js.map