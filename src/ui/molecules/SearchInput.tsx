"use client";

import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import React, { useEffect, useState } from "react";

export const SearchInput = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchQuery = searchParams?.get("search");

	const [searchValue, setSearch] = useState(searchQuery ?? "");

	useEffect(() => {
		if (searchParams?.get("search")) {
			setSearch(searchQuery ?? "");
		} else {
			setSearch("");
		}
	}, [pathname, searchParams, searchQuery]);

	useEffect(() => {
		const delayTimeout = setTimeout(() => {
			if (searchValue !== "") {
				const searchParams = searchValue
					? `?search=${searchValue}`
					: "";
				router.push(`/search${searchParams}`);
			}
		}, 550);
		return () => {
			clearTimeout(delayTimeout);
		};
	}, [router, searchValue]);

	const handleOnChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearch(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Search"
				onChange={handleOnChange}
				value={searchValue ?? ""}
			/>
		</form>
	);
};
