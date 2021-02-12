import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarA } from '../components/navbar/navBarA'
import { TableUsers } from '../components/table/userTable'
import { Button } from '../components/button/button'

function userList() {
    return (
        <body>
            <header>
                <NavBarA name="Admin" />
            </header>
            <main>
                <div class="row">
                    <div class="col-8 mx-auto mt-5">
                        <div className="row mb-2">
                            <div className="col-2 my-auto">
                                <h5>Utilizadores</h5>
                            </div>
                            <div className="col-7">
                            </div>
                            <div className="col-3" style={{ textAlign: "right" }}>
                                <Link to="/user/add">
                                    <Button 
                                    title="Adicionar Utilizador"
                                    />
                                </Link>
                            </div>
                        </div>
                            <TableUsers 
                                id="1"
                                firstName="Primeiro"
                                lastName="Último"
                                phoneNumber="987654321"
                                localidade="Viseu" 
                            />
                    </div>
                </div>
            </main>
            <footer></footer>
        </body>
    );
}

export default userList;