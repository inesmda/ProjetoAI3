import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import view from "../../img/view.png";

export const TableProducts = (props) => {
    return(
<div class="container">
            <div class="row">
                <div class="signn col-sm-9 col-md-7 col-lg-9 mx-auto">
                    <div class="card my-5">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead class="thead-light">
                                    <tr>
                                        <th id="tt" scope="col">#</th>
                                        <th id="tt" scope="col">Produto</th>
                                        <th id="tt" scope="col">Categoria</th>
                                        <th id="tt" scope="col">Preço</th>
                                        <th id="tt" scope="col">Status</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{props.id}</th>
                                        <td>{props.name}</td>
                                        <td>{props.category}</td>
                                        <td>{props.price}</td>
                                        <td>{props.status}</td>
                                        <td>
                                            <Link to="/product"> <img src={ view } alt="viewuser" width="20" height="20" /> </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}