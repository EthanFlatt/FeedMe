import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
             <Link to = '/'><img src={earth} alt="" className='earth'/></Link>
             <Link to = 'adddish/' id='addDish' onClick={handleClick}>Add dish</Link>
             <Link to = 'dishlist/' onClick={handleClick}><h1>Feed Me</h1></Link> 
            <div className="continentNavBar">
                <Link to = '/dishlist?search=africa' id="navAfrica" onClick={handleClick}>Africa</Link>
                <Link to = '/dishlist?search=asia' id="navAsia" onClick={handleClick}>Asia</Link>
                <Link to = '/dishlist?search=europe' id="navEurope" onClick={handleClick}>Europe</Link>
                <Link to = '/dishlist?search=north%20america' id="navNAmerica" onClick={handleClick}>N. America</Link>
                <Link to = '/dishlist?search=south%20america'id="navSAmerica" onClick={handleClick}>S. America</Link>
                <Link to = '/dishlist?search=oceania' id="navOceania" onClick={handleClick}>Oceania</Link>
            </div>
            <div className="search">
                <input type="text" value={search} placeholder="Search by continent, country, or dish" onChange={handleChange} id="searchBar"/>
                <Link to = {`/dishlist?search=${search}`}><input type="button" value="Search" id="searchButton" /></Link>
            </div>
        </div>
        </>
    )
}

export default Header