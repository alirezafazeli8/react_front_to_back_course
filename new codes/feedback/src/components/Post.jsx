import React from 'react';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
	// const params = useParams();

	// const status = 404;

	// if (status != 202) {
	// 	return <Navigate to={'/'} />;
	// }

	// const navigate = useNavigate();

	// const onClick = () => {
	// 	navigate('/');
	// };

	return (
		<div>
			post
			<Routes>
				<Route path="/show" element={<h1>Hello World guys</h1>} />
			</Routes>
		</div>
	);
}

export default Post;
