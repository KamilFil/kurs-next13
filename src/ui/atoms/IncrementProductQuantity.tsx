"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { ChangeQuantityItem } from "@/app/cart/action";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);

	const handleIncrement = async () => {
		setOptimisticQuantity(optimisticQuantity + 1);
		await ChangeQuantityItem(itemId, optimisticQuantity + 1);
	};

	const handleDecrement = async () => {
		setOptimisticQuantity(optimisticQuantity - 1);
		await ChangeQuantityItem(itemId, optimisticQuantity - 1);
	};

	return (
		<form>
			<button
				formAction={handleIncrement}
				data-testid="increment"
				className="border bg-slate-200"
			>
				+
			</button>
			{optimisticQuantity}
			<button
				formAction={handleDecrement}
				data-testid="decrement"
				className="border bg-slate-200"
			>
				-
			</button>
		</form>
	);
};
