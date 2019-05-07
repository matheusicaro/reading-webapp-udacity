import React from 'react'
import { Dashboard } from '../../components/dashboard'
import { HOME } from '../../constants/pages'

const Home = props => {
  // TODO: Retirar o "onclick" pois ele tem que ser generico para o dominio do componente, on click atraves do hooks
  return <Dashboard cards={props.posts} onclick={props.onclick} cardButtons={HOME.MENUS.POST.cardButtons} />
}

export default Home
