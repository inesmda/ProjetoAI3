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

                <Dropdown>
                        <Dropdown.Toggle className="shadow-none" style={{ backgroundColor:'#0D6EFD', border: "none" }}>
                            {props.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/user/page/:id" style={{ textDecoration:"none", color: "black"}}>
                                    Conta
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
            </div>
        </nav>
    )
}