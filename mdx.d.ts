import type { ReactElement } from "react";

declare module '*.mdx' {
  let MDXComponent: (_props: any) => ReactElement;
  export default MDXComponent;

  export const title: string;
  export const description: string;
  export const tags: string[];
  export const publishedTime: string;
  export const modifiedTime: string;
}
