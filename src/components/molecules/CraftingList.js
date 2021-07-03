/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Image, Menu, Typography, InputNumber, Button } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

function CraftingList(props) {
  const { collapsed, onEAChange, onDeleteButton } = props;
  const { craftingList } = useSelector((state) => state.garlandsReducer);

  const menuStyle = {
    backgroundColor: '#658B6f',
    margin: 0,
    height: 60,
    alignItems: 'center',
    display: 'flex',
    borderBottom: '1px solid #1f5e30',
  };

  return (
    <>
      {craftingList.map((row, index) => (
        <Menu.Item key={row.name} title={row.name} style={menuStyle} disabled>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                paddingLeft: 15,
              }}
            >
              <Image
                width={40}
                preview={false}
                placeholder={false}
                src={row.icon}
              />
              {!collapsed && (
                <Typography style={{ marginLeft: 15, color: '#ffffff' }}>
                  {row.name}
                </Typography>
              )}
            </div>
            <div
              style={{
                display: 'flex',
              }}
            >
              {!collapsed && (
                <InputNumber
                  min={1}
                  max={99}
                  value={row.ea}
                  onChange={(value) => onEAChange(index, value)}
                  style={{
                    width: 70,
                    height: 32,
                    position: 'relative',
                    margin: 5,
                  }}
                />
              )}
              <Button
                shape="circle"
                icon={
                  <MinusOutlined style={{ color: '#ffffff', lineHeight: 1 }} />
                }
                size="middle"
                style={{
                  margin: 5,
                  marginLeft: 20,
                  backgroundColor: '#e6342e',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteButton(index);
                }}
              />
            </div>
          </div>
        </Menu.Item>
      ))}
    </>
  );
}

CraftingList.PropTypes = {
  collapsed: PropTypes.bool,
  onEAChange: PropTypes.func,
  onDeleteButton: PropTypes.func,
};

CraftingList.defaultProps = {
  collapsed: false,
  onEAChange: () => {},
  onDeleteButton: () => {},
};

export default CraftingList;
