import React from 'react';
import "./MenuItems.scss"

export const MenuItems = ({ text }) => {

    return (
        <a className="MenuItems" href="/#">{text}</a>
    )
}