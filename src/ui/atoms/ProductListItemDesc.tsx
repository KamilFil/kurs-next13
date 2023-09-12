import { type ProductItemTypes } from "../types";

type ProductListItemDescProps = {
  product: ProductItemTypes;
};

export const ProductListItemDesc = ({
  product: { name, category, price },
}: ProductListItemDescProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{category}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm">{price}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};
