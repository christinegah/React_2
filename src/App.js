import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import one from './Images/one.PNG';
import tw from './Images/tw.png';
import three from './Images/three.PNG';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home  from './pages/Home';
import AddProduct from './pages/AddProduct';



function App() {
const [item,setItem] = useState ({price: "", name: "",image: "" });

const [items, setItems] = useState([
  {
    image: one,
    name: 'men',
    price: "20k",
  
  },
  {
    image: tw,
    name: 'women',
    price: "20k"
  },
  {
    image: three,
    name: 'shoes',
    price: "30k"
  }

]);

 const changeItem = (e)=>{
  setItem ({...item,[e.target.name]: e.target.value})

 }

const addItem = ()=>{
  setItems([...items,item])
  setItem({price: "", name: "",image: "" })
}



  return (
   
    <>

    <Navbar />
    <Routes>
  <Route path='/' element={<Home items={items}/>}/>
  <Route path='/AddProduct' element={<AddProduct addItem={addItem} changeItem={changeItem}/>}/>
    </Routes>

  
    </>
  );
}

export default App;
