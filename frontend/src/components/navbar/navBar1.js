import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function navbar () {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/">
                  <button className="btn shadow-none">ONSTORE</button>
                </Link>

                <Link to="/login">
                    <button type="button" class="btn ml-auto shadow-none">Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default navbar;