import React from 'react'

import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'

import { CARD_POST_BUTTONS } from '../../constants/buttons'

const ScoreButton = ({ onclick, id, text }) => {
  return (
    <Typography component='p'>
      <Button style={style.button} onClick={() => onclick(CARD_POST_BUTTONS.footer.voteUp.action, id)} >
        <SvgIcon>
          <path d={CARD_POST_BUTTONS.footer.voteUp.icon} />
        </SvgIcon>
      </Button>

      <span style={{ margin: '0% 5%' }}>{ text }</span>

      <Button style={style.button} onClick={() => onclick(CARD_POST_BUTTONS.footer.voteDown.action, id)} >
        <SvgIcon>
          <path d={CARD_POST_BUTTONS.footer.voteDown.icon} />
        </SvgIcon>
      </Button>
    </Typography>
  )
}

const style = {
  button: { 'minWidth': '0px' },
  text: {
    'margin': '0px 10px',
    'fontStyle': 'initial'
  },
  none: {
    'margin': '0px 0px',
    'fontStyle': 'initial'
  }
}

export default ScoreButton
