import { notFound } from "next/navigation";
import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
			<h1 className="text-lg font-bold">{collection.name}</h1>

			<div className="m-3 flex h-full justify-between p-2  max-[960px]:flex-col">
				{collection.products.map((product) => (
					<Link href={`/product/${product.id}`} key={product.id}>
						<div className="border p-3 max-[960px]:mb-2">
							<h2 className="">{product.name}</h2>
							<Image
								width={200}
								height={200}
								src={`${product?.images?.[0]?.url || "default.jpg"}`}
								alt={product.name}
							/>
							<p>{product.price}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);

	return (
		<div className="absolute inset-0 bg-red-400">CollectionPage</div>
	);
}
