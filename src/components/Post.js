import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete post</button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.post_id, 10);
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch({type: 'DELETE_POST', id: id})}
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Post)
