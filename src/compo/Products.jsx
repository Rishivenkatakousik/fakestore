import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaStarHalfAlt, FaTimes } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
  };

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
      <h2 className="text-2xl font-bold mb-6">Explore Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow cursor-pointer flex flex-col justify-between"
            onClick={() => openModal(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 font-bold">{product.title}</h3>
            <div className="flex items-center mt-1">
              <p className="text-gray-500 mr-2">${product.price}</p>
              {renderStars(Math.round(product.rating?.rate))}
              {`(${product.rating?.count})`}
            </div>
            <button
              className="mt-2 bg-black text-white px-4 py-2 w-full"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setModalOpen(false)}
              />
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-60 object-contain mb-4"
            />
            <p className="text-gray-600">{selectedProduct.description}</p>
            <p className="text-lg font-bold mt-2">${selectedProduct.price}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 w-full flex items-center justify-center gap-2">
              <FaShoppingCart /> Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
