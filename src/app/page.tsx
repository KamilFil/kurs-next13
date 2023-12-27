import Image from "next/image";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";
import { getCollectionCategories } from "@/api/collection";
export default async function HomePage() {
	const products = await getProductsList();
	products.splice(4, products.length);

	const collectionCategory = await getCollectionCategories();

	return (
		<>
			<div className="collection flex  justify-around pb-8 pt-4 max-[960px]:flex-col">
				{collectionCategory.map((e) => (
					<>
						<a href={`/collections/${e.slug}`}>
							<div>
								{e.name}
								<div>
									<Image
										width={350}
										height={350}
										src={e.image.url}
										alt={e.name}
									/>
								</div>
							</div>
						</a>
					</>
				))}
			</div>
			<ProductList products={products} />
		</>
	);
}
