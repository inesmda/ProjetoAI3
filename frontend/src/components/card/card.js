import React from "react";
import { Button } from '../button/button'
import S21 from '../../img/s21.png'
import del from "../../img/delete.png";
import { ConfirmButton } from '../../components/button/button'
import { auto } from "@popperjs/core";
import { Link } from "react-router-dom";

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
                  <option>Relevânica</option>
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

export const CardProductHP = (props) => {
  return (
    <div className="card" style={{ alignItems: 'center' }}>
      <img className="card-img-top mt-2" src={ S21 } alt="product_img" style={{ height: "200px", width: auto }}/>
      <div className="card-body" >
        <h6 className="card-title" style={{ color: 'black' }}>{props.name}</h6>
        <h5 className="card-text" style={{ color: '#0D6EFD' }}>{props.price}</h5>
      </div>
    </div>
  )
}

export const CardProduct = (props) => {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-1">
              </div>
              <div className="col-4 my-auto">
                <img src={ S21 } alt="product_img" style={{ height: "200px", width: auto }}/>
              </div>
              <div className="col-6 my-auto">
                <div className="row" style={{ textAlign: 'right' }}>
                  <div className="col">
                    <h4 className="card-text">{props.name}</h4>
                    <h6 className="card-text" style={{ color: '#3CB043' }}>{props.status}</h6>
                    <h4 className="card-text" style={{ color: '#0D6EFD' }}>{props.price}</h4>
                    <Button
                      title="Comprar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <h5 className="card-text mt-2 mb-3">Informações Produto</h5>

              <div className="mt-2">
                <h6 style={{ color: "#0D6EFD" }}>Produto</h6>
                <p>{props.name}</p>
              </div>

              <div className="mt-2">
                <h6 style={{ color: "#0D6EFD" }}>Referência</h6>
                <p>{props.id}</p>
              </div>

              <div className="mt-2">
                <h6 style={{ color: "#0D6EFD" }}>Marca</h6>
                <p>{props.brand}</p>
              </div>

              <div className="mt-2">
                <h6 style={{ color: "#0D6EFD" }}>Modelo</h6>
                <p>{props.model}</p>
              </div>

              <div className="mt-2">
                <h6 style={{ color: "#0D6EFD" }}>Cor</h6>
                <p>{props.color}</p>
              </div>

              <div className="mt-2">
                <h6 style={{ color: "#0D6EFD" }}>Peso</h6>
                <p>{props.weight}</p>
              </div>
            </div>
          </div>
        </div>
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
                <Link to="/product/page/:id">
                  <img src={ S21 } alt="product_img" style={{ height: "100px" }}/>
                </Link>
              </div>

              <div className="col-6 my-auto text-center">
                <Link to="/product/page/:id" style={{ textDecoration:"none", color: "black"}}>
                  <h5>{props.name}</h5>
                </Link>
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
              <div className="col-7"></div>
              <div className="col-4 my-auto">
                <ConfirmButton 
                    title="Comprar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>               
    </div>
  )
}