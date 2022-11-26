import React from "react";
import { TableOfContent } from "../../support/Types";

export default function TableOfContents({ entries }: any) {
	return (
		<aside className="menu">
			<ul className="menu-list">
				<p className="menu-label">Table of Contents</p>
				<li>
					<ul>
						{entries.map((entry: TableOfContent) => (
							<li key={entry.id}>
								<a href={`#${entry.id}`}>{entry.title}</a>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</aside>
	);
}
