import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
	<div>
		<div>
			<p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
			<p>{post.title}</p>
			<div>
				<Image unoptimized alt={post.author.name} height="30px" width="30px" src={post.author.photo.url} />
				<p>{post.author.name}</p>
			</div>
		</div>
		<Link href={`/post/${post.slug}`}>
			<span />
		</Link>
	</div>
);

export default FeaturedPostCard;
