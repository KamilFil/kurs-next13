"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type ReactNode } from "react"
import { type Route } from "next"


type ActiveLinkProps<T extends string> = {
    href: Route<T>;
    children: ReactNode;
    exact?: boolean;
    className?: string;
    activeClassName?: string;
}

export const ActiveLink = <T extends string> ({
    href,
    children,
    exact = true,
    className = "text-blue-400 hover:text-blue-600 m-2 font-bold",
    activeClassName = "underline",

}: ActiveLinkProps<T>) => {
const pathname = usePathname()
const isAactive = exact ? pathname === href : pathname.startsWith(href)

return (
    <Link aria-current={isAactive ? 'page' : 'false'} href={href} className={`${className} ${isAactive && activeClassName}`}>{children}</Link>
)
} 