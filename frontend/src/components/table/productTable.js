import React from 'react'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import view from "../../img/view.png"
import edit from "../../img/edit.png"
import del from "../../img/delete.png"

export const TableProducts = (props) => {
    return(
        <div className="row">
            <div className="col">
            <div class="card my-3">
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
                                    <Link to="/product/:id"> <img src={ view } alt="viewuser" width="20" height="20" /> </Link>
                                    <Link to="/product/edit/:id"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
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