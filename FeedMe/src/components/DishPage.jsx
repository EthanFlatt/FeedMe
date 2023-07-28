const DishPage = () => {

    return (
        <div className="dishPageContainer">
            <div className="dishInfoCard">
                <img src="https://picsum.photos/800/500" alt="" />
                <div className = 'dishInfoCardTitle'><h2>Paella </h2><h3>Spain</h3></div>
                <p>Ingredients: ['chicken', 'chorizo', 'shrimp', 'rice', 'onions', 'pepper', 'chicken stock', 'saffron', 'red pepper flakes', 'lemon zest', 'oregano', 'paprika', 'salt', 'pepper']</p>
                <p>Instuctions: 'Allow the chicken to marinate in olive oil, paprika, oregano, salt, and pepper in the fridge for a few hours (or overnight). Heat olive oil in a paella pan and stir in garlic, red pepper flakes, and rice. Add saffron, bay leaf, parsley, chicken stock, and lemon zest. Simmer rice for 20 minutes. Cook chicken, onion, bell pepper, chorizo, and shrimp until done. Then add to the rice mixture.'</p>
            </div>
        </div>
    )
}

export default DishPage