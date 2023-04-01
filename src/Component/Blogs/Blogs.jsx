import React from 'react';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import Time from '../SpanTime/Time';
import './Blogs.css';
const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [bookmarks, setBookmark] = useState([]);
	const [readTimes, setReadTime] = useState([]);
	useEffect(() => {
		fetch('Blog.json')
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);
	const handleBookmark = (question) => {
		const newBookmark = [...bookmarks, question];
		setBookmark(newBookmark);
	};
	const handleReadTime = (question) => {
		const newReadTime = [...readTimes, question];
		setReadTime(newReadTime);
	};

	return (
		<div className="container mx-auto">
			<div className="flex flex-col md:flex-row justify-between w-2/2 gap-8">
				<div className="w-2/3">
					{blogs.map((blog) => (
						<Blog
							blog={blog}
							handleBookmark={handleBookmark}
							handleReadTime={handleReadTime}
							key={blog.id}
						></Blog>
					))}
				</div>
				<div className="w-1/2">
					{readTimes.find((readTime) => (
						<Time readTime={readTime}></Time>
					))}
					<div className="w-2/2">
						<h2 className="w-2/2 border mb-3 p-3 text-center text-2xl">
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
