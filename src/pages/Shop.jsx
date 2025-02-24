import Product from "@/compo/Product";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data);
        setModalOpen(true);
      });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-[1100px] p-2 mx-auto">
      <h1 className=" text-4xl font-bold mb-5 mt-9">Explore our Products</h1>
      <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1100px] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {products.map((product) => {
          return (
            <Product product={product} key={product.id} openModal={openModal} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
