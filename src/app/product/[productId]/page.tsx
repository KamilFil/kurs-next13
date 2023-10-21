import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { SingleProduct } from "@/ui/organisms/SingleProductPage";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const products = await getProductById(params.productId);
	if (!products) {
		throw notFound();
	}

	const [name, description] = [products.name, products.description];

	return {
		title: `${name}`,
		description: `${description}`,
	};
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	if (!product) {
		throw notFound();
	}

	return <SingleProduct product={product}  />;
}
