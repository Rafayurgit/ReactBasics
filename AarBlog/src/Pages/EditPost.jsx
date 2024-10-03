import React,{useEffect, useState} from 'react'
import { Container, PostForm } from '../Components'
import service from '../appWrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts]= useState(null);
    const {slug}= useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }else{
                    navigate('/')
                }
            })
        }
    }, [slug, navigate])

  return post ? (
    <div>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
  
}

export default EditPost
