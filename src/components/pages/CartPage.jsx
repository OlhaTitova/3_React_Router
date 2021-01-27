import React, { useState } from "react";
import PropTypes from 'prop-types';
import { CartList } from "../CartList/CartList";
import { ModalDeleteCart } from "../ModalDeleteCart/ModalDeleteCart";
import { removeProductCart } from "../utils/cart";


export const CartPage = ({ products }) => {

    const [modalDeleteID, setModalDeleteID] = useState(null);

    const handleModalClose = () => setModalDeleteID(null);

    const handleModalConfirm = () => {
        removeProductCart(modalDeleteID)
        handleModalClose()
    }

    return (
        <div className="container">
            <h1 className="heading-page">Cart</h1>

            <CartList
                products={products}
                setModalDeleteID={setModalDeleteID}
            />

            {modalDeleteID &&
                <ModalDeleteCart
                    onClose={handleModalClose}
                    onConfirm={handleModalConfirm}
                />
            }
        </div>
    )
}

CartPage.propTypes = {
    product: PropTypes.object,
}