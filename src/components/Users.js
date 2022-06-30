import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 class Users extends Component {

   constructor(props){
     super(props);
     this.state = {
       data: [],
       postsPage: 5,
       currentPage: 1
     }
   }

   getPosts = async () => {
     const url = "https://jsonplaceholder.typicode.com/users/";
     const obj = {
       method: "GET",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
       }
     }

     await fetch(`${url}`, obj)
     .then((response) => response.json())
     .then((responseJson) => {
       console.warn(responseJson);
       this.setState({ data: responseJson })
     })
     .catch((error) => {
       console.warn(error);
     })
   }

   showData = () => {
      const { postsPage, currentPage, data } = this.state;
      const indexOfLastPage = currentPage * postsPage;
      const indexOfFirstPage = indexOfLastPage - postsPage;
      const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage)

     return currentPosts.map((item, index) => {
       return(
         <tbody key={index}>
          <tr>
            <td> 
              <Link to={`user/${item.id}`}>
                <p key={item.id}>{item.id}</p>
              </Link>
            </td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.phone}</td>
          </tr>
         </tbody>
       )
     })
   }

   showPagination = () => {
     const { postsPage, data } = this.state;
     const pageNumbers = [];
     const totalPosts = data.length;

     for(let i = 1; i<=Math.ceil(totalPosts/postsPage); i++){
       pageNumbers.push(i)
     }

     const pagination = (pageNumbers) => {
       this.setState({currentPage: pageNumbers})
     }

     return(
       <nav>
        <ul className="pagination">
        {pageNumbers.map(number => (
         <li key={number} className={this.state.currentPage === number ? 'page-item active' : 'page-item' }>
          <button onClick={()=> pagination(number)} className="page-link"> {number} </button>
         </li>
       ))}
        </ul>
       </nav>
     )
   }

   componentDidMount(){
     this.getPosts()
   }

   render() {
     return (
       <div className="container mt-5">
        <div className="text d-flex justify-content-between">
          <h5>Users Page</h5>
          <h5>Click UserId!</h5>
        </div>
        <table className="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>

          {this.showData()}
        </table>
        
        <div className=' d-flex justify-content-center mt-3'>
          {this.showPagination()}
        </div>
       </div>
     );
   }
 }

export default Users;