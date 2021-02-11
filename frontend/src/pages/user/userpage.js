import React from 'react'
import { Link } from "react-router-dom";
import { NavBarA } from '../../components/navbar/navBarA'
import edit from "../../img/edit.png";

function UserPage() {
    return (
        <body>
          <header>
            <NavBarA name="Admin" />
          </header>
          <main>
            <div class="row">
                <div class="col-8 mx-auto mt-5">
                    <div class="row">
                        <div class="col-7">
                            <div class="card mt-5">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-11">
                                            <h5>As Minhas Informações</h5>
                                        </div>
                                        <div className="col-1">
                                            <Link to="/user/edit"> <img src={ edit } alt="viewuser" width="20" height="20" /> </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <h6 style={{ color: "#0D6EFD" }}>Nome</h6>
                                        <p>Nome de Utilizador</p>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <h6 style={{ color: "#0D6EFD" }}>Data Nascimento</h6>
                                        <p>01/01/2021</p>
                                    </div>

                                    <div className="mt-4">
                                        <h6 style={{ color: "#0D6EFD" }}>Email</h6>
                                        <p>email@email.com</p>
                                    </div>

                                    <div className="mt-4">
                                        <h6 style={{ color: "#0D6EFD" }}>Telefone</h6>
                                        <p>987654321</p>
                                    </div>

                                    <div className="mt-4">
                                        <h6 style={{ color: "#0D6EFD" }}>Morada</h6>
                                        <p>Rua de Exemplo nº1, Viseu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div class="col-5">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h5>As Minhas Encomendas</h5>

                            <div className="mt-4">
                                <Link to="/user/orders/pending" style={{ textDecoration:"none" }}>
                                    <h6 style={{ color: "#0D6EFD" }}>Encomendas Pendentes</h6>
                                </Link>
                                <p>Consulte as suas encomendas em curso</p>
                            </div>

                            <div className="mt-4">
                                <Link to="/user/orders/closed" style={{ textDecoration:"none" }}>
                                    <h6 style={{ color: "#0D6EFD" }}>Encomendas Concluidas</h6>
                                </Link>
                                <p>Consulte as suas encomendas finalizadas</p>
                            </div>
                        </div>
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
  
  export default UserPage;
  