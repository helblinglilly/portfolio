export default function NHSDigital() {
	return (
		<>
			<div id="nhsd-content">
				<p className="title" id="nhsd">
					NHS Digital
				</p>
				<p>
					I joined NHS Digital in September of 2021 on a 2-year{" "}
					<a
						href="https://digital.nhs.uk/careers/early-careers/graduate-scheme"
						target="_blank"
						rel="noreferrer"
					>
						graduate scheme
					</a>
					. We first completed an 8-week Bootcamp with{" "}
					<a
						href="https://northcoders.com/"
						target="_blank"
						rel="noreferrer"
					>
						Northcoders
					</a>{" "}
					covering the basics of Javascript. The graduate scheme gives
					me the opportunity to move across different areas of the
					business to enrich my understanding of how large
					corporations operate while improving different skill sets by
					moving around different teams.
				</p>
			</div>

			<div className="pt-3" id="pathways">
				<p className="title is-4 mb-2">Pathways</p>
				<p>
					NHS Pathways is the clinical decision tool that powers
					systems such as 111/999,{" "}
					<a
						href="https://digital.nhs.uk/services/urgent-care-self-service-tool"
						target="_blank"
						rel="noreferrer"
					>
						EdStreaming
					</a>{" "}
					as well as{" "}
					<a
						href="https://111.nhs.uk/"
						target="_blank"
						rel="noreferrer"
					>
						111 online
					</a>
					. As part of the core development team, we build and
					maintain the systems used by clinical authors to build the
					clinical decision trees, the systems used by call handlers
					across the UK as well as the collection and storing of said
					data. Working in this team is an amazing opportunity - we
					went from being 100% developers to gaining a QA team,
					gradually growing in size before also getting a Product as
					well as a Delivery manager. This slow introduction, and
					seeing the shifting workflows really helps me learn the
					importance of each change implemented. On the technical
					side, our stack is mostly centred around C#, and I asked to
					use NodeJS for a temporary tool that was used as part of a
					proof of concept having experienced JS devs guide me to
					apply my JS knowledge in a professional workflow. We also
					started moving our products to AWS with our second product
					being in reaching distance for its go-live. Between the
					aforementioned proof of concept that we are working on
					getting through the Alpha and Beta stages and the AWS
					transitions, I quickly became familiar with CI/CD tools like
					Jenkins, Docker, Terraform and to some extent Kubernetes.
					The most exciting work to me, personally, is that proof of
					concept. It started as a throwaway 2-week introduction
					project when I first joined the team, but it was so
					successful that I was able to expand on it. We got blocked
					from progressing with it as another team was lacking the
					resources at the time, but perfectly timed, as I got back
					from working in Primary Care, that team now has the capacity
					needed and we can progress with it. So I get to see through
					a project's lifespan from idea to (hopefully) go-live.
				</p>
			</div>
		</>
	);
}
