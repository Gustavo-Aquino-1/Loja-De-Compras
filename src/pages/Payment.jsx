import React, { useEffect, useState } from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs'
import { AiFillCheckCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { Loading } from '../components/Loading';
import { MdCancel } from 'react-icons/md'

const PaymentArea = styled.div`
  span {
    font-size: 80px;
    color: green;
  }
`;
export const Payment = (props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  setTimeout(() => {
    setLoading(false)
  },2500)

  const { params: { price }} = props.match
  const user = getItem('usuario')
  const saldo = user.saldo;

  useEffect(() => {
    const priceFinal = saldo - price
    if(priceFinal >= 0){
      setItem('usuario',{...user,saldo:priceFinal})
      setError(false)
    }else {
      setError(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
  return (
    <>
    {
      loading ? <Loading /> : (
        error ? ( <div>
          <span><MdCancel style={{fontSize: '45px', color:'red'}} /></span>
          <p>Seu Saldo é insufiente!!</p>
          <p>{`Tentativa de compra: R$ ${price} , saldo atual: R$ ${user.saldo}`}</p>
        </div> ): (
          <PaymentArea>
            <h2>Sua compra foi concluída com sucesso!!</h2>
            <span> <AiFillCheckCircle /> </span>
            <h4>{`Valor: R$ ${price}`}</h4>
            <h4>{`Comprador: ${user.name}`}</h4>
            <h4>{`Prazo: ${ Math.ceil(Math.random() * 20) + 1} dias`}</h4>
            { }
          </PaymentArea>
        )
      )
    }
    </>
  )
}







// import React, { useEffect, useState } from 'react'
// import { getItem, setItem } from '../services/LocalStorageFuncs'
// import { AiFillCheckCircle } from 'react-icons/ai'
// import styled from 'styled-components'
// import { Loading } from '../components/Loading';
// import { MdCancel } from 'react-icons/md'

// const PaymentArea = styled.div`
//   span {
//     font-size: 80px;
//     color: green;
//   }
// `;
// export const Payment = (props) => {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   setTimeout(() => {
//     setLoading(false)
//   },2500)

//   const { params: { price }} = props.match
//   const user = getItem('usuario')
//   useEffect(() => {
//     const priceTotal =  Number(user.saldo) - Number(price);
//     if(priceTotal >= 0) {
//       setError(false)
//       setItem('usuario',{...user,saldo:priceTotal}) //tem video explicando , redenifição de chaves do objeto , basicamnete estou pegando todas chaves que estavao la e juntando com saldo que inclusive ja estava la dentro porem foi redefinido para o novo saldo!! 
//     }else {
//       setError(true)
//     }
//   },[])

//   return (
//     <>
//     {
//       loading ? <Loading /> : (
//         error ? ( <div>
//           <span><MdCancel style={{fontSize: '45px', color:'red'}} /></span>
//           <p>Seu Saldo é insufiente!!</p>
//           <p>{`Tentativa de compra: R$ ${price} , saldo atual: R$ ${user.saldo}`}</p>
//         </div> ): (
//           <PaymentArea>
//             <h2>Sua compra foi concluída com sucesso!!</h2>
//             <span> <AiFillCheckCircle /> </span>
//             <h4>{`Valor: R$ ${price}`}</h4>
//             <h4>{`Comprador: ${user.name}`}</h4>
//             <h4>{`Prazo: ${ Math.ceil(Math.random() * 20) + 1} dias`}</h4>
//             { }
//           </PaymentArea>
//         )
//       )
//     }
//     </>
//   )
// }
