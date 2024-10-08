import React,{useState, useEffect} from 'react'
import service from '../appWrite/config'

import { PostCard, Container } from '../Components'


function AllPost() {
    const [posts, setPosts]= useEffect([]);
    useEffect(()=>{},[])

    service.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div>
                        {posts.map((post)=>(
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost
