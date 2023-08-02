import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import DishPage from './DishPage'
import DishList from './DishList'
import AddDish from './AddDish'


const Main = () => {

    return (
        <Routes>
            <Route exact path = '/' element = {<Home />} />
            <Route exact path ='/adddish' element = {<AddDish />} />
            <Route exact path = '/dishlist' element = {<DishList />} />
            <Route exact path = '/dishpage/:id' element = {<DishPage />} />
        </Routes>
    )
}

export default Main