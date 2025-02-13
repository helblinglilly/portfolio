import "./globals.css";
import "@/app/markdown.css";
import React, { type ReactNode } from "react";
import type { Metadata } from "next";
import Theme from "@/providers/Theme";
import metadataGenerator from "@/helpers/metadata";
import Script from "next/script";
import ClientLayout from "./clientLayout";
import { cookies } from "next/headers";
import type { HomepageMode } from "@/providers/ViewMode";

export function generateMetadata(): Metadata {
	return metadataGenerator({
		url: "https://helbling.uk",
		publishedTime: new Date("2020-01-01").toISOString(),
		modifiedTime: new Date("2024-10-06").toISOString(),
	});
}

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	const cookieStore = await cookies();
	const homepageMode = cookieStore.get("homepage-mode")?.value as
		| HomepageMode
		| undefined;

	return (
		<html lang="en">
			<body>
				{process.env.NODE_ENV === "production" && (
					<Script src="/js/newrelic.js" />
				)}
				<Theme>
					<ClientLayout homepageProviderInitial={homepageMode}>
						{children}
					</ClientLayout>
				</Theme>
			</body>
		</html>
	);
}
