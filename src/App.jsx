import React, {useEffect, useState} from 'react';
import './App.css';
import {Layout, Menu, Row, Col} from 'antd';
import Router from './router'
import {withRouter} from "react-router-dom";
import menus from './constant/index'

const {Header, Content} = Layout;

const App = ({history, location}) => {
    console.log(location.pathname);
    const [selectedKeys, setSelectedKeys] = useState([]);

    useEffect(() => {
        setSelectedKeys([location.pathname])
    }, [])
    return (
        <div className="App">
            <Header style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <img className="logo" alt="logo"
                         src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
                    <span className='siteName'>YITJHY</span>
                </div>
                <div className='homeOperationWrapper'>
                    <span className='docs'>介绍</span>
                    <span className='github'
                          onClick={() => window.open('https://github.com/yitjhy/generate-block-static-site', '_blank')}/>
                </div>
            </Header>
            <Row>
                <Col span={4}>
                    <div style={{
                        paddingLeft: 0,
                        height: 'calc(100vh - 75px)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                        <Menu mode="inline" style={{flex: 1}} selectedKeys={selectedKeys}>
                            {
                                menus.map(item => <Menu.Item key={item.path} onClick={() => {
                                    setSelectedKeys([item.path]);
                                    history.push(item.path);
                                }}>
                                    {item.title}
                                </Menu.Item>)
                            }
                        </Menu>
                    </div>
                </Col>
                <Col span={20}>
                    <Content style={{margin: '0px 62px 0'}}>
                        <div className="site-layout-background" style={{minHeight: 360}}>
                            <Router/>
                        </div>
                    </Content>
                </Col>
            </Row>
        </div>
    );
}

export default withRouter(App)
