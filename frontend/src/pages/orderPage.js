import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from "react-router-dom";
import { NavBarA } from '../components/navbar/navBarA'
import { TableViewOrder } from '../components/table/orderTable'

function OrderPage() {
  return (
      <body>
        <header>
          <NavBarA name="Admin" />
        </header>
        <main>
          <div class="row">
            <div class="col-8 mx-auto mt-5">
                <TableViewOrder
                    orderId="1"
                    productId="9531863"
                    name="Samsung Galaxy S20"
                    quantity="1"
                    productPrice="950€"
                    orderPrice="950€"
                />
            </div>
          </div>
        </main>
        <footer></footer>
      </body>
  );
}

export default OrderPage;