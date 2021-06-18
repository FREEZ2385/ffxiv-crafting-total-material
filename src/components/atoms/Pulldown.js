/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

function Pulldown(props) {
  // eslint-disable-next-line react/prop-types
  const { options, onChange } = props;

  const { Option } = Select;
  return (
    <Select size="large" style={{ width: '100%' }} onChange={onChange}>
      {options.map((row) => (
        <Option value={row.value}>{row.text}</Option>
      ))}
    </Select>
  );
}

Pulldown.PropTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

Pulldown.defaultProps = {
  onChange: () => {},
};

export default Pulldown;
