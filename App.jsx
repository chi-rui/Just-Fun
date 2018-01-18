import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import OX from "./Components/OX.jsx";
import oxContainer from './Components/Containers/oxContainer.js';
import abContainer from "./Components/Containers/abContainer.js";
import Home from "./Components/Home.jsx"

function App({user, isLogin, setUser, login, logout}){

   var loginPrompt = {
      textAlign: 'center',
      paddingTop: '55px',
      paddingBottom: '15px',
      color: '#fff',
      textShadow: '0 0 10px #ff006c, 0 0 20px #ff006c, 0 0 40px #ff417d',
      margin:'0px'
   }

   var formStyle = {
      textAlign: 'center',
      paddingTop: '15px',
      marginLeft: 'auto',
      marginRight: 'auto'
   }

   if(isLogin){
      return (
         <Router>
            <div className="container">
               <img className="logo" src="asset/logo.png" />
               <ul className="gameList">
                  <li><Link to={'/ooxx'}>圈圈叉叉</Link></li>
                  <li><Link to={'/aabb'}>數字猜猜</Link></li>
                  <li><Link to={'/'}>回首頁</Link></li>
               </ul>
               <hr style={{marginTop:'150px'}}/>
               <div className="notebook">
               <Switch>
                  <Route exact path="/"
                         children={
                           <Home user={user} onClick={logout} />
                           }  
                  />
                  <Route exact path="/ooxx" component={oxContainer} />
                  <Route exact path='/aabb' component={abContainer} />
               </Switch>
               </div>
            </div>
         </Router>
      );      
   }else{
      return(
         <div className="animateBg">
            <div className="loginBlock">
               <h1 style= {loginPrompt} >你好，先登入一下如何？</h1>
               <form style={formStyle} onSubmit={login}>
                  <input id="user" type="text" placeholder="請輸入您的大名" 
                         onChange={(event) => setUser(event)}/>
                  <input type="submit" value="確認" />
               </form>
            </div>
         </div>
      );
   }
}

export default App;