/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Table, Image, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

function RecipeTable(props) {
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line no-unused-vars
  const { columns, data, onAddButtonClick } = props;
  const [filteredData, setFilteredData] = useState(data);
  const [value, setValue] = useState('');

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
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Input
          placeholder="search item name"
          value={value}
          onChange={(e) => {
            const currValue = e.target.value;
            setValue(currValue);
            const filteredData = data.filter((entry) =>
              entry.name.toLowerCase().includes(currValue)
            );
            setFilteredData(filteredData);
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
  onAddButtonClick: PropTypes.func,
};

RecipeTable.defaultProps = {
  onAddButtonClick: () => {},
};

export default RecipeTable;
