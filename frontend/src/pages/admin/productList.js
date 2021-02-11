import React from 'react'
import { Link } from "react-router-dom"
import { NavBarA } from '../../components/navbar/navBarA'
import { TableProducts } from '../../components/table/productTable'
import { Button } from '../../components/button/button'

function ProductList() {
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
                            <h5>Produtos</h5>
                        </div>
                        <div className="col-7">
                        </div>
                        <div className="col-3" style={{ textAlign: "right" }}>
                          <Link to="/product/add">
                            <Button 
                              title="Adicionar Produto"
                            />
                          </Link>
                        </div>
                    </div>
                      <TableProducts
                        id="1"
                        name="Samusung Galaxy S20"
                        category="Telemóveis"
                        price="950€"
                        status="Disponivel" 
                      />
                </div> 
          </div> 
        </main>
        <footer></footer>
      </body>
  );
}

export default ProductList;
