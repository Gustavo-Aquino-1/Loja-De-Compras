import React, { useState } from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { BsFillCartDashFill } from 'react-icons/bs'
import { ProductsArea } from '../css/style'

import styled from 'styled-components';

const CartArea = styled.div`
  button.buy {
    &:disabled {
      opacity: 0.3;
    }
    padding: 10px 40px;
    border: 2px solid red;
    color: red;
    background-color: white;
    font-weight: 800;
    &:not(:disabled) {
      &:hover {
        background-color: red;
        color: white;
        cursor: pointer;
      }
    }
  }
`;


export const Cart = (props) => {
  const [data, setData] = useState( getItem('carrinhoYt') || [])
  const user = getItem('usuario')

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id)
    setData(arrFilter)
    setItem('carrinhoYt',arrFilter)
  }

  const handleClick = () => {
    const { history: { push } } = props;
    if(subTotal <= user.saldo) {
      setItem('carrinhoYt',[])
      push(`/payment/${subTotal}`)
    }else {
      push(`/payment/${subTotal}`)
    }
  }

  
  const subTotal = data.reduce((acc,cur) => acc + cur.price ,0)
  const cond = (subTotal > 0 && user.saldo);
  return (
    <CartArea>
      <h3>{`SubTotal: R$ ${subTotal} , Saldo Atual: R$ ${user.saldo ?  Number(user.saldo).toFixed(2) : ''}`}</h3>
      <ProductsArea>
        {
          data.map((e) => (
            <div key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt={e.title} />
              <h4>{`R$ ${e.price}`}</h4>
              <button
                onClick={ () => removeItem(e)}
              >
                <BsFillCartDashFill />
              </button>
            </div>
          ))
        }
      </ProductsArea>
      <button
        disabled = { !cond  }
        onClick={ handleClick }
        className="buy"
      >
        Comprar
      </button>
      <br /> <br />
    </CartArea>
  )
}
