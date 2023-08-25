import React, { useState } from 'react'
import axios from 'axios';

const FetchUser = () => {

    let [users,setUsers] = useState([]);

    const getDetails = ()=>{
        axios.get('https://dummyjson.com/users')
        .then(res =>{
            setUsers(res.data.users) 
            console.log(res.data.users)
        } )
        .catch(err=>console.log(err));
    }



  return (
    <div>
        <div className='headings'>
            <b>Blue Whales</b>
            <button className='btn' onClick={getDetails}>Get User List</button>
        </div>
        <table>
            <thead className='header'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
            </thead>
            <tbody>
                {
                    users && users.map((user,index)=>(
                        <tr key={index} >
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td><img src={user.image}/></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
    
  )
}

export default FetchUser