import { CARD_BUTTON as ACTION_POST } from '../actions'
import { like, dislike, menuDots, comments } from '../../assets/icons'

const postButtonsMenu = {
  button: {
    click: 'click',
    action: 'click',
    icon: menuDots
  },
  // Items do menu que ao receber um click, tem opção de ação, e podem abrir um formulario.
  items: [
    {
      action: ACTION_POST.EDIT,
      form: {
        data: {
          title: 'Edit Post', // TODO: Translate
          fields: [ // TODO: Translate
            { label: 'Title of Post', value: 'title' },
            { label: 'Description', value: 'body' }
          ]
        }
      },
      text: 'Edit Post' // TODO: Translate
    },
    {
      action: ACTION_POST.DELETE,
      text: 'Delet Post' // TODO: Translate
    }
  ]
}

const commentButtonsMenu = {
  button: {
    click: 'click',
    action: 'click',
    icon: menuDots
  },
  // Items do menu que ao receber um click, tem opção de ação, e podem abrir um formulario.
  items: [
    {
      action: ACTION_POST.EDIT,
      form: {
        data: {
          title: 'Edit comment', // TODO: Translate
          fields: [ // TODO: Translate
            { label: 'Comment', value: 'body' }
          ]
        }
      },
      text: 'Edit' // TODO: Translate
    },
    {
      action: ACTION_POST.DELETE,
      text: 'Delet Comment' // TODO: Translate
    }
  ]
}

const footerButtons = {
  buttonVoteUp: {
    action: ACTION_POST.CHANGE_VOTE.upVote,
    icon: like
  },
  buttonVoteDown: {
    action: ACTION_POST.CHANGE_VOTE.downVote,
    icon: dislike
  },
  comments: {
    action: 'NAVIGATE',
    icon: comments
  }
}

export const CARD_POST = {
  menuDots: postButtonsMenu,
  footer: footerButtons
}

export const CARD_COMMENT = {
  menuDots: commentButtonsMenu,
  footer: footerButtons
}
