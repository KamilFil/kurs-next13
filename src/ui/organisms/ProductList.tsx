import { ProductListItem } from "../molecules/ProductListItem"
import { type ProductItemTypes } from "../types"

export const ProductList = ({products

}: {products: ProductItemTypes[]}) => {
    return (
        <ul data-testid="products-list">
            {products.map((product) => {
                    return <ProductListItem key={product.id} product={product}/>
            })}
        </ul>
    
    )
}