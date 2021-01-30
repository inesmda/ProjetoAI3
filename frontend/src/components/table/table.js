import React from 'react';
import "./meu.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

//Importação dos Componentes

function productlist() {
    return (

        <div class="container">
            <div class="row">
                <div class="signn col-sm-9 col-md-7 col-lg-9 mx-auto">
                    <div class="card  my-5">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead class="thead-light">
                                    <tr>
                                        <th id="tt" scope="col">#</th>
                                        <th id="tt" scope="col">Produto</th>
                                        <th id="tt" scope="col">Categoria</th>
                                        <th id="tt" scope="col">Stock</th>
                                        <th id="tt" scope="col">Preço</th>
                                        <th id="tt" scope="col">Status</th>
                                        <th scope="col">
                                            <div class="input-group d-flex justify-content-around">
                                                <Link to="/addprod">
                                                    <button type="button" class="btn btn-small btn-outline-success   " >Adicionar Produto</button>
                                                </Link>
                                            </div>



                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Samsung S20</td>
                                        <td>Telemóveis</td>
                                        <td>15</td>
                                        <td>950€</td>
                                        <td>Disponível</td>
                                        <td>
                                            <div className="container-fluid">
                                                <div className="row">
                                            <div id="edbtn" class="input-group d-flex justify-content-around">
                                                <span> <button type="button"  class="btn btn-sm btn-outline-success   " >Editar</button></span><span>
                                                    <button type="button"   class="btn btn-sm btn-outline-success   " >Apagar</button></span>
                                                </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Cyberpunk</td>
                                        <td>Jogos</td>
                                        <td>5</td>
                                        <td>50€</td>
                                        <td>Disponível</td>
                                        <td>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div id="edbtn" class="input-group d-flex justify-content-around">
                                                        <span> <button type="button" class="btn btn-sm btn-outline-success   " >Editar</button></span><span>
                                                            <button type="button" class="btn btn-sm btn-outline-success   " >Apagar</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Playstation 5</td>
                                        <td>Consolas</td>
                                        <td>0</td>
                                        <td>750€</td>
                                        <td>Indisponível</td>
                                        <td>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div id="edbtn" class="input-group d-flex justify-content-around">
                                                        <span> <button type="button" class="btn btn-sm btn-outline-success   " >Editar</button></span><span>
                                                            <button type="button" class="btn btn-sm btn-outline-success   " >Apagar</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>





                                </tbody>
                            </table>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default productlist;