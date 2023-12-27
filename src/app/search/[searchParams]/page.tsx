import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";

export async function Search({
	searchParams,
}: {
	searchParams: { search: string };
}) {
	const searchProducts = await getProductsList(searchParams.search);

	return (
		<div>
			<ProductList products={searchProducts} />
		</div>
	);
}
