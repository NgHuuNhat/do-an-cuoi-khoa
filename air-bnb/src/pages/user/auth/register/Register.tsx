import React, { useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { Button, message, Alert, Space } from 'antd';
import { useSelector } from 'react-redux';

export default function Register() {
    const { loading, data, error } = useSelector((state: any) => state.userReducer);
    const [messageApi, contextHolder] = message.useMessage();

    const successRegister = () => {
        messageApi.open({
            type: 'success',
            content: 'Success Register',
        });
    };
    const errorRegister = () => {
        messageApi.open({
            type: 'error',
            content: 'Error Register',
        });
    };

    // useEffect(() => {
    //     console.log("data register", data)
    //     if (data) {
    //         successRegister()
    //     }
    //     else if (error) {
    //         errorRegister()
    //     }
    // }, [data, error])

    return (
        <>
            {contextHolder}

            <div className="modal fade" id="exampleModalRegister" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
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
