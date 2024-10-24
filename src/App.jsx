import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner'
import Header from './assets/components/Header'
import OurRecipes from './assets/components/OurRecipes'
import Recipes from './assets/components/Recipes'
import Sidebar from './assets/components/Sidebar'


function App() {
  const[recipeQueue, setRecipeQueue] = useState([])
  const[preparedRecipe, setPreparedRecipe] = useState([])

  const addRecipeToQueue = recipe => {
  const isExist = recipeQueue.find(
    previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
  )
  if(!isExist){
    setRecipeQueue([...recipeQueue,recipe])
  }
  else{
    alert('Recipe already exist')
  }
  }
 const handleRemove = id => {
  // find which recipe to delete
  const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
  //delete from want to cook table
  const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)

  setPreparedRecipe(updatedQueue)
  setPreparedRecipe([...preparedRecipe,deletedRecipe])
 }
  return (
    <div className='container mx-auto px-4'>
     {/* header section */}
     <Header></Header>
     {/* banner section */}
     <Banner></Banner>
     {/* recipe section */}
     <OurRecipes></OurRecipes>
     {/* Recipe Card Section */}
     <section className='flex flex-col md:flex-row gap-6'>
      {/* cards */}
      <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
      {/* sidebar */}
      <Sidebar handleRemove={handleRemove} recipeQueue={recipeQueue}></Sidebar>
     </section>
    </div>
  )
}

export default App
