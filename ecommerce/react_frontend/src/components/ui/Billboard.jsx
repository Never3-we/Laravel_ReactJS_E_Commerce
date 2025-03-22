import React, { useState } from 'react';
import Image1 from '../../images/main-banner1.jpg';
import Image2 from '../../images/main-banner2.jpg';
import '../../css/Billboard.css';

export default function Billboard() {
  const slides = [
    {
      id: 1,
      image: Image1,
      title: "Life of the Wild",
      description: "This book delves into how observing birds can provide valuable lessons for navigating the challenges of human life."
    },
    {
      id: 2,
      image: Image2,
      title: "Birds gonna be Happy",
      description: "This book is a powerful exploration of primal instincts and the struggle for survival. The central character is Buck, a domesticated dog who is stolen from his comfortable life in California and thrust into the harsh realities of the Klondike Gold Rush."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <section id="billboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="prev slick-arrow" onClick={prevSlide}>
              <i className="icon icon-arrow-left"></i>
            </button>

            <div className="main-slider pattern-overlay">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className="slider-item"
                  style={{ 
                    display: index === currentSlide ? 'block' : 'none'
                  }}
                >
                  <div className="banner-content">
                    <h2 className="banner-title">{slide.title}</h2>
                    <p>{slide.description}</p>
                    <div className="btn-wrap">
                      <a href="#" className="btn btn-outline-accent btn-accent-arrow">
                        Read More
                        <i className="icon icon-ns-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <img src={slide.image} alt="banner" className="banner-image" />
                </div>
              ))}
            </div>

            <button className="next slick-arrow" onClick={nextSlide}>
              <i className="icon icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}