import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
	return (
		<div className="card flex-row gap-4">
			<img src={post.featuredImage.url} alt={post.title} loading="lazy" className="img-fluid listing-img" />
			<div className="d-flex flex-column p-2">
				<h2 className="mt-2"><Link href={`/post/${post.slug}`}>{post.title}</Link></h2>
				<p className="p-2">{post.excerpt}</p>
			</div>
		</div>
	);
};

export default PostCard;
