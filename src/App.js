import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext,useEffect} from 'react';
import { AppContext } from './contexts/AppContext';



function App() {
  const {getProducts} = useContext(AppContext);
  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div className="bg-blue-100 overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path ={"/"} element = {<Home/>}></Route>
        <Route path ={"/cart"} element = {<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
