import { type ProductItemTypes } from "../types"
import { ProductCoverImage } from "@/ui/atoms/ProductCoverlmage"
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc"

type ProductListItemDescProps = {
    product: ProductItemTypes
    }



export const ProductListItem = ({product}: ProductListItemDescProps) => {
return (
    <li data-testid="products-list">
        <article>
            <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/>
            <ProductListItemDesc product={product}/> 
        </article>
    </li>
)
}