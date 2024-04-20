import { Metadata } from "next";

const metadataGenerator = (
  {
    title="Lilly Helbling",
    description="Software Engineer and Pokémon enthusiast based in Leeds, UK",
    creator="Lilly Helbling",
    image="/images/socialpreview-dark.png",
    type="website",
    tags=['Software Engineer', 'Leeds'],
    authors={
      name: 'Lilly Helbling',
      url: 'https://helbling.uk'
    },
    url="https://helbling.uk",
    publishedTime,
    modifiedTime
  }: {
		title?: string;
		description?: string;
		creator?: string;
		image?: string;
		type?: 'website' | 'profile' | 'article';
		tags?: string[];
		authors?: {
			name: string;
			url: string;
		};
		url: string;
		publishedTime: string;
		modifiedTime: string;
	}
): Metadata => {
  return {
    title,
    description,
    creator,
    keywords: tags,
    metadataBase: new URL('https://helbling.uk'),
    authors,
    openGraph: {
      title,
      description,
      type,
      tags,
      locale: 'en-GB',
      url,
      countryName: 'United Kingdom',
      images: {
        url: image,
      },
      publishedTime: type === 'article' ? publishedTime : undefined,
      modifiedTime: type === 'article' ? modifiedTime : undefined
    },
    twitter: {
      card: type === 'website' ? 'summary_large_image' : 'summary',
      site: 'https://helbling.uk',
      title,
      description,
      images: {
        url: image,
      },
    },
  };
}

export default metadataGenerator;