interface ISocialMeta {
  title: {
    native: string | null;
    og: string | null;
    twitter: string | null;
  };
  description: {
    native: string | null;
    og: string | null;
    twitter: string | null;
  };
  image: {
    og: string | null;
    twitter: string | null;
  }
}

async function getSocialMetadata(link: string): Promise<ISocialMeta> {
  const res = await fetch(`https://socialpreview.helbling.uk?link=${link}`);
  return res.json() as Promise<ISocialMeta>;
}

export default getSocialMetadata;
