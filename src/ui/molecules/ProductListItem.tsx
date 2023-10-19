import Link from "next/link";

import { ProductCoverImage } from "@/ui/atoms/ProductCoverlmage";
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemDescProps = {
	product: ProductListItemFragment;
};



export const ProductListItem = ({
	product,
}: ProductListItemDescProps) => {
	return (
		<li className="m-4 w-1/5 border-spacing-2 border p-3">
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductCoverImage
							src={product.images[0].url}
							alt={product.name}
						/>
					)}

					<ProductListItemDesc product={product} />
				</article>
			</Link>
		</li>
	);
};
