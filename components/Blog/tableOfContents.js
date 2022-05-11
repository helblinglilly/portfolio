export default function TableOfContents({ entries }) {
	return (
		<aside className="menu">
			<ul className="menu-list">
				<p className="menu-label">Table of Contents</p>
				<li>
					<ul>{entries.map((entry) => item(entry.title, entry.id))}</ul>
				</li>
			</ul>
		</aside>
	);
}

function item(title, id) {
	return (
		<li key={id}>
			<a href={"#" + id}>{title}</a>
		</li>
	);
}
