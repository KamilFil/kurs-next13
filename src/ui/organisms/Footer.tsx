import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="m-h-40 max-w-full justify-center bg-cyan-900">
			<div className="m-auto flex h-full max-w-7xl flex-col justify-between p-6 px-2 text-slate-50 sm:px-4">
				<div className="flex w-full flex-row flex-wrap justify-between pb-8">
					<div className="basis-1/4">
						<p>Clothes-Shop.pl</p>
						<p className="text-sm">
							Sklep z modnymi ubraniami oferuje szeroki wybór odzieży
							dla każdego. Znajdziesz tu stylowe sukienki, koszule i
							spodnie.
						</p>
					</div>
					<div className="basis-1/4">
						<p>Nawigacja</p>
						<ul className="text-sm">
							<li>
								<Link href="/products/1">Produkty</Link>
							</li>
							<li>
								<Link href="/collection">Kolekcje</Link>
							</li>
							<li>
								<Link href="/contact">Kontakt</Link>
							</li>
						</ul>
					</div>
					<div className="basis-1/4">
						<p>Odwiedź nas</p>
					</div>
				</div>
				<div className="text-center text-xs">
					<p>Copyright © 2023 - Projekt z kursu Next13Masters</p>
				</div>
			</div>
		</footer>
	);
};
