import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StrictAccess extends Component {

  render() {
  const { username, password } = this.props.user;
    if ((username !== 'joao') || (password !== 1234 )) {
      console.log(this.props);
      alert('Access Deined!')
      return <Redirect to='/' />
    } 
    return (
      <h1>Welcome João!</h1>
    )
  }
}

export default StrictAccess;