import React from "react";
import PropTypes from 'prop-types';
import { ProductList } from "../ProductList/ProductList";


export const ShopPage = ({ products, setModalProductId, modalProductId, handleModalClose, handleModalConfirm }) => {

    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Shop</h1>
                <ProductList
                    products={products}
                    setModalProductId={setModalProductId}
                    modalProductId={modalProductId}
                    handleModalClose={handleModalClose}
                    handleModalConfirm={handleModalConfirm}
                />
            </div>
        </div>
    )
}


ShopPage.propTypes = {
    product: PropTypes.object,
    setModalProductId: PropTypes.func,
    modalProductId: PropTypes.string,
    handleModalClose: PropTypes.func,
    handleModalConfirm: PropTypes.func
}