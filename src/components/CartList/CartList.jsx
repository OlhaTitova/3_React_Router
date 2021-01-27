import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../CartItem/CartItem';
import { getProductWithCart } from '../utils/cart';


export const CartList = ({ products, setModalDeleteID }) => {

    const cartListItems = getProductWithCart();
    const cartList = products.filter(product => cartListItems[product.id])

    return (
        <div>

            { Object.keys(cartListItems).length > 0 &&
                cartList.map(product => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            count={cartListItems[product.id]}
                            onRemoveWithCart={() => setModalDeleteID(product.id)}
                        />
                    )
                })
            }

            { Object.keys(cartListItems).length === 0 &&
                <div
                    className="row align-items-center justify-content-center"
                >
                    <p
                        className="notification">
                        Your Shopping Cart is Empty
                    </p>
                </div>
            }
        </div>
    )
}

CartList.propTypes = {
    product: PropTypes.object,
    setModalDeleteID: PropTypes.func,
}
