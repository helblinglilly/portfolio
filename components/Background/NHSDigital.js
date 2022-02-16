export default function NHSDigital() {
	return (
		<>
			<div id="nhsd-content">
				<p className="title" id="nhsd">
					NHS Digital
				</p>
				<p>
					I joined NHS Digital in September of 2021 on a 2 year{" "}
					<a
						href="https://digital.nhs.uk/careers/early-careers/graduate-scheme"
						target="_blank"
						rel="noreferrer"
					>
						graduate scheme
					</a>
					. We first completed an 8 week bootcamp with{" "}
					<a href="https://northcoders.com/" target="_blank" rel="noreferrer">
						Northcoders
					</a>{" "}
					covering the basics of Javascript. During the graduate scheme I will
					be on four different areas throughout the business with opportunities
					in product development, data services, IT operations, platforms and
					infrastructure and cyber security.
				</p>
			</div>

			<div className="pt-3" id="pathways">
				<p className="title is-4 mb-2">Pathways</p>
				<p>
					During my first placement I was in a product development role. My role
					included the maintenance of existing products in sprints and following
					Jira tickets. Besides maintaining existing products, I was deploying a
					new product to the cloud. A fellow graduate of the reporting team
					developed a dashboard to which I set up the surrounding
					infrastructure. In this process I completed different training
					materials for AWS, learnt to integrate into a Kubernetes cluster, and
					writing IaC using Terraform.
				</p>
			</div>
		</>
	);
}
