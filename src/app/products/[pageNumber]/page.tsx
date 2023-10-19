import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";

export default async function ProductsPage() {
	const products = await getProductsList();

	
	return <ProductList products={products} />;
}
