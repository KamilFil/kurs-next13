import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";

export default async function ProductsPage() {
	const products = await getProductsList();
	products.splice(4, products.length);

	return <ProductList products={products} />;
}
