import { POST_TYPE_ACTION } from '../../../services/actions/post'

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
      action: POST_TYPE_ACTION.EDIT,
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
      action: POST_TYPE_ACTION.DELETE,
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
      action: POST_TYPE_ACTION.EDIT,
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
      action: POST_TYPE_ACTION.DELETE,
      text: 'Delet Comment' // TODO: Translate
    }
  ]
}

const footerButtons = {
  voteUp: {
    action: POST_TYPE_ACTION.CHANGE_VOTE.upVote,
    icon: like
  },
  voteDown: {
    action: POST_TYPE_ACTION.CHANGE_VOTE.downVote,
    icon: dislike
  },
  comments: {
    icon: comments
  }
}

export const CARD_POST_BUTTONS = {
  menu: postButtonsMenu,
  footer: footerButtons
}

export const CARD_COMMENT_BUTTONS = {
  menu: commentButtonsMenu,
  footer: footerButtons
}
