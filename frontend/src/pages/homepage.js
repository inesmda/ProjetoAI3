import React from 'react'
import { Link } from "react-router-dom";
import { NavBarA } from '../components/navbar/navBarA'
import { CardProducts } from '../components/card/card.js'
import { CardFilter } from '../components/card/card.js'
import { Button } from '../components/button/button.js'

function Homepage() {
  return (
      <body>
        <header>
          <NavBarA name="Admin" />
        </header>
        <main>
          <div class="row">
            <div class="col-8 mx-auto mt-5">
            <div className="row">
              <div className="col-6 mx-auto my-auto">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Procurar Produto"
                    aria-label="Search"
                  />
                  <Button 
                    title="Procurar"
                  />
                </form>
              </div>
            </div>
            <div className="row mt-4">
            <div className="col-3">
                <CardFilter 
                  />
              </div>
                <div className="col-9">
                  <div className="row">

                    <div className="col-4 mb-4">
                    <Link to="/product" style={{ textDecoration: "none" }}>
                      <CardProducts
                        name="Samsung Galaxy S20"
                        price="950€"
                      />
                    </Link>
                    </div>
                  <div className="col-4">
                    <CardProducts
                      name="Samsung Galaxy S20"
                      price="950€"
                    />
                  </div>
                  <div className="col-4">
                    <CardProducts
                      name="Samsung Galaxy S20"
                      price="950€"
                    />
                  </div>
                  <div className="col-4">
                    <CardProducts
                      name="Samsung Galaxy S20"
                      price="950€"
                    />
                  </div>
                  <div className="col-4">
                    <CardProducts
                      name="Samsung Galaxy S20"
                      price="950€"
                    />
                  </div>
                  <div className="col-4">
                    <CardProducts
                      name="Samsung Galaxy S20"
                      price="950€"
                    />
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

export default Homepage;
