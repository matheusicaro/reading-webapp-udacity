import React, { useState } from 'react'
import GeneraId from 'uuid'
import { set as setValuesInObject } from 'lodash'

import NewPost from './NewPost'
import { POST_TYPE_ACTION } from '../../../../services/actions/post'

const NewPostFormContainer = (props) => {
  const [formOpen, setFormOpen] = useState(false)

  const menuHandleClick = event => {
    setFormOpen(!formOpen)
  }

  const sendForm = formData => {
    const id = GeneraId(formData)
    let key = 'id'
    setValuesInObject(formData, key, id)

    const timestamp = new Date().getTime()
    key = 'timestamp'
    formData = setValuesInObject(formData, key, timestamp)

    setFormOpen(false)
    props.onclick(POST_TYPE_ACTION.CREATE_NEW_POST, formData)
  }

  return (
    <NewPost
      menuHandleClick={menuHandleClick}
      formOpen={formOpen}
      setFormOpen={setFormOpen}
      sendForm={sendForm}
    />
  )
}

export default NewPostFormContainer
