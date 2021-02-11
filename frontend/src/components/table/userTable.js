import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from '../button/button.js'
import view from "../../img/view.png";
import edit from "../../img/edit.png";
import del from "../../img/delete.png";

export const TableUsers = (props) => {
    return(
        <div className="row">
            <div className="col">
            <div class="card my-3">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Localidade</th>
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
                                    <Link to="/user/edit"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
                                    <Link to=""> <img src={ del } alt="viewuser" width="20" height="20"/> </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}