import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div className="flex gap-20">
                {
                    recipes.map(recipe=><Recipe 
                        key={recipe.recipe_id}
                        recipe={recipe}
                    ></Recipe>)
                }
        </div>
    );
};

export default Recipes;