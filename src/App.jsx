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
          <Header style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                            <img className="logo" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                          <span className='siteName'>YITJHY</span>
                    </div>
                    <span style={{
                        marginRight: '25px', 
                        width: '20px', 
                        height: '20px', 
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        marginTop: '19px',
                        cursor: 'pointer',
                        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=)'}} 
                        onClick={() => window.open('https://github.com/yitjhy/generate-block-static-site', '_blank')}
                        />
            </Header>
          <Row>
              <Col span={4}>
                  <div style={{paddingLeft: 0, height: 'calc(100vh - 75px)', display: 'flex', flexDirection: 'column'}}>
                      
                      <Menu mode="inline" style={{flex: 1}}>
                          {
                              menus.map(item => <Menu.Item key={item.key} onClick={() => {history.push(item.path)}}>
                                  {item.title}
                              </Menu.Item>)
                          }
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
  );
}

export default withRouter(App)
