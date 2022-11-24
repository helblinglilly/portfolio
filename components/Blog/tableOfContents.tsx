import React from "react";
import { TableOfContent } from "./Types";

export default function TableOfContents({ entries }: any) {
	return (
		<aside className="menu">
			<ul className="menu-list">
				<p className="menu-label">Table of Contents</p>
				<li>
					<ul>
						{entries.map((entry: TableOfContent) =>
							item(entry.title, entry.id)
						)}
					</ul>
				</li>
			</ul>
		</aside>
	);
}

function item(title: string, id: string) {
	return (
		<li key={id}>
			<a href={"#" + id}>{title}</a>
		</li>
	);
}
