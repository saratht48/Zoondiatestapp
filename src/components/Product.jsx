



const Product=({item})=>{
      return(
        <div className="flex-25 px-2 mb-2">
        <div className="wb p-2 borderradius display-flex justifycontent-center alignitems-center" style={{height:"150px"}}>
           <p>{item.name}</p>
        </div>
      </div>
    
      )

}
export default Product