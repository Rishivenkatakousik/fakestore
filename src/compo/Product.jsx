import { add } from "@/redux/slices/CartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Product = ({ product, openModal }) => {
  //   const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item added");
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
    <div
      key={product.id}
      className="border p-4 rounded shadow cursor-pointer flex flex-col justify-between h-[350px]"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain"
        onClick={() => openModal(product.id)}
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
  );
};

export default Product;
