import React from 'react'
import { NavBarA } from '../components/navbar/navBarA'

function AddProduct() {
    return (
        <body>
          <header>
            <NavBarA 
                name="Admin"/>
          </header>
          <main>
            <div class="row">
                <div class="col-8 mx-auto mt-5">
                    <div className="row mb-2">
                        <div className="col">
                            <h5>Adicionar Produto</h5>
                        </div>
                    </div>

                    <div class="card mt-4">
                    <div class="card-body">
                    <div className="row">
                        <form className="form-signin">
                                <div className="row mt-4">
                                    <div className="col">

                                        <div className="form-label-group mb-3">
                                            <input type="text" id="inputEmail" className="form-control" placeholder="Produto" required autofocus />
                                        </div>


                                        <div className="form-label-group mb-3">
                                            <input type="text" id="inputPreço" className="form-control" placeholder="Preço" required />
                                        </div>

                                        <div className="form-label-group mb-3">
                                            <input type="number" id="inputStock" className="form-control" placeholder="Stock" required />
                                        </div>

                                        <div className="form-label-group mb-3">
                                            <input type="text" id="inputMarca" className="form-control" placeholder="Marca" required />
                                        </div>

                                        <div className="form-label-group mb-3">
                                             <input type="text" id="inputModelo" className="form-control" placeholder="Modelo" required />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-label-group">
                                            <div className="form-label-group mb-3">
                                                <input type="text" id="inputPeso" className="form-control" placeholder="Peso" required />
                                            </div>

                                            <div className="form-label-group mb-3">
                                                <input type="text" id="inputCor" className="form-control" placeholder="Cor" required />
                                            </div>


                                            <div class="form-group mb-3" >
                                                <select class="form-control">
                                                    <option>Categoria</option>
                                                    <option>Telemoveis</option>
                                                    <option>Fotografia</option>
                                                    <option>Jogos</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-label-group">
                                            <div class="form-group">
                                                <select class="form-control mb-3">
                                                    <option>Estado</option>
                                                    <option>Disponível</option>
                                                    <option>Indisponível</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                        <div>
                                            <button className="btn col-12 btn-primary btn-block text-uppercase mb-3" type="submit">Adicionar</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
          </main>
          <footer></footer>
        </body>
    );
  }
  
  export default AddProduct;