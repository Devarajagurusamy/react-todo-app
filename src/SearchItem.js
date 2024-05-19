import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchItem = ({search,setSearch}) =>{

	return(

			<form className='searchItem' onSubmit={(e)=>e.preventDefault()}>

				<label htmlFor="search"></label>

					<input

						id='search'
						type='text'
						role='searchbox'
						placeholder='Search Item'
						value={search}
						onChange={(e)=>setSearch(e.target.value)}
					/>
					<button  type='submit'><FaSearch/></button>
					


			</form>

		)
}

export default SearchItem