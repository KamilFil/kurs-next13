import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function HomePage({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className="">
				<Header />
				<section className="mx-auto max-w-7xl p-8">
					{children}
				</section>
			</body>
		</html>
	);
}
