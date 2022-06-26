import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
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
        items={new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      >
        <img src='https://upload.wikimedia.org/wikipedia/pt/6/61/Microsoft_Paint-3D_Logo.png'
          className="logo" />
        <Button>teste</Button>

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
    <Space align="baseline">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://cf.shopee.com.br/file/65069c28a78fbd99e06ae0279c9979dc" />}
      >
        <Meta title={cardName} description={price} />
      </Card>
    </Space>
  )
}