import Link from "next/link"
import { type ProductItemTypes } from "../types"
import { ProductCoverImage } from "@/ui/atoms/ProductCoverlmage"
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc"

type ProductListItemDescProps = {
    product: ProductItemTypes
    }



export const ProductListItem = ({product}: ProductListItemDescProps) => {
return (
   <li className="w-1/5 m-4 p-3 border-spacing-2 border">
    <Link href={`/product/${product.id}`}>
        <article>
            <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/>
            <ProductListItemDesc product={product}/> 
        </article>
    </Link>
   </li>
)
}