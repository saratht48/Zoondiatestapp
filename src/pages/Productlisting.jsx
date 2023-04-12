
import { useState,useContext } from "react"
import Logincontext from '../context/Logincontext'
import Product from "../components/Product"

const Productlisting=()=>{
    const{List}=useContext(Logincontext)
    return(
        <div className="display-flex justifycontent-center alignitems-center bg-shade" style={{minHeight:"90vh"}}>
           <div className="w-80 margin display-flex flexwrap">
             {
                List.map((item,index)=>{
                    return(
                        <Product key={index} item={item} />
                    )
                })
             }
             
           </div>
     </div>
    )
}
export default Productlisting