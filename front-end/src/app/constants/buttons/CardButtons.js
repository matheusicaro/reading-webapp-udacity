import { POST } from '../../constants/actions'
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

const footerButtons = {
  buttonVoteUp: {
    action: POST.CHANGE_VOTE.upVote,
    icon: like
  },
  buttonVoteDown: {
    action: POST.CHANGE_VOTE.downVote,
    icon: dislike
  },
  comments: {
    action: 'NAVIGATE',
    icon: comments
  }
}

export const CARD_BUTTONS = {
  menuDots: postButtonsMenu,
  footer: footerButtons
}
