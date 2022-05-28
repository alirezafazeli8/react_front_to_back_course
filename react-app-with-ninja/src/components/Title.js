const Title = ({ title, subtitle }) => {
	return (
		<div>
			<h1 className="title">{title}</h1>
			<br />
			<h2 className="subtitle">{subtitle}</h2>
		</div>
	);
};

export default Title;
