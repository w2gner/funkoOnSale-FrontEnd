import React, { onLoad, useEffect, useState, componentDidMount } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, Card, Space } from 'antd';
import axios from 'axios';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

axios.defaults.baseURL = 'http://localhost:4000';

const App = () => {
  const [funkos, setFunkos] = useState('');

  let count = 0;

  // useEffect(() => {
  //   if (count === 0) {
  //     try {
  //       axios.get('users').then(response => {
  //         if (response.status === 200) {
  //           console.log(funkos)
  //           setFunkos(response);
  //         } else {
  //           alert('Usuário ou senha incorretos');
  //         }
  //       });
  //       count++;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, [funkos]);

  onLoad = function () {
    try {
      axios.get('users').then(response => {
        if (response.status === 200) {
          console.log(funkos)
          setFunkos(response);
        } else {
          alert('Usuário ou senha incorretos');
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  function renderCards() {
    funkos.forEach(funko => {
      return (
        <Space direction="vertical" size={20}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={funko.url} />}
          >
            <Meta title={funko.name} description={funko.description} />
          </Card>
        </Space>
      )
    });
  }

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <img alt="foto" src='https://upload.wikimedia.org/wikipedia/pt/6/61/Microsoft_Paint-3D_Logo.png'
            className="logo" />
          <Link style={{ color: 'white', marginLeft: '50px' }} to="/login" >Login</Link>
          <Link style={{ color: 'white', marginLeft: '50px' }} to="/cadastro" >Cadastro</Link>
          <Link style={{ color: 'white', marginLeft: '50px' }} to="/funko" >Funko</Link>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <div className="space-align-container">
            <div className="space-align-block">
              {renderCards}
            </div>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Criado com 👌 por Wagner / Darlan
      </Footer>
    </Layout >
  );
};

export default App;