import { Suspense } from "react";
import { ProductCoverImage } from "../atoms/ProductCoverlmage";
import { ProductListItemDesc } from "../atoms/ProductListItemDesc";
import { SuggestionsProductList } from "../molecules/SuggestedProductList";
import { AddToCartButton } from "../atoms/AddtoCartButton";
import { Reviews } from "../molecules/Reviews";
import { type SingleProductFragment } from "@/gql/graphql";
import { addToCart, getOrCreateCart } from "@/api/cart";

type SingleProductType = {
	product: SingleProductFragment;
};

export const SingleProduct = async ({
	product,
}: SingleProductType) => {
	async function addToCartAction(_formData: FormData) {
		"use server";
		const cart = await getOrCreateCart();

		await addToCart(cart.id, product.id);
	}

	return (
		<>
			<article className="mt-5 flex ">
				<div className="basis-1/2">
					{product.images[0] && (
						<ProductCoverImage
							src={product.images[0].url}
							alt={product.name}
						/>
					)}
				</div>
				<div className="basis-1/2">
					{product.name && (
						<h1 className="text-2xl font-bold">{product.name}</h1>
					)}
					<ProductListItemDesc product={product} />
					<p>{product.description}</p>

					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</div>
			</article>
			<Suspense>
				<aside data-testid="related-products">
					<div className="py-16">
						<SuggestionsProductList />
					</div>
				</aside>
				<Reviews product={product} />
			</Suspense>
		</>
	);
};
