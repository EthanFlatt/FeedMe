import { useState } from 'react'
import axios from 'axios'

const addDish = () => {

    const initialState = {
        name: '',
        ingredients: '',
        instructions: '',
        photo: '',
        country: ''
      }

    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
        event.preventDefault()
        setFormState({...formState, [event.target.id]: event.target.value})
      }

    const handleSubmit = async () => {
        await axios.post('http://localhost:3001/api/dishes/', formState)
        
    }

    return (
        <div className="addDishPage">
            <h3>Name</h3>
            <input className="addDishNameBar" type='text' value={formState.name} id='name' onChange={handleChange}></input>
            <h3>Ingredients</h3>
            <input className="addDishIngredientsBar" type='text' value={formState.ingredients} id='ingredients' onChange={handleChange}></input>
            <h3>Instructions</h3>
            <input className="addDishInstructionsBar" type='text' value={formState.instructions} id='instructions' onChange={handleChange}></input>
            <h3>Photo</h3>
            <input className="addDishPhotoBar" type='text' value={formState.photo} id='photo' onChange={handleChange}></input>
            <h3>Country</h3>
            <input className="addDishCountryBar" type='text' value={formState.country} id='country' onChange={handleChange}></input>
            <button className='addDishButton' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default addDish