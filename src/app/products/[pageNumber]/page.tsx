import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductListPage";
import { SortProductBox } from "@/ui/molecules/SortProductBox";
import { type ProductOrderByInput } from "@/gql/graphql";

export const generateMetadata = async (): Promise<Metadata> => {
	const categoryName = await getProductsList();
	if (!categoryName) {
		throw notFound();
	}

	return {
		title: `Products`,
	};
};

export default async function ProductsPage({
	searchParams,
}: {
	searchParams?: { [_key: string]: string | string[] | undefined };
}) {
	const { sort: sortProduct } = searchParams as {
		[key: string]: ProductOrderByInput;
	};
	const sortQuery = sortProduct ?? "createdAt_ASC";
	const products = await getProductsList("", sortQuery);
	products.splice(4, products.length);

	return (
		<>
			<div>
				<h1 className="text-2xl font-bold">Produkty</h1>
				<SortProductBox />
			</div>
			<ProductList products={products} />
			<Pagination
				urlData={"products"}
				numberPagination={1}
				paginationLength={products.length}
			/>
		</>
	);
}
