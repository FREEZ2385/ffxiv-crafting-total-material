/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Tooltip, Typography, Row, Col, Checkbox } from 'antd';

function MaterialListCheck(props) {
  // eslint-disable-next-line react/prop-types
  const { itemData } = props;
  return (
    <Row gutter={[16, 7]}>
      {Object.keys(itemData).map((itemName, index) => (
        <>
          <Col span={6}>
            <div
              key={index}
              style={{
                display: 'flex',
                marginBottom: 3,
                marginLeft: 20,
                justifyContent: 'space-between',
              }}
            >
              <div key={index + '22'} style={{ display: 'flex' }}>
                <Tooltip
                  placement="topLeft"
                  title={itemData[itemName].info.name}
                >
                  <Image
                    width={30}
                    preview={false}
                    placeholder={false}
                    src={`https://xivapi.com${itemData[itemName].info.icon}`}
                  />
                </Tooltip>
                <Typography style={{ marginLeft: 5 }}>
                  {itemData[itemName].info.name} X {itemData[itemName].amount}
                </Typography>
              </div>
              <div>
                <Checkbox value={itemData[itemName].info.id} />
              </div>
            </div>
          </Col>
        </>
      ))}
    </Row>
  );
}
MaterialListCheck.PropTypes = {
  itemData: PropTypes.obj,
};

MaterialListCheck.defaultProps = {
  itemData: {
    test: {
      amount: 0,
      info: {
        name: '',
        icon: '',
        id: '',
      },
    },
  },
};

export default MaterialListCheck;
