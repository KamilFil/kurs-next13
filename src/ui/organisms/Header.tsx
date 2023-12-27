import Link from "next/link";
import Image from "next/image";
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
				<div className="flex w-full justify-between overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
					<div className="flex items-center ">
						<Link href={"/"}>
							<Image
								src="/img/e-comm-shop.png"
								width={80}
								height={60}
								alt="logo"
							></Image>
						</Link>
						<NavBar />
					</div>
					<div className="flex items-center">
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
			</div>
		</header>
	);
};
