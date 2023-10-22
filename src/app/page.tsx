import Link from "next/link";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";

export default async function HomePage() {
	const products = await getProductsList();
	products.splice(4, products.length);

	return (
		<>
			<section>
				<h3>New In</h3>
				<Link href={"/collections/new-in"}>New In</Link>
			</section>
			<ProductList products={products} />
		</>
	);
}
