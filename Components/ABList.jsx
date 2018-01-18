import React from 'react';
import propTypes from 'prop-types';

function ABList(props){
	// console.log(props)
	var listStyle = {
		paddingLeft:'10px',
		fontSize:'20px'
	}
	var spanStyle = {
		color:'#f00',
		paddingLeft:'5px'
	}
	return(
		<p style={listStyle}>
			<span style={{color:'#00f'}}>{props.data.number}</span> ： 
			<span style={spanStyle}>{props.data.A}</span> A 
			<span style={spanStyle}>{props.data.B}</span> B
		</p>
		);
}

ABList.propTypes = {
	data:propTypes.object
}

export default ABList;