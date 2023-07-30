import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'

import earth from '../assets/earth.png'

const Header = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // const showDish = (e) => {
    //     navigate(e)
    // }

    return (
        <>
        <div className="appBar">
            <h1>Feed Me</h1> 
            <div className="continentNavBar">
                <Link to = '/dishlist/africa' id="navAfrica">Africa</Link>
                <Link to = '/dishlist/asia' id="navAsia">Asia</Link>
                <Link to = '/dishlist/europe' id="navEurope">Europe</Link>
                <Link to = '/dishlist/north%20america' id="navNAmerica">N. America</Link>
                <Link to = '/dishlist/south%20america'id="navSAmerica">S. America</Link>
                <Link to = '/dishlsit/oceania' id="navOceania">Oceania</Link>
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