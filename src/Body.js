import React from "react";
import ItemsList from "./ItemsList";


const Body = ({items,setItems,handleChange,handledelete}) => {

  

  return (
    <main>
      {(items.length) ? (
      <ItemsList
      items = {items}
      handleChange = {handleChange}
      handledelete = {handledelete}
      />
) : (
  <p>List is empty</p>  )
   }   </main>
  )
}

export default Body