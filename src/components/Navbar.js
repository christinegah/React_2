import React from "react";
import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg bg-light">
             <div className="container-fluid">
          
   
                       <div className="collapse navbar-collapse" id="navbarNav">
                          < Link className="nav-link active" aria-current="page" to="./">Home </ Link>
                              < Link className="nav-link" to="/Addnew">Add New</ Link>
                        </div>
                 </div>
</nav>
</div>
    )
}
export default Navbar