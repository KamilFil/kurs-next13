import { revalidateTag } from "next/cache";
import { AddToCartButton } from "./AddtoCartButton";
import { type ProductListItemFragment } from "@/gql/graphql";
import { addToCart, getOrCreateCart } from "@/api/cart";

type ProductListItemDescProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDesc = ({
	product,
}: ProductListItemDescProps) => {
	async function addToCartAction(_formData: FormData) {
		"use server";
		const cart = await getOrCreateCart();

		await addToCart(cart.id, product.id);

		// revalidatePath("/");
		revalidateTag("cart");
	}

	return (
		<div className="flex flex-col justify-between">
			<div className="flex flex-col justify-between">
				<h3 className="text-xl font-bold">{product.name}</h3>
				{product.categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span>{" "}
						{product.categories[0].name}
					</p>
				)}
			</div>
			<div className="flex justify-between">
				<p className="text-sm">{product.price}</p>
				<form action={addToCartAction}>
					<AddToCartButton />
				</form>
			</div>
		</div>
	);
};
