import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const result = await getCategories();
			setCategories(result);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h3 className="mb-3">Categories</h3>
			<div className="d-flex flex-column">
				{categories.map((category) => (
					<Link key={category.slug} href={`/category/${category.slug}`}>{category.name}</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
