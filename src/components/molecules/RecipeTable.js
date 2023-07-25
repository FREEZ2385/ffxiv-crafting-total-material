/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Table, Image, Button, Popover } from 'antd';
import Icon from '@ant-design/icons';
import { PlusOutlined, FilterFilled } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

function RecipeTable(props) {
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line no-unused-vars
  const { columns, data, filterOptions, onAddButtonClick } = props;
  const [filteredData, setFilteredData] = useState(data);
  const [value, setValue] = useState('');

  const [selectedFilter, setSelectedFilter] = useState('');

  const filterData = (searchText, category) => {
    let currValue = value;
    if(value !== searchText){
      currValue = searchText;
      setValue(currValue);
    }
    let curCategory = selectedFilter;
    if(selectedFilter !== category){
      curCategory = category;
      setSelectedFilter(curCategory);
    }
    let equipFilterOptionCodeList = [];
    if(curCategory == ''){
      let allCodeList = [];
      filterOptions.map((option) => {
        console.log(option.codeList);
        allCodeList = allCodeList.concat(option.codeList);
      })
      equipFilterOptionCodeList = allCodeList;
    }
    else equipFilterOptionCodeList = filterOptions.find(option => option.name === curCategory).codeList

    const filteredData = data.filter((entry) =>
      entry.name.toLowerCase().includes(currValue.toLowerCase()) && equipFilterOptionCodeList.includes(entry.equipcategory)
    );
    setFilteredData(filteredData);
  }

  const addfilteredcolumns = () => {
    const newFilteredColumns = columns.map((column) => {
      if (column.name === 'icon') {
        return {
          title: column.title,
          dataIndex: column.name,
          key: column.name,
          width: column.width,
          align: column.align,
          // eslint-disable-next-line react/display-name
          render: (icon) => <Image width={40} placeholder={false} src={icon} />,
        };
      }
      return {
        title: column.title,
        dataIndex: column.name,
        key: column.name,
        width: column.width,
        align: column.align,
        // eslint-disable-next-line react/display-name
        render: (text) => (
          <div>
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[value]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          </div>
        ),
      };
    });
    newFilteredColumns.push({
      title: '',
      dataIndex: '',
      width: 80,
      key: '',
      // eslint-disable-next-line react/display-name
      render: (data) => (
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="middle"
          style={{ margin: 5 }}
          onClick={(e) => {
            e.stopPropagation();
            onAddButtonClick(data);
          }}
        />
      ),
    });
    return newFilteredColumns;
  };

  const addfilteredDatas = () => {
    const newFilteredDatas = filteredData.map((dat, index) => {
      return { ...dat, key: index };
    });
    return newFilteredDatas;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {filterOptions.length !== 0 && (
            <Popover placement="bottom" title="Category Filters" content={(
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {filterOptions.map((option) => (
                  <Button type={selectedFilter == option.name ? "primary" : "dashed"} icon={<Icon component={option.icon} />} style={{margin: 3}} 
                    onClick={() => {
                      if(selectedFilter !== option.name) {
                        setSelectedFilter(option.name);
                        filterData(value, option.name);
                      }
                      else{
                        setSelectedFilter("");
                        filterData(value, "");
                      } 
                    }
                    }/>
                ))}
              </div>
            )
            }>
              <FilterFilled style={{fontSize: 30, marginLeft: 20, color: selectedFilter!=='' ? '#4287f5' : '#808080'}} />
            </Popover>
          )}
        </div>
        <Input
          placeholder="search item name"
          value={value}
          onChange={(e) => {
            filterData(e.target.value, selectedFilter)
          }}
          style={{
            width: 200,
          }}
        />
      </div>
      <Table
        columns={addfilteredcolumns()}
        dataSource={addfilteredDatas()}
        size="small"
        pagination={false}
        scroll={{ y: 'calc(80vh - 300px)' }}
      />
    </div>
  );
}

RecipeTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  filterOptions: PropTypes.array,
  onAddButtonClick: PropTypes.func,
};

RecipeTable.defaultProps = {
  filterOptions: [],
  onAddButtonClick: () => {},
};

export default RecipeTable;
