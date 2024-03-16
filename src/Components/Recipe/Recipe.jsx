import { MdOutlineWatchLater } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {recipe_name,short_description,recipe_image,ingredients,preparing_time,calories}=recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image}  className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='my-4'>{short_description}</p>
                    <hr />
                        <h3 className='font-bold mt-8'>Ingredients: {ingredients.length}</h3>
                        <ul className="mb-8" style={{ listStyleType: 'disc' }}>
                        {ingredients.slice(0, 4).map((ingredient, index) => (
                            <li className='ml-10' key={index}>{ingredient}</li>
                        ))}
                        </ul>

                    <hr />
                    <div className="flex items-center gap-10 my-5">
                        <div className="flex items-center gap-3">
                            <MdOutlineWatchLater></MdOutlineWatchLater>
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaFire></FaFire>
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions my-3">
                    <button className="btn border-none rounded-full bg-[#0BE58A] text-black px-5">Explore Now</button>
                    </div>
                </div>
            </div>   
        </div>
        
    );
};
Recipe.propTypes={
    recipe:PropTypes.object.isRequired,
}

export default Recipe;