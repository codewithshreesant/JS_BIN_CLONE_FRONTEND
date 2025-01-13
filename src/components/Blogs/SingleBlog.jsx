
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../../features/Blogs/BlogApi';

function SingleBlog() {
    const {id}=useParams();
    console.log("Single blog id ", id); 

    const {data, error, isLoading}=useGetSingleBlogQuery(id);
    console.log("single blog data ", data);
    let singleB;
    if(data){
        singleB=data.data[0];
    }
  return (
    <div className='w-full flex justify-center my-[2rem]'>
        <div className='w-[50vw] flex flex-col gap-[2rem]'>
            {
                data && <div>
                    <h2 className='text-[2rem] text-black font-bold'>{singleB.title}</h2>
                    {
                        singleB.description.map((element, index)=>{
                            return <div>
                                <p className='my-[2rem]'>{element}</p>
                            </div>
                        })
                    }
                    <img src={singleB.coverImg} height='950px' width='800px' alt="not found " />
                    {
                        singleB.content.map((element, index)=>{
                            return <div className='my-[1rem]'>
                                {index ==0 ? <h3 className='text-[1.2rem] text-black font-bold'>{element}</h3> : ''}
                                {index>0 ? <div>
                                    <p>{element}</p>
                                </div>:''}
                            </div>
                        })
                    }

                    {
                        singleB.title=='SSL now available to all' && <iframe width="560" height="315" src="https://www.youtube.com/embed/_RwzMCRsneU?si=MEa_0Us3SRFV6jFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }
                    {
                        singleB.id=='pro-processors' && <iframe width="560" height="315" src="https://www.youtube.com/embed/jus7S5vBJyU?si=vtzULd-QPpYRL2NJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }
                    {
                        singleB.id=='twdtw-9-tweaks-maintenance' && <iframe width="560" height="315" src="https://www.youtube.com/embed/5GFW-eEWXlc?si=gQLMSasuVkcvE45x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }
                    {
                        singleB.contentImg && <img src={singleB.contentImg} alt="not found"></img>
                    }
                </div>
            }
        </div>
    </div>
  )
}

export default SingleBlog