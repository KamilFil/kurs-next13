"use client";

import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";

export const SortProductBox = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchQuery = searchParams?.get("sort");

	const [optionValue, setOptionValue] = useState(searchQuery ?? "");

	useEffect(() => {
		if (optionValue !== "") {
			const searchParams = optionValue ? `?sort=${optionValue}` : "";
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			router.push(`${pathname}${searchParams}`);
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			router.push(`${pathname}`);
		}
	}, [optionValue]);

	const handleOnChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const value = e.target.value;
		setOptionValue(value);
	};

	return (
		<select
			id="sort"
			onChange={(e) => handleOnChange(e)}
			value={optionValue}
		>
			<option value="" data-testid="sort-by-rating">
				Rating(high)
			</option>
			<option value="" data-testid="sort-by-rating">
				Rating(low)
			</option>
			<option value="price_ASC" data-testid="sort-by-price">
				Price(low)
			</option>
			<option value="price_DESC" data-testid="sort-by-price">
				Price(high)
			</option>
		</select>
	);
};
