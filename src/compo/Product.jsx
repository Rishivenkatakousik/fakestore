import React from "react";

const Product = ({ product }) => {
  return (
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
  );
};

export default Product;
