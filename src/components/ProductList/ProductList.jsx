import React from "react";
import { Product } from "../Product/Product";
import { ModalAddCart } from "../ModalAddCart/ModalAddCart";
import './ProductList.scss'


export const ProductList = ({ products, setModalProductId, modalProductId, handleModalClose, handleModalConfirm }) => {

  return (
    <div className="ProductList">
      {
        products.map((product) => {
          return <Product
            key={product.id}
            product={product}
            onAddToCart={() => setModalProductId(product.id)}
          />;
        }
        )}

      {modalProductId &&
        <ModalAddCart
          onConfirm={handleModalConfirm}
          onClose={handleModalClose}
        />
      }
    </div>
  );
}