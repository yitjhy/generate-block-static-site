import React from 'react';
import './App.css';
import { Layout, Menu, Row, Col } from 'antd';
import Router from './router'
import { withRouter } from "react-router-dom";
import menus from './constant/index'

const { Header, Content } = Layout;

const App = ({history}) => {
  return (
      <div className="App">
          <Row>
              <Col span={4}>
                  <div style={{paddingLeft: 0, height: '100vh', display: 'flex', flexDirection: 'column'}}>
                      <Header>
                          <img className="logo" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                          <span className='siteName'>YITJHY</span>
                      </Header>
                      <Menu mode="inline" style={{flex: 1}}>
                          {
                              menus.map(item => <Menu.Item key={item.key} onClick={() => {history.push(item.path)}}>
                                  {item.title}
                              </Menu.Item>)
                          }
                      </Menu>
                  </div>
              </Col>
              <Col span={18}>
                  <Content style={{ margin: '68px 62px 0' }}>
                      <div className="site-layout-background" style={{ minHeight: 360 }}>
                          <Router />
                      </div>
                  </Content>
              </Col>
          </Row>
      </div>
  );
}

export default withRouter(App)
