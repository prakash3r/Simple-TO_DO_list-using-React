import React from "react";
import { FaTrashAlt } from "react-icons/fa";


const LineItem = ({item,handleChange,handledelete}) => {
  return (
    <li className="item" key={item.id}>
            <input 
            type="checkbox"
            onChange={()=>handleChange(item.id)} 
            checked = {item.checked}
            />
            <label
            style={(item.checked)?{textDecoration: 'line-through'} :null}
            onDoubleClick={()=>handleChange(item.id)}>{item.item}</label>
            <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={()=>handledelete(item.id)}/>
          </li>
  )
}

export default LineItem