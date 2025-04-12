import "@/app/markdown.css";
import metadataGenerator from "@/helpers/metadata";
import Theme from "@/providers/Theme";
import type { Metadata } from "next";
import Script from "next/script";
import { type ReactNode } from "react";
import ClientLayout from "./clientLayout";
import "./globals.css";

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

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				{process.env.NODE_ENV === "production" && (
					<Script src="/js/newrelic.js" />
				)}
				<Theme>
					<ClientLayout>
						{children}
					</ClientLayout>
				</Theme>
			</body>
		</html>
	);
}
