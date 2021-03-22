
import { selector, atom } from 'recoil'
import * as blogServices from '../services/blog'
// atom 
export const authenAtom = atom({
  key: 'blogstState',
  default: [],
})


// get blog
export const getBlogs = selector({
  key: 'getBlogs',
  get: async ({ get }) => {
    let blogs = []
    try {
      const result = await blogServices.getBlogs()
      console.log(result.data)
      if (result.data.length > 0) {
        blogs = [...result.data]
      }
      return blogs
    } catch (e) {
      console.log(e.message)
    }
    return blogs
  },
})