import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

import './Homepage.css'

const AdBanner = () => {
  return (
    <div className='background_gradient'
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h3>New Recipe</h3>
        <h1>Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;

//LINK - a way to navigate to different routes in the app. Renders a hyperlink that when click, take the user to a different route in the application. Works similar to the a tag I used in my capstone to move between the homepage, ope/closed work orders as well as the customer portal.

//In the given code, the image is automatically linked to the Salmon picture rendered above. The button is a standard button that is used across the application. 
