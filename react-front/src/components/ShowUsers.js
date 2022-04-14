import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

const URI = 'http://localhost:8000/users/'

const CompShowUsers = () => {

    const [users, setUsers] = useState([])
    useEffect( () => {
        getUsers()
    }, [])

    //Mostrar todos los usuarios
    const getUsers = async () => {
        const response = await axios.get(URI)
        setUsers(response.data)
    }

    //Eliminar un usuario
    const deleteUser = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getUsers()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <Link to="/createuser" className='btn btn-primary mt-5 mb-2' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-user-plus"></i></Link>
                    <table className="table mt-5">
                        <thead className="table-primary">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Sex</th>
                                <th>Age</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map( (user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Sex}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.Height}</td>
                                    <td>{user.Weight}</td>
                                    <td>
                                        <Link to={`edituser/${user.id}`} className="btn btn-info "><i className="fa-solid fa-user-pen"></i></Link>
                                        <button onClick={ () =>deleteUser (user.id)} className="btn btn-danger mr-2"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )) }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
     );
}
 
export default CompShowUsers;