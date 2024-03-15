import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Recipe Calories</h1>
            <div className="flex gap-16">
                <h3>Home</h3>
                <h3>Recipes</h3>
                <h3>About</h3>
                <h3>Search</h3>
            </div>
            <div className="flex items-center gap-4">
                

                <div className="relative w-64">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CiSearch />
                    </span>
                    <input type="text" className="bg-slate-100  w-full pl-10 pr-4 py-2 border rounded-full" placeholder="Search" />
                </div>
                <div className="relative">
                    
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white">
                        <FaRegUserCircle/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;