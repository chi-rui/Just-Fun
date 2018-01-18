import { combineReducers } from 'redux';
import { SET_USER, LOGIN, LOGOUT, PUT_OX, CHECK_WIN, OX_AGAIN, AB_GUESS, SAVE_NUM, AB_AGAIN } from '../action.js';

const loginData = {
	user : "",
	isLogin : false
}

const oxData = {
	playerMark : "O",
	OXgame:[
            ["1","2","3"],["4","5","6"],["7","8","9"]
           ],
    isWinner:""
}

const abData = {
	answer : [],
	lastNum : "",
	History:[],
	is4A:false
}

function isLogined(state = loginData, action){
	switch(action.type){
		case SET_USER:
		// console.log(action.user.target.value);
			return Object.assign({}, state, {
				user : action.user.target.value
			});
		case LOGIN:
			if(state.user == ""){
				window.alert("阿阿阿您忘記名字了阿阿阿！");
				return state;
			}else{
				return Object.assign({}, state, {
					isLogin : true
				});
			}
		case LOGOUT:
			return Object.assign({}, state, {
				user : "",
				isLogin : false
			});
		default:
			return state;
	}
}

function OXGame(state = oxData, action){
	// console.log(state.isWinner);
	switch(action.type){
		case PUT_OX:
			var OX = state.OXgame;
			var winner = "";
			if(state.isWinner != ""){
				window.alert(state.isWinner + "勝利！");
				return state;
			}else if(OX[action.x][action.y] == "O" || OX[action.x][action.y] == "X"){
				window.alert("不可以作弊ㄛ~~~~");
				return state;
			}else{
				if(state.playerMark == "O"){
					OX[action.x][action.y] = "O";
					winner = checkWinner(OX);
					return Object.assign({},state,{
						OXgame : OX,
						playerMark : "X",
						isWinner : winner
					});
				}else{
					OX[action.x][action.y] = "X";
					winner = checkWinner(OX);
					return Object.assign({},state,{
						OXgame : OX,
						playerMark : "O",
						isWinner : winner
					});
				}
			}

		case OX_AGAIN:
			return Object.assign({},state,{
					playerMark : "O",
					OXgame:[
				            ["1","2","3"],["4","5","6"],["7","8","9"]
				           ],
				    isWinner:"",
				});
		default:
			return state;
	}
}

function checkWinner(game){
	var winner = "";
	var i;
	for(i = 0; i < 3; i++){
		if(game[i][0] == game[i][1]){
			if(game[i][1] == game[i][2]){
				winner = game[i][2];
				if(winner != "")
					break;
			}
		}
		if(game[0][i] == game[1][i]){
			if(game[1][i]==game[2][i]){
				winner = game[2][i];
				if(winner != "")
					break;
			}
		}
	}
	if(winner == ""){
		if(game[0][0] == game[1][1]){
			if(game[1][1] == game[2][2]){
				if(game[2][2] != ""){
					winner = game[2][2];
				}
			}
		}
		if(game[0][2] == game[1][1]){
			if(game[1][1] == game[2][0]){
				if(game[2][0] != ""){
					winner = game[2][0];
				}
			}
		}
	}
	return winner
}

function ABGame(state = abData, action){
	switch(action.type){
		case AB_GUESS:
			var userInput = state.lastNum;
			console.log(userInput)
			if( userInput == ""){
				window.alert("阿阿阿你忘記輸入數字了阿阿阿！");
				return state;
			}else if(userInput.length != 4 || isNaN(userInput)){
				window.alert("要四位數字喔~");
				return state;
			}else{
				var i, j, isSame = false;
				var n = [];
				for(i = 0; i < 4; i++){
					n[i] = userInput.charAt(i);
				}
				for(i = 0; i < 3; i++){
					for(j = i+1; j < 3-i; j++){
						if(n[i] == n[j])
							isSame = true;
					}
				}
				if(isSame){
					window.alert("四位數字不可重複！");
					return state;
				}else{
					if(!state.is4A){
						var a = 0, b = 0;
						var ans = state.answer;
						for(i=0; i<4; i++){
							for(j=0; j<4; j++){
								if(ans[i] == n[j]){
									if(i == j)
										a++;
									else
										b++;
								}
							}
						}
						var H = insertResult(state.History,{
							number:n,
							A:a,
							B:b
						});
						
						if(a == 4){
							return Object.assign({},state,{
								History:H,
								is4A:true
							});
						}else{
							// console.log(H);
							return Object.assign({},state,{
								History: H,
							});
						}
					}else{
						window.alert("遊戲已結束");
						return state;
					}
				}
			}
		case SAVE_NUM:
			return Object.assign({}, state, {
				lastNum: action.num.target.value
			});

		case AB_AGAIN:
			var ans = getNewNumber();
			return Object.assign({},state,{
				answer : ans,
				lastNum : "",
				History:[],
				is4A:false
			});
		default:
			return state;
	}
}

function insertResult(array, result){
	var i = array.length;
	return [
		...array.slice(0,i),
		result
	];
}

function getNewNumber(){
	var abGame = [0,1,2,3,4,5,6,7,8,9];
	var i, j, swap, result;
	var k = Math.floor(Math.random()*6);  

	for(i=0; i<9; i++){
		j = Math.floor(Math.random()*9);
		swap = abGame[i];
		abGame[i] = abGame[j];
		abGame[j] = swap;	
	}
	
	result = abGame.slice(k, k+4);

	if( result[0] == 0 ){
		j = Math.floor(Math.random()*2+1);
		swap = result[0];
		result[0] = result[j];
		result[j] = swap;
	}
	return result;

}

const GameWeb = combineReducers({
	isLogined,
	OXGame,
	ABGame
});

export default GameWeb;