export interface IPostMetadata {
  title: string;
  description: string;
  tags: string[];
  publishedTime: string;
  modifiedTime: string;
  author?: {
    name?: string;
    url?: string;
  }
  url: string;
}

const formatMetadata = (metadata: Partial<IPostMetadata>) => ({
  title: metadata.title ?? 'Missing title',
  description: metadata.description ?? 'Missing description',
  tags: metadata.tags ?? ['Missing Tags'],
  publishedTime: metadata.publishedTime ?? new Date().toISOString(),
  modifiedTime: metadata.modifiedTime ?? new Date().toISOString(),
  author: {
    name: metadata.author?.name ?? 'Lilly Helbling',
    url: metadata.author?.url ?? 'https://helbling.uk',
  },
  url: 'https://helbling.uk/blog/404',
});

export default formatMetadata;
