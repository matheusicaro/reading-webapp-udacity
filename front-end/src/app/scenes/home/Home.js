import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../services/actions'

class HomeScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: ''
    }
  }

  componentDidMount () {
    this.props.dispatch(Post.initialData)
  }

  render () {
    const { posts } = this.state
    console.log('--', posts)
    return (
      <Fragment>
        { posts }
        {/* <Posts posts={posts} /> */}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScene)
