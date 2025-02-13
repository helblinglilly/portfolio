"use client";

import { type HomepageMode, HomepageModeProvider } from "@/providers/ViewMode";
import type React from "react";
import Navbar from "./Navbar";
import HomepageViewGuard from "@/components/HomepageViewGuard";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ClientLayout({
	children,
	homepageProviderInitial,
}: {
	children: React.ReactNode;
	homepageProviderInitial: HomepageMode | undefined;
}) {
	const pathname = usePathname();

	return (
		<HomepageModeProvider initialState={homepageProviderInitial}>
			<QueryClientProvider client={new QueryClient()}>
				<Navbar />
				{pathname === "/" && <HomepageViewGuard />}

				<div className="m-6">{children}</div>
			</QueryClientProvider>
		</HomepageModeProvider>
	);
}
