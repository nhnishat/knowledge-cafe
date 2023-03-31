import React from 'react';

const Question = (props) => {
	const { name, img, user_img, publishing_date, title, tag, read_time } =
		props.question;
	console.log(publishing_date);
	return (
		<div className="p-20 border mb-8">
			<img src={img} alt="" />

			<div className="flex justify-between items-center">
				<div className="mt-5 flex items-center">
					<img className="w-16 h-16 rounded-full" src={user_img} alt="" />
					<div className="ms-4">
						<h1>
							<small>{name}</small>
						</h1>
						<p>
							<small>{publishing_date}</small>
						</p>
					</div>
				</div>
				<div>
					<p>{read_time}</p>
				</div>
			</div>
			<h2 className="my-4">{title}</h2>
			<p>
				<small>
					{tag[0].one} {tag[1].two}
				</small>
			</p>
			<button className="underline text-green-600">Mark as read</button>
		</div>
	);
};

export default Question;
