import React, { useEffect, useState } from 'react'
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card';

const PostCards = () => {
  const dispatch = useDispatch();
  const{blogs, isLoading, isError, error} = useSelector(state => state.blogs);

  // dispatch action toget blogs
useEffect(() => {
  dispatch(fetchBlogs())
}, [dispatch])

//pagination
const [currentPage, setCurrentPage] = useState(1);
const blogsperpage = 5;

const startIndex = ((currentPage -1) * blogsperpage);
const endIndex = currentPage * blogsperpage;
const paginatedBlogs = blogs.slice(startIndex, endIndex)
const handlePageChange = (newpage) => {
  setCurrentPage(newpage)
}


  console.log(blogs)
  return (
    <div className="w-full lg:w-2/3">
          {
            !isError && !isLoading && paginatedBlogs?.length > 0 ? (<div>
              {
                paginatedBlogs.map((blog, index) => (<Card blog = {blog} key = {index}/>))
              }
              {/* pagination */}
              <div className='space-x-2'>
                <button className='px-2 bg-red-500 text-white rounded cursor-pointer' 
                onClick={() => handlePageChange(currentPage -1)}
                  disabled = {currentPage === 1}>
                  Previous
                  </button>
                <span>{currentPage}</span>
                <button className='px-2 bg-green-400 text-white rounded cursor-pointer'
                onClick={() => handlePageChange(currentPage + 1)}>
                  {/* disabled = {currentPage === endPage} */}
                  Next
                  </button>
              </div>
            </div>) : <div>No blogs found</div>
          }
        </div>
  )
}

export default PostCards