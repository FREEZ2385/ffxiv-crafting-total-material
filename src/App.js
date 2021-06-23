import { Layout, Menu } from 'antd';
import { ProfileOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './App.css';

import CrafterRecipes from './components/pages/CrafterRecipes';
import CraftingList from './components/molecules/CraftingList';

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

  const [pageKey, setPageKey] = useState('Crafter Recipes');

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

        <Menu
          theme="dark"
          defaultSelectedKeys={[pageKey]}
          mode="inline"
          onClick={(item) => setPageKey(item.key)}
        >
          <Menu.Item key="Crafter Recipes" icon={<ProfileOutlined />}>
            Crafter Recipes
          </Menu.Item>
          <Menu.Item key="Leveling Jobs" icon={<AppstoreAddOutlined />}>
            Leveling Jobs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          {pageKey === 'Crafter Recipes' && <CrafterRecipes />}
        </Content>
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
        <Menu theme="dark" inlineIndent={50} mode="inline">
          <CraftingList collapsed={rightSideBarCollapsed} />
        </Menu>
      </Sider>
    </Layout>
  );
}

export default App;
