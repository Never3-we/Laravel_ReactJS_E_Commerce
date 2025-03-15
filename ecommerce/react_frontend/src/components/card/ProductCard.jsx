import React from 'react'

export default function ProductCard({ image, title, author, price, onAddToCart }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
      <div className="product-style h-100">
        <figure className="product-image">
          <img 
            src={image}
            alt={title} 
            className="product-item"
          />
          <button 
            type="button" 
            className="add-to-cart"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
        </figure>
        <figcaption>
          <h3>{title}</h3>
          <p>By {author}</p>
          <span className="item-price">${price.toFixed(2)}</span>
        </figcaption>
      </div>
    </div>
  )
}
