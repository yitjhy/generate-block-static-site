import React, { FC, useEffect, useState } from 'react'
import './App.css'
import { Layout, Menu, Row, Col } from 'antd'
import Router from './router'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import menus from './menu'

const { Header, Content } = Layout

const App: FC<RouteComponentProps> = ({ history, location }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  useEffect(() => {
    setSelectedKeys([location.pathname])
  }, [location.pathname])
  return (
    <div className="App">
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img
            className="logo"
            alt="logo"
            width="32px"
            height="32px"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <span className="siteName">YITJHY-BLOCK</span>
        </div>
        <div className="homeOperationWrapper">
          <span className="docs">介绍</span>
          <span
            className="github"
            onClick={() => window.open('https://gitee.com/yitjhy/block/tree/master', '_blank')}
          />
        </div>
      </Header>
      <Row>
        <Col span={4}>
          <div
            style={{
              paddingLeft: 0,
              height: 'max(calc(100%), calc(100vh - 75px))',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Menu mode="inline" style={{ flex: 1 }} selectedKeys={selectedKeys}>
              {menus.map((item) => (
                <Menu.Item
                  key={item.path}
                  onClick={() => {
                    setSelectedKeys([item.path])
                    history.push(item.path)
                  }}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Col>
        <Col span={20}>
          <Content style={{ margin: '0px 62px 0' }}>
            <div className="site-layout-background" style={{ minHeight: 360 }}>
              <Router />
            </div>
          </Content>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(App)
