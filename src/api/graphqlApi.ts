import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TypeVariables>(
	query: TypedDocumentString<TResult, TypeVariables>,
	variables: TypeVariables,
): Promise<TResult> => {
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
