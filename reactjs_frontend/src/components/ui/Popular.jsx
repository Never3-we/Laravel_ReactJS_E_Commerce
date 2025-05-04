import React from "react";

export default function Popular() {
    return (
        <section id="popular-books" className="bookshelf py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header align-center">
                            <div className="title">
                                <span>Some quality items</span>
                            </div>
                            <h2 className="section-title">Popular Books</h2>
                        </div>
                        <ul className="tabs">
                            <li
                                data-tab-target="#all-genre"
                                className="active tab"
                            >
                                All Genre
                            </li>
                            <li data-tab-target="#business" className="tab">
                                Business
                            </li>
                            <li data-tab-target="#technology" className="tab">
                                Technology
                            </li>
                            <li data-tab-target="#romantic" className="tab">
                                Romantic
                            </li>
                            <li data-tab-target="#adventure" className="tab">
                                Adventure
                            </li>
                            <li data-tab-target="#fictional" className="tab">
                                Fictional
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div
                                id="all-genre"
                                data-tab-content=""
                                className="active"
                            >
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="../../images/tab-item1.jpg"
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
                                                <h3>Portrait photography</h3>
                                                <span>Adam Silber</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item2.jpg"
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
                                                    $ 35.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item3.jpg"
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
                                                <h3>
                                                    Tips of simple lifestyle
                                                </h3>
                                                <span>Bratt Smith</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item4.jpg"
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
                                                <h3>Just felt from outside</h3>
                                                <span>Nicole Wilson</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item5.jpg"
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
                                                <h3>Peaceful Enlightment</h3>
                                                <span>Marmik Lama</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item6.jpg"
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
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item7.jpg"
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
                                                <h3>Life among the pirates</h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item8.jpg"
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
                                                <h3>
                                                    Simple way of piece life
                                                </h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="business" data-tab-content="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item2.jpg"
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
                                                <h3>Peaceful Enlightment</h3>
                                                <span>Marmik Lama</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item4.jpg"
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
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item6.jpg"
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
                                                <h3>Life among the pirates</h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item8.jpg"
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
                                                <h3>
                                                    Simple way of piece life
                                                </h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="technology" data-tab-content="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item1.jpg"
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
                                                <h3>Peaceful Enlightment</h3>
                                                <span>Marmik Lama</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item3.jpg"
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
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item5.jpg"
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
                                                <h3>Life among the pirates</h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item7.jpg"
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
                                                <h3>
                                                    Simple way of piece life
                                                </h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="romantic" data-tab-content="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item1.jpg"
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
                                                <h3>Peaceful Enlightment</h3>
                                                <span>Marmik Lama</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item3.jpg"
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
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item5.jpg"
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
                                                <h3>Life among the pirates</h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item7.jpg"
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
                                                <h3>
                                                    Simple way of piece life
                                                </h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="adventure" data-tab-content="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item5.jpg"
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
                                                <h3>Life among the pirates</h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item7.jpg"
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
                                                <h3>
                                                    Simple way of piece life
                                                </h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="fictional" data-tab-content="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item5.jpg"
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
                                                <h3>Life among the pirates</h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-item">
                                            <figure className="product-style">
                                                <img
                                                    src="images/tab-item7.jpg"
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
                                                <h3>
                                                    Simple way of piece life
                                                </h3>
                                                <span>Armor Ramsey</span>
                                                <div className="item-price">
                                                    $ 40.00
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*inner-tabs*/}
                </div>
            </div>
        </section>
    );
}
