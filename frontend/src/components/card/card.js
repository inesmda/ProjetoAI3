import React from "react";
import { Button } from '../button/button'
import S21 from '../../img/s21.png'

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">

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