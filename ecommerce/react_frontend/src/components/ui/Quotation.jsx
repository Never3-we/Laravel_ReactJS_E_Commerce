import React from "react";

export default function Quotation() {
    return (
        <section id="quotation" className="align-center pb-5 mb-5">
            <div className="inner-content">
                <h2 className="section-title divider">Quote of the day</h2>
                <blockquote data-aos="fade-up">
                    <q>
                        “The more that you read, the more things you will know.
                        The more that you learn, the more places you’ll go.”
                    </q>
                    <div className="author-name">Dr. Seuss</div>
                </blockquote>
            </div>
        </section>
    );
}
