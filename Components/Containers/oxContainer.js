import { connect } from 'react-redux';
import OX from '../OX.jsx';
import { putMark, isGameEnd, playAgainOOXX } from '../../action.js';

const mapStateToProps = (state) => {
	return {
		playerMark : state.OXGame.playerMark,
		OXgame : state.OXGame.OXgame,
		isWinner : state.OXGame.isWinner
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		putMark: (x, y) => {
			dispatch( putMark(x, y) )
		},
		isGameEnd: () => {
			dispatch( isGameEnd() )
		},
		playAgainOOXX: () =>{
			dispatch( playAgainOOXX() )
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OX);