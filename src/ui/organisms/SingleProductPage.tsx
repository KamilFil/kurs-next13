import { Suspense } from "react";
import { ProductCoverImage } from "../atoms/ProductCoverlmage";
import { ProductListItemDesc } from "../atoms/ProductListItemDesc";
import { SuggestionsProductList } from "../molecules/SuggestedProductList";
import { type SingleProductFragment } from "@/gql/graphql";

type SingleProductType = {
	product: SingleProductFragment;
};

export const SingleProduct = async ({
	product,
}: SingleProductType) => {
	return (
		<>
			<article>
				{product.name && (
					<h1 className="text-2xl font-bold">{product.name}</h1>
				)}
				{product.images[0] && (
					<ProductCoverImage
						src={product.images[0].url}
						alt={product.name}
					/>
				)}
				<p>{product.description}</p>
				<ProductListItemDesc product={product} />
				
			</article>
			<aside data-testid="related-products">
				<div className="py-16">
					<Suspense>
						<SuggestionsProductList />
					</Suspense>
				</div>
			</aside>
		</>
	);
};
