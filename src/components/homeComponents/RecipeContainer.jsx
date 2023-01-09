import RecipeCard from "../RecipeCard";
import { useState } from "react";
import './Homepage.css'
import { BiSearchAlt2 } from "react-icons/bi";


//prop is passed through here

const RecipeContainer = ({recipe}) => {

    const [search, setSearch] = useState('')


    const recipeDisplay = recipe.filter((recipe, index) => {
        
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        
        return <RecipeCard recipe={recipe}/>
    })

    //MAP - you are applying a new function to each element in the array and creting a new array with the results. Changes it to a new value or representation.  

    // FILTER - creating a new array that contains only elements from the original array that meet specific criteria. Iterates over each element in the array and for each element, it will call the callback function and pass in the current element as an argument. 

    // FILTER THEN MAP (WHAT IS HAPPENING) -  Here we are filtering the array of recipes and then the search variable is a string. Filter method is used to select only specific elements in the recipe whose recipe name inclused the search terms. We are moving everything to lowercase to make sure that if they use capitals in the search but there aren't any in the recipe name, it still shows the results. The resulting array of the information that has been filtered through is then being transformed into the RecipeCard component. 
    console.log(recipeDisplay)

    return (
        <section className='recipe_box'>
          {/* <h2>Search a recipe!</h2> */}
          <span className="search_bar">
            <BiSearchAlt2 size="2em" color="#DA7635" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a Recipe"
            />
          </span>
          <div className="recipe_container">
            {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
          </div>
        </section>
      );
    };

// (e) element.target.value (I used element instead of e to define it more for future reference since they both work). It gets the current value of an element that is triggered in an event. When you add value, it is the property of the element that gets the current value. This is used to get user input or to set the value of an element. 

// {} is used to embed JS expressions into JSX. You are "escaping" JSX to use JS code and is treated as a JS expression. 


export default RecipeContainer;