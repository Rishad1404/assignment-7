import { useState } from 'react';
import './App.css'
import Banner from './Components/Header/Banner';
import Header from './Components/Header/Header';
import Sidebar from './Components/Header/Sidebar';
import Recipes from './Components/Recipes/Recipes';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes,setRecipes]=useState([]);
  const[totalTime,setTotalTime]=useState(0)
  const[totalCalories,setTotalCalories]=useState(0)

  const handleWantToCook=recipe=>{
    const newRecipes=[...recipes,recipe]
    setRecipes(newRecipes)
  }

  const handlePreparingRecipe=(time,calories)=>{
      
      setTotalTime(totalTime+time)
      setTotalCalories(totalCalories+calories);


  }

  return (
    <>

     <Header></Header>
      <Banner></Banner>
      <div className='flex justify-between'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Sidebar
          recipes={recipes}
          handlePreparingRecipe={handlePreparingRecipe}
          totalTime={totalTime}
          totalCalories={totalCalories}

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
