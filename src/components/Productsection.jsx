import { useState,useContext,useEffect} from "react"
import Logincontext from '../context/Logincontext'
import {useNavigate} from 'react-router-dom'
import Productcard from "../components/Productcard"
import { v4 as uuidv4 } from 'uuid';
const Productsection=()=>{
    const{List,setList,popup}=useContext(Logincontext)
    const navigate=useNavigate()
    const [productname,setProductname]=useState('')
    const clicked=()=>{
        navigate('/Productlisting')
    }
    const submit=()=>{
        console.log(productname)
        const obj={
         name:productname,
         id:uuidv4(),
        }
         setList([obj,...List])
         setProductname('')
     }
  return(
    <>
    <div className="flex-50 margin border p-3 wb mb-3">
    <input type="text" value={productname} onChange={(e)=>{setProductname(e.target.value)}} placeholder="add a product" className="flex-50 d-block margin p-2 button-radius border p-r mb-3"></input>
    <button className="gb wc button-radius cursor-pointer flex-50 margin d-block p-2" onClick={submit}>Submit</button>
 </div>

 <div className="flex-50 margin border p-3 wb mb-3">
 <p onClick={clicked}>go to productlisting pAGE</p>
   {
       List?.map((item,index)=>{
           return(
               <Productcard item={item} key={index} />
           )
       })
   }
 </div>
 </>
  )
}
export default Productsection