import React from 'react';
import OXList from "./OXList.jsx"

function OX({playerMark, OXgame, isWinner, putMark, isGameEnd, playAgainOOXX}){
   
   var textStyle = {
      paddingLeft:'15px'
   }
   var winnerStyle = {
      fontSize:'80px',
      color:'#f00'
   }
   var i = 0;
   return(
      <div className="OX">
         <div className="left">
            <table>
               <tbody>
                  {OXgame.map(
                     (OXgame, i) => <OXList game={OXgame} onClick={putMark} x={i} key={i} />
                     )}
               </tbody>
            </table>
         </div>
         <div className="right">
            <h3>規則：</h3>
            <p style={textStyle}>兩位玩家輪流點選九宮格，先連線，先勝利！</p>
            <input type="button" onClick={playAgainOOXX} value="新遊戲" />        
            { isWinner != "" && <h3 style={winnerStyle}>{isWinner} 勝利！</h3> }
         </div>
      </div>      
   );

}
export default OX;