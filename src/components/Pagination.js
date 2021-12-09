import React from 'react'

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className="pagination-container">
			<ul className="pagination">
				{
					pageNumbers.map(number => (
						<li key={number}>
							<a onClick={() => paginate(number)} href="#">{number}</a>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Pagination
