import React, { Component } from 'react';

const ProductMeta = props => {
  const { collection, handle, title, vendor, prices, } = props.product;

  return (
    <a
      href={`/collections/${collection}/products/${handle}`}
      className="product-item-meta"
    >

      <header className="header product-item-header">
        <h2 className="xx-heading product-item-heading">{title}</h2>
        {vendor &&
          <p className="xx-text product-item-subheading">
            {vendor}
          </p>
        }
      </header>

      <div className="xx-price product-item-price">
        {(prices.range !== null) ? prices.range : prices.min.string}
      </div>

    </a>
  );
};

export default ProductMeta
