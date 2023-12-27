"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			data-testid="add-to-cart-button"
			disabled={formStatus.pending}
			type="submit"
			className="mt-6 divide-slate-400 rounded bg-cyan-900 px-4 py-2 font-bold text-white hover:bg-cyan-800 disabled:cursor-wait disabled:bg-slate-900"
		>
			Add to cart
		</button>
	);
};
