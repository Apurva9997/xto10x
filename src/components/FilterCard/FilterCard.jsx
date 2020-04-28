import React from 'react';
import Chip from '../Chip/Chip';
import './styles.scss';

export default function FilterCard(props) {
  const { CATEGORIES, selectedCategory, handleFilterCategory } = props;
  const CATEGORIES_ = CATEGORIES.map(category => {
    return <Chip data={category} selected={selectedCategory === category} handleFilterCategory={handleFilterCategory} />
  })
  return (
    <div className="filter-card">
      <div className="account-details">Apoorv</div>
      <div className="header">10X Products</div>
      <div className="filters-container"></div>
      <div className="filter-categories">
        {CATEGORIES_}
      </div>
    </div>
  )
}
