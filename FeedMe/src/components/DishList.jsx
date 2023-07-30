import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const DishList = () => {
    const [dishes, setDishes] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        const getDishes = async () => {
        const response = await axios.get('http://localhost:3001/api/dishes/')
        console.log(response)
        setDishes(response.data.dishes)  
        console.log(dishes)  
        }
        getDishes()
    }, [])

    const showDish = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className="dishListContainer">
            { 
            dishes.map((dish, key) => (
            <div className="dishCard" key={key} onClick={() => showDish(key)}>
                <img src={dish.photo} alt="" />
                <h2>{dish.name}</h2>
                <h3>{dish.country}</h3>
            </div>
            ))
            }  
        </div>
    ) 
}

export default DishList