import React from 'react'
import { Card } from '../card'

import lodash from 'lodash'
import './style.css'

export const Dashboard = (props) => {
  let cards = lodash.valuesIn(props.cards)
  const { cardButtons } = props

  return (
    <div className='dashboard'>
      { cards.length !== 0 &&
            cards.map(card => <Card key={card.id} card={card} onclick={props.onclick} buttons={cardButtons.footer} menuDots={cardButtons.menuDots} />) }
    </div>
  )
}
