import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) =>{
	return(
			<li key={item.id} className="item">

						<input type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)}/>
						<label onClick={()=>handleCheck(item.id)} style={{textDecoration:item.checked?"line-through":null}}>{item.item}</label>


					
						<FaTrashAlt 
						role="button" 
						tabIndex="0"
						aria-label={`Delete ${item.item}`} 
						onClick={()=>handleDelete(item.id)}/>


					</li>
		)
}

export default LineItem