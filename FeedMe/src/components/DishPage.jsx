import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DishPage = () => {

    const initialState = {
        name: '',
        ingredients: '',
        instructions: '',
        photo: '',
        country: ''
      }


    const [formState, setFormState] = useState(initialState)
    const [modal, setModal] = useState(false)

    let { id } = useParams()

    useEffect(() => {
        const getDish = async () => {
            const response = await axios.get(`http://localhost:3001/api/dishes/${id}`)
            setFormState(response.data.dish)
            console.log(response)
        }
        getDish()
    }, [id])

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleChange = (event) => {
        event.preventDefault()
        setFormState({...formState, [event.target.id]: event.target.value})
      }

    const handleSubmit = async () => {
        await axios.put(`http://localhost:3001/api/dishes/${id}`)
    }

    const deleteDish = async () => {
        if (confirm('Are you sure you want to delete this dish?')) {
            await axios.delete(`http://localhost:3001/api/dishes/${id}`)
            history.back()
        } else {
            return
        }
    }

    return formState.name ? (
        <>
        <div className="dishPageContainer">
            <div className="dishInfoCard">
                <img src={formState.photo} alt="" />
                <div className="dishCardInfo">
                    <div className = 'dishInfoCardTitle'><h2>{formState.name} </h2><h3>{formState.country.name}</h3></div>
                    {
                        formState.ingredients.map((ingredient) => (
                            <p className="dishInfoCardIngredients">{ingredient}</p>
                        ))
                
                    }
                    <p>{formState.instructions}</p>
                </div>
                <div className="dishInfoCardButtons">
                    <button className='editDishButton' onClick={toggleModal}>Edit</button>
                    <button className='deleteDishButton' onClick={deleteDish}>Delete</button>
                </div>
            </div>
        </div>
        {
        modal ? (
            <div className="modal">
                <div className="modal-content">
                    <input className="addDishNameBar" type='text' value={formState.name} id='name' onChange={handleChange} ></input>
                    <input className="addDishIngredientsBar" type='text' value={formState.ingredients} id='ingredients' onChange={handleChange}></input>
                    <input className="addDishInstructionsBar" type='text' value={formState.instructions} id='instructions' onChange={handleChange}></input>
                    <input className="addDishPhotoBar" type='text' value={formState.photo} id='photo' onChange={handleChange}></input>
                    <input className="addDishCountryBar" type='text' value={formState.country.name} id='country' onChange={handleChange}></input>
                    <div className="modalButtons">
                    <button className='submitButton' onClick={handleSubmit && toggleModal}>Submit</button>
                    <button className='cancelButton' onClick={toggleModal}>Cancel</button>
                    </div>
                </div>
            </div>
            ) : null
        }   
        </>
    ) : <h3>Loading...</h3>
}

export default DishPage