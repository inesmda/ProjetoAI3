import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

//Importação dos Componentes

function navbar () {
    return(
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Link to="/">
          <button className="btn shadow-none">ONSTORE</button>
        </Link>
        
        <div className="form-inline">
          <Link to="/login">
            <button className="btn btn shadow-none">Login</button>
          </Link>
        </div>
    </nav>
    )
}

export default navbar;