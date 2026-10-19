import React, { type ReactNode } from "react";

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="mx-auto w-full max-w-screen-md">{children}</div>
	);
}
