import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import { getProductWithCart } from '../utils/cart';


export const CartList = ({ products, setModalDeleteID }) => {

    const cartListId = getProductWithCart();

    const cartList = products.filter(product => cartListId[product.id])

    return (
        <div className="ProductList ">

            { Object.keys(cartListId).length > 0 &&
                cartList.map(product => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            count={cartListId[product.id]}
                            onRemoveWithCart={() => setModalDeleteID(product.id)}
                        />
                    )
                })
            }

            { Object.keys(cartListId).length === 0 &&
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

   // const getProductList = () => {

    //     const productsList = {};

    //     products.forEach(item => {
    //         productsList[item.id] = item;
    //     });

    //     console.log(productList);
    //     return productsList;
    // }

    // getProductList()
