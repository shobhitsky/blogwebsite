import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/blogs/blogsSlice'
import BlogReducer from './features/singleBlog/BlogSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: BlogReducer
  },
})