import { useState,useContext,useEffect} from "react"
import Logincontext from '../context/Logincontext'
import {useNavigate,Link} from 'react-router-dom'
const Header=()=>{
  const{user}=useContext(Logincontext)
  
   return(
    <div className="display-flex justifycontent-spacebetween alignitem-center p-2">
      <p className="para1r">Header</p>
      <div className="display-flex">
      {
         user.seectedvalue=="Admin" &&(
          <Link to="/Dashboard" className="px-2">Dashboard</Link>
         )
      }
        {
          user.seectedvalue &&(<Link className="px-2" to="/Productlisting">Productlisting</Link>)
        }
        
      </div>
    </div>
   )
}
export default Header