import { FETCH_POSTS, NEW_POST } from './Types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    console.log('fetching')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_POSTS,
        payload: data
      }))
}

export const createPost = (postData) => dispatch => {
  console.log("action called")
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(singlePost => dispatch({
      type: NEW_POST,
      payload: singlePost
    }))
}