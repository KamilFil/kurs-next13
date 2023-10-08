
import { Suspense } from "react"
import { getProductById } from "@/api/products"
import { ProductCoverImage } from "@/ui/atoms/ProductCoverlmage"
import { ProductListItemDesc } from "@/ui/atoms/ProductListItemDesc"
import {  SuggestionsProductList } from "@/ui/organisms/SuggestedProductList"

export default async function SingleProductPage({params}:{params: {productId:string}}) {
    const product = await getProductById(params.productId)
    return (
        <>
     <article className="max-w-xs">
        <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/>
        <ProductListItemDesc product={product}/>
     </article>
     <aside>
      <Suspense>
        <SuggestionsProductList/>
        </Suspense>
     </aside>
        </>
    )
} 