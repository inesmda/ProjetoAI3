import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopCart from "../../img/shopcart.png";
import { Link } from "react-router-dom";

export const NavBarU = (props) => {
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#0D6EFD'}}>
            <div className="container">

                <div className="nav-item">
                    <Link to="/">
                        <button className="btn shadow-none" style={{color:'white'}}>ONSTORE</button>
                    </Link>
                </div>

                <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                    
                </div>

                 <Link to="/cart">
                    <button type="button" className="btn shadow-none"><img src={ shopCart } alt="shoppingcart" width="20" height="20" /></button>
                </Link>

                <Link to="/user/page/:id">
                    <button type="button" className="btn shadow-none" style={{color:'white'}}>{props.name}</button>
                </Link>
            </div>
        </nav>
    )
}