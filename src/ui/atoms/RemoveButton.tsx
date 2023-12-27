"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/app/cart/action";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransistion] = useTransition();
	const router = useRouter();

	return (
		<button
			disabled={isPending}
			className="text-red-500 disabled:text-gray-400"
			onClick={() =>
				startTransistion(async () => {
					await removeItem(itemId);
					router.refresh();
				})
			}
		>
			Remove
		</button>
	);
};
