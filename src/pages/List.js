import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';

const List = () => {
	const location = useLocation ();
	const category = location.pathname.substring(1)
	const [stories, setStories] = useState([])

	useEffect(() => {
		axios.get(`https://hacker-news.firebaseio.com/v0/${category}.json?print=pretty`)
		.then((res) => {
			setStories(res.data)
			console.log(res)
		})
	}, [category])
	return (
		<div className="list-container">
			{
				stories.map((story, index) => (
					<Link className="category" to={`/${story}`} key={index}>
						<div className="list-item" key={index}>{story}</div>
					</Link>
				))
			}
		</div>
	)
}

export default List
