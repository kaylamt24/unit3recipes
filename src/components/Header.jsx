import React from "react";
import {Link} from 'react-router-dom'

import './HeaderFooter.css'



const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav className="nav_buttons">
         <Link to=''><button id='home'>Home</button></Link> 
          <Link to='/newRecipe'><button id='add'>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;


//The link to with ' ' is often used when it is a placeholder for the home button on a nav menu. Leaving it empty helps to identify the button as a link and also indicates that there is no specific destination or action. 

//When you link to a specific path, it knows the exact route that needs to happen when the Add Recipe button is clicked. 