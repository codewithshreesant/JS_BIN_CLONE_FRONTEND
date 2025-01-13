
import React from 'react'
import { useCreateBlogMutation, useGetAllBlogsQuery } from '../../features/Blogs/BlogApi'
import {Link} from 'react-router-dom'
function Blogs() {
  const {data,isLoading,error}=useGetAllBlogsQuery();
  console.log("data ", data); 
  return (
    <div className='w-full flex justify-center my-[2rem]'>
      <div className='w-[60vw] flex flex-col gap-[2rem]'>
      <h1 className='text-[2rem] text-black'>The JS Bin Blog</h1>
      {
        data && data?.data.map((element, index)=>{
          return <div className='opacity-50 hover:opacity-100 cursor-pointer'>
              <div className='flex gap-[1rem]'>
                <p>{element.createdAt}</p>
                <p className='text-blue-700 underline'>
                  <Link to={`/help/singleblog/${element.id}`}>{element.title}</Link>  
                </p>
              </div>
              <p>{element.description[0]}</p>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Blogs 