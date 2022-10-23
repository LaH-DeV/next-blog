import React from "react";
import moment from "moment";

import getContentFragment from "../services/postContentMapper";

const PostDetail = ({ post }) => {
	return (
		<div>
			<h1>PostDetail</h1>
			<div>
				<img src={post.featuredImage.url} width="150px" height="150px" alt={post.title} loading="eager" />
				<div>
					<p>{moment(post.createAt).format("MMM DD, YYYY")}</p>
				</div>
				<div>{post.title}</div>
				<div>
					{post.content.raw.children.map((typeObj, index) => {
						const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
						return getContentFragment(index, children, typeObj, typeObj.type);
					})}
				</div>
			</div>
		</div>
	);
};

export default PostDetail;
