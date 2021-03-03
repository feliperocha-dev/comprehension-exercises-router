import React, { Component } from 'react';

class Users extends Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <p> {this.props.greetingMessage}, this is my awesome Users component </p>
      </div>
    );
  }
};

export default Users;
