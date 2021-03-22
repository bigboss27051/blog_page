import React, { useState } from 'react'
import { createBlog } from '../services/blog'
import './BlogForm.css'
const BlogForm = () => {
  const init = {
    title: '',
    description: '',
    imageUrl: ''
  }
  const [values, setValues] = useState(init)

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await createBlog(values.title, values.description, values.imageUrl)
      alert('create blog completed.')
    } catch (error) {
      alert(error)
    }

  }

  return (
    <div className="wrapper-blog-form">
      <form onSubmit={handleSubmit}>
        <h3>title </h3>
        <input type="text" value={values.title} name="title" onChange={handleChange} required />
        <h3>description </h3>
        <textarea type="text" value={values.description} name="description" onChange={handleChange} required />
        <h3>Image Url </h3>
        <input type="text" value={values.imageUrl} name="imageUrl" onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>

  );
}

export default BlogForm