import Image from "next/image";
export default function McDonalds() {
	return (
		<>
			<div id="mcd">
				<p className="title">McDonalds</p>
				<p>
					It might not seem particularly special, but I would argue
					that working in this environment is ultimately where I got
					my work ethic from.
				</p>
				<div id="canterbury" className="mt-2">
					<p className="title is-4 mb-2">Canterbury</p>
					<Image
						src="/images/background/mcdonalds.jpeg"
						width="307"
						height="410"
						className="right-aligned"
						alt="Getting star of the shift"
						placeholder="blur"
						blurDataURL="/images/placeholder.jpeg"
					/>
					After moving to Canterbury for University to cut down my
					commute, I made the hard decision to transfer to a new
					location. Canterbury had two restaurants for me to choose
					from, but since only one of them had a Drive-Thru it was an
					easy choice. Sadly my new store was also a lot quieter than
					what I was used to. It soon became very clear that this
					store was the second choice in the city, reflected by staff
					and management's attitude. I found this environment a lot
					less demanding - shifts were slow and it would often feel as
					though I was the only one working. I drew the last straw
					after an incident where a manager misprinted their schedule
					and very condescendingly accused me of turning up late for
					work. This environment was toxic and unhealthy for me, so
					after just 2.5 months I decided to quit, despite not having
					had a job offer lined up yet. Thankfully, I would only spend
					a few weeks unemployed before finding myself at Waitrose.
				</div>

				<div id="thanet">
					<p className="title is-4 mt-2 mb-2">Thanet</p>I started and
					finished my McDonalds career at Westwood Cross. I started by
					being taught on the front counter to get familiar with the
					POS system. After getting trained on the rest of the front
					counter, I got trained in the Drive-Thru. My shifts were
					typically around 3 evenings after School and the weekends
					and extending my hours during off-term to effectively work
					full-time. The morale was high and even though the team was
					massive, we all got along well with each other which made
					time fly.
					<br></br>
					After a busy summer, I started University and eventually got
					trained in the kitchen, enabling a path up the ladder to
					become Crew Trainer. When I left McDonald's in Canterbury
					(see above) and started at Waitrose, I realised that the
					working pattern was a lot less flexible and being a student
					I was naturally in need of more money. This would lead to a
					return just a few months after I left.
					<br></br>During this final stint, I was mostly working
					overnight shifts as the pay was better, and having been
					trained in most areas of the store I would now be a more
					flexible team member - needed given the smaller numbers of
					staff.
				</div>
				<br style={{ clear: "both" }} />
			</div>
		</>
	);
}
