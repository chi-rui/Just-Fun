import React from 'react';
import propTypes from 'prop-types';

function OXList(props){
   // console.log(props.onClick);
   var game = props.game;
   var clickLeft = props.onClick;
   var x = props.x;
   var divStyle = {
   		width: '100%',
   		height: '100%',
   		cursor: 'pointer'
   }
   return(
      <tr>
         <td><div style={divStyle} onClick={() => props.onClick(x, 0)}>{game[0]}</div></td>
         <td><div style={divStyle} onClick={() => props.onClick(x, 1)}>{game[1]}</div></td>
         <td><div style={divStyle} onClick={() => props.onClick(x, 2)}>{game[2]}</div></td>
      </tr>
      );
}

OXList.propTypes = {
}

export default OXList;