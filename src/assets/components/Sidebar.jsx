const Sidebar = ({recipeQueue, handleRemove}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-lg bg-base-100 text-gray-600 p-2">
      {/* want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 pb-2 mx-auto font-semibold text-2xl text-gray-800 text-center">Want to Cook: {recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {recipeQueue.map((recipe,index)=>(
       <tr key={index} className="hover">
       <th>{index + 1}</th>
       <td>{recipe.recipe_name}</td>
       <td>{recipe.preparing_time}</td>
       <td>{recipe.calories}</td>
       <td> <button
          onClick={()=>handleRemove(recipe.recipe_id)}
           className="btn text-xs font-semibold bg-green-400  text-gray-700  mt-6 rounded-full my-2">Preparing</button></td>
     </tr>
     ))}
    </tbody>
  </table>
</div>
      {/* currently cooking table */}
    </div>
  );
};

export default Sidebar;