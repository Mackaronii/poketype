(this["webpackJsonppoke-type"]=this["webpackJsonppoke-type"]||[]).push([[0],{39:function(e,t,r){e.exports=r(52)},52:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(27),c=r.n(o),s=r(14),i=r(15),l=r(17),p=r(16),d=r(18),m=(r(44),r(10)),u=r(29),h=r(30),g=r(12),b=r(9);var y=function(){var e=["https://lh3.googleusercontent.com/proxy/eWgQX4VhR5DzHc2t02u6awzYn940GpNhVI80JXjQ7VIHBfsTjsDVDplnzHLEbFhHEl2D4zfVQQWV-CQOP_Do-__HsC4VfgQS2OJiSqYA3bWhFr8x5Lg8zw7tOfmbtqIISg"],t=Math.floor(Math.random()*e.length);return n.a.createElement(m.a,{style:{display:"table",height:"100vh"}},n.a.createElement(u.a,{style:{display:"table-cell",verticalAlign:"middle",textAlign:"center"}},n.a.createElement(h.a,{fluid:!0,src:e[t],style:{display:"block",maxWidth:"300px",margin:"auto",marginBottom:"50px"}}),n.a.createElement("h1",null,"Welcome to Pok\xe9Type!"),n.a.createElement("p",null,"Challenge other trainers across the globe to be the best typist there ever was."),n.a.createElement(b.b,{to:"/categories"},n.a.createElement(g.a,{variant:"outline-primary",style:{marginTop:"30px"}},"Get Started"))))},f=r(19);var E=function(e){return n.a.createElement(f.a,null,n.a.createElement(f.a.Img,{variant:"top",src:e.image,style:{maxWidth:"150px"}}),n.a.createElement(f.a.Body,null,n.a.createElement(f.a.Title,null,e.title),n.a.createElement(f.a.Text,null,e.description)))};var v=function(){return n.a.createElement(m.a,{style:{padding:"20px"}},n.a.createElement("h4",{style:{textAlign:"center",marginBottom:"50px"}},"Choose a category"),[{title:"[ EASY ] Pok\xe9Facts",description:"Learn niche, and highly unnecessary, facts about Pok\xe9mon!",dest:"facts",image:"https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807"},{title:"[ MEDIUM ] Pok\xe9Behaviours",description:"Discover how Pok\xe9mon behave.",dest:"behaviours",image:"https://lh3.googleusercontent.com/proxy/OqsgBGbg5AG5GbQFaTQhlj-TTkIE7GQQueQJwKYMnhkxhRWenViFiWpD7NRiUWS3ZYszms7MhLo1H1DaCMSUhigEmAzL8y9w1w"}].map((function(e,t){return n.a.createElement("div",{key:t,style:{marginBottom:"20px"}},n.a.createElement(b.b,{to:"/".concat(e.dest),style:{textDecoration:"none",color:"#000"}},n.a.createElement(E,{title:e.title,description:e.description,image:e.image})))})))},I=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={wpm:"XX",acc:"XX"},r}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({wpm:e.wpm,acc:e.acc})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b.b,{to:"/categories"},n.a.createElement(g.a,{variant:"link"},"Back to Categories")),n.a.createElement("p",null,"WPM: ",this.state.wpm," | ACC: ",this.state.acc,"%"))}}]),t}(a.Component),W=r(33),x=r(34),k=r(37),w=r(35),P=r(38),C=function(e){function t(e){var r;return Object(W.a)(this,t),(r=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={promptWords:e.promptWords,curWordIndex:e.curWordIndex,correctIndices:e.correctIndices,wrongIndices:e.wrongIndices},r}return Object(P.a)(t,e),Object(x.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({promptWords:e.promptWords,curWordIndex:e.curWordIndex,correctIndices:e.correctIndices,wrongIndices:e.wrongIndices})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{marginBottom:"30px",textAlign:"left"}},this.state.promptWords.map((function(t,r){return n.a.createElement("p",{key:r,style:{display:"inline",fontSize:"18px",color:r===e.state.curWordIndex?"#D06AFF":e.state.correctIndices.includes(r)?"#69B23F":e.state.wrongIndices.includes(r)?"#D60000":"#000"}},t+" ")})))}}]),t}(a.Component),S=r(36);var j=function(e){var t=e.leaderboard;return t.map((function(e){e.date=new Date(e.date)})),n.a.createElement("div",null,n.a.createElement("p",null,"Leaderboard (Prompt ID: ",e.promptId,")"),n.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Rank"),n.a.createElement("th",null,"Username"),n.a.createElement("th",null,"WPM"),n.a.createElement("th",null,"ACC (%)"),n.a.createElement("th",null,"Attempted On"))),n.a.createElement("tbody",null,t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,t+1),n.a.createElement("td",null,e.username),n.a.createElement("td",null,e.wpm),n.a.createElement("td",null,e.acc),n.a.createElement("td",null,e.date.toLocaleString()))})))))},O=r(23),D=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).generateNewPrompt=function(){for(var e=Math.floor(Math.random()*r.state.prompts.length);r.state.prompt._id===r.state.prompts[e]._id;)e=Math.floor(Math.random()*r.state.prompts.length);var t=r.state.prompts[e];r.setState({hasStarted:!1,prompt:t,promptWords:t.prompt.split(" "),curWordIndex:0,wrongIndices:[],correctIndices:[],wpm:"XX",acc:"XX",isInputDisabled:!1,isLeaderboardVisible:!1},(function(){r.setState({curWord:r.state.promptWords[0]})}))},r.retryPrompt=function(){r.setState({hasStarted:!1,curWord:r.state.promptWords[0],curWordIndex:0,wrongIndices:[],correctIndices:[],wpm:"XX",acc:"XX",isInputDisabled:!1})},r.changeHandler=function(e){if(!r.state.hasStarted){var t=Date.now();r.setState({hasStarted:!0,startTime:t}),console.log("Timer started: ".concat(t))}var a=e.target.value;if(r.isSpaceKeyPressed(a)){var n=a.substr(0,a.length-1);r.compareWord(n),e.target.value="",e.target.style.backgroundColor="#FFF"}else r.isLastWord(a)?(r.compareWord(a),e.target.value=""):a!==r.state.curWord.substr(0,a.length)?e.target.style.backgroundColor="#EE7878":e.target.style.backgroundColor="#FFF"},r.compareWord=function(e){r.state.curWord===e?r.state.correctIndices.push(r.state.curWordIndex):r.state.wrongIndices.push(r.state.curWordIndex),r.setState({curWordIndex:r.state.curWordIndex+1},(function(){r.state.curWordIndex<r.state.promptWords.length?r.setState({curWord:r.state.promptWords[r.state.curWordIndex]}):r.promptCompleted()}))},r.promptCompleted=function(){var e=Date.now();console.log("Timer ended: ".concat(e));var t=(e-r.state.startTime)/1e3,a=Math.round(r.state.correctIndices.length/t*60),n=r.state.correctIndices.length,o=r.state.promptWords.length,c=parseFloat((n/o*100).toFixed(2));r.setState({isInputDisabled:!0,wpm:a,acc:c},(function(){r.submitPromptLeaderboardEntry(r.state.prompt._id,"test_user",a,c,new Date).then((function(){return r.getPromptLeaderboardById(r.state.prompt._id)})).then((function(e){return r.setState({prompt_leaderboard:e,isLeaderboardVisible:!0})}))}))},r.isSpaceKeyPressed=function(e){return" "===e.substr(e.length-1)},r.isLastWord=function(e){return r.state.curWordIndex===r.state.promptWords.length-1&&e===r.state.curWord},r.state={category:e.category,hasStarted:!1,prompts:[],prompt:{},promptWords:[],curWordIndex:0,curWord:"",wrongIndices:[],correctIndices:[],wpm:"XX",acc:"XX",isInputDisabled:!1,isLeaderboardVisible:!1},r}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;""===this.state.category?this.getAllPrompts().then((function(t){return e.setState({prompts:t},(function(){return e.generateNewPrompt()}))})):this.getPromptsByCategory().then((function(t){return e.setState({prompts:t},(function(){return e.generateNewPrompt()}))}))}},{key:"getAllPrompts",value:function(){return fetch("https://poketype-api.herokuapp.com/v1/prompts",{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(e){return e.prompts}))}},{key:"getPromptsByCategory",value:function(){return fetch("https://poketype-api.herokuapp.com/v1/prompts?category=".concat(this.state.category),{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(e){return e.prompts}))}},{key:"submitPromptLeaderboardEntry",value:function(e,t,r,a,n){var o={username:t,wpm:r,acc:a,date:n};return fetch("https://poketype-api.herokuapp.com/v1/prompt_leaderboards/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Connection:"keep-alive"},body:JSON.stringify(o)}).then((function(e){return console.log(e)}))}},{key:"getPromptLeaderboardById",value:function(e){return fetch("https://poketype-api.herokuapp.com/v1/prompt_leaderboards?promptId=".concat(e),{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(e){var t=e.prompt_leaderboard;return console.log(t),t}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(I,{wpm:this.state.wpm,acc:this.state.acc}),n.a.createElement(m.a,{style:{backgroundColor:"#ECECEC",borderRadius:"10px",padding:"30px",marginBottom:"30px",textAlign:"center"}},n.a.createElement(C,{promptWords:this.state.promptWords,curWordIndex:this.state.curWordIndex,correctIndices:this.state.correctIndices,wrongIndices:this.state.wrongIndices}),n.a.createElement(O.a,{onSubmit:function(e){e.preventDefault()}},n.a.createElement(O.a.Control,{type:"text",onChange:this.changeHandler,disabled:this.state.isInputDisabled})),n.a.createElement("div",{style:{marginTop:"30px"}},n.a.createElement(g.a,{variant:"primary",onClick:this.generateNewPrompt,style:{marginRight:"20px"}},"Give me another Pok\xe9Prompt!"),n.a.createElement(g.a,{variant:"outline-dark",onClick:this.retryPrompt},"Retry"))),this.state.isLeaderboardVisible?n.a.createElement(j,{promptId:this.state.prompt._id,leaderboard:this.state.prompt_leaderboard}):n.a.createElement("p",{style:{textAlign:"center"}},"Complete the Pok\xe9Prompt above to view its leaderboards!"))}}]),t}(a.Component),T=r(13);function B(e){return n.a.createElement(m.a,{style:{paddingTop:"30px",paddingBottom:"30px",textAlign:"center",fontFamily:"Verdana"}},n.a.createElement("h4",{style:{marginBottom:"50px"}},"Pok\xe9Type"),n.a.createElement(D,{category:e.category}))}var X=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(b.a,{basename:"/"},n.a.createElement("div",null,n.a.createElement(T.c,null,n.a.createElement(T.a,{exact:!0,path:"/",component:y}),n.a.createElement(T.a,{path:"/categories",component:v}),n.a.createElement(T.a,{path:"/facts"},n.a.createElement(B,{category:"fact"})),n.a.createElement(T.a,{path:"/behaviours"},n.a.createElement(B,{category:"behaviour"})))))}}]),t}(n.a.Component);c.a.render(n.a.createElement(X,null),document.getElementById("app"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f2896293.chunk.js.map