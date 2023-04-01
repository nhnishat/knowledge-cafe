import './App.css';
import Header from './Component/Header/Header';
import Blogs from './Component/Blogs/Blogs';
import TextBlog from './Component/TextBlog/TextBlog';
function App() {
	return (
		<div className="App">
			<Header></Header>
			<Blogs></Blogs>
			<TextBlog></TextBlog>
		</div>
	);
}

export default App;
