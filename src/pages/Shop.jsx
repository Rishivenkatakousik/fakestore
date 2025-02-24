import Modal from "@/compo/Modal";
import Product from "@/compo/Product";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryNotFound, setCategoryNotFound] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const openModal = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data);
        setModalOpen(true);
      });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoriesRes = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categories = await categoriesRes.json();

        if (searchTerm && !categories.includes(searchTerm)) {
          setCategoryNotFound(true);
          return;
        }

        const url = searchTerm
          ? `https://fakestoreapi.com/products/category/${searchTerm}`
          : "https://fakestoreapi.com/products";

        const productsRes = await fetch(url);
        const productsData = await productsRes.json();
        setProducts(productsData);
        setCategoryNotFound(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  if (categoryNotFound) {
    return <NotFound />;
  }

  return (
    <div className="max-w-[1100px] p-2 mx-auto">
      <h1 className=" text-4xl font-bold mb-5 mt-9">Explore our Products</h1>
      <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1100px] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] gap-2">
        {products.length > 0
          ? products.map((product) => {
              return (
                <Product
                  product={product}
                  key={product.id}
                  openModal={openModal}
                />
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
              <div
                key={index}
                className="h-[350px] w-full bg-slate-200 animate-pulse rounded-xl"
              ></div>
            ))}
      </div>

      {modalOpen && selectedProduct && (
        <Modal selectedProduct={selectedProduct} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Shop;
