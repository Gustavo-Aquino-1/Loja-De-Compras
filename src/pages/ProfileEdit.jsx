import React, { useState } from 'react';
import {  getItem ,setItem } from '../services/LocalStorageFuncs';
import { FormContainer } from '../css/styleProfileEdit';

export const ProfileEdit = (props) => {
  const user = getItem('usuario')
  const [ name, setName ] = useState( user?.name ||'');
  const [ email, setEmail ] = useState( user?.email || '');
  const [ pass, setPass ] = useState(user?.pass ||'');
  const [ img, setImg ] = useState(user?.img|| '');
  const [ cpf, setCpf ] = useState(user?.cpf||'');
  const [ saldo, setSaldo ] = useState(user?.saldo ||'');

  const regexpEmail = /\S+[@]\w+[.]\w{3}/gi;
  const regexpEmail2 = /\S+[@]\w+[.]\w{3}[.]\w+/gi;
  const regexpCpf = /^(\d{3}[.]){2}\d{3}[-]\d{2}$/gm

  const cond = (
    name.length > 3 && (regexpEmail.test(email)
      || regexpEmail2.test(email))
      && email.length > 8 && pass.length > 0
      && img.length > 4 && regexpCpf.test(cpf) 
      && saldo.length > 2
  );

  const saveChanges = () => {
    setItem('usuario',{name,email,pass,img,cpf,saldo})
    const { history: { push }} = props;
    push('/profile')
  }
  return (
    <FormContainer>
      <fieldset>
        <legend>
          <h2>INFORMAÇÔES</h2>
        </legend>

        <input
          type="text"
          value={name}
          onChange={({target:{value}}) => setName(value)}
          placeholder="Nome"
        />

        <input
          type="email"
          placeholder='email'
          value={email}
          onChange={({target:{value}}) => setEmail(value)}
        />

        <input
          type="password"
          placeholder='Senha'
          value={pass}
          onChange={({target:{value}}) => setPass(value)}
        />

        <input
          placeholder='Image Url'
          type="text"
          value={img}
          onChange={({target:{value}}) => setImg(value)}
        />

        <input
          type="text"
          value={cpf}
          placeholder='CPF'
          onChange={({target:{value}}) => setCpf(value)}
        />

        <input
          type="number"
          placeholder='Saldo'
          value={saldo}
          onChange={({target:{value}}) => setSaldo(value)}
        />
      </fieldset>
     

      <button
        disabled={!cond}
        onClick={saveChanges}
      >
        Save Changes
      </button>
    </FormContainer>

  )
}
