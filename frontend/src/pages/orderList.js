import React from 'react'
import { Link } from "react-router-dom"
import { NavBarA } from '../components/navbar/navBarA'
import { TableOrders } from '../components/table/orderTable'
import { Button } from '../components/button/button'

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
                        <div className="col-2 my-auto">
                            <h5>Encomendas</h5>
                        </div>
                        <div className="col-7">
                        </div>
                        <div className="col-3" style={{ textAlign: "right" }}>
                          
                        </div>
                    </div>
                      <TableOrders
                        id="1"
                        orderDate="01/02/2020"
                        price="234.12€"
                        status="Recebido" 
                      />
                </div>
          </div>
        </main>
        <footer></footer>
      </body>
  );
}

export default OrderList;
