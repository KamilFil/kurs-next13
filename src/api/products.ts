import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByCategorySlugDocument,
	ProductGetByIdDocument,
	ProductGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(
		ProductGetListDocument,
		{},
	);

	return graphqlResponse.products;
};

export const getProductsListByCategory = async (
	categorySlug: string,
) => {
	const graphqlResponse = await executeGraphql(
		ProductGetByCategorySlugDocument,
		{
			slug: categorySlug,
		},
	);

	return graphqlResponse.categories[0]?.products;
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql(
		ProductGetByIdDocument,
		{ id: id },
	);
	return graphqlResponse.products[0];
};
