import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ categories }) => {
	
	return (
		<div className="header-container">
			{
				categories.map((category, index) => (
					<Link className="category" to={`/${category}`} key={index}><p key={index}>{category}</p></Link>
				))
			}
		</div>
	)
}

export default Header
