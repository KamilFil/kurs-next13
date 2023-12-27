import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsListByCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductListPage";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: number };
}): Promise<Metadata> => {
	if (Number(params.pageNumber) === 1) {
		params.pageNumber = 0;
	}
	const categoryName = await getProductsListByCategory(
		params.category,
		params.pageNumber,
	);
	if (!categoryName) {
		throw notFound();
	}
	console.log(categoryName[0]?.categories[0]?.name);
	const catName = categoryName[0]?.categories[0]?.name;

	return {
		title: `${catName} ${
			params.pageNumber === 0 ? "" : `- Strona ${params.pageNumber}`
		}`,
	};
};

export default async function ProductsPage({
	params,
}: {
	params: { category: string; pageNumber: number };
}) {
	if (Number(params.pageNumber) === 1) {
		params.pageNumber = 0;
	}

	const products = await getProductsListByCategory(
		params.category,
		params.pageNumber,
	);
	if (!products) {
		throw notFound();
	}

	const catName = products[0]?.categories[0]?.name;
	return (
		<>
			<div>
				{" "}
				<h1>{catName}</h1>
			</div>

			<ProductList products={products} />
			<Pagination
				urlData={`./categories/${params.category}`}
				numberPagination={params.pageNumber}
				paginationLength={products.length}
			/>
		</>
	);
}
