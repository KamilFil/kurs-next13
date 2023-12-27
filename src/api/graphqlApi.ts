import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TypeVariables>({
	query,
	variables,
	next,
	cache,
}: {
	query: TypedDocumentString<TResult, TypeVariables>;
	variables: TypeVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("Missing GRAPHQL_URL env variable");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		next,
		cache,
	});
	type graphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse =
		(await res.json()) as graphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error: }`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
