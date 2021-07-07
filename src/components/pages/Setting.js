import { Row, Col, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pulldown from '../atoms/Pulldown';

import i18n from '../../common/localize/i18n';

import './scss/CrafterRecipes.scss';
import commonActions from '../../state/ducks/common/actions';

function Setting() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.commonReducer);
  return (
    <div className="crafter-recipes">
      <Row
        justify="center"
        style={{ height: 30, marginBottom: 30, marginTop: 50 }}
      >
        <Col span={1} />
        <Col
          span={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 18,
          }}
        >
          <Typography>{i18n.t('setting-language')}</Typography>
        </Col>
        <Col span={18} style={{ textAlign: 'center', fontSize: 28 }}>
          <Pulldown
            options={[
              { value: 'ja', text: '日本語' },
              { value: 'en', text: 'English' },
            ]}
            onChange={(value) => {
              dispatch(commonActions.changeLanguage(value));
            }}
            value={language}
          />
        </Col>
        <Col span={2} />
      </Row>
    </div>
  );
}

export default Setting;
