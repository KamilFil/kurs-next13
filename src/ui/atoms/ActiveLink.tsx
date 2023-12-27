"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
	className = "flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700",
	activeClassName = " border-blue-300 text-blue-600 px-2",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	if (pathname === null) {
		return null;
	}
	const isActive = exact
		? pathname === href
		: pathname.startsWith(`${href}/`);

	return (
		<li className="h-full w-full">
			<Link
				href={href}
				className={`${className} ${isActive && activeClassName}`}
				aria-current={isActive ? "page" : undefined}
			>
				{children}
			</Link>
		</li>
	);
};
