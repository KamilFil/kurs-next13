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
	});
	return graphqlResponse.products[0];
};
