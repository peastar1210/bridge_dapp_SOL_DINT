import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/layout";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DintBridge",
	description: "Bridge Dapp for Dint",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraProvider>
					<Layout>{children}</Layout>
				</ChakraProvider>
			</body>
		</html>
	);
}
