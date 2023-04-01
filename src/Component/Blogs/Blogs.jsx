import React from 'react';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

import './Blogs.css';
const Blogs = ({ handleWatchTime, watchTime }) => {
	const [blogs, setBlogs] = useState([]);
	const [bookmarks, setBookmark] = useState([]);
	const [time, setTime] = useState(watchTime);
	// console.log(time);

	useEffect(() => {
		fetch('Blog.json')
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	useEffect(() => {
		const watchTimeFromStorage = localStorage.getItem('watchTime');
		console.log(watchTimeFromStorage);
		setTime(watchTimeFromStorage);
	}, [watchTime]);

	const handleBookmark = (question) => {
		const newBookmark = [...bookmarks, question];
		setBookmark(newBookmark);
	};

	return (
		<div className="container mx-auto">
			<div className="flex flex-col md:flex-row justify-between w-2/2 gap-8">
				<div className="w-2/3">
					{blogs.map((blog) => (
						<Blog
							blog={blog}
							handleBookmark={handleBookmark}
							handleWatchTime={handleWatchTime}
							key={blog.id}
						></Blog>
					))}
				</div>
				<div className="w-1/2 sticky top-0">
					<div className="w-2/2 border mb-3 p-3 text-center text-2xl">
						<h2 className="text-gray-800 text-3xl font-bold">
							Spent time on read :{time} min
						</h2>
					</div>
					<div className="w-2/2">
						<h2 className="w-2/2 border mb-3 p-3 text-center text-2xl font-bold">
							BookMark: {bookmarks.length}
						</h2>
						{bookmarks.map((bookmark) => (
							<Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
