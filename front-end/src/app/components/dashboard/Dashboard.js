import React, { Fragment } from 'react'
import { Card } from '../card'
import { Filter } from '../filter'
import lodash from 'lodash'

export const Dashboard = (props) => {
  const cards = lodash.valuesIn(props.cards)
  const { cardButtons, categories } = props
  return (
    <Fragment>

      <Filter byPosts={''} onclick={props.onClicksFilter} byCategories={categories} />

      { cards.length !== 0 &&
            cards.map(card => <Card
              key={card.id}
              card={card}
              onclick={props.onClicksPost}
              buttons={cardButtons.footer}
              menuDots={cardButtons.menuDots} />) }
    </Fragment>
  )
}
