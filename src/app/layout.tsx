import "@/app/markdown.css";
import metadataGenerator from "@/helpers/metadata";
import Theme from "@/providers/Theme";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { type ReactNode } from "react";
import ClientLayout from "./clientLayout";
import "./globals.css";
import BlueSkyIcon from "@/components/atoms/Icons/BlueSky";
import GithubIcon from "@/components/atoms/Icons/Github";
import InstagramIcon from "@/components/atoms/Icons/Instagram";
import LinkedinIcon from "@/components/atoms/Icons/LinkedIn";

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
            <div className="grid gap-4">
              {children}
              <footer className="justify-around pt-4">
                <section
                  className="w-full flex justify-center gap-4"
                  aria-label="Socials"
                >
                  <a
                    href="https://github.com/helblinglilly"
                    className="inline-flex gap-2 text-center link"
                  >
                    <GithubIcon width="25" height="25" />
                  </a>

                  <a
                    href="https://bsky.app/profile/helbling.uk"
                    className="inline-flex gap-2 text-center link"
                  >
                    <figure aria-label="BlueSky">
                      <BlueSkyIcon width="25" height="25" />
                    </figure>
                  </a>

                  <a
                    href="https://instagram.com/helblinglilly"
                    className="inline-flex gap-2 text-center link"
                  >
                    <InstagramIcon width="25" height="25" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/lilly-helbling-707ba0171"
                    className="inline-flex gap-2 text-center link"
                  >
                    <LinkedinIcon height="25" width="25" />
                  </a>
                </section>
              </footer>
            </div>
          </ClientLayout>
        </Theme>
      </body>
    </html>
  );
}
