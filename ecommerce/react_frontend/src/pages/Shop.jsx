import React from 'react'
import ProductCard from '../components/card/ProductCard';

const products = [
  {
    id: 1,
    image: "./src/images/product-item1.jpg",
    title: "Simple Way of Piece Life",
    author: "Armor Ramsey",
    price: 40.00
  },
  {
    id: 2,
    image: "./src/images/product-item2.jpg",
    title: "Great Travel at Desert",
    author: "Sanchit Howdy",
    price: 38.00
  },
  {
    id: 3,
    image: "./src/images/product-item3.jpg",
    title: "The Lady Beauty Scarlett",
    author: "Arthur Doyle",
    price: 45.00
  },
  {
    id: 4,
    image: "./src/images/product-item4.jpg",
    title: "Once Upon A Time",
    author: "Klien Marry",
    price: 35.00
  },
  {
    id: 5,
    image: "./src/images/product-item4.jpg",
    title: "Once Upon A Time",
    author: "Klien Marry",
    price: 35.00
  },
  {
    id: 6,
    image: "./src/images/product-item4.jpg",
    title: "Once Upon A Time",
    author: "Klien Marry",
    price: 35.00
  }
];

export default function Shop() {
  const handleAddToCart = (productId) => {
    // TODO: Implement add to cart functionality
    console.log(`Adding product ${productId} to cart`);
  };

  return (
    <div>
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

              <div className="row products-grid">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    author={product.author}
                    price={product.price}
                    onAddToCart={() => handleAddToCart(product.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}