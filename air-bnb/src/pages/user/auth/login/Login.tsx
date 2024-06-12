import React from 'react'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <>
      {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLogin">
        Login
      </button> */}


      <div className="modal fade"
        id="exampleModalLogin"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button id='btn-close' data-dismiss="modal" type="button" className="close" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <LoginForm />
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
