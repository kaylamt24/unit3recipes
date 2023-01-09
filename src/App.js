import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import {Route, Routes} from 'react-router-dom'



import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="newRecipe" element={<NewRecipeScreen />} />
          <Route path="recipe/:id" element={<DetailScreen />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;


// "Route index" refers to the position or index of a route within a list or array of routes. It identifies a specific route within a group of routes. 

//"Route Path" refers to the path or URL pattern that is associated with a particular route. So say a client makes a request to the server, the route path is used to match the request to right route. the recipe/:id would in turn pull like recipes/32 (or whatever the id for that specific one is)