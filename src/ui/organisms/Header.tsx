import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { SearchInput } from "../molecules/SearchInput";
import { NavBar } from "./NavBar";
import { getCartByFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartByFromCookies();
	const quantity = cart?.orderItems.length || 0;
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto flex max-w-7xl px-2 sm:px-4 lg:px-8">
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<NavBar />
				</div>
				<div className="flex">
					<Link
						href="/cart"
						className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
					>
						<ShoppingBasket />
						<span className="ml-2 text-sm font-medium ">
							{quantity}
						</span>
					</Link>
					<SearchInput />
				</div>
			</div>
		</header>
	);
};
