import { redirect } from "next/navigation";
import Image from "next/image";
import { getCartByFromCookies } from "@/api/cart";
import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { formatPrice } from "@/utils/formatPriceUtils";

export default async function CartPage() {
	const cart = await getCartByFromCookies();
	if (!cart) {
		redirect("/");
	}
	return (
		<div className="mt-10">
			<table className="m-auto w-1/2 border max-[960px]:w-full">
				<thead>
					<tr>
						<th>Image</th>
						<th>Product</th>
						<th className="px-4">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>
										<Image
											width={30}
											height={30}
											src={
												// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
												`${item.product?.images[0]?.url}` ??
												"default.jpg"
											}
											alt={item.product.name}
										/>
									</td>
									<td>{item.product.name}</td>
									<td className="text-center">
										<IncrementProductQuantity
											quantity={item.quantity}
											itemId={item.id}
										/>
									</td>
									<td>{formatPrice(item.product.price)}</td>
									<td>
										<RemoveButton itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
