"use client";

import { useState } from "react";

import { UserCircle2 } from "lucide-react";
import { ReviewsStar } from "../atoms/ReviewsStar";
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
		setReview(initalState);
	};

	return (
		<div className="mx-auto flex justify-around">
			<div className="basis-1/3 border border-gray-300 p-8">
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
							className="w-full border border-gray-300 p-2"
						></input>
					</label>
					<label>
						Review content:
						<textarea
							name="content"
							value={review.content}
							onChange={() => handleOnChange}
							className="w-full border border-gray-300 p-2"
						/>
					</label>
					<label>
						Review rating
						<input
							type="number"
							name="rating"
							value={review.rating}
							onChange={() => handleOnChange}
							className="w-full border border-gray-300 p-2"
						></input>
					</label>
					<label>
						Name
						<input
							name="name"
							value={review.name}
							onChange={() => handleOnChange}
							className="w-full border border-gray-300 p-2"
						></input>
					</label>
					<label>
						Email
						<input
							name="email"
							value={review.email}
							onChange={() => handleOnChange}
							className="w-full border border-gray-300 p-2"
						></input>
					</label>
				</form>
			</div>

			<div className="flex w-full basis-3/5 flex-col">
				<h2 className="text-lg font-bold text-cyan-900">
					Opinie o produkcie
				</h2>
				{product.reviews.length !== 0 ? (
					product.reviews.map((review) => (
						<div key={review.rating} className=" flex border-b p-4">
							<div className="pr-3">
								<UserCircle2 size={40} className="text-cyan-800" />
							</div>
							<div>
								<ReviewsStar rating={review.rating} />
								<p>{review.content}</p>
							</div>
						</div>
					))
				) : (
					<p>Ten produkt nie ma jeszcze opinii.</p>
				)}
			</div>
		</div>
	);
};
