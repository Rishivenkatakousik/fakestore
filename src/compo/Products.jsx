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
import Modal from "./Modal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    <div className="p-8 w-[80%] mx-auto border-b border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <Product product={product} key={product.id} openModal={openModal} />
        ))}
      </div>

      {modalOpen && selectedProduct && (
        <Modal selectedProduct={selectedProduct} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Products;
