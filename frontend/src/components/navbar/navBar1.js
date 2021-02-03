import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopCart from "../../img/shopcart.png";
import { Link } from "react-router-dom";

function navbar () {
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#2F1793'}}>
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

            <Link to="/user">
                <button type="button" className="btn shadow-none" style={{color:'white'}}>Login</button>
            </Link>
        </div>
    </nav>
    )
}

export default navbar;