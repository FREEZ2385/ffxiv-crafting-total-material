import { Layout, Menu } from 'antd';
import { ProfileOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './App.css';

function App() {
  const { Footer, Sider, Content } = Layout;

  const [leftSideBarCollapsed, setLeftSideBarCollapsed] = useState(false);
  const onLeftSideBarCollapse = () => {
    const isCollapsed = leftSideBarCollapsed;
    setLeftSideBarCollapsed(!isCollapsed);
  };

  const [rightSideBarCollapsed, setRightSideBarCollapsed] = useState(true);
  const onRightSideBarCollapse = () => {
    const isCollapsed = rightSideBarCollapsed;
    setRightSideBarCollapsed(!isCollapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={leftSideBarCollapsed}
        onCollapse={onLeftSideBarCollapse}
      >
        <div className="title-area">
          {!leftSideBarCollapsed && <text>FFXIV Craft Total Material</text>}
          {leftSideBarCollapsed && <text>CTM</text>}
        </div>

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<ProfileOutlined />}>
            Crafter Recipes
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            Leveling Jobs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>test</Content>
        <Footer style={{ textAlign: 'center' }}>
          Lee Freez ©2021 Created by Lee Freez
        </Footer>
      </Layout>
      <Sider
        width={500}
        collapsible
        collapsedWidth={150}
        reverseArrow
        collapsed={rightSideBarCollapsed}
        onCollapse={onRightSideBarCollapse}
      >
        <div className="title-area">
          <text>Crafting List</text>
        </div>
      </Sider>
    </Layout>
  );
}

export default App;
