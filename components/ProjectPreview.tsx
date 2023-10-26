import Image from "next/image";

interface IProjectPreviewProps {
	link: string;
	title: string;
	image: string;
}

export default function ProjectPreview({
	link,
	title,
	image,
}: IProjectPreviewProps) {
	console.log();

	return (
		<a href={link} target="_blank" rel="noreferrer">
			<div className="card">
				<div className="card-header">
					<div className="card-header-title">
						<p>{title}</p>
					</div>
				</div>
				<div className="card-image">
					<figure className="image is-2by1">
						<Image
							src={image}
							alt="Placeholder image"
							width={1200}
							height={600}
							placeholder="blur"
							blurDataURL="/images/placeholder.jpeg"
						/>
					</figure>
				</div>
			</div>
		</a>
	);
}