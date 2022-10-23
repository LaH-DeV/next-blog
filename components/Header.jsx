import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const result = await getCategories();
			setCategories(result);
		}
		fetchData();
	}, []);

	return (
		<header className="container p-3">
			<nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-4">
				<Link href="/"><a className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none fs-1">BLOG</a></Link>
				<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-2">
					{categories.map((category) => (
						<li key={category.slug}>
							<Link href={`/category/${category.slug}`}>{category.name}</Link>
						</li>
					))}
				</ul>
				<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
					<input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
				</form>
			</nav>
		</header>
	);
};

export default Header;
