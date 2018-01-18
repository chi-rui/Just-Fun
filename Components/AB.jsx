import React from 'react';
import ABList from './ABList.jsx';

// function AB({History, isGameEnd, guessNum, saveInput, playAgainAABB}){
// 	// console.log(History);
// 	var textStyle = {
// 	   paddingLeft:'15px'
// 	}

// 	var newGameStyle = {
// 		display:'inline-block',
// 		marginLeft:'40px'
// 	}

// 	return(
// 		<div className="AB">
// 			<div className="left">
// 				<fieldset>
// 					<legend>猜題紀錄</legend>
// 					{History.map(
// 					   (History, i) => <ABList key={i} data={History} />
// 					   )}
// 				</fieldset>
// 			</div>
// 			<div className="right">
// 				<h3>規則：</h3>
// 				<p style={textStyle}>數字對位置對為A</p>
// 				<p style={textStyle}>數字對位置錯為B</p>
// 				<p style={textStyle}>數字不會重複出現</p>
// 				<p style={textStyle}>數字0不會出現在第一位</p>
// 				<h3 style={{paddingTop:'5px'}}>猜題：</h3>
// 				<input type="text" placeholder="請輸入4位不重複數字" 
// 					   onChange={(event) => saveInput(event)} maxLength="4"/>
// 				<input type="button" value="確認" onClick={guessNum}/>
// 				<input style={newGameStyle} type="button" value="新遊戲" onClick={playAgainAABB} />
// 			</div>
// 		</div>
// 	);
// }

class AB extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){
		// console.log(this.props.playAgainAABB);
		this.props.playAgainAABB();
	}

	render(){
		var textStyle = {
		   paddingLeft:'15px'
		}

		var newGameStyle = {
			display:'inline-block',
			marginLeft:'40px'
		}

		return(
			<div className="AB">
				<div className="left">
					<fieldset>
						<legend>猜題紀錄</legend>
						{this.props.History.map(
						   (History, i) => <ABList key={i} data={History} />
						   )}
					</fieldset>
				</div>
				<div className="right">
					<h3>規則：</h3>
					<p style={textStyle}>數字對位置對為A</p>
					<p style={textStyle}>數字對位置錯為B</p>
					<p style={textStyle}>數字不會重複出現</p>
					<p style={textStyle}>數字0不會出現在第一位</p>
					<h3 style={{paddingTop:'5px'}}>猜題：</h3>
					<input type="text" placeholder="請輸入4位不重複數字" 
						   onChange={(event) => this.props.saveInput(event)} maxLength="4"/>
					<input type="button" value="確認" onClick={this.props.guessNum}/>
					<input style={newGameStyle} type="button" value="新遊戲" onClick={this.props.playAgainAABB} />
				</div>
			</div>
		);
	}
}

export default AB;