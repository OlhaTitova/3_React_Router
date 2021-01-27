import React from 'react';
import { MenuItems } from '../MenuItems/MenuItems';
import "./Menu.scss"

export const Menu = () => {
    return (
        <div className="Menu">
            <MenuItems text="Favorite" />
            <MenuItems text="Shop" />
            <MenuItems text="Cart" />
        </div>
    )
}