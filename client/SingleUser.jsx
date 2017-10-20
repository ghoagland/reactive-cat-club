import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './store';

class SingleUser extends Component {

  componentDidMount() {
    this.props.loadUser(this.props.id);
  }

  render() {
    const { user } = this.props;
    return (
    <div className="single-user">
      <h2>{user.name}, {user.email}</h2>

    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  id: ownProps.match.params.userId
})

const mapDispatchToProps = (dispatch) => ({
  loadUser(userId){
    dispatch(fetchUser(userId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
