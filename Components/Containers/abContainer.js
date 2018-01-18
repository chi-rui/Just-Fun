import { connect } from 'react-redux';
import AB from '../AB.jsx';
import { guessNum, saveInput, playAgainAABB } from '../../action.js';

const mapStateToProps = (state) => {
	return {
		History: state.ABGame.History,
		isGameEnd: state.ABGame.is4A
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		guessNum: () => {
			dispatch( guessNum() )
		},
		saveInput: (num) => {
			dispatch( saveInput(num) )
		},
		playAgainAABB: () => {
			dispatch( playAgainAABB() )
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AB);