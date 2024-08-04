import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './components/Blog'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  const fetchPostItems = () => {
    axios
      .get(
        'https://allcellselestg.wpengine.com/wp-json/wp/v2/posts?per_page=100'
      )
      .then((res) => setPosts(res.data))
  }

  useEffect(() => {
    fetchPostItems()
  }, [])

  return (
    <div className="App">
      <div className="grid">
        {posts.map((post) => (
          <Blog post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default App
