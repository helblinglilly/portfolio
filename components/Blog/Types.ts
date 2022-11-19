export type BlogMetaInfo = {
	link: string;
	title: string;
	summary: string;
	created: any;
	thumbnail: string;
	cover: string | null;
	authorName: string;
	authorLink: string;
	tags: Array<Tags>;
	tableOfContents: Array<TableOfContentEntry>;
};

type Tags = {
	name: string;
	color: string;
};

type TableOfContentEntry = {
	title: string;
	id: string;
};
