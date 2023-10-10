
import { type Metadata } from "next"
import { getProductById } from "@/api/products"

import { SingleProductLayout } from "@/ui/organisms/SingleProductPage"

export const generateMetadata = async ({ params }: { params:{productId: string} }): Promise<Metadata> => {

const product = await getProductById(params.productId)
return {
  title:  `Produkt ${product.name}`,
  description: `Produkt ${product.name} - ${product.description}`,
  openGraph:{
    title: `Produkt ${product.name}`,
    description: `Produkt ${product.name} - ${product.description}`,
    images: [
      {
        url: product.coverImage.src,
        width: 800,
        height: 600,
        alt: product.coverImage.alt,
      },
    ],
  },
  }
}

export default async function SingleProductPage({params}:{params: {productId:string}}) {
    const product = await getProductById(params.productId)
    return (
      <SingleProductLayout product={product}/>

    )
} 