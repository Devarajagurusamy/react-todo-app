import React from 'react'


const Footer=()=>{

const year = new Date();

	return(
		<footer> copyrights &copy; {year.getFullYear()}</footer>
	)
}

export default Footer;