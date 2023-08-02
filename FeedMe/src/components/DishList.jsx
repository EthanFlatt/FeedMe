import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import axios from 'axios'

const DishList = (props) => {

    const [dishes, setDishes] = useState(null)
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        const getDishes = async () => {
            const search = searchParams.get('search')
            const ingredients = searchParams.get('ingredients')
            if (search) {
                const response = await axios.get(`http://localhost:3001/api/dishes?search=${search}`)
                setDishes(response.data.dishes)  
            } else if (ingredients) {
                const response = await axios.get(`http://localhost:3001/api/dishes?ingredients=${ingredients}`)
                setDishes(response.data.dishes) 
            } else {
                const response = await axios.get('http://localhost:3001/api/dishes')
                setDishes(response.data.dishes)
            }
        }
        getDishes()
    }, [searchParams])

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