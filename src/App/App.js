import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, Card, Button, Space } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const App = () => (
  <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <img alt="foto" src='https://upload.wikimedia.org/wikipedia/pt/6/61/Microsoft_Paint-3D_Logo.png'
          className="logo" />
        <Link style={{color:'white', marginLeft: '50px'}}to="/login" >Login</Link>
        <Link style={{color:'white', marginLeft: '50px'}}to="/cadastro" >Cadastro</Link>
        <Link style={{color:'white', marginLeft: '50px'}}to="/funko" >Funko</Link>
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
            {createCard("Funko 1", "R$56,40")}
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
  </Layout>
);

export default App;

function createCard(cardName, price, image) {
  return (
    <Space align="left">
      <Card
        hoverable
        style={{ width: 240 }
      
      }
        cover={<img alt="example" src="https://cf.shopee.com.br/file/65069c28a78fbd99e06ae0279c9979dc" />}
      >
        
        <Meta title={cardName} description={price} />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }
      
      }
        cover={<img alt="example" src="https://m.media-amazon.com/images/I/816kbALacOL._AC_SL1500_.jpg" />}
      >
        
        <Meta title={cardName} description={price} />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }
      
      }
        cover={<img alt="example" src="https://m.media-amazon.com/images/I/51VmjaTPf6L._AC_.jpg" />}
      >
        
        <Meta title={cardName} description={price} />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }
      
      }
        cover={<img alt="example" src="https://cf.shopee.com.br/file/559048b94cb35d9dce98271e54d39329" />}
      >
        
        <Meta title={cardName} description={price} />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }
      
      }
        cover={<img alt="example" src="https://cf.shopee.com.br/file/2bb621a80f7d3b8333b8c62d7b5f2564" />}
      >
        
        <Meta title={cardName} description={price} />
      </Card>
    </Space>
    
  )
}