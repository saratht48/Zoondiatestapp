
import { useState,useContext } from "react"
import Logincontext from '../context/Logincontext'

const Productcard=({item})=>{
  const {fnedit,popup,setPopup,Delete}=useContext(Logincontext)
  const Edit=(item)=>{
    setPopup(true)
    fnedit(item)
  }

       return (

         <div className="wb border p-2 p-r mb-2 borderradius">
            <p className="para1r bold mb-3 mt-2">{item.name}</p>
            <button className="p-a p-2 gb wc button-radius " style={{bottom:"5px",right:'5px'}} onClick={(e)=>Edit(item)}>edit</button>
            <button className="p-a p-2 gb wc button-radius " style={{bottom:"5px",right:'60px'}} onClick={(e)=>Delete(item)}>Delete</button>
         </div>
       )
}
export default Productcard