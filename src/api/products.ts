import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
	ProductGetByIdDocument,
	ProductGetListDocument,
	type ProductOrderByInput,
} from "@/gql/graphql";

export const getProductsList = async (
	search = "",
	orderBy: ProductOrderByInput = "createdAt_ASC",
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetListDocument,
		variables: {
			search: search,
			orderBy: orderBy,
		},
		// cache: 'no-store'
		next: {
			revalidate: 15,
		},
	});

	return graphqlResponse.products;
};

export const getProductsListByCategory = async (
	categorySlug: string,
	pageNumber: number = 0,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
			pageNum: Number(pageNumber * 4),
		},
	});

	return graphqlResponse.categories[0]?.products;
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: id },
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.products[0];
};
