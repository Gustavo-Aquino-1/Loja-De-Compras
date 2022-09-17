import React from 'react'
import { getItem } from '../services/LocalStorageFuncs'
import { ProfileArea } from '../css/styleProfile'

export const Profile = (props) => {
  const user = getItem('usuario')

  const toProfileEdit = () => {
    const { history: { push } } = props;
    push('/profile/edit')
  }

  return (
    <>
      <h2 style={{marginTop: -20 , marginBottom: 40}}>Your Profile</h2>
      <ProfileArea>
        <img src={user.img} alt="img-user" />
        <p>{` Name: ${user.name}`}</p>
        <p>{` CPF: ${user.cpf}`}</p>
        <p>{` email: ${user.email}`}</p>
        <p>{` Saldo: R$ ${user.saldo}`}</p>

        <button
          onClick={ toProfileEdit }
        >
          Edit Profile
        </button>
      </ProfileArea>
    </>
  )
}
