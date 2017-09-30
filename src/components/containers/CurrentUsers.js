import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class CurrentUsers extends Component {

  render() {
    return (
      <div style={{padding: 24}}>      
        <br /><br />
        <h3 style={{marginBottom: 0}}>Current Users</h3>
        <ol style={{paddingLeft: 16, color: 'red', fontSize: '24' }}>
          { this.props.user.all.map((user, i) => {
              return <li key={user.username}>{user.username}</li>
            })      
          }
        </ol>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(stateToProps)(CurrentUsers)