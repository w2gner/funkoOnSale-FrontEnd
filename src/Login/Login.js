import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from "react-router-dom";
import { Input } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import './Login.css';

const Login = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  // const [id, setId] = useState('');
  // this.preventDefault();
  // navigate.push('/login');
  const handleLogin = () => {
    // navigate('/home');
  }


  return (
    <>
      <div className="logon-container">
        <section className="form">
          <form onSubmit={handleLogin()}>
            <h1>Faça seu login</h1>
            <Input
              placeholder="Insira seu usuário"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
            <Input
              placeholder="Insira sua senha"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
            <button className="button" type="submit">Entrar</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;