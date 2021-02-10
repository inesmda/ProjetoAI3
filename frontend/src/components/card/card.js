import React from "react";
import { Button } from '../button/button'
import S21 from '../../img/s21.png'
import del from "../../img/delete.png";
import { ConfirmButton } from '../../components/button/button'

export const CardFilter = (props) => {
  return (
    <div className="card">
      <div className="card-body">
      <h5 className="card-title text-center">Filtros</h5>
        <div className="row">
          <div className="col">
            <div className="form-label-group mb-3">
              <div className="form-group" >
                <select className="form-control mt-2">
                  <option>Categoria</option>
                  <option>Telemoveis</option>
                  <option>Fotografia</option>
                  <option>Jogos</option>
                </select>
               </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-label-group mb-3">
              <div className="form-group" >
                <select className="form-control mt-2">
                  <option>Ordenar Por</option>
                  <option>Nome</option>
                  <option>Preço</option>
                </select>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CardProducts = (props) => {
  return (
    <div className="card" style={{ alignItems: "center" }}>
      <img className="card-img-top" src={ S21 } alt="product_img" />
      <div className="card-body" >
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
        <Button 
          title="Adicionar ao Carrinho"
        />
      </div>
    </div>
  )
}

export const CardCartProduct = (props) => {
  return (
    <div class="row mt-2">
      <div class="col-12 mx-auto mt-1">
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div className="col-1 my-auto">
                <img src={ S21 } alt="product_img" style={{ height: "100px" }}/>
              </div>

              <div className="col-6 my-auto text-center">
                <h5>{props.name}</h5>
              </div>

              <div className="col-2 my-auto">
                <div className="form-label-group">
                  <input type="number" id="inputStock" className="form-control" placeholder="Quantidade" required />
                </div>
              </div>

              <div className="col-2 my-auto text-center">
                <h5>{props.price}</h5>
              </div>

              <div className="col-1 my-auto">
                <img src={ del } alt="viewuser" width="20" height="20"/>
              </div>
            </div>
          </div>
        </div>
      </div>               
    </div>
  )
}

export const CardCartTotal = (props) => {
  return (
    <div class="row mt-2">
      <div className="col-8"></div>
      <div class="col-4 mt-1">
        <div class="card">
          <div class="card-body">
            <div class="row mt-1">
              <div class="col-5 my-auto">
                <h5>Preço Total</h5>
              </div>

              <div class="col-6 my-auto" style={{ color: "#0D6EFD", textAlign: "right" }}>
                <h5>{props.finalprice}</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-5"></div>
              <div className="col-7 my-auto">
                <ConfirmButton 
                    title="Confirmar Compra"
                />
              </div>
            </div>
          </div>
        </div>
      </div>               
    </div>
  )
}