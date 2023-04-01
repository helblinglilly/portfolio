export interface BlogMetaInfo extends MetaInfo {
	link: string;
	blogSummary: string;
	created: Date;
	thumbnail: string;
	authorName: string;
	authorLink: string;
	tags: Array<Tags>;
	tableOfContents: Array<TableOfContentEntry>;
}

export interface Tags {
	name: string;
	color: string;
	backgroundColor: string;
}

type TableOfContentEntry = {
	title: string;
	id: string;
};

export interface MetaInfo {
	title: string;
	authorName: string;
	socialSummary: string;
	cover: string | null;
}
