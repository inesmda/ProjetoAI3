import React from 'react'
import { NavBarA } from '../components/navbar/navBarA'
import { CardProduct } from '../components/card/card.js'

function ProductPage() {
  return (
      <body>
        <header>
          <NavBarA name="Admin" />
        </header>
        <main>
          <div class="row">
            <div class="col-8 mx-auto mt-5">
                <CardProduct
                    id="9531863"
                    name="Samsung Galaxy S20"
                    price="950€"
                    status="Disponível"
                    brand="Samsung"
                    model="Galaxy S20"
                    weight="163g"
                    color="Black"
                />
            </div>
          </div>
        </main>
        <footer></footer>
      </body>
  );
}

export default ProductPage;
