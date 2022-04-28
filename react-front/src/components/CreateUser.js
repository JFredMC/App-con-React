import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/users'

const CompCreateUser = () => {
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const navigate = useNavigate()

    //Guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Name: name, Sex: sex, Age: age, Height: height, Weight: weight})
        navigate('/')
    }

    //Regresar a la vista principal
    const returnView = async () => {
        navigate('./')
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <h1>Crear nuevo usuario</h1>
                    <form onSubmit={store}>
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
                            <button type="submit" class="btn btn-primary"><i className="fa-solid fa-user-plus"></i> Submit</button>
                            <button onClick={ () =>returnView ()} className="btn btn-danger "><i class="fa-solid fa-right-left"></i> Regresar</button>
                        </div>
                                               
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CompCreateUser