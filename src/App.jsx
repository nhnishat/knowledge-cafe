import './App.css';
import Header from './Component/Header/Header';
import Blogs from './Component/Blogs/Blogs';
import TextBlog from './Component/TextBlog/TextBlog';
import { useState } from 'react';
function App() {
	const [watchTime, setWatchTime] = useState('');
	const handleWatchTime = (time) => {
		// console.log(time);
		const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
		if (previousWatchTime) {
			const sum = previousWatchTime + time;
			localStorage.setItem('watchTime', sum);
			setWatchTime(sum);
		} else {
			localStorage.setItem('watchTime', time);
			setWatchTime(time);
		}
	};
	return (
		<div className="App">
			<Header></Header>
			<Blogs handleWatchTime={handleWatchTime} watchTime={watchTime}></Blogs>
			<TextBlog></TextBlog>
		</div>
	);
}

export default App;
