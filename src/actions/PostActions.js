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