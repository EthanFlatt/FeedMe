import { useState } from 'react'

const Home = (props) =>  {

    const [ingredients, setIngredients] = useState([''])

    const addRow = (e) => {
        setIngredients([...ingredients, ''])
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad beatae velit a quaerat possimus praesentium libero delectus sunt fugit ab.
            </p>
            <h2>Add Ingredients</h2>
            <button id="plusButton" onClick={addRow}>+</button>
            <button id="minusButton" onClick={removeRow}>-</button>
            {
                ingredients.map((ingredient, index) => (
                    <input type="text" value={ingredients[index]} placeholder="Type ingredient here" className="ingredientInputBar" onChange={(e) => {handleChange(e, index)}} />
                ))
            }
            <input type="button" value="Search Database" id="searchButton" />
            <input type="button" value="Generate Recipe" id="searchButton" /> 
        </div>
    )
}

export default Home