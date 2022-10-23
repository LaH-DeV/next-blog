import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			let result;
			if (slug) {
				result = await getSimilarPosts(categories, slug);
			} else {
				result = await getRecentPosts();
			}
			setRelatedPosts(result);
		}
		fetchData();
	}, [slug]);

	return (
		<div>
			<h3 className="mb-3">{slug ? "Related Posts" : "Recent Posts"}</h3>
			<div className="d-flex flex-column gap-4">
				{relatedPosts.map((post) => (
					<div key={post.title} className="d-flex gap-3 border rounded-2 p-3">
						<div>
							<img alt={post.title} height="60px" width="60px" loading="lazy" src={post.featuredImage.url} />
						</div>
						<div className="d-flex flex-column justify-content-between">
							<Link href={`/post/${post.slug}`}>{post.title}</Link>
							<p className="m-0">{moment(post.createAt).format("MMM DD, YYYY")}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostWidget;
