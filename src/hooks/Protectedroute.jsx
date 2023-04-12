import {useContext} from "react"
import { Navigate } from "react-router-dom"
import Logincontext from '../context/Logincontext'
const Protectedroute=({children})=>{
    debugger
    const{user}=useContext(Logincontext)
    if(user.seectedvalue=="Admin"){
        return<>{children}</>
    }else{
        return  <Navigate to="/" />
    }
}
export default Protectedroute