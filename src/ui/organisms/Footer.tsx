import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="m-h-40 max-w-full justify-center bg-cyan-900">
			<div className="m-auto flex h-full max-w-7xl flex-col justify-between p-6 px-2 text-slate-50 max-[960px]:p-8 sm:px-4">
				<div className="flex w-full flex-row flex-wrap justify-between pb-8 max-[960px]:flex-col ">
					<div className="basis-1/4 max-[960px]:mb-3  ">
						<p>Clothes-Shop.pl</p>
						<p className="text-sm">
							A fashion clothing store offers a wide selection of
							apparel for everyone. Here you will find stylish
							dresses, shirts, and trousers.
						</p>
					</div>
					<div className="basis-1/4 max-[960px]:mb-3 ">
						<p>Navigation</p>
						<ul className="text-sm">
							<li>
								<Link href="/products/1">Products</Link>
							</li>
							<li>
								<Link href="/collection">Collection</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className="basis-1/4 max-[960px]:mb-3  ">
						<p>Visit us</p>
					</div>
				</div>
				<div className="text-center text-xs">
					<p>Copyright © 2023 - Project with course Next13Masters</p>
				</div>
			</div>
		</footer>
	);
};
