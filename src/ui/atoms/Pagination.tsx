import { type ProductListItemFragment } from "@/gql/graphql";

export const Pagination = ({  
    numberPage: number,
}) => {

	return (
		<nav>
			<ul>
				<li>
					<a href="/products">1</a>
				</li>
			</ul>
		</nav>
	);
};
