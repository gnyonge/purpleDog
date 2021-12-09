import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';
import Pagination from '../components/Pagination';

const List = () => {
	
	const location = useLocation ();
	const category = location.pathname.substring(1)
	const [stories, setStories] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [storiesPerPage] = useState(50)

	const indexOfLastStory = currentPage * storiesPerPage
	const indexOfFirstStory = indexOfLastStory - storiesPerPage
	const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	useEffect(() => {
		const getStories = async () => {
			const res = await axios.get(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`)
			setStories(res.data)
			setCurrentPage(1)
		}

		getStories()
	}, [category])

	return (
		<>
			<div className="list-box">
				<h2>{category.toUpperCase()}</h2>
				<div className="list-container">
					{
						currentStories.map((story, index) => (
							<Link className="category" to={`/${story}`} key={index}>
								<div className="list-item" key={index}>{story}</div>
							</Link>
						))
					}
				</div>
			</div>
			<Pagination storiesPerPage={storiesPerPage} totalStories={stories.length} paginate={paginate}/>
		</>
	)
}

export default List
