import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import { Button, message, Alert, Space } from 'antd';
import { useSelector } from 'react-redux';

export default function Login() {
  const { loading, data, error } = useSelector((state: any) => state.userReducer);
  const [messageApi, contextHolder] = message.useMessage();

  const successLogin = () => {
    messageApi.open({
      type: 'success',
      content: 'Success Login',
    });
  };
  const errorLogin = () => {
    messageApi.open({
      type: 'error',
      content: 'Error Login',
    });
  };

  // useEffect(() => {
  //   console.log("data login", data)
  //   if (data) {
  //     successLogin()
  //   }
  //   else if (error) {
  //     errorLogin()
  //   }
  // }, [data, error])

  return (
    <>
      {contextHolder}

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
