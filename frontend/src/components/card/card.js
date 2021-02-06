import React from "react";
import { Button } from '../button/button'
import S21 from '../../img/s21.png'

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