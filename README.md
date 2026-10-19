# portfolio

This is the website served at [helbling.uk](https://helbling.uk?utm_source=github).

## Tech stack

It's a NextJS app router application that's statically served via Cloudflare Workers, to ensure quick load times and positive SEO.

For "dynamic" content, this project uses MDX which allows me to write Markdown files, but still sprinkle in React components where needed.

A CMS was considered, but deemed overkill.

## Purpose

A space where I can put myself forward, control the narritive, and create something independent that should outlive most trendy social media platforms.

## Principles

I update this site about once/year, so it needs to stay simple to reason about.

Black boxes are fine if their purpose is quickly identifiable.

### Tracking

I want to see how people are interacting with it, so most clicks and interactions are sent to a self-hosted instances of Umami.
