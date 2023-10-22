import { redirect } from "next/navigation";

import { getCartByFromCookies } from "@/api/cart";
import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";

export default async function CartPage() {
	const cart = await getCartByFromCookies();
	if (!cart) {
		redirect("/");
	}
	return (
		<div className="mt-10">
			<table className="table-auto">
				<thead>
					<tr>
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
									<td>{item.product.name}</td>
									<td className="text-center">
										<IncrementProductQuantity
											quantity={item.quantity}
											itemId={item.id}
										/>
									</td>
									<td>{item.product.price}</td>
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
