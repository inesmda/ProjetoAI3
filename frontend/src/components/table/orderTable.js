import React from 'react'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import { ConfirmButton } from "../button/button"
import view from "../../img/view.png"
import edit from "../../img/edit.png"
import del from "../../img/delete.png"

export const TableOrders = (props) => {
    return(
        <div className="row">
            <div className="col">
            <div class="card my-3">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Data Pedido</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Preço</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{props.id}</th>
                                <td>{props.orderDate}</td>
                                <td>{props.status}</td>
                                <td>{props.price}</td>
                                <td>
                                    <Link to="/order/page/:id"> <img src={ view } alt="viewuser" width="20" height="20" /> </Link>
                                    <Link to="/order/edit/:id"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
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

export const TableViewOrder = (props) => {
    return(
        <div className="row">
            <div className="col">
                <div className="row mb-2">
                    <div className="col-2 my-auto">
                        <h5>Encomenda #{props.orderId}</h5>
                    </div>
                    <div className="col-7">
                    </div>
                    <div className="col-3" style={{ textAlign: "right" }}>       
                    </div>
                </div>
                <div className="row">
                    <div class="card my-3">
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Artigo</th>
                                        <th scope="col">Quantidade</th>
                                        <th scope="col">Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{props.productId}</th>
                                        <td>{props.name}</td>
                                        <td>{props.quantity}</td>
                                        <td>{props.productPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                        <div class="col-4 mt-1">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-1">
                                        <div class="col-5 my-auto">
                                            <h5>Preço Final</h5>
                                        </div>

                                        <div class="col-6 my-auto" style={{ color: "#0D6EFD", textAlign: "right" }}>
                                            <h5>{props.orderPrice}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    )
}

export const TableEditOrder = (props) => {
    return(
        <div className="row">
            <div className="col">
                <div className="row mb-2">
                    <div className="col-2 my-auto">
                        <h5>Encomenda #{props.orderId}</h5>
                    </div>
                    <div className="col-5">
                    </div>
                    <div className="col-3">
                        <div class="form-group mb-3" >
                            <select class="form-control">
                                <option>Alterar Estado</option>
                                <option>Pendente</option>
                                <option>Enviado</option>
                                <option>Entegue</option>
                            </select>
                        </div>  
                    </div>
                    <div className="col-2">
                        <ConfirmButton
                            title="Guardar"
                        /> 
                    </div>
                </div>
                <div className="row">
                    <div class="card my-3">
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Artigo</th>
                                        <th scope="col">Quantidade</th>
                                        <th scope="col">Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{props.productId}</th>
                                        <td>{props.name}</td>
                                        <td>{props.quantity}</td>
                                        <td>{props.productPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                        <div class="col-4 mt-1">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mt-1">
                                        <div class="col-5 my-auto">
                                            <h5>Preço Final</h5>
                                        </div>

                                        <div class="col-6 my-auto" style={{ color: "#0D6EFD", textAlign: "right" }}>
                                            <h5>{props.orderPrice}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    )
}