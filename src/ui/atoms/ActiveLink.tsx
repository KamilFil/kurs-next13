"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | UrlObject;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
	className = "flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700",
	activeClassName = "border-blue-300",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const path = typeof href === "string" ? href : href.pathname || "";

	const isActive = exact
		? pathname === path
		: pathname.startsWith(`${path}`);

	return (
		<li className="h-full w-full">
			<Link
				aria-current={isActive ? true : undefined}
				href={href}
				className={clsx(className, `${isActive && activeClassName}`)}
			>
				{children}
			</Link>
		</li>
	);
};
