import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Blog.module.css'

export default function Blog({ post }) {
  const [featuredImage, setFeaturedImage] = useState([])

  const fetchFeaturedImage = async () => {
    try {
      const response = await axios.get(
        post?._links['wp:featuredmedia'][0]?.href
      )

      if (response.data && response.data.source_url) {
        setFeaturedImage(response.data.source_url)
      }
    } catch (error) {
      //   console.log('Error -', error)
    }
  }

  useEffect(() => {
    fetchFeaturedImage()
  }, [post])

  return (
    <div className="post">
      <img src={featuredImage} className={styles.image} />
      <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div
        className="excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </div>
  )
}
