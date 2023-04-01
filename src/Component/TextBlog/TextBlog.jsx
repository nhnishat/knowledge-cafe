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
		</div>
	);
};

export default TextBlog;
