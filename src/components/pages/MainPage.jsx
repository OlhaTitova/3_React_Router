import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { CartPage } from "./CartPage";
import { FavoritePage } from './FavoritePage';
import { ShopPage } from './ShopPage';
import { HomePage } from './HomePage';
import { addToCart } from "../utils/cart";
import Header from "../Header/Header";


export function MainPage() {


    const [modalProductId, setModalProductId] = useState(null);
    const [products, setProducts] = useState([])

    const getProductList = async () => {
        const response = await fetch('cardProduct.json');
        const result = await response.json();
        setProducts(result);
    }

    const handleModalClose = () => setModalProductId(null);

    const handleModalConfirm = () => {
        addToCart(modalProductId);
        handleModalClose();
    }
    useEffect(() => getProductList(), []);

    return (
        <Router>
            <div>
                <Header />
                <div className="Menu">
                    <NavLink className="MenuItems" to="/">HOME</NavLink>
                    <NavLink className="MenuItems" to="/shop">SHOP</NavLink>
                    <NavLink className="MenuItems" to="/favorite">FAVORITE</NavLink>
                    <NavLink className="MenuItems" to="/cart">CART</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" >
                        <HomePage
                            products={products}
                            handleModalConfirm={handleModalConfirm}
                            setModalProductId={setModalProductId}
                            modalProductId={modalProductId}
                            handleModalClose={handleModalClose}
                        />
                    </Route>
                    <Route path="/shop">
                        <ShopPage
                            products={products}
                            handleModalConfirm={handleModalConfirm}
                            setModalProductId={setModalProductId}
                            modalProductId={modalProductId}
                            handleModalClose={handleModalClose}
                        />
                    </Route>
                    <Route path="/favorite">
                        <FavoritePage
                            products={products}
                        />
                    </Route>
                    <Route path="/cart">
                        <CartPage
                            products={products}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
