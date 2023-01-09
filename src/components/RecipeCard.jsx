import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

import "./RecipeCard.css";
import './homeComponents/Homepage.css'

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className="recipe_card">
      <div >
          <div className="recipe_image">
            <img src={recipe.image_url} alt='' />
            {/* <img src='https://www.allrecipes.com/thmb/9xC4E3ciEFc6xjLiA6rdEDLbInk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23439-PerfectPumpkinPie_002-4x3-1-44d015659c5c4a0888238d8f22de2a5e.jpg' alt='pumpkin pie' /> */}
          </div>
          <h2>{recipe.recipe_name}</h2>
          {/* <h2>PUMPKIN PIE</h2> */}
        </div>
        <button className="blue-btn" onClick={handleClick}>See More</button>
      </div>
   
  );
};

export default RecipeCard;

//When we click the button, it is going to navigate to the id # of the recipe that was clicked on. blue-btn is a global button throughout the app so it is in the app.css