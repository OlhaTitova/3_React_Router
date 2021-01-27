import React from "react";
import PropTypes from 'prop-types';
import '../Product/Product.scss'
import { Button } from "../Button/Button";
import './CartItem.scss'


export const CartItem = ({ product, count, onRemoveWithCart }) => {


    return (
        <div>
            <hr />
            <div className="width-1280 row justify-content-between">
                <img
                    className="cart-img"
                    src={product.url}
                    alt={product.name}
                />
                <div className="row  column justify-content-center m-15 width-200">
                    <p
                        className="Product__Name">
                        {product.name}
                    </p>
                    <p
                        className="Product__id">
                        Код: {product.id}
                    </p>

                    <p>
                        <span className="Product__Color">
                            Цвет:
                        </span>
                        {product.color}
                    </p>
                </div>
                <div className="row align-items-center m-15">
                    <span className="Product__Price">
                        {product.price}
                        <span className="Product__Сurrency">
                            грн
                        </span>
                    </span>
                </div>
                <div className="row align-items-center m-15">
                    {count}
                </div>

                <div className="row align-items-center m-15">
                    <Button
                        className="btn"
                        text="Remove"
                        style={{ backgroundColor: "#f8560b" }}
                        onClick={onRemoveWithCart}
                    >&times;
            </Button>
                </div>
            </div>
            <hr />
        </ div >
    )
}

CartItem.propTypes = {
    product: PropTypes.object,
    handelModalConfirm: PropTypes.func,
    count: PropTypes.string
}