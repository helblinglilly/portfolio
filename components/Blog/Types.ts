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

export interface MetaInfo {
	title: string;
	authorName: string;
	socialSummary: string;
	cover: string | null;
}

export interface MetaInfoProps {
	metaInfo: MetaInfo;
}

export interface ExternalLinkPreview {
	title: string;
	description: string;
	image: string;
	url: string;
}

export interface BlogProps {
	meta: BlogMetaInfo;
	preview: ExternalLinkPreview | null;
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

export interface Tweet {
	id: string;
	created_at: string;
	text: string;
}

export interface TweetsProps {
	tweets: Array<Tweet>;
}

export interface TweetsAndBlogProps {
	tweets: Array<Tweet>;
	posts: Array<BlogMetaInfo>;
}

export interface PostProps {
	posts: BlogMetaInfo[];
}

export interface TableOfContent {
	title: string;
	id: string;
}
