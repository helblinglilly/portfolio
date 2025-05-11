import "@/app/markdown.css";
import metadataGenerator from "@/helpers/metadata";
import Theme from "@/providers/Theme";
import type { Metadata } from "next";
import Head from "next/head";
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
		<Head>
		  <link rel="canonical" href="https://helbling.uk" />
		</Head>
			<body>
				{process.env.NODE_ENV === "production" && (
				<>
				  <Script
            src="https://analytics.helbling.uk/script.js"
            data-website-id="11bbfb52-ea1f-401b-96ca-72f074fb41d1"
            strategy="afterInteractive"
          />

          <Script id="outbound-link-tracking" strategy="afterInteractive">
            {`
              (() => {
                const name = 'outbound-link-click';
                document.querySelectorAll('a').forEach(a => {
                  if (a.host !== window.location.host && !a.getAttribute('data-umami-event')) {
                    a.setAttribute('data-umami-event', name);
                    a.setAttribute('data-umami-event-url', a.href);
                  }
                });
              })();
            `}
          </Script>
				</>
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
