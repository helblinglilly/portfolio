import Link from "next/link";

export default function CurrentRole() {
	return (
		<div className="currentRole pt-6">
			<p className="title">Current Role</p>
			<p style={{ display: "inline" }}>Currently I'm working on </p>
			<Link
				href="https://digital.nhs.uk/services/nhs-pathways"
				style={{ display: "inline" }}
			>
				Pathways at NHS Digital
			</Link>
			<p style={{ display: "inline" }}>
				. This is about 50/50 between maintaining the existing products and
				deploying a a new product to the cloud.
			</p>
			<p>
				The existing products are mostly built in C# using ASP.NET and I'm working
				as part of a team. After learning the ropes, the service team that has
				maintained them for the past 2 years have departed and a new team has
				joined. This has caused a sudden change in dynamic, and I find myself
				helping the new team getting started.
			</p>
			<p>
				The new product is being developed by the reporting team, and it is my
				responsibility to deploy it to the cloud. We have existing infrastructure
				in place, so I'm learning how to integrate into an existing Kubernetes
				cluster. At the same time, I'm learning to use terraform to provision the
				required AWS resources.
			</p>
		</div>
	);
}
