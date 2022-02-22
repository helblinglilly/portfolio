export default function TableOfContents({entries}) {
	return (
        <aside className="menu">
            <ul className="menu-list">
                <p className="menu-label">Table of Contents</p>

                { entries.map((entry) => item(entry.title, entry.id)) }
            </ul>

        </aside>
	);
}

function item(title, id){
    return (
        <li key={id}>
            <ul>
                <li>
                    <a href={"#" + id}>{title}</a>
                </li>
            </ul>
        </li>
    )
}