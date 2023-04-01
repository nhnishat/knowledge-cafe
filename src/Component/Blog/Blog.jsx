import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
	// console.log(props.blog.img);
	const { name, img, user_img, publishing_date, title, tag, time } = props.blog;
	// console.log(time);
	const handleBookmark = props.handleBookmark;
	const handleWatchTime = props.handleWatchTime;

	return (
		<div className="border drop-shadow-xl rounded-lg mb-8 w-4/4 p-5">
			<img className="rounded-lg w-full" src={img} alt="" />
			<div className="flex justify-between items-center">
				<div className="mt-5 flex items-center">
					<img className="w-16 h-16 rounded-full" src={user_img} alt="" />
					<div className="ms-4">
						<h1>
							<small className="text-xl font-semibold">{name}</small>
						</h1>
						<p>
							<small className="text-md font-semibold">{publishing_date}</small>
						</p>
					</div>
				</div>
				<div className="flex ">
					<p>
						<span className="me-2">{time} min read</span>
						<button onClick={() => handleBookmark(props.blog)} className="ms-2">
							<FontAwesomeIcon icon={faBookmark} />
						</button>
					</p>
				</div>
			</div>
			<h2 className="my-4 text-4xl font-bold">{title}</h2>
			<p>
				<small className="font-semibold">{tag[0].one}</small>
				<small className="font-semibold ms-2">{tag[1].two}</small>
			</p>
			<button
				onClick={() => handleWatchTime(time)}
				className="underline text-green-600 mt-2"
			>
				Mark as read
			</button>
		</div>
	);
};

export default Blog;
