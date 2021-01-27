import React from "react";
import PropTypes from 'prop-types';
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

ProductList.propTypes = {
  product: PropTypes.object,
  setModalProductId: PropTypes.func,
  modalProductId: PropTypes.string,
  handleModalClose: PropTypes.func,
  handleModalConfirm: PropTypes.func
}