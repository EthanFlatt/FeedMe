import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import DishPage from './DishPage'
import DishList from './DishList'


const Main = () => {

    return (
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/dishlist/:id' element = {<DishList />} />
            <Route path = 'dishpage/:id' element = {<DishPage />} />
        </Routes>
    )
}

export default Main