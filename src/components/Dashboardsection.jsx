import {useContext } from "react"
import Logincontext from '../context/Logincontext'
const Dashboardsection=()=>{
    const{user}=useContext(Logincontext)
    return(
        <div className="flex-50 margin border p-3 wb mb-3">
          <p className="bold para1r font-25 mb-3 text-center" >Welcome to dashboard</p>
          <p className="para1r bold mb-2">Name : {user.name}</p>
          <p className="para1r bold mb-3">Role:{user.seectedvalue}</p>
          </div>
    )
}
export default Dashboardsection