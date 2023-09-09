
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemTypes } from "@/ui/types";

const products: ProductItemTypes[]=[
{
  id:'1',
  category:'Shoes',
  name:'Nike Air Max',
  price:120,
  coverImage:{
    src:'/images/shoes1.jpg',
    alt:'Nike Air Max'
  }
},
{
  id:'2',
  category:'Shoes',
  name:'Nike Air Max',
  price:120,
  coverImage:{
    src:'/images/shoes1.jpg',
    alt:'Nike Air Max'
  }
},
{
  id:'3',
  category:'Shoes',
  name:'Nike Air Max',
  price:120,
  coverImage:{
    src:'/images/shoes1.jpg',
    alt:'Nike Air Max'
  }
},
{
  id:'4',
  category:'Shoes',
  name:'Nike Air Max',
  price:120,
  coverImage:{
    src:'/images/shoes1.jpg',
    alt:'Nike Air Max'
  }
}
]

export default function Home() {
  return (
   <section className="flex flex-col justify-center items-center">
      <ProductList products={products}/>
    </section>
  );
}
