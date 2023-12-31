import { ActiveLink } from "../atoms/ActiveLink";

export const NavBar = () => {
	return (
		<nav className=" ">
			<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
				<ActiveLink href={"/products/1"}>{"All"}</ActiveLink>
				<ActiveLink href={"/categories/t-shirts/1"}>
					{"T-shirts"}
				</ActiveLink>
				<ActiveLink href={"/categories/hoodies/1"}>
					{"Hoodies"}
				</ActiveLink>
				<ActiveLink href={"/categories/accessories/1"}>
					{"Accessories"}
				</ActiveLink>
			</ul>
		</nav>
	);
};
