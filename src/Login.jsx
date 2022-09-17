import React, { useState } from 'react'
import { setItem } from './services/LocalStorageFuncs'
import { getItem } from './services/LocalStorageFuncs'
import { CgProfile } from 'react-icons/cg'
import styled from 'styled-components'

const LoginArea = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;
  justify-content: center;

  span {
    font-size: 70px;
  }

  input {
    background-color: #8080805f;
    border: none;
    border-bottom: 2px solid gray;
    padding: 10px;
    width: 15%;
    outline: none;
  }

  button {
    &:disabled {
      opacity: 0.3;
    }
    padding: 10px 40px;
    border: 2px solid red;
    color: red;
    font-weight: 800;
    background-color: white;
    &:not(:disabled) {
      &:hover {
        background-color: red;
        color: white;
        cursor: pointer;
      }
    }
  }

`;

export const Login = (props) => {
  const user = getItem('usuario') 

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [passIncorrect, setPassIncorret] = useState(false) 

  const cond = (name.length > 3 && pass.length > 5)

  const saveUser = (name,pass) => {
    const { history: { push} } = props;
    if(user){
      
      if(user.name.length > 0 && user.pass.length > 0){
        if(name === user.name && pass === user.pass){
          push('/store')
        }else if( name === user.name && pass !== user.pass) {
          setPassIncorret(true);
        }else {
          setItem('usuario',{name,pass})
          push('/store')
        }
    }
    }else {
      console.log('oi')
      setItem('usuario',{name,pass})
      push('/store')
    }
  }

  return (
    <LoginArea>
      <span>
        <CgProfile />
      </span>
      <input
        type="text"
        onChange={({target:{value}}) => setName(value)}
        value={name}
        placeholder="Name"
      />

      <input
        type="password"
        onChange={({target:{value}}) => setPass(value)}
        value={pass}
        placeholder="Password"
      />

      {
        passIncorrect && <p>Passowrd Incorrect</p>
      }


      <button
        type="button"
        onClick={ () => saveUser(name,pass)}
        disabled={ !cond }
      >
        Sing In
      </button>
    </LoginArea>
  )
}
