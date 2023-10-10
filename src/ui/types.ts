export type ProductItemTypes = {
    description: string | null | undefined;
    id: string;
    category: string;
    name: string;
    price: number;
   coverImage: {
    src: string;
    alt: string;
   }

}