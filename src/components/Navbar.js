import React from "react";
import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg bg-light">
             <div className="container-fluid">
          
   
                       <div className="collapse navbar-collapse" id="navbarNav">
                          < Link style={{marginLeft: "15rem"}}  className="btn btn-warning" aria-current="page" to="./">Home </ Link>
                              < Link style={{marginLeft: "15rem"}}  className="btn btn-warning" to="/AddProduct">AddProduct</ Link>
                        </div>
                 </div>
</nav>
</div>
    )
}
export default Navbar