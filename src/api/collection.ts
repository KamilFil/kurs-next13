import { executeGraphql } from "./graphqlApi";
import { GetCollectionSlugDocument } from "@/gql/graphql";

export const getCollestiongBySlug = async (slugName: string) => {
	const graphqlResponse = await executeGraphql({
		query: GetCollectionSlugDocument,
		variables: {
			slugName: slugName,
		},
	});

	return graphqlResponse.collections[0];
};
