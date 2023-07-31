import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DishPage = () => {

    const [dish, setDish] = useState('')

    let { id } = useParams()

    useEffect(() => {
        const getDish = async() => {
            const response = await axios.get(`http://localhost:3001/api/dishes/${id}`)
            setDish(response.data.dish)
            console.log(response)
        }
        getDish()
    }, [id])

    return dish ? (
        <div className="dishPageContainer">
            <div className="dishInfoCard">
                <img src={dish.photo} alt="" />
                <div className = 'dishInfoCardTitle'><h2>{dish.name} </h2><h3>{dish.country.name}</h3></div>
                <p>{dish.ingridients}</p>
                <p>{dish.instructions}</p>
            </div>
        </div>
    ) : <h3>Loading...</h3>
}

export default DishPage