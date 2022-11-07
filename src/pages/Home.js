import React from "react";
const Home = (props) =>{
    return(



        <div className="container">
        <div className="row">
          <div className="col col-6">
  
            <ul className="list-group">
              {
                props.items.map(function(item,index)
                {
                  return(
                    <li key={index} className="list-group-item">
                     <div ><img style={{width: "30%",height: "10%",marginLeft: "-1rem"}} src={item.image} /></div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
               
                  </li>
                  )
                })
              }
             
            </ul>
          </div>
          </div>
  
  
  
      </div>

    )
}
export default Home