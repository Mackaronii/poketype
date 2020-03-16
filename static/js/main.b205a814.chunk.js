(this["webpackJsonppoke-type"]=this["webpackJsonppoke-type"]||[]).push([[0],{44:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),i=a(11),c=a(12),l=a(15),d=a(13),m=a(16),u=(a(49),a(19)),p=a(14),h=a(37),f=a(26),g=a(9),b=a(33),y=a(22),E=a(7),v=a(25),k=a(18).Link,w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={show:e.show,formUsername:"",formPassword:"",formConfirmPassword:"",isUsernameTaken:!1,isValid:{formUsername:!1,formPassword:!1,formConfirmPassword:!1},isSubmitEnabled:!1,isSubmitLoading:!1,isSignedUp:!1},a.handleClose=e.handleClose,a.handleExited=a.handleExited.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.validateForm=a.validateForm.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show})}},{key:"handleChange",value:function(e){var t=this;this.setState(Object(b.a)({},e.target.id,e.target.value),(function(){return t.validateForm()}))}},{key:"validateForm",value:function(){var e=this;fetch("https://poketype-api.herokuapp.com/v1/users?username=".concat(this.state.formUsername),{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(t){e.setState({isUsernameTaken:null!==t},(function(){e.setState({isValid:{formUsername:!e.state.isUsernameTaken&&e.state.formUsername.length>0,formPassword:e.state.formPassword.length>=6,formConfirmPassword:e.state.formConfirmPassword.length>=6&&e.state.formPassword===e.state.formConfirmPassword}},(function(){return e.setState({isSubmitEnabled:!!Object.keys(e.state.isValid).every((function(t){return e.state.isValid[t]}))})}))}))}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.formUsername,r=a.formPassword;this.setState({isSubmitLoading:!0},(function(){t.createUser(n,r).then((function(e){e?t.setState({isSignedUp:!0,isSubmitLoading:!1}):t.setState({isSubmitLoading:!1})}))}))}},{key:"handleExited",value:function(){this.setState({isSubmitEnabled:!1,isSubmitLoading:!1,formUsername:"",formPassword:"",formConfirmPassword:"",isUsernameTaken:!1,isValid:{formUsername:!1,formPassword:!1,formConfirmPassword:!1}})}},{key:"createUser",value:function(e,t){var a={username:e,password:t};return fetch("https://poketype-api.herokuapp.com/v1/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return 201===e.status}),(function(e){return console.error(e)}))}},{key:"render",value:function(){return r.a.createElement(y.a,{centered:!0,show:this.state.show,onHide:this.handleClose,onExited:this.handleExited},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,null,"Create Your Account")),r.a.createElement(y.a.Body,null,this.state.isSignedUp?r.a.createElement("div",null,r.a.createElement("p",null,"Your account has been created!"),r.a.createElement(k,{to:"/login"},r.a.createElement(g.a,{variant:"primary"},"Log In"))):r.a.createElement(E.a,{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(E.a.Group,{controlId:"formUsername"},r.a.createElement(E.a.Label,null,"Username"),r.a.createElement(E.a.Control,{required:!0,type:"text",autoComplete:"off",onChange:this.handleChange,isValid:this.state.isValid.formUsername,isInvalid:this.state.isUsernameTaken}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Username is already taken")),r.a.createElement(E.a.Group,{controlId:"formPassword"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{required:!0,type:"password",onChange:this.handleChange,isValid:this.state.isValid.formPassword,isInvalid:""!==this.state.formPassword&&!this.state.isValid.formPassword}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Must be at least 6 characters long")),r.a.createElement(E.a.Group,{controlId:"formConfirmPassword"},r.a.createElement(E.a.Label,null,"Confirm Password"),r.a.createElement(E.a.Control,{required:!0,type:"password",onChange:this.handleChange,isValid:this.state.isValid.formConfirmPassword,isInvalid:""!==this.state.formConfirmPassword&&!this.state.isValid.formConfirmPassword}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Passwords do not match")),r.a.createElement(g.a,{block:!0,type:"submit",variant:"primary",disabled:!this.state.isSubmitEnabled||this.state.isSubmitLoading,style:{borderRadius:"20px"}},r.a.createElement(v.a,{variant:"light",as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true",style:{marginRight:"10px",display:this.state.isSubmitLoading?"default":"none"}}),this.state.isSubmitLoading?"Creating...":"Create Account"))),this.state.isSignedUp?null:r.a.createElement(y.a.Footer,null,r.a.createElement(g.a,{disabled:!0,variant:"link",onClick:this.handleClose},"Continue as guest")))}}]),t}(n.Component),C=a(18),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={showSignUp:!1},a.handleShow=a.handleShow.bind(Object(u.a)(a)),a.handleClose=a.handleClose.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleShow",value:function(){this.setState({showSignUp:!0})}},{key:"handleClose",value:function(){this.setState({showSignUp:!1})}},{key:"render",value:function(){return r.a.createElement(p.a,{style:{display:"table",height:"100vh"}},r.a.createElement(h.a,{style:{display:"table-cell",verticalAlign:"middle",textAlign:"center"}},r.a.createElement(f.a,{fluid:!0,src:"/poketype/assets/splash.png",style:{display:"block",maxWidth:"200px",margin:"auto",marginBottom:"50px"}}),r.a.createElement("h1",null,"Welcome to Pok\xe9Type!"),r.a.createElement("p",null,"Challenge other trainers across the globe to be the best typist there ever was."),r.a.createElement(w,{show:this.state.showSignUp,handleClose:this.handleClose}),r.a.createElement(g.a,{block:!0,variant:"primary",style:{margin:"auto",maxWidth:"400px",marginTop:"50px",borderRadius:"20px"},onClick:this.handleShow},"Sign Up / Continue as Guest"),r.a.createElement(C.Link,{to:"/login"},r.a.createElement(g.a,{variant:"link"},"I already have an account"))))}}]),t}(n.Component),P=a(18).Link;var I=function(e){return r.a.createElement(p.a,{style:{textAlign:"center",paddingTop:"30px"}},r.a.createElement("h2",null,"Log in to Pok\xe9Type"),r.a.createElement(P,{to:"/categories"},r.a.createElement(g.a,null,"Still under construction! Continue to Categories...")))},x=a(24);var W=function(e){return r.a.createElement(x.a,{bg:"dark",text:"light"},r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,e.title),r.a.createElement(x.a.Text,null,e.description)))},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).categories=[{title:"[ EASY ] Pok\xe9Facts",description:"Highly unnecessary facts about Pok\xe9mon.",dest:"facts"},{title:"[ MEDIUM ] Pok\xe9Behaviours",description:"Discover how Pok\xe9mon behave.",dest:"behaviours"}],a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{style:{padding:"20px"}},r.a.createElement("h4",{style:{textAlign:"center",marginBottom:"50px"}},"Choose a category"),this.categories.map((function(e,t){return r.a.createElement("div",{key:t,style:{marginBottom:"20px"}},r.a.createElement(C.Link,{to:"/".concat(e.dest),style:{textDecoration:"none",color:"#000"}},r.a.createElement(W,{title:e.title,description:e.description})))})))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={wpm:"XX",acc:"XX"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({wpm:e.wpm,acc:e.acc})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.Link,{to:"/categories"},r.a.createElement(g.a,{variant:"link"},"Back to Categories")),r.a.createElement("p",null,"WPM: ",this.state.wpm," | ACC: ",this.state.acc,"%"))}}]),t}(n.Component),L=a(38),U=a(39),T=a(42),F=a(40),V=a(43),B=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(T.a)(this,Object(F.a)(t).call(this,e))).state={promptWords:e.promptWords,curWordIndex:e.curWordIndex,correctIndices:e.correctIndices,wrongIndices:e.wrongIndices},a}return Object(V.a)(t,e),Object(U.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({promptWords:e.promptWords,curWordIndex:e.curWordIndex,correctIndices:e.correctIndices,wrongIndices:e.wrongIndices})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginBottom:"30px",textAlign:"left"}},this.state.promptWords.map((function(t,a){return r.a.createElement("p",{key:a,style:{display:"inline",fontSize:"18px",color:a===e.state.curWordIndex?"#D06AFF":e.state.correctIndices.includes(a)?"#69B23F":e.state.wrongIndices.includes(a)?"#D60000":"#000"}},t+" ")})))}}]),t}(n.Component),D=a(41);var A=function(e){var t=e.leaderboard;return t.map((function(e){e.date=new Date(e.date)})),t.sort((function(e,t){return e.wpm-t.wpm||e.acc-t.acc})).reverse(),r.a.createElement("div",null,r.a.createElement("p",null,"Leaderboard (Prompt ID: ",e.promptId,")"),r.a.createElement(D.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"WPM"),r.a.createElement("th",null,"ACC (%)"),r.a.createElement("th",null,"Attempted On"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.wpm),r.a.createElement("td",null,e.acc),r.a.createElement("td",null,e.date.toLocaleString()))})))))};var X=function(e){return r.a.createElement(p.a,null,r.a.createElement(f.a,{src:"/poketype/assets/loading.gif",style:{display:"block",margin:"auto"}}),r.a.createElement("p",null,"Please wait while Pikachu fetches your prompt. Subsequent prompts won't take as long."),r.a.createElement(v.a,{animation:"grow",role:"status"}))},M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).generateNewPrompt=function(){for(var e=Math.floor(Math.random()*a.state.prompts.length);a.state.prompt._id===a.state.prompts[e]._id;)e=Math.floor(Math.random()*a.state.prompts.length);var t=a.state.prompts[e];a.setState({hasStarted:!1,prompt:t,promptWords:t.prompt.split(" "),curWordIndex:0,wrongIndices:[],correctIndices:[],wpm:"XX",acc:"XX",isInputDisabled:!1,isLeaderboardVisible:!1},(function(){a.setState({curWord:a.state.promptWords[0]})}))},a.retryPrompt=function(){a.setState({hasStarted:!1,curWord:a.state.promptWords[0],curWordIndex:0,wrongIndices:[],correctIndices:[],wpm:"XX",acc:"XX",isInputDisabled:!1})},a.changeHandler=function(e){if(!a.state.hasStarted){var t=Date.now();a.setState({hasStarted:!0,startTime:t}),console.log("Timer started: ".concat(t))}var n=e.target.value;if(a.isSpaceKeyPressed(n)){var r=n.substr(0,n.length-1);a.compareWord(r),e.target.value="",e.target.style.backgroundColor="#FFF"}else a.isLastWord(n)?(a.compareWord(n),e.target.value=""):n!==a.state.curWord.substr(0,n.length)?e.target.style.backgroundColor="#EE7878":e.target.style.backgroundColor="#FFF"},a.compareWord=function(e){a.state.curWord===e?a.state.correctIndices.push(a.state.curWordIndex):a.state.wrongIndices.push(a.state.curWordIndex),a.setState({curWordIndex:a.state.curWordIndex+1},(function(){a.state.curWordIndex<a.state.promptWords.length?a.setState({curWord:a.state.promptWords[a.state.curWordIndex]}):a.promptCompleted()}))},a.promptCompleted=function(){var e=Date.now();console.log("Timer ended: ".concat(e));var t=(e-a.state.startTime)/1e3,n=Math.round(a.state.correctIndices.length/t*60),r=a.state.correctIndices.length,o=a.state.promptWords.length,s=parseFloat((r/o*100).toFixed(2));a.setState({isInputDisabled:!0,wpm:n,acc:s},(function(){a.submitPromptLeaderboardEntry(a.state.prompt._id,"test_user",n,s,new Date).then((function(){return a.getPromptLeaderboardById(a.state.prompt._id)})).then((function(e){return a.setState({prompt_leaderboard:e,isLeaderboardVisible:!0})}))}))},a.isSpaceKeyPressed=function(e){return" "===e.substr(e.length-1)},a.isLastWord=function(e){return a.state.curWordIndex===a.state.promptWords.length-1&&e===a.state.curWord},a.state={category:e.category,hasLoaded:!1,hasStarted:!1,prompts:[],prompt:{},promptWords:[],curWordIndex:0,curWord:"",wrongIndices:[],correctIndices:[],wpm:"XX",acc:"XX",isInputDisabled:!1,isLeaderboardVisible:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;""===this.state.category?this.getAllPrompts().then((function(t){return e.setState({prompts:t,hasLoaded:!0},(function(){return e.generateNewPrompt()}))})):this.getPromptsByCategory().then((function(t){return e.setState({prompts:t,hasLoaded:!0},(function(){return e.generateNewPrompt()}))}))}},{key:"getAllPrompts",value:function(){return fetch("https://poketype-api.herokuapp.com/v1/prompts",{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(e){return e.prompts}))}},{key:"getPromptsByCategory",value:function(){return fetch("https://poketype-api.herokuapp.com/v1/prompts?category=".concat(this.state.category),{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(e){return e.prompts}))}},{key:"submitPromptLeaderboardEntry",value:function(e,t,a,n,r){var o={username:t,wpm:a,acc:n,date:r};return fetch("https://poketype-api.herokuapp.com/v1/prompt_leaderboards/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Connection:"keep-alive"},body:JSON.stringify(o)}).then((function(e){return console.log(e)}))}},{key:"getPromptLeaderboardById",value:function(e){return fetch("https://poketype-api.herokuapp.com/v1/prompt_leaderboards?promptId=".concat(e),{method:"GET"}).then((function(e){return e.json()}),(function(e){return console.error(e)})).then((function(e){var t=e.prompt_leaderboard;return console.log(t),t}))}},{key:"render",value:function(){return this.state.hasLoaded?r.a.createElement("div",null,r.a.createElement(O,{wpm:this.state.wpm,acc:this.state.acc}),r.a.createElement(p.a,{style:{backgroundColor:"#ECECEC",borderRadius:"10px",padding:"30px",marginBottom:"30px",textAlign:"center"}},r.a.createElement(B,{promptWords:this.state.promptWords,curWordIndex:this.state.curWordIndex,correctIndices:this.state.correctIndices,wrongIndices:this.state.wrongIndices}),r.a.createElement(E.a,{onSubmit:function(e){e.preventDefault()}},r.a.createElement(E.a.Control,{type:"text",onChange:this.changeHandler,disabled:this.state.isInputDisabled})),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(g.a,{variant:"primary",onClick:this.generateNewPrompt,style:{marginRight:"20px"}},"Give me another Pok\xe9Prompt!"),r.a.createElement(g.a,{variant:"outline-dark",onClick:this.retryPrompt},"Retry"))),this.state.isLeaderboardVisible?r.a.createElement(A,{promptId:this.state.prompt._id,leaderboard:this.state.prompt_leaderboard}):r.a.createElement("p",{style:{textAlign:"center"}},"Complete the Pok\xe9Prompt above to view its leaderboards!")):r.a.createElement(X,null)}}]),t}(n.Component),R=a(21);function _(e){return r.a.createElement(p.a,{style:{paddingTop:"30px",paddingBottom:"30px",textAlign:"center",fontFamily:"Verdana"}},r.a.createElement("h4",{style:{marginBottom:"50px"}},"Pok\xe9Type"),r.a.createElement(M,{category:e.category}))}var G=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(C.HashRouter,{basename:"/"},r.a.createElement(R.g,null,r.a.createElement(R.d,{exact:!0,path:"/",component:S}),r.a.createElement(R.d,{path:"/login",component:I}),r.a.createElement(R.d,{path:"/categories",component:j}),r.a.createElement(R.d,{path:"/facts"},r.a.createElement(_,{category:"fact"})),r.a.createElement(R.d,{path:"/behaviours"},r.a.createElement(_,{category:"behaviour"}))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(G,null),document.getElementById("app"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b205a814.chunk.js.map