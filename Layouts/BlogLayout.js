import Layout from "./Layout";
import Image from "next/image";
import TableOfContents from "../components/Blog/tableOfContents";

export default function BlogLayout({ children, ...pageProps }) {
	const meta = pageProps.metaInfo;
	return (
		<Layout home>
			<div className="column is-one-quarter">
				<TableOfContents
					entries={meta.tableOfContents}
				></TableOfContents>
			</div>

			<article className="column">
				{meta.cover ? (
					<Image
						src={meta.cover}
						layout="responsive"
						width="1280"
						height="720"
						alt="Blog Post cover image"
						priority={true}
						placeholder={"blur"}
						blurDataURL={"/../../images/icon-transparent.png"}
					/>
				) : (
					<></>
				)}

				<section className="postoverview mt-4">
					<h1 className="title is-1">{meta.title}</h1>
					<hr className="mb-1"></hr>
					<div className="post-meta">
						<i>
							<address className="author">
								<time
									pubdate="true"
									dateTime={meta.created.split("T")[0]}
								>
									{new Date(
										meta.created
									).toLocaleDateString()}
								</time>
								,
								<a
									rel="author"
									href={meta.authorLink}
									className="ml-1"
								>
									{meta.authorName}
								</a>
							</address>
						</i>
					</div>
				</section>
				{children}
			</article>

			<div className="column is-one-quarter" id="blogMargin" />
		</Layout>
	);
}
