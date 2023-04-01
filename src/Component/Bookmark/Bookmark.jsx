import React from 'react';
const Bookmark = ({ bookmark }) => {
	return (
		<div className="border drop-shadow-xl rounded-lg mb-8 w-4/4">
			<div>
				<div>
					<h2 className="my-4 text-3xl font-bold">{bookmark.title}</h2>
				</div>
			</div>
		</div>
	);
};

export default Bookmark;
