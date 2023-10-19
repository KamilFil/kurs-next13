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
			<NextImage src={src} alt={alt} width={300} height={300} />
		</div>
	);
};
