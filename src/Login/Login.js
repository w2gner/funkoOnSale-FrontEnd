import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Input, Button } from 'antd';
import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import './Login.css';

axios.defaults.baseURL = 'http://localhost:4000';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  let data = {
    email: email,
    password: password,
  }
  
  function back(e) {
    e.preventDefault();
    navigate("/home")
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await axios.post('login', data).then(response => {
        if (response.status === 200) {
          console.log(response.data)
          localStorage.setItem('userId', response.data);
          navigate('/home')
        }
        else if (response.status === 404) {
          alert('Usuário ou senha incorretos');
        } else {
          alert('Usuário ou senha incorretos');
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="logon-container">
        <section className="form">
          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>
            <Input
              size="large"
              placeholder="Insira seu usuário"
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              size="large"
              placeholder="Insira sua senha"
              prefix={<LockOutlined Outlined className="site-form-item-icon" />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              htmlType='submit'
              type="primary"
              onClick={back}
            >
              Voltar
            </Button>
            <Button
              htmlType='submit'
              type="primary"

            >
              Login
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;