import React from 'react';

const TextBlog = () => {
	return (
		<div className="container mx-auto mb-20">
			<div className="border my-5 p-4">
				<h2 className="text-3xl font-bold ">Question:- Props vs state</h2>
				<p className="font-normal">
					<span className="font-bold underline">Answer: </span>
					<div>
						<h1 className="font-semibold">Props</h1>
						<p>
							1. The Data is passed from one component to another. <br /> 2. It
							is Immutable (cannot be modified) <br /> 4. Props are read-only.
						</p>
					</div>
					<div>
						<h1 className="font-semibold">State</h1>
						<p>
							1.The Data is passed within the component only. <br /> 2. It is
							Mutable ( can be modified).
							<br /> 4. State is both read and write.
						</p>
					</div>
				</p>
			</div>
			<div className="border my-5 p-4">
				<h1 className="my-2 p-2 font-bold">
					Question:- How does work useState?
				</h1>
				<p>
					<span className="font-bold">Answer</span> It is React Hook that allows
					you to add state to a functional component. It returns an array with
					two values: the current state and a function to update it
				</p>
			</div>
			<div className="border my-5 p-4">
				<h1 className="font-bold"> Question:- How does work react?</h1>
				<h2>
					<span className="font-bold">Answer</span> React components work
					similarly to JavaScript functions as they accept arbitrary inputs
					called properties or props
				</h2>
			</div>
			<div className="border my-5 p-4">
				<h1 className="font-bold"> Question:- How does work useEffect?</h1>
				<h2>
					<span className="font-bold">Answer</span> After rendering finishes,
					useEffect will check the list of dependency values against the values
					from the last render, and will call your effect function if any one of
					them has changed
				</h2>
			</div>
		</div>
	);
};

export default TextBlog;
