import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({items,handleChange,handledelete}) => {
  return (
<ul>
        {items.map ((item) => (
          <LineItem
          item = {item}
          key = {item.id}
          handleChange = {handleChange}
         handledelete = {handledelete}
      />
        ))}
      </ul>
  )
}

export default ItemsList