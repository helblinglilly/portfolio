import Link from "next/link";
import Image from "next/image";

export default function SocialLink({
	name,
	image,
	alt,
	url,
	className,
}: {
	name: string;
	image?: string;
	alt: string;
	url: string;
	className?: string;
}) {
	return (
		<div style={{ width: "100%" }} className={className}>
			<Link
				href={url}
				target="_blank"
				rel="noreferrer"
				style={{ width: "100%", height: "100%" }}
				className="buttonLink"
			>
				<button
					style={{
						display: "inline-flex",
						height: "50px",
						justifyContent: "center",
						width: "100%",
					}}
				>
					{image && (
						<Image
							src={image}
							alt={alt}
							width={30}
							height={30}
							style={{ marginRight: "5px", alignSelf: "center" }}
						/>
					)}
					<p style={{ alignSelf: "center", fontSize: "12pt" }}>
						{name}
					</p>
				</button>
			</Link>
		</div>
	);
}
