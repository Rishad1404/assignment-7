import PropTypes from 'prop-types';
// import Append from '../../AppendRecipe/Append';
const Sidebar = ({recipes}) => {
    return (
        <div>
            <div className="border border-black p-10">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-center mb-5">Want to cook: {recipes.length}</h1>
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
                                recipes.map((recipe,idx)=> <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                    <td><button className="btn border-none rounded-full bg-[#0BE58A] text-black px-4">Preparing..</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center mb-5">Currently cooking:</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th><p>Name</p></th>
                                <th><p>Time</p></th>
                                <th><p>Calories</p></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 flex gap-32">
                    <p>Total Time= 00 minutes</p>
                    <p>Total Calories= 00 calories</p>
                </div>

            </div>
        </div>
    );
};

Sidebar.propTypes={
    recipes:PropTypes.object,
}

export default Sidebar;