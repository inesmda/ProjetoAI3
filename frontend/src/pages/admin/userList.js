import React from 'react'
import { NavBarA } from '../../components/navbar/navBarA';
import { TableUsers } from '../../components/table/userTable';

function userList() {
    return (
        <body>
            <header>
                <NavBarA name="Admin" />
            </header>
            <main>
                <TableUsers 
                    id="1"
                    firstName="Primeiro"
                    lastName="Último"
                    phoneNumber="987654321"
                    localidade="Viseu" />
            </main>
            <footer></footer>
        </body>
    );
}

export default userList;