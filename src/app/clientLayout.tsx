"use client";

import type React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Navbar";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
			<QueryClientProvider client={new QueryClient()}>
				<Navbar />

				<div className="m-6">{children}</div>
			</QueryClientProvider>
	);
}
