import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from '../button/button.js'
import view from "../../img/view.png";
import edit from "../../img/edit.png";
import del from "../../img/delete.png";

export const TableProducts = (props) => {
    return(
<div class="container">
            <div class="row mt-5">
                <div class="col">
                    <Link to="/product/add">
                        <Button 
                            title="Adicionar Produto"
                        />
                    </Link>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card my-5">
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col">Status</th>
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
                                            <Link to="/product/edit"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
                                            <Link to=""> <img src={ del } alt="viewuser" width="20" height="20"/> </Link>
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