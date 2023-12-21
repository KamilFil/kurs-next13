import NextImage from "next/image";

type Props = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductCoverImage = ({ src, alt }: Props) => {
	return (
		<div className="relative h-full w-full">
			<NextImage src={src} alt={alt} width={400} height={400} />
		</div>
	);
};
