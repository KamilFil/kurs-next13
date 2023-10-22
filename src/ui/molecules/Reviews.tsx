"use client";
import { useState } from "react";
import { type SingleProductFragment } from "@/gql/graphql";

const initalState = {
	headline: "",
	content: "",
	rating: 0,
	name: "",
	email: "",
};

export const Reviews = ({
	product,
}: {
	product: SingleProductFragment;
}) => {
	const [review, setReview] = useState(initalState);

	const handleOnChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>,
		name: string,
	) => {
		setReview({ ...review, [name]: e.target.value });
	};

	const handleSubmit = async () => {
		console.log("test");
		setReview(initalState);
	};

	return (
		<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<div className="border border-gray-300 p-8 lg:col-span-4">
				<h2>Customers Reviews</h2>
				<form
					data-testid="add-review-form"
					onSubmit={handleSubmit}
					className="flex flex-col gap-4"
				>
					<input
						type="hidden"
						value={product.id}
						name="productId"
					></input>
					<label>
						Review title:
						<input
							name="headline"
							value={review.headline}
							onChange={() => handleOnChange}
							className="border border-gray-300 p-2"
						></input>
					</label>
					<label>
						Review content:
						<textarea
							name="content"
							value={review.content}
							onChange={() => handleOnChange}
							className="border border-gray-300 p-2"
						/>
					</label>
					<label>
						Review rating
						<input
							type="number"
							name="rating"
							value={review.rating}
							onChange={() => handleOnChange}
							className="border border-gray-300 p-2"
						></input>
					</label>
					<label>
						Name
						<input
							name="name"
							value={review.name}
							onChange={() => handleOnChange}
							className="border border-gray-300 p-2"
						></input>
					</label>
					<label>
						Email
						<input
							name="email"
							value={review.email}
							onChange={() => handleOnChange}
							className="border border-gray-300 p-2"
						></input>
					</label>
				</form>
			</div>
			<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
				<div className="">
					{product.reviews ? <p>test</p> : <p>No reviews yet</p>}
				</div>
			</div>
		</div>
	);
};
