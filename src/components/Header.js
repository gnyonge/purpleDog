import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ categories }) => {
	const [opener, setOpener] = useState(false)
	const [header, setHeader] = useState('category')
	const toggleOpener = (opener) => {
		setOpener(!opener)
		if (!opener) {
			setHeader('category noshow')
		} else {
			setHeader('category')
		}
	}
	
	return (
		<div className="header-container">
			{
				categories.map((category, index) => (
					<Link className={header} to={`/${category}`} key={index}><p key={index}>{category}</p></Link>
				))
			}
			<p onClick={() => toggleOpener(opener)} className="header-opened">{opener ? '메뉴열기' : '메뉴닫기'}</p>
		</div>
	)
}

export default Header
