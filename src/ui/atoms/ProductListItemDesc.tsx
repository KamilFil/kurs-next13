import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDesc = ({
	product: { name, categories, price },
}: ProductListItemDescProps) => {
	return (
		<div className="flex flex-col justify-between">
			<div className="flex flex-col justify-between">
				<h3 className="text-xl font-bold">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span>{" "}
						{categories[0].name}
					</p>
				)}
			</div>
			<div className="flex justify-between">
				<p className="text-sm">{price}</p>
				<button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
					Add to cart
				</button>
			</div>
		</div>
	);
};
