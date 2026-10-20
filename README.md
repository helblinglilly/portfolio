# portfolio

This is the website served at [helbling.uk](https://helbling.uk?utm_source=github).

## Tech stack

It's a NextJS app router application that's statically served via Cloudflare Workers, to ensure quick load times and positive SEO.

Uses shadn/ui components.

For "dynamic" content, this project uses MDX which allows me to write Markdown files, but still sprinkle in React components where needed.

A CMS was considered, but deemed overkill.

## Purpose

A space where I can put myself forward, control the narritive, and create something independent that should outlive most trendy social media platforms.

## Principles

I update this site about once/year, so it needs to stay simple to reason about.

Black boxes are fine if their purpose is quickly identifiable.

### Tracking

I want to see how people are interacting with it, so most clicks and interactions are sent to a self-hosted instances of Umami.

## Theming

Default to the user's preferred theme, but offer a light/dark mode toggle.

|Theme|Area|Scheme|Reason|
|-|-|-|-|
|Light|Backgrounds|White|High contrast|
|Dark|Backgrounds|zinc|Warm feeling|
|Light|Navigation|fuchsia-[number]/80|Similar to main accent colour but removes some of the harshness.|
|Dark|Navigation|#F714B1|Matches stroke colour of name image|
|Light|Typography Headers|Black|Headers should have maximum contrast|
|Dark|Typography Headers|White|Headers should have maximum contrast|
|Light|Typograhy subheadings|gray-900|Soften in contrast to create a gradient that invites the eye to follow down that colour gradient|
|Dark|Typography subheadings|gray-100|Same as above|
|Light|Typography paragraph|gray-800|Softens contrast further and is more comfortable to read|
|Dark|Typography paragraph|gray-100|Do not want to soften contrast futher to avoid it getting absorbed|
|Light|UI backgrounds for interactive elements, whose placement may not provide "click" as an affordability (cards)|bg-violet-50|Create softer violet accent that carries throughout the page|
|Dark|UI backgrounds for intearctive elements, whose placement may not provide "click" as an affordability (cards)|zinc-800|Favour visual coherence and dark-theme expectations rather than introduce a secondary colour to the theme, but with enough contrast to stand out against the background|
|Light|"Click-afforded" UI elements - hover state (buttons)|violet-300/80|Follow main-page theme|
|Dark|"Click-afforded" UI elements - hover state (buttons)|violet-400|Introduce subtle accents in non-harsh theme|
|Light|Accent colour|#F714B1|Matches troke colour of the name image|
|Dark|Accent colour|#F714B1|Matches troke colour of the name image|


Theme colours are defined in `src/app/globals.css`. Use the semantic Tailwind
utilities (`bg-background`, `text-foreground`, `text-subheading`, `bg-card`,
`bg-popover`, `hover:bg-accent`, and `hover:text-accent-foreground`) so components
follow both themes. Headings receive their colour globally. Navigation uses
`hover:bg-navigation` with black hover text; brand accents use `brand`.
The initial theme follows the system preference, and the toggle saves an override.
Blog posts provide the reference for prose spacing and link styling.
