import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import view from "../../img/view.png";
import edit from "../../img/edit.png";
import del from "../../img/delete.png";

export const TableUsers = (props) => {
    return(
        
<div class="container">
            <div class="row">
                <div class="sign col-sm-9 col-md-7 col-lg-9 mx-auto mt-5">
                        <Link to="/register">
                            <button type="button" class="btn btn-small btn-outline-success">Adicionar Utilizador</button>
                        </Link>
                </div>

                <div class="sign col-sm-9 col-md-7 col-lg-9 mx-auto">
                    <div class="card my-5">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead class="thead-light">
                                    <tr>
                                        <th id="tt" scope="col">#</th>
                                        <th id="tt" scope="col">Nome</th>
                                        <th id="tt" scope="col">Telefone</th>
                                        <th id="tt" scope="col">Localidade</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{props.id}</th>
                                        <td>{props.firstName} {props.lastName}</td>
                                        <td>{props.phoneNumber}</td>
                                        <td>{props.localidade}</td>
                                        <td> 
                                            <Link to="/user"> <img src={ view } alt="viewuser" width="20" height="20" /> </Link>
                                            <Link to="/user"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
                                            <Link to="/user"> <img src={ del } alt="viewuser" width="20" height="20"/> </Link>
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