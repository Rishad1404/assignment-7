import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Recipe Heaven</h1>
            <div className="navbar-center hidden lg:flex items-center">
                  <ul className="menu menu-horizontal font-manrope gap-11">
                    <li><a className="font-bold">Home</a></li>
                    <li><a className="font-bold">Recipes</a></li>
                    <li><a className="font-bold" >About</a></li>
                    <li><a className="font-bold">Search</a></li>
                  </ul>
                </div>

                <div className="relative w-28 mr-[-10px] lg:w-72 lg:mr-[-270px]">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CiSearch />
                    </span>
                    <input type="text" className="bg-slate-100  w-full pl-10 pr-4 py-2 border rounded-full" placeholder="Search" />
                </div>
            
            <div className="flex items-center gap-4">              

                <div className="navbar-end">
                    <div className="dropdown">
                        <div className="relative">
                            <button tabIndex="0" role="button" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white mr-3">
                                <FaRegUserCircle />
                            </button>
                        </div>
                        <ul tabIndex="0" className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 lg:hidden right-5">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;