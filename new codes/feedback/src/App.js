import react from 'react';

function App() {
	const title = 'Blog Post';
	const body = 'this is my body in the blog post';
	const comment = [
		{
			id: 1,
			text: 'this is comment from here',
		},
		{
			id: 2,
			text: 'this is comment from here',
		},
		{
			id: 3,
			text: 'this is comment from here',
		},
		{
			id: 4,
			text: 'this is comment from here',
		},
	];
	const isLoading = false;

	// is loading true
	if (isLoading) return <h1>Loading ...</h1>;

	const showComment = true;
	const commentCodeBlock = (
		<div>
			<h2>comment ({comment.length})</h2>
			<ul>
				{comment.map((value, i) => {
					return <li key={i}>{value.text}</li>;
				})}
			</ul>
		</div>
	);

	return (
		<div>
			<h1>{title}</h1>
			<h3>{body}</h3>
			{/* show comment */}
			{showComment && commentCodeBlock}
		</div>
	);
}

export default App;
