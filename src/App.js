import { Layout, Menu } from 'antd';
import { ProfileOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './App.scss';

import CrafterRecipes from './components/pages/CrafterRecipes';
import CraftingList from './components/molecules/CraftingList';
import MaterialList from './components/organisms/MaterialList';
import { useDispatch, useSelector } from 'react-redux';
import garlandsActions from './state/ducks/garlands/actions';

function App() {
  const { Footer, Sider, Content } = Layout;

  const { craftingList, resultList } = useSelector(
    (state) => state.garlandsReducer
  );
  const { isLoading } = useSelector((state) => state.commonReducer);

  const dispatch = useDispatch();
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

  const [materialListOpen, setMaterialListOpen] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MaterialList
        onOpen={materialListOpen}
        setOnOpen={setMaterialListOpen}
        materialListData={resultList}
        isLoading={isLoading}
      />
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
        style={{ transition: 'all 0.1s' }}
      >
        <div className="title-area">
          <text>Crafting List</text>
        </div>
        <div className="crafting-list-area">
          <Menu
            theme="dark"
            inlineIndent={50}
            selectable={false}
            mode="inline"
            style={{ overflowY: 'auto' }}
          >
            <CraftingList
              collapsed={rightSideBarCollapsed}
              onEAChange={(index, value) =>
                dispatch(garlandsActions.setCraftingEA(index, value))
              }
              onDeleteButton={(index) =>
                dispatch(garlandsActions.deleteCraftingList(index))
              }
            />
            <Menu.Item
              onClick={() => {
                dispatch(garlandsActions.calculateCraftingList(craftingList));
                setMaterialListOpen(true);
              }}
              style={{
                backgroundColor: '#1890ff',
                position: 'absolute',
                bottom: 44,
              }}
            >
              {!rightSideBarCollapsed && 'Calculate the Material'}
              {rightSideBarCollapsed && 'Calculate'}
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </Layout>
  );
}

export default App;
