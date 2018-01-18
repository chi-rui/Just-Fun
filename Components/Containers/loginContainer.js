import { connect } from 'react-redux';
import App from '../../App.jsx';
import { setUser, userLogin, userLogout } from '../../action.js';

const mapStateToProps = (state) => {
	return {
		user: state.isLogined.user,
		isLogin : state.isLogined.isLogin
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		setUser: (user) => {
			dispatch( setUser(user) )
		},
		login: () => {
			dispatch( userLogin() )
		},
		logout: () => {
			dispatch( userLogout() );
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);