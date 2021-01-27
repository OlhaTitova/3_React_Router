import React from 'react';
import { Product } from '../Product/Product';
import { getProductFavorite } from '../utils/favorite';
// import './ProductList/ProductList.scss';



export const FavoriteList = ({ products }) => {


    // const favoriteList = products.forEach(product => {

    //     const favoriteListId = getProductFavorite();

    //     favoriteListId.map(itemId =>

    //         <Product
    //             key={() => (itemId === product.id) ? product.id : product.id}
    //             product={product}

    //         />
    //     )
    // }

    // )

    return (
        <div className="ProductList ">

            {/* {getProductFavorite &&
                // favoriteList
            } */}

            {getProductFavorite &&
                <div
                    className="row align-items-center justify-content-center"
                >
                    <p
                        className="notification">
                        Favorite products not selected
                    </p>
                </div>
            }
        </div>
    )
}
