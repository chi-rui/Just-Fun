export const SET_USER = 'SET_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const PUT_OX = 'PUT_OX';
export const CHECK_WIN = 'CHECK_WIN';
export const OX_AGAIN = 'OX_AGAIN';
export const AB_GUESS = 'AB_GUESS';
export const SAVE_NUM = 'SAVE_NUM';
export const AB_AGAIN = 'AB_AGAIN';

export function setUser( user ){
	return {
		type : SET_USER,
		user : user
	}
}

export function userLogin(){
	return {
		type : LOGIN
	}
}

export function userLogout(){
	return {
		type : LOGOUT
	}
}

export function putMark(X, Y){
	return {
		type : PUT_OX,
		x : X,
		y : Y
	}
}

export function isGameEnd(){
	return{
		type : CHECK_WIN
	}
}

export function playAgainOOXX(){
	return{
		type : OX_AGAIN
	}
}

export function guessNum(){
	return{
		type : AB_GUESS
	}
}

export function saveInput(num){
	return{
		type : SAVE_NUM,
		num : num		
	}
}

export function playAgainAABB(){
	return{
		type : AB_AGAIN
	}
}