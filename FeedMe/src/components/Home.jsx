import DishList from './DishList'

const Home = (props) =>  {

    const search = props.search
    return (
        <div className="homePage">
            <h2>Welcome to FeedMe</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad beatae velit a quaerat possimus praesentium libero delectus sunt fugit ab.
            </p>
            <h2>Add Ingredients</h2>
            <button id="plusButton">+</button>
            <button id="minusButton">-</button>
            <input type="text" value="" placeholder="Type ingredient here" className="ingredientInputBar"/>
            <input type="button" value="Search Database" id="searchButton" />
            <input type="button" value="Generate Recipe" id="searchButton" /> 
        </div>
    )
}

export default Home