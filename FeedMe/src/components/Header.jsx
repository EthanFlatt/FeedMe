import { Link } from 'react-router-dom'
import globe from '../assets/globe-seeklogo.com.ai'

const Header = () => {

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
                <input type="text" value="" placeholder="Serach by continent, country, or dish" id="searchBar"/>
                <input type="button" value="Search" id="searchButton" />
            </div>
        </div>
        </>
    )
}

export default Header