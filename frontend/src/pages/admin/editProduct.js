import React from 'react'
import { NavBarA } from '../../components/navbar/navBarA'

function EditProduct() {
    return (
        <body>
          <header>
            <NavBarA />
          </header>
          <main>
        <div className="container">
            <div className="row">
                <div className="addprd1 col-sm-9 col-md-7 col-lg-10 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 class="card-title text-center mb-3">Editar Produto</h5>
                            <form className="form-signin">
                                <div className="row">
                                    <div className="addprd col-sm-9 col-md-7 col-lg-5 mx-auto">

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

                                    <div className="addprd col-sm-9 col-md-7 col-lg-5 mx-auto ">
                                        <div className="form-label-group">
                                            <div class="form-group mb-3" >
                                                <select class="form-control" id="sel1">
                                                    <option>Categoria</option>
                                                    <option>Telemoveis</option>
                                                    <option>Fotografia</option>
                                                    <option>Jogos</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-label-group">
                                            <div class="form-group">
                                                <select class="form-control mb-3" id="sel1">
                                                    <option>Estado</option>
                                                    <option>Disponível</option>
                                                    <option>Indisponível</option>
                                                </select>
                                            </div>

                                        </div>
                                        <button id="confbt" class="btn col-12 btn-sm  btn-outline-primary btn-block text-uppercase" type="submit">Guardar</button>
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
  
  export default EditProduct;