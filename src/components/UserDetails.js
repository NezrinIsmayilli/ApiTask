import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id )
        .then(res=> res.json())
        .then((data)=>{
            setIsLoaded(true);
            setUsers(data);
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
                <div className='container'>
                    <h5>Posts about userId={id} </h5>
        
                    {users.map(user=>(
                    <ul>
                        <li><b>UserId:  {user.userId} </b></li>
                        <ul>
                        <li><b>Id:</b> {user.id}</li>
                        <li><b>Title: </b> {user.title}</li>
                        <li><b>Body: </b>{user.body}</li>
                        </ul> 
                    </ul>
                    ))}
                </div>
            )
        }
}

export default UserDetails