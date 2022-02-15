import Image from "next/image";
export default function Waitrose() {
	return (
		<>
			<div id="waitrose-content">
				<p className="title">Waitrose</p>
				<p>
					After initially leaving McDonalds I found new part-time employment at
					Waitrose. During this time however, I needed the extra money and ended
					up returning to McDonalds alongside my new role. During my second year
					at University I was juggling two jobs as well as my assignments.
					<br></br>
					When the pandemic hit, I was highly flexible to support the industry.
					This flexibility and my work ethic made me a key member of team and I
					acted as the middleman between the reductions team and management.
					Preemptively identifying risks, offering support and taking iniative
					for new approaches to existing processes.
				</p>
			</div>
			<div className="pt-3" id="reductions">
				<p className="title is-4 mb-2">Reductions</p>
				<div className="columns">
					<div className="column is-3">
						<Image
							width={256}
							height={390}
							src="/images/background/goodbye_gift_waitrose.jpeg"
						></Image>
					</div>
					<div className="column">
						<p className="inline-text">
							I mostly work on the checkouts and with the legal compliency
							team. On the checkouts I offer outstanding customer service by
							utilising the skills from my previous position. Ensuring I
							meet the customer's needs, adapting to their rush when buying
							their lunch, hearing about a family's recent stories as they
							do their weekly shop and anything in between. Every
							interaction is unique which requires me to use my adaptive,
							flexible personality with each customer.
							<br></br>
							In the legalities team we usually work in teams of 3-5,
							working under the pressure of getting all required tasks done
							by the end of the day, week or month. My leadership skills
							often shine through as I suggest different strategies to
							ensure we are working as efficiently as possible given the
							fluctuating stock levels in the different areas. I value the
							team's input, critisism and we always find a good compromise.
							My communication skills are frequently being highlighted by
							the management team whose trust is continuing to grow with
							each shift.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
