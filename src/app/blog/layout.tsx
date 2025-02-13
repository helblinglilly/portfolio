import React, { type ReactNode } from "react";

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="md:max-w-screen-sm md:ml-auto md:mr-auto">{children}</div>
	);
}
