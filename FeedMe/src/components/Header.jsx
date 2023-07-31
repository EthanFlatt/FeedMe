import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DishList from './DishList'
import Home from './Home'

import earth from '../assets/earth.png'

const Header = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        setSearch('')
    }

    return (
        <>
        <div className="appBar">
            <h1>Feed Me</h1> 
            <div className="continentNavBar">
                <Link to = '/dishlist/africa' id="navAfrica" onClick={handleClick}>Africa</Link>
                <Link to = '/dishlist/asia' id="navAsia" onClick={handleClick}>Asia</Link>
                <Link to = '/dishlist/europe' id="navEurope" onClick={handleClick}>Europe</Link>
                <Link to = '/dishlist/north%20america' id="navNAmerica" onClick={handleClick}>N. America</Link>
                <Link to = '/dishlist/south%20america'id="navSAmerica" onClick={handleClick}>S. America</Link>
                <Link to = '/dishlsit/oceania' id="navOceania" onClick={handleClick}>Oceania</Link>
            </div>
            <div className="search">
                <input type="text" value={search} placeholder="Search by continent, country, or dish" onChange={handleChange} id="searchBar"/>
                <Link to = {`/dishlist/${search}`}><input type="button" value="Search" id="searchButton" /></Link>
            </div>
        </div>
        </>
    )
}

export default Header