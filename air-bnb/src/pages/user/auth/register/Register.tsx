import React from 'react';
import RegisterForm from './RegisterForm';

export default function Register() {
    return (
        <>
            <div className="modal fade" id="exampleModalRegister" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#fe6b6e' }}>Đăng ký</h5>
                            <button id='btn-closee' data-dismiss="modal" type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
