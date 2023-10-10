import { type ProductItemTypes } from "@/ui/types"

type ResProductTypes = {
    id: string
    title: string
    price: number
    description: string
    category: string
    rating: {
      rate: number
      count: number
    }
    image:string,
    longDescription: string
    }
    
    export async function getProductsList() {
    const res = await fetch('https://naszsklep-api.vercel.app/api/products')
    const productsResponse = (await res.json()) as ResProductTypes[]
    const products = productsResponse.map(ProductResponeItemToResponseProductItem)
    
    return products
    }

    export const getProductById = async (id: string) => {
        const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
        const productsResponse = (await res.json()) as ResProductTypes
        return ProductResponeItemToResponseProductItem(productsResponse)
    }
    export const ProductResponeItemToResponseProductItem = (product: ResProductTypes): ProductItemTypes => {
        return {
        id: product.id,
        name: product.title,
        category: product.category,
        price: product.price,
        description: product.description,
        coverImage: {
          src: product.image,
          alt: product.title,
        },
    }
        }