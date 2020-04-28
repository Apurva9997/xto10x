import React from 'react';
import './styles.scss';

export default function Chip(props) {
  const { data, selected, handleFilterCategory } = props;
  console.log(selected);
  return (
    <div className={`chip-container${selected ? ' selected' : ''}`} onClick={() => handleFilterCategory(data)}>
      {data}
    </div>
  )
};
