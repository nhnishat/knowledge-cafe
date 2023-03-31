import React from 'react';
import { useEffect, useState } from 'react';
import Question from '../Question/Question';
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
				<div>
					{questions.map((question) => (
						<Question question={question} key={question.id}></Question>
					))}
				</div>
				<div>
					<h3> Two</h3>
				</div>
			</div>
		</div>
	);
};

export default Questions;
