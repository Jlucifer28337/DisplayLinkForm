import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
    return (
        <div className="menu">
            <button className="menu__button">
                <Link to='/form'>
                    Форма
                </Link>
            </button>
            <button className="menu__button">
                <Link to='/news'>
                    Новости
                </Link>
            </button>
        </div>
    )
}