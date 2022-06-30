import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id )
        .then(res=> res.json())
        .then((data)=>{
            setIsLoaded(true);
            setPosts(data);
        },(error)=>{
            setIsLoaded(true);
            setError(error);
        })
        }, [])

        if(error){
            return <div>Error:{error.message}</div>
        }else if (!isLoaded){
            return <div>Loading..</div>
        }else{
            return(
                <div className='container '>
                    <h5>Comments about postId={id}</h5>
                    {posts.map(post=>(
                       <ul>
                            <li><b>PostId:  {post.postId} </b></li>
                            <ul>
                            <li><b>Id:</b> {post.id}</li>
                            <li><b>Name: </b> {post.name}</li>
                            <li><b>Email: </b>{post.email}</li>
                            <li><b>Body: </b>{post.body}</li>
                            </ul>
                        </ul>
                   ))}
                </div>
            )
        }
}

export default PostDetails