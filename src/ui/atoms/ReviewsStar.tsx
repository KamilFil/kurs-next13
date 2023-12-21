import { Star } from "lucide-react";

export const ReviewsStar = ({ rating }: { rating: number }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < rating) {
			stars.push(<Star size={20} className="text-yellow-500" />);
		} else {
			stars.push(<Star size={20} className="text-gray-300" />);
		}
	}
	return <div className="flex">{stars}</div>;
};
