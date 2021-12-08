import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const Content = () => {
	const param = useParams()
	const id = param.id + '.json?print=pretty'
	const [content, setContent] = useState([])

	useEffect(() => {
		axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}`)
		.then((res) => {
			setContent(res.data)
			console.log(res.data)
		})
	}, [id])
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: content.text }}>
			</div>
		</div>
	)
}

export default Content
