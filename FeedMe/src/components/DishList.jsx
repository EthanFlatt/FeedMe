import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DishList = (props) => {

    const [dishes, setDishes] = useState(null)
    let navigate = useNavigate()
    const { name } = useParams() 
    
    useEffect(() => {
        const getDishes = async () => {
            console.log(props.search)
            const response = await axios.get(`http://localhost:3001/api/dishes?search=${name}`)
            console.log(response)
            setDishes(response.data.dishes)  
            // console.log(dishes)  
        }
        getDishes()
    }, [name])

    const showDish = (id) => {
        navigate(`/dishpage/${id}`)
    }

    return dishes ? (
        <div className="dishListContainer">
            { 
            dishes.map((dish, i) => (
            <div className="dishCard" key={i} onClick={() => showDish(dish._id)}>
                <img src={dish.photo} alt="" />
                <h2>{dish.name}</h2>
                <h3>{dish.country.name}</h3>
            </div>
            ))
            }  
        </div>
    ) : <div>Loading...</div>
}

export default DishList