import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopCart from "../../img/shopcart.png";
import { Link } from "react-router-dom";

export const NavBarA = (props) => {
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/">
                    <button className="btn shadow-none">ONSTORE</button>
                </Link>

                <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/products">
                                <button type="button" className="btn shadow-none">Produtos</button>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/orders">
                                <button type="button" className="btn shadow-none">Encomendas</button>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/userlist">
                                <button type="button" className="btn shadow-none">Clientes</button>
                            </Link>
                        </li>
                    </ul>
                </div>

                 <Link to="/cart">
                    <button type="button" className="btn shadow-none"><img src={ shopCart } alt="shoppingcart" width="20" height="20" /></button>
                </Link>

                <Link to="/user">
                    <button type="button" className="btn shadow-none">{props.name}</button>
                </Link>
            </div>
        </nav>
    )
}