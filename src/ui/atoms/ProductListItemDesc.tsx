import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDesc = ({
	product,
}: ProductListItemDescProps) => {
	return (
		<div className="flex flex-col justify-between">
			<div className="flex flex-col justify-between">
				<h2 className="text-xl font-bold">{product.name}</h2>
				{product.categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span>{" "}
						{product.categories[0].name}
					</p>
				)}
			</div>
			<div className="flex justify-between">
				<p className="text-sm" data-testid="product-price">
					{product.price}
				</p>
			</div>
		</div>
	);
};
