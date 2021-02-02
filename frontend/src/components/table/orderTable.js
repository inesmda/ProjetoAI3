import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import view from "../../img/view.png";
import edit from "../../img/edit.png";
import del from "../../img/delete.png";

export const TableOrders = (props) => {
    return(
<div class="container">
            <div class="row">
                <div class="sign col-sm-9 col-md-7 col-lg-9 mx-auto mt-5">
                        <Link to="/addproduct">
                            <button type="button" class="btn btn-small btn-outline-success">Adicionar Encomenda</button>
                        </Link>
                </div>

                <div class="signn col-sm-9 col-md-7 col-lg-9 mx-auto">
                    <div class="card  my-5">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead class="thead-light">
                                    <tr>
                                        <th id="tt" scope="col">#</th>
                                        <th id="tt" scope="col">Preço</th>
                                        <th id="tt" scope="col">Estado</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{props.id}</th>
                                        <td>{props.price}</td>
                                        <td>{props.status}</td>
                                        <td>
                                            <Link to="/order"> <img src={ view } alt="viewuser" width="20" height="20" /> </Link>
                                            <Link to="/order"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
                                            <Link to="/order"> <img src={ del } alt="viewuser" width="20" height="20"/> </Link>
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