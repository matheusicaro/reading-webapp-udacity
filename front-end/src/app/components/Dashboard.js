import React from 'react'
import { Post } from './'
import Grid from '@material-ui/core/Grid'

import lodash from 'lodash'

const Dashboard = (props) => {
  let posts = lodash.valuesIn(props.posts)
  return (
    <Grid container spacing={24} justify='center' style={{ margin: '5% 0%' }}>
      <Grid item xs={8} >
        { posts &&
            posts.map(post => <Post post={post} onclick={props.onclick} />) }

      </Grid>
    </Grid>
  )
}

export default Dashboard
