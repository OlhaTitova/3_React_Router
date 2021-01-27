import React from "react";
import { FavoriteList } from "../FavoriteList.jsx/FavoriteList";


export const FavoritePage = ({ products }) => {
    return (
        <div>
            <div className="container">
                <h1 className="heading-page">Favorite</h1>
                <FavoriteList
                    products={products}
                />
            </div>
        </div>
    )
}