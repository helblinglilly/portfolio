export default function LatestPost() {
	return (
		<div className="latestPost">
			<p className="title">Latest Blog Post</p>

			<div className="card mt-2">
				<header className="card-header">
					<p className="card-header-title title is-5" id="latestBlogTitle">
						{postTitle}
					</p>
					<div className="has-text-right pt-2 pr-3">
						<i>
							<time dateTime="21/06/2022">21/06/2022</time>
						</i>
					</div>
				</header>
				<div className="card-content" id="mcdonaldsContent">
					<p>{postPreview}</p>
				</div>
			</div>
		</div>
	);
}

const postTitle = `Portfolio`;

const postPreview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nisl sed nulla mattis lobortis. Vivamus eu condimentum sem. Quisque pretium orci diam, ut euismod turpis iaculis id. Phasellus fermentum. `;
