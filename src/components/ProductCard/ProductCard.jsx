import React from 'react';
import './styles.scss';

export default function (props) {
  const { data } = props;
  console.log(props);
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={data.searchImage} />
      </div>
      <div className="product-description">
        <p>{data.productName}</p>
      </div>
    </div>
  )
};