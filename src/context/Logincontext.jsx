import { createContext,useState } from "react";
const Logincontext=createContext();
export const Logincontextprovider=({children})=>{

    const[user,setUser]=useState({})


    const[popup,setPopup]=useState(false)
    const popupClose=(flag)=>{
      if(flag==true){
         setPopup(false)
      }
  }

    const [editdata,setEditdata]=useState({
        isedit:false,
        edit:{}
    })
    const fnedit=(item)=>{
      setEditdata({
        isedit:true,
        edit:item
      })
    }
    const Editlist=(obj)=>{
      setList(List.map((item,index)=>{
        if(item.id==obj.id){
          return obj
        }else{
          return item
        }
      }))
    }
  const Delete=(obj)=>{
    setList(List.filter((item,index)=>{
       if(item.id!=obj.id){
        return true
       }
    }))
  }
  


    const[List,setList]=useState([
           {
            id:0,
            name:'himalaya'
           },
           {
            id:1,
            name:'dabur'
           },
           {
            id:2,
            name:'amway'
           },
           {
            id:3,
            name:'honda'
           },
           {
            id:4,
            name:'maruthi'
           },
           {
            id:5,
            name:'himalaya'
           },
           {
            id:6,
            name:'cbr'
           },
           {
            id:7,
            name:'himalaya'
           },
           {
            id:8,
            name:'soap'
           },  {
            id:9,
            name:'chair'
           }
    ])

  const selectUser=(user)=>{
    setUser(user)
  }

  return(
    <Logincontext.Provider value={{user,selectUser,List,setList,fnedit,setUser,popup,setPopup,popupClose,fnedit,editdata,Editlist,Delete}}>
    {children}
    </Logincontext.Provider>
)
  }

export default Logincontext