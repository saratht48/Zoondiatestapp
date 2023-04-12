import { useState,useContext } from "react"
import Logincontext from '../context/Logincontext'
import {useNavigate} from 'react-router-dom'
import Productsection from '../components/Productsection'
import Popup from '../components/Popup'
import Dashboardsection from '../components/Dashboardsection'
const Dashboard=()=>{
    const navigate = useNavigate()
    const{popup,popupClose}=useContext(Logincontext)
    return(
        <>{
            popup && (
                <Popup popupClose={popupClose} />
            )
        }
        <div className="display-flex justifycontent-center alignitems-center bg-shade" style={{minHeight:"90vh",flexDirection:'column'}}>
          <>
        <Dashboardsection/>
         <Productsection/>
          </>
        </div>
        </>
    )
}
export default Dashboard