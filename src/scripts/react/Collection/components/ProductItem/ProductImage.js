import React, { Component } from 'react';

class ProductImage extends Component {
  render() {
    const { product, handle: collection } = this.props
    const { handle, featuredImage, } = product;

    return (
      <a
        href={`/collections/${collection}/products/${handle}`}
        className="product-item-image xx-image-wrapper"
      >

        <img
          className={`xx-image ${(true) ? 'lazyload' : ''}`}
          alt={featuredImage.alt}
          src={(true) ? featuredImage.lqip : featuredImage.src}
          data-srcset={featuredImage.srcset} />

      </a>
    );
  }
};

export default ProductImage;
