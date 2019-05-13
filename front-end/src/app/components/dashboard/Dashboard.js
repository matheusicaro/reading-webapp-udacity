import React, { Fragment } from 'react'
import { Card } from '../card'
import { Filter } from '../'
import lodash from 'lodash'

export const Dashboard = (props) => {
  const cards = lodash.valuesIn(props.cards)
  const { cardButtons, categories } = props

  return (
    <Fragment>
      <Filter onChecked={props.onclick} {...categories} />

      { cards.length !== 0 &&
            cards.map(card => <Card key={card.id} card={card} onclick={props.onclick} buttons={cardButtons.footer} menuDots={cardButtons.menuDots} />) }
    </Fragment>
  )
}
