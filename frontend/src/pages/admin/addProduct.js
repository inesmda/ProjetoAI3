import React from 'react'
import { NavBarA } from '../../components/navbar/navBarA'

function AddProduct() {
    return (
        <body>
          <header>
            <NavBarA 
                name="Admin"/>
          </header>
          <main>
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
                    <div className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-3">Adicionar Produto</h5>
                            <form className="form-signin">
                                <div className="row">
                                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">

                                        <div className="form-label-group mb-3">
                                            <input type="text" id="inputEmail" className="form-control" placeholder="Produto" required autofocus />
                                        </div>


                                        <div className="form-label-group mb-3">
                                            <input type="text" id="inputPreço" className="form-control" placeholder="Preço" required />
                                        </div>

                                        <div className="form-label-group mb-3">
                                            <input type="number" id="inputStock" className="form-control" placeholder="Stock" required />
                                        </div>
                                    </div>

                                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                        <div className="form-label-group">
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