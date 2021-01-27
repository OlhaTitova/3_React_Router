import React from "react";
import PropTypes from 'prop-types';
import { ProductList } from '../ProductList/ProductList';
import { ContainerMaxWidth } from '../ContainerMaxWidth/ContainerMaxWidth';


export const HomePage = ({ products, setModalProductId, modalProductId, handleModalClose, handleModalConfirm }) => {
    return (
        <div>
            <ContainerMaxWidth />
            <div className="container">
                <ProductList
                    products={products}
                    setModalProductId={setModalProductId}
                    modalProductId={modalProductId}
                    handleModalClose={handleModalClose}
                    handleModalConfirm={handleModalConfirm}
                />
            </div>
        </div>
    );
}


HomePage.propTypes = {
    product: PropTypes.object,
    setModalProductId: PropTypes.func,
    modalProductId: PropTypes.string,
    handleModalClose: PropTypes.func,
    handleModalConfirm: PropTypes.func
}