export const ProductCoverImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} width={300} height={300} />
    </div>
  );
};
