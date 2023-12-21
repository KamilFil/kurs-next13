import { type UrlObject } from "url";
import Link from "next/link";
export const Pagination = ({
	urlData,
	paginationLength,
}: {
	numberPagination: number;
	paginationLength: number;
	urlData: string;
}) => {
	return (
		<nav role="navigation" aria-label="Pagination">
			<ul className="flex justify-center">
				{Array.from(
					{ length: paginationLength },
					(_, i) => i + 1,
				).map((link) => {
					return (
						<li key={link} className="p-2">
							<Link
								href={`/${urlData}/${link}` as unknown as UrlObject}
							>
								{link}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
