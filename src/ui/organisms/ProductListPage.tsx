import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({
	products,
}: {
	products: ProductListItemFragment[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="m-auto flex max-w-screen-xl flex-shrink flex-grow flex-row flex-wrap justify-around max-[960px]:flex-col "
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
