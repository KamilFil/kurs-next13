import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getCollestiongBySlug } from "@/api/collection";
export const generateMetadata = async ({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> => {
	const collection = await getCollestiongBySlug(
		params.collectionName,
	);
	if (!collection) {
		throw notFound();
	}

	console.log(collection);

	return {
		title: `${collection.name}`,
	};
};

export default async function CollectionPage({
	params,
}: {
	params: { collectionName: string };
}) {
	const collection = await getCollestiongBySlug(
		params.collectionName,
	);
	if (!collection) {
		throw notFound();
	}

	return (
		<>
			<h1>{collection.name}</h1>

			<div>
				{collection.products.map((product) => (
					<div key={product.id}>
						<h1>{product.name}</h1>
					</div>
				))}
			</div>
		</>
	);

	return (
		<div className="absolute inset-0 bg-red-400">CollectionPage</div>
	);
}
