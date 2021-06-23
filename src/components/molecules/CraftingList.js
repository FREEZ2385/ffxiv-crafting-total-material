/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Image, Menu } from 'antd';

function CraftingList(props) {
  const { collapsed } = props;
  const { craftingList } = useSelector((state) => state.garlandsReducer);

  return (
    <>
      {craftingList.map((row) => (
        <Menu.Item key={row.name} title={row.name} disabled>
          {collapsed && (
            <Image
              width={40}
              preview={false}
              placeholder={false}
              src={row.icon}
            />
          )}
        </Menu.Item>
      ))}
    </>
  );
}

CraftingList.PropTypes = {
  collapsed: PropTypes.bool,
};

CraftingList.defaultProps = {
  collapsed: false,
};

export default CraftingList;
