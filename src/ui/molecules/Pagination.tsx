import { type UrlObject } from "url";
import Link from "next/link";
export const Pagination = ({
	urlData,
	paginationLength,
}: {
	numberPagination: string;
	paginationLength: number;
	urlData: string;
}) => {
	return (
		<nav role="navigation" aria-label="Pagination">
			<ul>
				{Array.from(
					{ length: paginationLength },
					(_, i) => i + 1,
				).map((link) => {
					return (
						<li key={link}>
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
