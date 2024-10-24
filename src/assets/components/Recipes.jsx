import { useEffect, useState } from "react";

const Recipes = ({addRecipeToQueue}) => {

    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
       fetch('./blogs.json')
       .then(res=>res.json())
       .then(data=>setRecipes(data))
    },[])
  return (
    <div className="w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {recipes.map(recipe=>(
      <div className="bg-base-100 border-2 rounded-lg">
      <figure className="px-8 pt-6">
        <img className="rounded-xl md:h-52 w-full"
          src={recipe.recipe_image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-800 font-semibold text-2xl">{recipe.recipe_name}</h2>
        <p className="text-gray-600 text-base">{recipe.short_description}</p>
        <h3 className="text-lg font-semibold text-gray-800">Ingredients: {recipe.ingredients.length}</h3>
        <ul className="ml-8">
          {recipe.ingredients.map((item) =>(
            <li className="list-disc text-gray-600">{item}</li>
          ))}
        </ul>

        <div className="flex gap-4">
           <div className="flex items-center">
           <i class="fa-regular fa-clock mr-2 text-2xl"></i>
           <p>{recipe.preparing_time} minute</p>
           </div>
           <div className="flex items-center">
           <i class="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
           <p>{recipe.calories} calories</p>
           </div>
        </div>

        <div className="card-actions">
          <button
          onClick={()=>addRecipeToQueue(recipe)}
           className="btn bg-green-400 font-medium text-gray-700 px-8 mt-6 rounded-full">Want to Cook</button>
        </div>
      </div>
    </div>
     ))}
      </div>
    </div>
  );
};

export default Recipes;
