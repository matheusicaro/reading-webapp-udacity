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
  items: [
    {
      action: POST.EDIT,
      form: {
        data: {
          title: 'teste',
          fields: ['Campo 1', 'Campo 2', 'Campo 3']
        }
      },
      text: 'Editar'
    },
    {
      action: POST.DELETE,
      text: 'Deletar'
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
