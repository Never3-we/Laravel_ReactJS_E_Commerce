import React from "react";

export default function SpecialOffer() {
    return (
        <section id="special-offer" className="bookshelf pb-5 mb-5">
            <div className="section-header align-center">
                <div className="title">
                    <span>Grab your opportunity</span>
                </div>
                <h2 className="section-title">Books with offer</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="inner-content">
                        <div className="product-list" data-aos="fade-up">
                            <div className="grid product-grid">
                                <div className="product-item">
                                    <figure className="product-style">
                                        <img
                                            src="images/product-item5.jpg"
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
                                        <div className="item-price">
                                            <span className="prev-price">
                                                $ 50.00
                                            </span>
                                            $ 40.00
                                        </div>
                                    </figcaption>
                                </div>
                                <div className="product-item">
                                    <figure className="product-style">
                                        <img
                                            src="images/product-item6.jpg"
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
                                        <div className="item-price">
                                            <span className="prev-price">
                                                $ 30.00
                                            </span>
                                            $ 38.00
                                        </div>
                                    </figcaption>
                                </div>
                                <div className="product-item">
                                    <figure className="product-style">
                                        <img
                                            src="images/product-item7.jpg"
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
                                        <div className="item-price">
                                            <span className="prev-price">
                                                $ 35.00
                                            </span>
                                            $ 45.00
                                        </div>
                                    </figcaption>
                                </div>
                                <div className="product-item">
                                    <figure className="product-style">
                                        <img
                                            src="images/product-item8.jpg"
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
                                        <div className="item-price">
                                            <span className="prev-price">
                                                $ 25.00
                                            </span>
                                            $ 35.00
                                        </div>
                                    </figcaption>
                                </div>
                                <div className="product-item">
                                    <figure className="product-style">
                                        <img
                                            src="images/product-item2.jpg"
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
                                        <div className="item-price">
                                            $ 40.00
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                            {/*grid*/}
                        </div>
                    </div>
                    {/*inner-content*/}
                </div>
            </div>
        </section>
    );
}
