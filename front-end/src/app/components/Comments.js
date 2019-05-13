import React from 'react'
import lodash from 'lodash'

export const Comments = ({ comments }) => {
  return (
    <div>
      { comments && <span>LISTA DE COMENTARIOS: {lodash.values(comments).length}</span>}
    </div>
  )
}
