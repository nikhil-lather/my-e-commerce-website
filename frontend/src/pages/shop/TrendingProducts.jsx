import { useState } from "react";
import products from "../../data/product.json";
import ProductCards from "./ProductCards";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>

      <p className="section__subheader mb-12">
        Discover the Hottest Picks! Elevate Your Style with Our Curated
        Collection of Trending Women's Fashion Products.
      </p>

      {/* Products Card */}
      <div className="mt-12">
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      {/* Load More Products Button */}
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button onClick={loadMoreProducts} className="btn">
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
