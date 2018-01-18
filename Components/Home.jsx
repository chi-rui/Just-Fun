import React from 'react';
import propTypes from 'prop-types';

function Home(props){
	var userName = {
		color:'#00f'
	}
	
	return(
		<div className="home">
			<h1>小小遊戲，大大練習！</h1>
			<p><span style={userName}>{props.user}</span> 你好啊~</p>
			<p>歡迎來到 ReactJS 的最終激戰</p>
			<p>這裡是首頁，祝天天開心。</p>
			<input type="button" value="登出" onClick={props.onClick} />
		</div>
		);
}

Home.propTypes = {
	user:propTypes.string.isRequired,
	onClick:propTypes.func
}

export default Home;
