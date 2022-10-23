import Link from "next/link";

const Footer = () => {
	const DUMMY_ARRAY = [1, 2, 3];
	return (
		<footer className="container my-4">
			<div className="row">
				{DUMMY_ARRAY.map((_, index, arr) => (
					<div key={index} className={`col-${12 / arr.length}`}>
						<h4>Footer - Lorem, ipsum dolor.</h4>
						<ul className="list-unstyled">
							<li><Link href="#">Lorem, ipsum dolor.</Link></li>
							<li><Link href="#">Lorem, ipsum dolor.</Link></li>
							<li><Link href="#">Lorem, ipsum dolor.</Link></li>
							<li><Link href="#">Lorem, ipsum dolor.</Link></li>
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
