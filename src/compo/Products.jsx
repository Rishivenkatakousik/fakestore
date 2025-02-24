import React from "react";
import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaTimes,
  FaStarHalfAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const openModal = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data);
        setModalOpen(true);
      });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i + 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="p-8 w-[80%] mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <Product product={product} key={product.id} openModal={openModal} />
        ))}
      </div>

      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={() => setModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full md:w-1/2 h-60 object-contain"
              />
              <div className="flex flex-col justify-between flex-1">
                <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                <div className="flex items-center gap-2">
                  {renderStars(selectedProduct.rating?.rate)}
                  <span className="text-gray-500 text-sm">
                    ({selectedProduct.rating?.count} Reviews)
                  </span>
                  <span className="text-green-500 font-medium">In Stock</span>
                </div>
                <p className="text-lg font-bold">${selectedProduct.price}</p>
                <p className="text-gray-600 text-sm">
                  {selectedProduct.description}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button
                      className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
