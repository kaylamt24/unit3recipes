import React, { useState } from "react";

import { Formik } from "formik";

import axios from "axios";

import './NewRecipeScreen.css'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const baseURL = "https://recipes.devmountain.com";

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios.post(`${baseURL}/recipes`, values)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
  })
  };
  // axios.post(`${baseURL}/recipes`, values)
  // .then((res) => {
  //   console.log(res.data)
  // })
  // .catch(err) => {
  //   console.log(err)
  // }


  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className='input_container'>
              <input
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className='radio_container'>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className='input_container'>
              <input
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <h3>Ingredients</h3>
            <div className='input_container'>
              <div className='ingredient_inputs'>
                <input
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >
              Add Another
            </button>
            <textarea
              placeholder="What are your instructions?"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button type="submit" className="blue-btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

//save button creates a post request which the button is clicked. 

// 7 input for name, image url, prep time, cook time, ingredients, name, ingreient quantity, serves
// 3 input for radio button
// 1 text area

//name and image url
//radio buttons label, h or p tag

//this is where you do npm i formik ******** and then import {Formik} from 'formik'

//const initialValues = {

//copy and paste into the return the type, recipeName, etc.

// const onSubmit = values => {
//   console.log(values)
// }

// return (
//   the section with the radio buttons and what not
// )
// }

// ingred is an empty array. rest are empty strings.

//form {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 30vw;
//   height: fit-content;
//   gap: 15px;
//   margin-top: 30px;
// }

//FORMIK - library for handling forms. Simple way to manage form state and validation and helps reduce boilerplate code. Has reusable form components and a higher order component that provides form state and validation management. 

//FIELD - used to create form fields. 
//onSubmit prop is used to handle for submissions