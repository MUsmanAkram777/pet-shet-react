import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import TopBar from './TopBar'
import Logo from './Logo';
import { CartContext } from '../context/CartContext'

export default function Header() {
    const { inCartItemQty } = useContext(CartContext)
    return (
        <div>
            <TopBar/>
            <Logo/>
            <div className="petNav">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/collection">
                            Collection
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            Cart <small className="cartSmall">{inCartItemQty}</small>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
