import react, { useEffect, useState } from 'react'

const COHORT_NAME = '2302-ACC-ET-WEB-PT-D'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const Post = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`)
    
        const result = await response.json();
        console.log(result);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPosts()
  }, [])
  return(
    <div>
      {
        posts && posts.map(post => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <p>{post.price}</p>
            </div>
          )
        })}
    </div>
  )
    }
  
    export default Post