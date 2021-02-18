import React from 'react'
import { NavBarA } from '../components/navbar/navBarA'
import { CardCartProduct } from '../components/card/card'
import { CardCartTotal } from '../components/card/card'

function Cart() {
    return (
        <body>
          <header>
            <NavBarA name="Admin" />
          </header>
          <main>
            <div class="row">
                <div class="col-8 mx-auto mt-5">
                    <div className="row mb-4">
                        <div className="col">
                            <h5>O Meu Carrinho</h5>
                        </div>
                    </div>
                            <CardCartProduct 
                                name="Samsung Galaxy S20"
                                price="950€"    
                            />
                            <CardCartTotal 
                                finalprice="950€"
                            />
                </div>
            </div>
          </main>
          <footer></footer>
        </body>
    );
  }

  export default Cart;