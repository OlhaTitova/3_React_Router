import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalAddCart } from '../ModalAddCart/ModalAddCart';
import { Product } from '../Product/Product';
import { getProductFavorite } from '../utils/favorite';
import '../ProductList/ProductList.scss';

export const FavoriteList = ({ products, setModalProductId, modalProductId, handleModalClose, handleModalConfirm }) => {

    const [list, setList] = useState(getProductFavorite());

    products = products.filter(product => list.find(item => item === product.id));

    const handleFavoriteList = () => setList(getProductFavorite());

    return (
        <div className="ProductList">

            {products.length > 0 &&

                products.map(product =>
                    <Product
                        key={product.id}
                        product={product}
                        onAddToCart={() => setModalProductId(product.id)}
                        favoriteListCallback={handleFavoriteList}
                    />
                )
            }

            {products.length === 0 &&
                <div
                    className="row align-items-center justify-content-center"
                >
                    <p
                        className="notification">
                        Favorite products not selected
                    </p>
                </div>
            }

            {modalProductId &&
                <ModalAddCart
                    onConfirm={handleModalConfirm}
                    onClose={handleModalClose}
                />
            }
        </div>
    );
}

FavoriteList.propTypes = {
    product: PropTypes.object,
    setModalProductId: PropTypes.func,
    modalProductId: PropTypes.string,
    handleModalClose: PropTypes.func,
    handleModalConfirm: PropTypes.func
}
