/* eslint-disable import/no-mutable-exports */
declare module '*.mdx' {
  let MDXComponent: (_props: any) => JSX.Element;
  export default MDXComponent;

  export const title: string;
  export const description: string;
  export const tags: string[];
  export const publishedTime: string;
  export const modifiedTime: string;
}
