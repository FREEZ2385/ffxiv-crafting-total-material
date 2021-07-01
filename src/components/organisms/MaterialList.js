/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Row, Col, Divider, Typography, Spin } from 'antd';
import MaterialListCheck from '../molecules/MaterialListCheck';

function MaterialList(props) {
  // eslint-disable-next-line react/prop-types
  const { onOpen, setOnOpen, materialListData, isLoading } = props;
  return (
    <Drawer
      title="Material Lists of calculation of Crafing List"
      placement="bottom"
      onClose={() => setOnOpen(false)}
      visible={onOpen}
      height="75%"
    >
      {isLoading && (
        <>
          <Row justify="center" style={{ height: '100%' }} align="middle">
            <Col span={24} style={{ textAlign: 'center' }}>
              <Spin
                tip="Tataru is calculating material on your crafting list..."
                size="large"
              />
            </Col>
          </Row>
        </>
      )}
      {!isLoading && (
        <>
          <Row justify="center">
            <Col span={3}>
              <Typography> Crystal Lists</Typography>
            </Col>
            <Col span={21} style={{ textAlign: 'center' }}>
              <MaterialListCheck itemData={materialListData.crystal} />
            </Col>
          </Row>
          <Divider />
          <Row justify="center" style={{ marginTop: 20 }}>
            <Col span={3}>
              <Typography> Material Level 1</Typography>
            </Col>
            <Col span={21} style={{ textAlign: 'center' }}>
              <MaterialListCheck itemData={materialListData.level1} />
            </Col>
          </Row>
          <Divider />
          <Row justify="center" style={{ marginTop: 20 }}>
            <Col span={3}>
              <Typography> Material Level 2</Typography>
            </Col>
            <Col span={21} style={{ textAlign: 'center' }}>
              <MaterialListCheck itemData={materialListData.level2} />
            </Col>
          </Row>
          <Divider />
          <Row justify="center" style={{ marginTop: 20 }}>
            <Col span={3}>
              <Typography> Material Level 3</Typography>
            </Col>
            <Col span={21} style={{ textAlign: 'center' }}>
              <MaterialListCheck itemData={materialListData.level3} />
            </Col>
          </Row>
          <Divider />
          <Row justify="center" style={{ marginTop: 20 }}>
            <Col span={3}>
              <Typography> Material Level 4</Typography>
            </Col>
            <Col span={21} style={{ textAlign: 'center' }}>
              <MaterialListCheck itemData={materialListData.level4} />
            </Col>
          </Row>
        </>
      )}
    </Drawer>
  );
}
MaterialList.PropTypes = {
  onOpen: PropTypes.bool,
  setOnOpen: PropTypes.func,
  materialListData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

MaterialList.defaultProps = {
  onOpen: false,
  setOnOpen: () => {},
};

export default MaterialList;
