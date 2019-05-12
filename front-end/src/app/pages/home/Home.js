import React from 'react'
import { Dashboard } from '../../components/dashboard'

import { POST } from '../../constants/actions'

import { like, dislike, menuDots } from '../../assets/icons'

const Home = props => {
  return <Dashboard cards={props.posts} onclick={props.onclick} cardButtons={postButtons} />
}

export default Home

const postButtonsMenu = {
  button: {
    click: 'click',
    action: 'click',
    icon: menuDots
  },
  // Items do menu que ao receber um click, tem opção de ação, e podem abrir um formulario.
  items: [
    {
      action: POST.EDIT,
      form: {
        data: {
          title: 'Editar Postagem', // TODO: Translate
          fields: [ // TODO: Translate
            { label: 'Titulo', value: 'title' },
            { label: 'Descrição', value: 'body' }
          ]
        }
      },
      text: 'Editar' // TODO: Translate
    },
    {
      action: POST.DELETE,
      text: 'Deletar' // TODO: Translate
    }
  ]
}

const postButtonsLikeDeslike = {
  buttonVoteUp: {
    action: POST.CHANGE_VOTE.upVote,
    icon: like
  },
  buttonVoteDown: {
    action: POST.CHANGE_VOTE.downVote,
    icon: dislike
  }
}

const postButtons = {
  menuDots: postButtonsMenu,
  footer: postButtonsLikeDeslike
}
