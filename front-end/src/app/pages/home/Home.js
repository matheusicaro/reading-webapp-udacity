import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Posts } from '../../components'

export class Home extends Component {

  render() {
    const { posts } = this.props.posts;

    return (
      <Fragment>
          <Posts posts={posts} />
      </Fragment>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts,
  }
}

export default connect(mapStateToProps)(Home)