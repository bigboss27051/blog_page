import axios from 'axios'

export const getBlogs = async () => {
  return await axios.get('https://us-central1-erx-frontend-test.cloudfunctions.net/blog')
}

export const createBlog = async (title, description, imageUrl) => {
  return await axios.post('https://us-central1-erx-frontend-test.cloudfunctions.net/blog', {
    title,
    description,
    imageUrl
  })
}