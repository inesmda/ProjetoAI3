import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import shopCart from "../../img/shopcart.png";
import { Link } from "react-router-dom";

export const NavBarA = (props) => {
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#0D6EFD'}}>
            <div className="container">

                <div className="nav-item">
                    <Link to="/">
                        <button className="btn shadow-none" style={{color:'white'}}>ONSTORE</button>
                    </Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <Link to="/products">
                                <button type="button" class="btn shadow-none" style={{color:'white'}}>Produtos</button>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/orders">
                                <button type="button" class="btn shadow-none" style={{color:'white'}}>Encomendas</button>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/users">
                                <button type="button" class="btn shadow-none" style={{color:'white'}}>Utilizadores</button>
                            </Link>
                        </li>
                    </ul>

                    <Link to="/cart">
                        <button type="button" className="btn shadow-none"><img src={ shopCart } alt="shoppingcart" width="20" height="20" style={{fill:'white'}} /></button>
                    </Link>
            
                    <Link to="/user/page/:id">
                        <button type="button" className="btn shadow-none" style={{ color:'white' }} >
                            {props.name}
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}