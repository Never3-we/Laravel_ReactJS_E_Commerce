import React from 'react'
import product1 from '../../images/product-item1.jpg';
import product2 from '../../images/product-item2.jpg';
import product3 from '../../images/product-item3.jpg';
import product4 from '../../images/product-item4.jpg';
export default function Feature() {
  return (
    <div>
        <section id="featured-books" className="py-5 my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header align-center">
          <div className="title">
            <span>Some quality items</span>
          </div>
          <h2 className="section-title">Featured Books</h2>
        </div>
        <div className="product-list" data-aos="fade-up">
          <div className="row">
            <div className="col-md-3">
              <div className="product-item">
                <figure className="product-style">
                  <img
                    src={product1}
                    alt="Books"
                    className="product-item"
                  />
                  <button
                    type="button"
                    className="add-to-cart"
                    data-product-tile="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </figure>
                <figcaption>
                  <h3>Simple way of piece life</h3>
                  <span>Armor Ramsey</span>
                  <div className="item-price">$ 40.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-item">
                <figure className="product-style">
                  <img
                    src={product2}
                    alt="Books"
                    className="product-item"
                  />
                  <button
                    type="button"
                    className="add-to-cart"
                    data-product-tile="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </figure>
                <figcaption>
                  <h3>Great travel at desert</h3>
                  <span>Sanchit Howdy</span>
                  <div className="item-price">$ 38.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-item">
                <figure className="product-style">
                  <img
                    src={product3}
                    alt="Books"
                    className="product-item"
                  />
                  <button
                    type="button"
                    className="add-to-cart"
                    data-product-tile="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </figure>
                <figcaption>
                  <h3>The lady beauty Scarlett</h3>
                  <span>Arthur Doyle</span>
                  <div className="item-price">$ 45.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-item">
                <figure className="product-style">
                  <img
                    src={product4}
                    alt="Books"
                    className="product-item"
                  />
                  <button
                    type="button"
                    className="add-to-cart"
                    data-product-tile="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </figure>
                <figcaption>
                  <h3>Once upon a time</h3>
                  <span>Klien Marry</span>
                  <div className="item-price">$ 35.00</div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="btn-wrap align-right">
          <a href="#" className="btn-accent-arrow">
            View all products <i className="icon icon-ns-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
