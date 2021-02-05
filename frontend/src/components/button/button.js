import React from "react";

export const Button = (props) => {
  return (
    <button className="btn btn-primary">{props.title}</button>
  )
}

export const ConfirmButton = (props) => {
  return (
    <button class="btn btn-primary btn-block text-uppercase" type="submit">{props.title}</button>
  )
}