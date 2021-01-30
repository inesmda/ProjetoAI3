import React from 'react'

import NavBar from '../../components/navbar/navbar'
import { TableProdutos } from '../../components/table/productTable'

function Homepage() {
  return (
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          <TableProdutos
          id="1"
          name="Samusung Galaxy S20"
          category="Telemóveis"
          price="950€"
          status="Disponivel" />
        </main>
        <footer></footer>
      </body>
  );
}

export default Homepage;
