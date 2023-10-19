import { notFound } from "next/navigation";
import { getProductsListByCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsListByCategory(params.category);
	if (!products) {
		throw notFound();
	}
	return <ProductList products={products} />;
}
