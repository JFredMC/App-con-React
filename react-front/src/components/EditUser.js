import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/users/'

const CompEditUser = () => {
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    //Actualizar usuario
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {Name: name, 
            Sex: sex, 
            Age: age, 
            Height: height, 
            Weight: weight})
        navigate('/')
    }

    useEffect( () => {
        getUserById()
    },[])

    //Regresar a la vista principal
    const returnView = async () => {
        navigate('./')
    }

    const getUserById = async () => {
        const response = await axios.get(URI+id)
        setName(response.data[0].Name)
        setSex(response.data[0].Sex)
        setAge(response.data[0].Age)
        setHeight(response.data[0].Height)
        setWeight(response.data[0].Weight)
        
    }

    return(
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <h1>Actualizar usuario</h1>
                    <form onSubmit={update}>
                        <div className="col mb-3">                           
                            <input type="text" className="form-control"  placeholder="Name" 
                            value={name}
                            onChange={ (e)=> setName(e.target.value)}
                            />
                        </div>
                        <div class="col mb-3">
                            <input type="text" className="form-control" placeholder="Sex" 
                            value={sex}
                            onChange={ (e)=> setSex(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <input type="text" className="form-control" placeholder="Age" 
                            value={age}
                            onChange={ (e)=> setAge(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <input type="text" className="form-control" placeholder="Height" 
                            value={height}
                            onChange={ (e)=> setHeight(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <input type="text" className="form-control" placeholder="Weight" 
                            value={weight}
                            onChange={ (e)=> setWeight(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary ml-1"><i className="fa-solid fa-user-plus"></i> Update</button>
                            <button onClick={ () =>returnView ()} className="btn btn-danger "><i class="fa-solid fa-right-left"></i> Regresar</button>
                        </div>
                                               
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CompEditUser