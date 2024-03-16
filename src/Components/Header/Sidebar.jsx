import PropTypes from 'prop-types';
import Append from '../AppendRecipe/Append';
const Sidebar = ({recipes,handlePreparingRecipe,totalTime,totalCalories,current}) => {
    return (
        <div>
            <div className="border border-black p-10 w-[650px]">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-center mb-5">Want to cook : {recipes.length}</h1>
                    <hr />
                    <table className=" table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody  className='bg-base-200'>
                            {
                                recipes.map((recipe, idx) => <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                    <td><button onClick={() => {
                                        handlePreparingRecipe(recipe.preparing_time, recipe.calories,recipe);
                                    }} className="btn border-none rounded-full bg-[#0BE58A] text-black px-4">Preparing..</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <Append current={current}>
                    
                </Append>

                <div className="mt-10 flex gap-32">
                    <p>Total Time= {totalTime} minutes</p>
                    <p>Total Calories= {totalCalories} calories</p>
                </div>

            </div>
        </div>
    );
};

Sidebar.propTypes={
    recipes:PropTypes.array,
    handlePreparingRecipe:PropTypes.func,
    totalTime:PropTypes.number,
    totalCalories:PropTypes.number,
    current:PropTypes.object
}

export default Sidebar;