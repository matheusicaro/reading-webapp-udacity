import { POST } from '../actions'
import { like, dislike, menuDots } from '../../assets/icons'

export const HOME = {
  MENUS: {
    POST: {
      cardButtons: {
        menuDots: {
          button: {
            click: 'click',
            action: 'click',
            icon: menuDots
          },
          items: [
            {
              action: POST.EDIT,
              text: 'Editar'
            },
            {
              action: POST.DELETE,
              text: 'Deletar'
            }
          ]
        },
        footer: {
          buttonVoteUp: {
            action: POST.CHANGE_VOTE.upVote,
            icon: like
          },
          buttonVoteDown: {
            action: POST.CHANGE_VOTE.downVote,
            icon: dislike
          }
        }
      }
    }
  }
}
