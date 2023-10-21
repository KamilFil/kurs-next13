import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
	ProductGetByIdDocument,
	ProductGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetListDocument,
		variables: {},
		// cache: 'no-store'
		next: {
			revalidate: 15,
		},
	});

	return graphqlResponse.products;
};

export const getProductsListByCategory = async (
	categorySlug: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
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
