import { executeGraphql } from "./graphqlApi";
import { CollectionGetCategoryDocument, GetCollectionSlugDocument } from "@/gql/graphql";

export const getCollestiongBySlug = async (slugName: string) => {
	const graphqlResponse = await executeGraphql({
		query: GetCollectionSlugDocument,
		variables: {
			slugName: slugName,
		},
	});

	return graphqlResponse.collections[0];
};

export const getCollectionCategories = async () => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetCategoryDocument,
		variables: {},
	});

	return graphqlResponse.collections;
}
