import React from 'react';
import { useEffect, useState } from 'react';
const Questions = () => {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		fetch('book.json')
			.then((res) => res.json())
			.then((data) => setQuestions(data));
	}, []);
	return (
		<div className="container mx-auto">
			<div className="flex flex-col md:flex-row justify-between gap-8">
				<div>{questions.map((question) => console.log(question))}</div>
				<div>
					<h3> Two</h3>
				</div>
			</div>
		</div>
	);
};

export default Questions;
