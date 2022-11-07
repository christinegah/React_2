import React from "react";
import Navbar  from "../components/Navbar";
const AddProduct = (props) =>{
    return(

        <div className="col col-6" >
        <div className="mb-3">
     <label className="form-label">Name</label>
     <input onChange={props.changeItem} name='name' type="text" className="form-control"  placeholder="name" />
   </div>
   
   <div className="mb-3">
     <label className="form-label">price</label>
     <input  onChange={props.changeItem} name='price' type="number" className="form-control"  placeholder="345556 rwf" />
   </div>
   
   <div className="mb-3">
     <input onChange={props.changeItem} name='image' type="url" className="form-control"  placeholder="Upload your image" />
   </div>
   
   <div className='mb4'>
     <button onClick={props.addItem} className='btn btn-warning'>SAVE</button>
   
   </div>
   
         </div>

    );
}
export default AddProduct