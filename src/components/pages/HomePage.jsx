import React from "react";
import { ProductList } from '../ProductList/ProductList';
import { ContainerMaxWidth } from '../ContainerMaxWidth/ContainerMaxWidth';


export function HomePage({ products, setModalProductId, modalProductId, handleModalClose, handleModalConfirm }) {
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