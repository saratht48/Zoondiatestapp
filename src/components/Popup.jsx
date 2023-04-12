
import { useState,useRef,useEffect,useContext} from "react"
import Logincontext from '../context/Logincontext'
const Popup=({popupClose})=>{
    const {editdata,Editlist,setPopup}=useContext(Logincontext)
    const[text,setText]=useState('')
    console.log('editdata')
  console.log(editdata)
    useEffect(()=>{
        
      if(editdata.isedit==true){
        setText(editdata.edit.name)
      }
    },[editdata])
    const popupelement=useRef()
    const fncheck=(e)=>{
        debugger
        if(e.target===popupelement.current){
            popupClose(true)
        }
    }
    const submited=()=>{
        const obj={
            name:text,
            id:editdata.edit.id
        }
        Editlist(obj)
        setPopup(false)

    }
    return(
       <div className="popup" ref={popupelement} onClick={fncheck}>
           <div className="wb flex-50 margin p-2 borderradius" style={{minHeight:"200px"}}>


               <input type="text" placeholder="edit the name" onChange={(e)=>setText(e.target.value)} value={text} className="border p-r button-radius p-2 mb-3 d-block margin flex-50"></input>
               <button className="gb wc p-2 button-radius d-block flex-50 margin" onClick={submited}>Submit</button>


           </div>
       </div>
    )
}
export default Popup