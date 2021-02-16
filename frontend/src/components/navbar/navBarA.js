import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
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

                    <Dropdown>
                        <Dropdown.Toggle className="shadow-none" style={{ backgroundColor:'#0D6EFD', border: "none" }}>
                            {props.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item style={{ backgroundColor:'white' }}>
                                <Link to="/user/page/:id" style={{ textDecoration:"none", color: "black"}}>
                                    Conta
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item style={{ backgroundColor:'white' }}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
            </div>
        </nav>
    )
}