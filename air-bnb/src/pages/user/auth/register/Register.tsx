import React from 'react'
import RegisterForm from './RegisterForm'

export default function Register() {
    return (
        <>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalRegister">
                Register
            </button> */}
            <li className="nav-item" data-toggle="modal" data-target="#exampleModalRegister">
                <a className="nav-link" href="#">Register</a>
            </li>

            <div className="modal fade" id="exampleModalRegister" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <RegisterForm />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
