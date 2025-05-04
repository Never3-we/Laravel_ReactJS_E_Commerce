import React from "react";

export default function LastBlog() {
    return (
        <section id="latest-blog" className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header align-center">
                            <div className="title">
                                <span>Read our articles</span>
                            </div>
                            <h2 className="section-title">Latest Articles</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <article className="column" data-aos="fade-up">
                                    <figure>
                                        <a
                                            href="#"
                                            className="image-hvr-effect"
                                        >
                                            <img
                                                src="images/post-img1.jpg"
                                                alt="post"
                                                className="post-image"
                                            />
                                        </a>
                                    </figure>
                                    <div className="post-item">
                                        <div className="meta-date">
                                            Mar 30, 2021
                                        </div>
                                        <h3>
                                            <a href="#">
                                                Reading books always makes the
                                                moments happy
                                            </a>
                                        </h3>
                                        <div className="links-element">
                                            <div className="categories">
                                                inspiration
                                            </div>
                                            <div className="social-links">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-behance-square" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*links-element*/}
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article
                                    className="column"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <figure>
                                        <a
                                            href="#"
                                            className="image-hvr-effect"
                                        >
                                            <img
                                                src="images/post-img2.jpg"
                                                alt="post"
                                                className="post-image"
                                            />
                                        </a>
                                    </figure>
                                    <div className="post-item">
                                        <div className="meta-date">
                                            Mar 29, 2021
                                        </div>
                                        <h3>
                                            <a href="#">
                                                Reading books always makes the
                                                moments happy
                                            </a>
                                        </h3>
                                        <div className="links-element">
                                            <div className="categories">
                                                inspiration
                                            </div>
                                            <div className="social-links">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-behance-square" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*links-element*/}
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4">
                                <article
                                    className="column"
                                    data-aos="fade-up"
                                    data-aos-delay={400}
                                >
                                    <figure>
                                        <a
                                            href="#"
                                            className="image-hvr-effect"
                                        >
                                            <img
                                                src="images/post-img3.jpg"
                                                alt="post"
                                                className="post-image"
                                            />
                                        </a>
                                    </figure>
                                    <div className="post-item">
                                        <div className="meta-date">
                                            Feb 27, 2021
                                        </div>
                                        <h3>
                                            <a href="#">
                                                Reading books always makes the
                                                moments happy
                                            </a>
                                        </h3>
                                        <div className="links-element">
                                            <div className="categories">
                                                inspiration
                                            </div>
                                            <div className="social-links">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="icon icon-behance-square" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*links-element*/}
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-wrap align-center">
                                <a
                                    href="#"
                                    className="btn btn-outline-accent btn-accent-arrow"
                                    tabIndex={0}
                                >
                                    Read All Articles
                                    <i className="icon icon-ns-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
