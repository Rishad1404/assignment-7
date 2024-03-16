import './App.css'
import Banner from './Components/Header/Banner';
import Header from './Components/Header/Header';
import Sidebar from './Components/Header/Sidebar';
import Recipes from './Components/Recipes/Recipes';

function App() {


  return (
    <>

     <Header></Header>
      <Banner></Banner>
      <div className='flex justify-between'>
        <Recipes></Recipes>
        <Sidebar></Sidebar>

      </div>
    </>
  )
}

export default App
