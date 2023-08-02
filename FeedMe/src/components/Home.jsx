import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) =>  {

    const [ingredients, setIngredients] = useState([''])

    const addRow = (e) => {
        if (ingredients.length < 10) {
            setIngredients([...ingredients, ''])
        } else {
            alert("That's too many ingredients.")
        }
    }

    const removeRow = (e) => {
        if (ingredients.length > 1) {
             const copyArr = [...ingredients]
            copyArr.pop()
            setIngredients(copyArr)
        }  
    }

    const handleChange = (e, index) => {
        const copyArr = [...ingredients]
        copyArr[index] = e.target.value
        setIngredients(copyArr)
    }

    const search = props.search
    return (
        <div className="homePage">
            <h2>Welcome to FeedMe</h2>
            <p id='summary'>Feeling hungry? Search our database of international cuisine and find something delicious! Alternatively, go and look in your fridge, type the ingredients you see in the input bar below and hit search! You will be given a list of dishes that you can cook with the ingredients you have in your fridge.
            </p>
            <h2>Add Ingredients</h2>
            <button id="plusButton" onClick={addRow}>+</button>
            <button id="minusButton" onClick={removeRow}>-</button>
            {
                ingredients.map((ingredient, index) => (
                    <input type="text" value={ingredients[index]} placeholder="Type ingredient here" className="ingredientInputBar" onChange={(e) => {handleChange(e, index)}} />
                ))
            }
            <Link to ={`/dishlist?ingredients=${ingredients}`}><input type="button" value="Search Database" id="searchButton" /> </Link>
        </div>
    )
}

export default Home