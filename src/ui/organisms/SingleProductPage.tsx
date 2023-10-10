import { Suspense } from "react"
import { ProductCoverImage } from "../atoms/ProductCoverlmage"
import { ProductListItemDesc } from "../atoms/ProductListItemDesc"
import { type ProductItemTypes } from "../types"
import { SuggestionsProductList } from "./SuggestedProductList"



export const SingleProductLayout = ({ product }: { product: ProductItemTypes }) => {
    return (
        <>
            <article className="max-w-xs">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
                <ProductListItemDesc product={product} />
            </article>
            <aside>
                <Suspense>
                    <SuggestionsProductList />
                </Suspense>
            </aside>
        </>
    )
}