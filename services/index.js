import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query PostsQuery {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						categories {
							name
							slug
						}
						featuredImage {
							url
						}
					}
				}
			}
		}
	`;
	const posts = [{
		node: {
			title: "React Testing",
			excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!",
			slug: "react-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}
	];
	// const result = await request(graphqlAPI, query);
	return posts;
	// return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

	const posts = [{
		node: {
			title: "React Testing",
			slug: "react-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}, {
		node: {
			title: "JavaScript Testing",
			slug: "javascript-testing",
			featuredImage: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"
				}
			},
			author: {
				bio: "Lorem bio",
				name: "Lorem Name",
				id: 5,
				photo: {
					url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
				},
			},
		}
	];
  
    // const result = await request(graphqlAPI, query);
	return posts;
    // return result.posts;
  };

export const getRecentPosts = async () => {
	const query = gql`
		query GetPostDetails() {
			posts(
                orderBy: createdAt_ASC
                last: 3
            ) {
                createdAt
                slug
                title
                excerpt
                categories {
                    name
                    slug
                }
                featuredImage {
                    url
                }
			}
		}
	`;
	const posts = [
		{ title: "React Testing", excerpt: "Learn React Testing", slug: "react-testing", featuredImage: { url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" } },
		{ title: "JavaScript Testing", excerpt: "Learn JavaScript Testing", slug: "javascript-testing", featuredImage: { url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" } },
	];
	// const result = await request(graphqlAPI, query);
	return posts;
	// return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
				createdAt
				slug
				title
				excerpt
				categories {
					name
					slug
				}
				featuredImage {
					url
				}
			}
		}
	`;
	const posts = [
		{ title: "React Testing", excerpt: "Learn React Testing", slug: "react-testing", featuredImage: { url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" } },
		{ title: "JavaScript Testing", excerpt: "Learn JavaScript Testing", slug: "javascript-testing", featuredImage: { url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" } },
	];
	// const result = await request(graphqlAPI, query, { categories, slug });
	return posts;
	// return result.posts;
};

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				author {
					bio
					name
					id
					photo {
						url
					}
				}
				createdAt
				slug
				title
				excerpt
				categories {
					name
					slug
				}
				content {
					raw
				}
				featuredImage {
					url
				}
			}
		}
	`;
	const post = {
		title: "JavaScript Testing",
		excerpt: "JavaScript Testing",
		slug: "javascript-testing",
		createdAt: new Date().toISOString(),
		content: {
			raw: {
				children: [
					{type: 'heading-one', 
					children: [
						{text: "Why bother testing your JavaScript?"}
					]},
					{type: 'paragraph',
					children: [
						{text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum molestiae dolorum tempore assumenda pariatur officia cum consequatur esse praesentium sed, possimus doloremque nam natus!"}
					]}
				]
			},
		},
		categories: [
			{ name: "React", slug: "react" },
			{ name: "Web Development", slug: "web-dev" },
			{ name: "JavaScript", slug: "javascript" },
		],
		author: {
			bio: "Lorem bio",
			name: "Lorem Name",
			id: 5,
			photo: {
				url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
			},
		},
		featuredImage: {
			url: "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
		},
	};
	// const result = await request(graphqlAPI, query, { slug });
	// console.log(result.post.content.raw.children[0].children);
	return post;
	// setTimeout(() => {

	// 	return result.post;
	// }, 15000);
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const categories = [
		{ name: "JavaScript", slug: "javascript" },
		{ name: "React", slug: "react" },
		{ name: "Python", slug: "python" },
		{ name: "TypeScript", slug: "typescript" },
		{ name: "Web Development", slug: "web-dev" },
	];
	// const result = await request(graphqlAPI, query);
	return categories;
	// return result.categories;
};

export const submitComment = async (obj) => {
	const result = await fetch("/api/comments", {
		method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
		body: JSON.stringify(obj)
	});
	return result.json();
};

export const getComments = async (slug) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(
                where: { post: { slug: $slug } }
            ) {
				name
				createdAt,
                comment
			}
		}
	`;
	const comments = [
		{ name: "Lion", createdAt: new Date().toISOString(), comment: "Lorem test comment" },
		{ name: "Elephant", createdAt: new Date().toISOString(), comment: "Lorem test comment" },
		{ name: "Rat", createdAt: new Date().toISOString(), comment: "Lorem test comment" }
	];
	// const result = await request(graphqlAPI, query, { slug });
	return comments;
	// return result.comments;
};

