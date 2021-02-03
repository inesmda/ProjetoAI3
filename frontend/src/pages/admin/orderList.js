import React from 'react';
import { NavBarA } from '../../components/navbar/navBarA';
import { TableOrders } from '../../components/table/orderTable';

function OrderList() {
  return (
      <body>
        <header>
          <NavBarA name="Admin" />
        </header>
        <main>
          <TableOrders
          id="1"
          price="234.12€"
          status="Recebido" />

          
        </main>
        <footer></footer>
      </body>
  );
}

export default OrderList;
