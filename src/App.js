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
  <Route path='/' element={<Home/>}/>
  <Route path='/AddNew' element={<AddProduct/>}/>
    </Routes>

    <div className="container">
      <div className="row">
        <div className="col col-6">

          <ul className="list-group">
            {
              items.map(function(item,index)
              {
                return(
                  <li key={index} className="list-group-item">
                   <div ><img style={{width: "10%",height: "10%",marginLeft: "-1rem"}} src={item.image} /></div>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
             
                </li>
                )
              })
            }
           
          </ul>
        </div>
        </div>




     <div className="col col-6" >
     <div className="mb-3">
  <label className="form-label">Name</label>
  <input value={item.name} onChange={changeItem} name='name' type="text" className="form-control"  placeholder="name" />
</div>

<div className="mb-3">
  <label className="form-label">price</label>
  <input value={item.price}  onChange={changeItem} name='price' type="number" className="form-control"  placeholder="345556 rwf" />
</div>

<div className="mb-3">
  <input value={item.image}  onChange={changeItem} name='image' type="url" className="form-control"  placeholder="Upload your image" />
</div>

<div className='mb4'>
  <button onClick={addItem} className='btn btn-warning'>SAVE</button>

</div>

      </div>

    </div>
    </>
  );
}

export default App;
