import React from 'react';
import { NavBarA } from '../../components/navbar/navBarA';
import { TableProducts } from '../../components/table/productTable';

function ProductList() {
  return (
      <body>
        <header>
          <NavBarA name="Admin" />
        </header>
        <main>
          <TableProducts
            id="1"
            name="Samusung Galaxy S20"
            category="Telemóveis"
            price="950€"
            status="Disponivel" 
          />
        </main>
        <footer></footer>
      </body>
  );
}

export default ProductList;
