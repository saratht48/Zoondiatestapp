import { useState,useContext,useEffect} from "react"
import Logincontext from '../context/Logincontext'
import {useNavigate} from 'react-router-dom'
import Popup from '../components/Popup'

const Login=()=>{
    const[seectedvalue,setSeectedvalue]=useState('Admin')
    const[text,setText]=useState('')
    const{selectUser,user,setUser}=useContext(Logincontext)
    const [popup,setPopup]=useState(false)

    const popupClose=(flag)=>{
         if(flag==true){
            setPopup(false)
         }
    }
  
   const navigate=useNavigate()
 
    const onchange=(e)=>{
        debugger
        setSeectedvalue(e.target.value);
    }

    const fnsubmit=()=>{

        if(!seectedvalue || !text ){
             alert('please fill all details')
             return
        }
        console.log('submit')
        const obj={
            seectedvalue,
            name:text
        }
      

        //selectUser(obj)
        setUser(obj)
        console.log(user)
        if(obj.seectedvalue==="Admin"){
            navigate('/Dashboard')
        }
        if(obj.seectedvalue==="User"){
            navigate('/Productlisting')
        }
    }
    return(<>
        {
            popup &&(<Popup popupClose={popupClose}/>)
        }
        <div className="display-flex justifycontent-center alignitems-center bg-shade" style={{minHeight:"90vh"}}>
        <div className="wb border p-3 flex-25 margin">
        <input type="text" className="border p-2 w-100 mb-2" value={text} placeholder="write your name" onChange={(e)=>setText(e.target.value)}/>
        <select className="border p-2 w-100 mb-2" value={seectedvalue} onChange={onchange}>
         <option  value="Admin">Admin</option>
         <option  value="User">User</option>
        </select>
        <p onClick={(e)=>setPopup(true)}>{seectedvalue}</p>
        <button className="gb wc button-radius mb-2 w-100 p-2" onClick={fnsubmit} >Submit</button>
        </div>
     </div>
     </>
        )

}


    
  




export default Login