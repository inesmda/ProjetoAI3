import React from 'react'
import { NavBarA } from '../../components/navbar/navBarA'

function AddUser() {
    return (
        <body>
          <header>
            <NavBarA 
                name="Admin"
            />
          </header>
          <main>
          <div class="row">
                <div class="col-8 mx-auto mt-5">
                    <div className="row mb-2">
                        <div className="col">
                            <h5>Editar Utilizador</h5>
                        </div>
                    </div>

                    <div className="row">
                        <form className="form mt-4">
                                <div className="row">
                                    <div className="col">
                                <div className="form-label-group mb-3">
                                    <input type="text" id="inputFirst" className="form-control" placeholder="Primeiro Nome" required autofocus />
                                </div>


                                <div className=" form-label-group mb-3">
                                    <input type="text" id="inputLast" className="form-control" placeholder="Ultimo Nome" required />
                                </div>

                                <div className="form-label-group mb-3">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required />
                                </div>

                                <div class="form-label-group mb-3">
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                </div>

                                <div className="form-label-group mb-3">
                                      <input type="number" id="inputPhone" className="form-control" placeholder="Telefone" required />
                                </div>

                            </div>


                            <div className="col">
                                <div className="form-label-group mb-3">
                                      <input type="text" id="inputAddress" className="form-control" placeholder="Morada" required />
                                </div>

                                <div className="form-label-group mb-3">
                                      <input type="text" id="inputPC" className="form-control" placeholder="Código Postal" required />
                                </div>    

                                <div className="form-label-group mb-3">
                                      <input type="text" id="inputLoc" className="form-control" placeholder="Localidade" required />
                                </div>

                                <div className="form-label-group mb-3">
                                      <input type="text" id="inputCountry" className="form-control" placeholder="País" required />
                                </div>

                                <div>
                                    <button className="btn col-12 btn-primary btn-block text-uppercase mb-3" type="submit">Guardar</button>
                                </div>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
          </main>
          <footer></footer>
        </body>
    );
  }
  
  export default AddUser;