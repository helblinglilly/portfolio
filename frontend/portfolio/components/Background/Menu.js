export default function Menu() {
	return (
		<>
			<p className="title">History</p>
			<aside className="menu">
				{/* NHSD */}
				<ul className="menu-list">
					<p className="menu-label">2021 - present</p>
					<li>
						<a className="is-active" id="nhsd-menu" href="#nhsd">
							<p className="mr-6">NHS Digital</p>
						</a>

						<ul>
							<li>
								<a href="#pathways">Pathways</a>
							</li>
						</ul>
					</li>
				</ul>

				{/* Waitrose */}
				<ul className="menu-list">
					<p className="menu-label">2019 - 2021</p>
					<li>
						<a className="is-active" id="waitrose-menu" href="#waitrose">
							<p className="mr-6">Waitrose</p>
						</a>
						<ul>
							<li>
								<a href="#reductions">Reductions</a>
							</li>
							<li>
								<a href="#checkouts">Checkouts</a>
							</li>
						</ul>
					</li>
				</ul>

				{/* Kent */}
				<ul className="menu-list">
					<p className="menu-label">2018 - 2021</p>
					<li>
						<span>
							<a className="is-active" id="kent-menu" href="#kent">
								<p className="mr-6">University of Kent</p>
							</a>
						</span>

						<ul>
							<li>
								<a href="#transcript">Transcript</a>
							</li>
							<li>
								<a href="#kitc">KITC</a>
							</li>
						</ul>
					</li>
				</ul>

				{/* McDonalds */}
				<ul className="menu-list">
					<p className="menu-label">2017 - 2020</p>
					<li>
						<a className="is-active" id="mcd-menu" href="#mcd">
							<p className="mr-6">McDonalds</p>
						</a>
						<ul>
							<li>
								<a href="#canterbury">Canterbury</a>
							</li>
							<li>
								<a href="#thanet">Thanet</a>
							</li>
						</ul>
					</li>
				</ul>

				{/* Royal Harbour Academyc */}
				<ul className="menu-list">
					<p className="menu-label">2016-2018</p>
					<li>
						<a className="is-active" id="rha-menu" href="#rha">
							<p className="mr-6">Royal Harbour Academy</p>
						</a>
						<ul>
							<li>
								<a href="#btec">Btec</a>
							</li>
							<li>
								<a href="#ibcp">IBCP</a>
							</li>
						</ul>
					</li>
				</ul>
			</aside>
		</>
	);
}
