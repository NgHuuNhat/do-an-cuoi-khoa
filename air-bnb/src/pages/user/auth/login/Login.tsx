import React from 'react'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <>
      <div className="modal fade" id="exampleModalLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button id='btn-close' data-dismiss="modal" type="button" className="close" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
