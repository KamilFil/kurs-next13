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
				<form action={addToCartAction}>
					<AddToCartButton />
				</form>
			</article>
			<aside data-testid="related-products">
				<div className="py-16">
					<Suspense>
						<SuggestionsProductList />
					</Suspense>
				</div>
			</aside>
			<Reviews product={product} />
		</>
	);
};
