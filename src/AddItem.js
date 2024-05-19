import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit,length}) => {
	return(
			<form className='addForm' onSubmit={handleSubmit}>
				<label htmlFor="addItem"></label>
				<input
					autoFocus
					id = 'addItem'
					type= "text"
					placeholder='Add Item'
					value = {newItem}
					onChange = {(e) => setNewItem(e.target.value)}
				/>
				<button type='submit' aria-label = 'Add Item'>
				<FaPlus />
				</button>
            	<p className='count'>Total {length <=1 ? "Item": "Items"} {length}</p>

			</form>



		)
}

export default AddItem