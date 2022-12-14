import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

import { FeaturedPosts } from "../sections";

import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
	return (
		<main className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<FeaturedPosts />
			<h1 className="mt-2 mb-4">Next.js test blog</h1>
			<div className="row">
				<div className="col-8 d-flex flex-column gap-3">
					{posts.map((post, index) => (
						<PostCard post={post.node} key={index} />
					))}
				</div>
				<div className="col-4 d-flex justify-content-end">
					<div className="d-flex flex-column gap-4 border rounded p-4 height-content">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</main>
	);
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: { posts },
	};
}
