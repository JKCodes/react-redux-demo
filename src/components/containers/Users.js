import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class Users extends Component {

	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	onUserUpdate(field, event) {
		if (field == 'username') {
			this.setState({
				username: event.target.value
			})			
		}

		if (field == 'password') {
			this.setState({
				password: event.target.value
			})
		}
	}

	addUser(event) {

		const user = {
			username: this.state.username,
			password: this.state.password
		}

		this.props.createUser(user)

				console.log('Add user: ' + JSON.stringify(user))
	}

	render() {
		console.log("RENDER")
		return (
			<div style={{padding: 24}}>
				<input onChange={this.onUserUpdate.bind(this, 'username')} type="text" placeholder="username" /><br />
				<input onChange={this.onUserUpdate.bind(this, 'password')} type="password" placeholder="password" /><br />
				<button onClick={this.addUser.bind(this)}>Add User</button>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.user
	}
}

const dispatchToProps = (dispatch) => {
	return {
		createUser: (user) => dispatch(actions.createUser(user))
	}
}

export default connect(stateToProps, dispatchToProps)(Users)