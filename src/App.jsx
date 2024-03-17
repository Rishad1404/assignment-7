import { useState } from 'react';
import './App.css'
import Banner from './Components/Header/Banner';
import Header from './Components/Header/Header';
import Sidebar from './Components/Header/Sidebar';
import Recipes from './Components/Recipes/Recipes';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionHeading from './Components/SectionHeading';

function App() {
  const [recipes,setRecipes]=useState([]);
  const[totalTime,setTotalTime]=useState(0)
  const[totalCalories,setTotalCalories]=useState(0)
  const[current,setCurrent]=useState([])

  const handleWantToCook=recipe=>{


    const isExist=recipes.find(item=>item.recipe_id==recipe.recipe_id)
    if(!isExist){
      const newRecipes=[...recipes,recipe]
      setRecipes(newRecipes)
    }
    else{
      toast.error('Already added this item', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }

  }

  const handleDelete=id=>{
    const newRecipes=recipes.filter(item=>item.recipe_id!=id)
    setRecipes(newRecipes)
  }

  const handlePreparingRecipe=(time,calories,cooking)=>{      
      setTotalTime(totalTime+time)
      setTotalCalories(totalCalories+calories);
      setCurrent([...current,cooking])     

  }


  return (
    <>

     <Header></Header>
      <Banner></Banner>
      <SectionHeading></SectionHeading>
      <div className='lg:flex justify-between'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Sidebar
          recipes={recipes}
          handlePreparingRecipe={handlePreparingRecipe}
          totalTime={totalTime}
          totalCalories={totalCalories}
          current={current}
          handleDelete={handleDelete}
        ></Sidebar>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}/>
    </>
  )
}

export default App
