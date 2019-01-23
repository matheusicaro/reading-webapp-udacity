import React from 'react'

const Posts = ({ posts }) => {

    const formatPost = (posts, index) => {
        const { title, author, body, category, commentCount, timestamp, voteScore } = posts;

        return (
            <li key={index}>
               <br/> - {title}
               <br/> - {author}
               <br/> - {body}
               <br/> - {category}
               <br/> - {commentCount}
               <br/> - {timestamp}
               <br/> - {voteScore}
            </li>
        )
    }

    return (
        <ul>
            {posts &&
                posts.map((post, index) => formatPost(post, index))
            }
        </ul>
    )
}

export default Posts