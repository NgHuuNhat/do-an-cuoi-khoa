import React from 'react'

export default function RegisterForm() {
    return (
        <form action="/action_page.php">
            <h1>Register</h1>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="emailRegister" />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" id="pwdRegister" />
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary" data-dismiss="modal">Submit</button>
        </form>
    )
}
