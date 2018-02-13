import React, { PureComponent } from 'react'
import fetchUser from '../actions/users/fetch'
import { connect } from 'react-redux'

class Profile extends PureComponent {

  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    return(
      <div>
        Hello
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps, { fetchUser })(Profile)
