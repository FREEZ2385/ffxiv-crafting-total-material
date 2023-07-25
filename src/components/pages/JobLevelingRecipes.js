import { Row, Col, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionJobRadioOptions,
  crafterRecipesPullDownOptions,
} from '../../common/optionList';
import garlandsActions from '../../state/ducks/garlands/actions';
import Pulldown from '../atoms/Pulldown';
import RadioGroup from '../atoms/RadioGroups';
import RecipeTable from '../molecules/RecipeTable';
import i18n from '../../common/localize/i18n';

import './scss/CrafterRecipes.scss';
import { equipCategoryOptions } from '../../common/itemOption';

function JobLevelingRecipes() {
  const [radioSelect, setRadioSelect] = useState('');
  const [pulldownSelect, setPulldownSelect] = useState('');
  const { jobEquipmentList } = useSelector((state) => state.garlandsReducer);

  const dispatch = useDispatch();
  return (
    <div className="crafter-recipes">
      <div className="header-area">
        <Row justify="center" style={{ height: '4vh', marginBottom: '2vh' }}>
          <Col span={24} style={{ textAlign: 'center', fontSize: 28 }}>
            <Typography style={{ color: '#999999' }}>
              {i18n.t('job-leveling-title')}
            </Typography>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24} style={{ textAlign: 'center', fontSize: 40 }}>
            <RadioGroup
              options={actionJobRadioOptions}
              onChange={(e) => {
                dispatch(
                  garlandsActions.getJobEquipmentList(
                    e.target.value,
                    pulldownSelect
                  )
                );
                setRadioSelect(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={3}></Col>
          <Col span={18} style={{ textAlign: 'center', fontSize: 32 }}>
            {radioSelect && (
              <Pulldown
                options={crafterRecipesPullDownOptions}
                onChange={(value) => {
                  dispatch(
                    garlandsActions.getJobEquipmentList(radioSelect, value)
                  );
                  setPulldownSelect(value);
                }}
                value={pulldownSelect}
              />
            )}
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
      <div className="table-area">
        <Row
          justify="center"
          style={{ height: 'calc(70vh - 160px)', padding: '20px' }}
        >
          <Col span={1}></Col>
          <Col span={22} style={{ textAlign: 'center', fontSize: 15 }}>
            {jobEquipmentList.length !== 0 && (
              <RecipeTable
                columns={[
                  { name: 'icon', title: '', width: 60, align: 'center' },
                  {
                    name: 'name',
                    title: 'Name',
                    align: 'left',
                  },
                  {
                    name: 'equiplevel',
                    width: '5vw',
                    title: 'Level',
                    align: 'center',
                  },
                ]}
                data={jobEquipmentList}
                filterOptions={equipCategoryOptions}
                onAddButtonClick={(value) => {
                  dispatch(garlandsActions.addCraftingList(value));
                }}
                height='calc(70vh - 300px)'
              />
            )}
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    </div>
  );
}

export default JobLevelingRecipes;
