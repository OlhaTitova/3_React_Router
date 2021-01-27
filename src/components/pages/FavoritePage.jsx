import React from "react";
import PropTypes from 'prop-types';
import { FavoriteList } from "../FavoriteList.jsx/FavoriteList";


export const FavoritePage = ({ products, setModalProductId, modalProductId, handleModalClose, handleModalConfirm }) => {

    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Favorite</h1>
                <FavoriteList
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

FavoritePage.propTypes = {
    product: PropTypes.object,
    setModalProductId: PropTypes.func,
    modalProductId: PropTypes.string,
    handleModalClose: PropTypes.func,
    handleModalConfirm: PropTypes.func
}