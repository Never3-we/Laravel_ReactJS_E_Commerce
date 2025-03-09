import React from "react";

export default function Subscribe() {
    return (
        <section id="subscribe">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="title-element">
                                    <h2 className="section-title divider">
                                        Subscribe to our newsletter
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="subscribe-content"
                                    data-aos="fade-up"
                                >
                                    <p>
                                        Sed eu feugiat amet, libero ipsum enim
                                        pharetra hac dolor sit amet,
                                        consectetur. Elit adipiscing enim
                                        pharetra hac.
                                    </p>
                                    <form id="form">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Enter your email addresss here"
                                        />
                                        <button className="btn-subscribe">
                                            <span>send</span>
                                            <i className="icon icon-send" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
