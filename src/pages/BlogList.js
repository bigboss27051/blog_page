import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { getBlogs } from '../store/blog'
import Card from '../components/Card'
import './BlogList.css'

const BlogList = () => {
  const list = useRecoilValueLoadable(getBlogs)
  console.log({ list })
  return (
    <div style={{ padding: '10px' }}>
      <h2>Blog  List</h2>
      {
        list.state === "loading" ? (
          <p>loading...</p>
        ) : list.contents.length === 0 ? (
          <p>No request list</p>
        ) : (
          <div className="wrapper-blog">
            {
              list.contents.map((item, index) => {
                console.log(item.description)
                return <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              })
            }
          </div>
        )
      }
    </div>
  )
}


export default BlogList