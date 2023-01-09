import React from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RecipeContainer from './RecipeContainer'

import './Homepage.css'

const HomeScreen = () => {  

  const [recipe, setRecipe] = useState([])

  const baseURL = 'https://recipes.devmountain.com'

const getRecipe = () => {
axios.get(`${baseURL}/recipes`)
.then((res) => {
  setRecipe(res.data)
  console.log(res.data)
})
.catch((err) => {
  console.log(err)
})
}


useEffect(() => {
  getRecipe()
}, [])

//we are passing the recipe from the parent component down to the child, RecipeContainer below. We do not need to pass it to AdBanner because it does not need to use the axios request of recipe. The information displayed (the salmon picture) is hard coded. We do not want to change it.

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <RecipeContainer recipe={recipe}/>
    </div>
  )
}

export default HomeScreen

// passing recipe as a prop from the Homepage to the RecipeContainer. Passing tbe entire object as a single value to the prop