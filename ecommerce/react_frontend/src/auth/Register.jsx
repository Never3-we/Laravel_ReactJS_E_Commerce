import React from 'react'

export default function Register() {
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register Page</h1>
      <input type="txet" className="form-control" placeholder="name" />
      <br />
      <input type="password" className="form-control" placeholder="password" />
      <br />
      <input type="text" className="form-control" placeholder="email"/>
      <br />
      <button className="btn btn-primary">Sign Up</button>
    </div>
  )
}
