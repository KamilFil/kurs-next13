"use client";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";
import { experimental_useOptimistic as useOptimistic } from "react";
import { ChangeQuantityItem, removeItem } from "@/app/cart/action";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const router = useRouter();
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);

	return (
		<form>
			<button
				data-testid="decrement"
				formAction={async () => {
					if (optimisticQuantity === 1) {
						await removeItem(itemId);
						revalidateTag("cart");
						router.refresh();
					}
					setOptimisticQuantity(optimisticQuantity - 1);
					await ChangeQuantityItem(itemId, optimisticQuantity - 1);
				}}
				className="border bg-slate-200"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await ChangeQuantityItem(itemId, optimisticQuantity + 1);
				}}
				className="border bg-slate-200"
			>
				+
			</button>
		</form>
	);
};
