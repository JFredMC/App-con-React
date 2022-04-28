import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

const URI = 'http://localhost:8000/users/'

const CompShowUsers = () => {

    const [ users, setUsers] = useState([])
    const [ search, setSearch ] = useState("")
    
    //Mostrar todos los usuarios
    const getUsers = async () => {
        const response = await fetch(URI)
        const data = await response.json()
        setUsers(data)
    }

    //Eliminar un usuario
    const deleteUser = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getUsers()
    }

    //Funcion busqueda
    const searcher = (e) =>{
        setSearch(e.target.value)
        
    }

    //Metodo de filtrado
    let results = []
    if(!search){
        results = users
    }else{
        results = users.filter((date) =>
        date.Name.toLowerCase().includes(search.toLowerCase())
        
        )
    }

    useEffect( () => {
        getUsers()
    }, [])



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                
                <div className="col-4">
                    <h2 align="center">React Search</h2>
                    <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control "/>
                
                <Link to="/createuser" className='btn btn-primary mt-4 ' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-user-plus"></i></Link>
                </div>
                    <table className="table mt-1">
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
                            { results.map( (user) => (
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