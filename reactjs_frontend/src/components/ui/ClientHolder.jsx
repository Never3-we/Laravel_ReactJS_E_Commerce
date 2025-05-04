import React from "react";
import Client1 from "../../images/client-image1.png";
import Client2 from "../../images/client-image2.png";
import Client3 from "../../images/client-image3.png";
import Client4 from "../../images/client-image4.png";
import Client5 from "../../images/client-image5.png";

export default function ClientHolder() {
    return (
        <section id="client-holder" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="inner-content">
                        <div className="logo-wrap">
                            <div className="grid"> 
                                <a href="#">
                                    <img
                                        src={Client1}
                                        alt="client"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src={Client2}
                                        alt="client"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src={Client3}
                                        alt="client"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src={Client4}
                                        alt="client"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src={Client5}
                                        alt="client"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
