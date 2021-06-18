import { Row, Col, Typography } from 'antd';
import React, { useState } from 'react';
import {
  crafterRecipesPullDownOptions,
  crafterRecipesRadioOptions,
} from '../../common/optionList';
import Pulldown from '../atoms/Pulldown';
import RadioGroup from '../atoms/RadioGroups';

import './scss/CrafterRecipes.scss';

function CrafterRecipes() {
  const [radioSelect, setRadioSelect] = useState('');
  return (
    <div className="crafter-recipes">
      <Row
        justify="center"
        style={{ height: 30, marginBottom: 30, marginTop: 50 }}
      >
        <Col span={6}></Col>
        <Col span={12} style={{ textAlign: 'center', fontSize: 32 }}>
          <Typography>FFXIV Crafter Recipes</Typography>
        </Col>
        <Col span={6}></Col>
      </Row>
      <Row justify="center" style={{ height: 50 }}>
        <Col span={24} style={{ textAlign: 'center', fontSize: 40 }}>
          <RadioGroup
            options={crafterRecipesRadioOptions}
            onChange={(e) => setRadioSelect(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ height: 30, marginTop: 30 }}>
        <Col span={3}></Col>
        <Col span={18} style={{ textAlign: 'center', fontSize: 32 }}>
          {radioSelect && <Pulldown options={crafterRecipesPullDownOptions} />}
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
}

export default CrafterRecipes;
