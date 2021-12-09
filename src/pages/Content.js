import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const Content = () => {
	const param = useParams()
	const id = param.id + '.json?print=pretty'
	const [content, setContent] = useState([])
	const [comments, setComments] = useState([])

	const fetchComment = async (kid) => {
		const commentId = kid + '.json?print=pretty'
		const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}`)
		return res.data;
	}
	

	useEffect(() => {
		const getStory = async () => {
			const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}`)
			setContent(res.data)
			if (res.data.kids) {
				getComment(res.data.kids)
			}
		}

		const getComment = async (kids) => {
			const res = await Promise.all(kids.map(kid => fetchComment(kid)));
			setComments(res)
		}
		getStory()
	}, [])


	return (
		<div className="content-container">
			<div className="content-title">
				{content.title}
				<hr />
			</div>
			<div className="content-desc">
				<div>
					No: {content.id}
				</div>
				<div>
					글쓴이: {content.by}
				</div>
			</div>
			{
				content.url ? (
					<div className="content-text">
						URL: <a href={content.url}>바로가기</a>
					</div>
				) : (
					<div></div>
				)
			}
			{
				content.text ? (
					<div dangerouslySetInnerHTML={{ __html: content.text }} className="content-text">
					</div>
				) : (
					<div></div>
				)
			}
			{
				content.kids ? (
					<div className="content-text">
						<hr />
						<div>
							댓글
						</div>
						{comments.map((comment, index) => (
							<div key={index} className="comment-container">
								작성자: {comment.deleted ? '삭제된 댓글' : comment.by}
								<hr />
								<div dangerouslySetInnerHTML={{ __html: comment.text }} className="content-text">
								</div>
							</div>
						))}
					</div>
				) : (
					<div></div>
				)
			}
			
			
		</div>
	)
}

export default Content
