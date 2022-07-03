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
      console.log("Email: " + email);
      console.log("Senha: " + password);
      await axios.post('login', data).then(response => {
        if (response.status === 200) {
          navigate('/home')
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
              placeholder="insira sua senha"
              prefix={<LockOutlined Outlined className="site-form-item-icon" />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="Login" type="submit">Entrar</button>
            <button className="Voltar" type="submit" onClick={back}>Voltar</button>
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