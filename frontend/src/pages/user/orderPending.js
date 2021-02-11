import React from 'react'
import { NavBarA } from '../../components/navbar/navBarA'
import { TableOrders } from '../../components/table/orderTable'

function OrderList() {
  return (
      <body>
        <header>
          <NavBarA name="Admin" />
        </header>
        <main>
          	<div class="row">
                <div class="col-8 mx-auto mt-5">
                    <div className="row mb-2">
                        <div className="col">
                            <h5>Pendentes</h5>
                        </div>
                    </div>
                      <TableOrders
                         
                      />
                </div>
          </div>
        </main>
        <footer></footer>
      </body>
  );
}

export default OrderList;
