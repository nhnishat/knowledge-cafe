import React from 'react';
import logo from '../../assets/logo.jpg';
const Header = () => {
	return (
		<div className="container mx-auto flex justify-between items-center p-5 bg-emerald-100 mt-2 mb-20 rounded-md">
			<a className="text-5xl" href="/">
				Knowledge Cafe
			</a>
			<img className="w-16 h-16 rounded-full" src={logo} alt="" />
		</div>
	);
};

export default Header;
