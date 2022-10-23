import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
	return (
		<div>
			{author.name} <Image unoptimized alt={author.name} height="60px" width="60px" loading="lazy" src={author.photo.url} />
			<p>{author.bio}</p>
		</div>
	);
};

export default Author;
