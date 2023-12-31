/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n      images {\n        id\n        url\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query GetCollectionSlug($slugName: String!) {\n  collections(where: {slug: $slugName}) {\n    slug\n    name\n    products(first: 10) {\n      name\n      id\n      images(first: 1) {\n        url\n      }\n      price\n      description\n      slug\n    }\n  }\n}": types.GetCollectionSlugDocument,
    "query CollectionGetCategory {\n  collections {\n    slug\n    name\n    image {\n      url\n    }\n  }\n}": types.CollectionGetCategoryDocument,
    "query ProductGetById($id: ID!) {\n  products(where: {id: $id}) {\n    ...SingleProduct\n  }\n}": types.ProductGetByIdDocument,
    "fragment SingleProduct on Product {\n  id\n  name\n  description\n  price\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n    width\n    height\n  }\n  reviews {\n    rating\n    content\n  }\n}": types.SingleProductFragmentDoc,
    "query ProductGetList($search: String!, $orderBy: ProductOrderByInput!) {\n  products(first: 10, where: {_search: $search}, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}": types.ProductGetListDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductGetByCategorySlug($slug: String!, $pageNum: Int!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: 4, skip: $pageNum) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n      images {\n        id\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollectionSlug($slugName: String!) {\n  collections(where: {slug: $slugName}) {\n    slug\n    name\n    products(first: 10) {\n      name\n      id\n      images(first: 1) {\n        url\n      }\n      price\n      description\n      slug\n    }\n  }\n}"): typeof import('./graphql').GetCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetCategory {\n  collections {\n    slug\n    name\n    image {\n      url\n    }\n  }\n}"): typeof import('./graphql').CollectionGetCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  products(where: {id: $id}) {\n    ...SingleProduct\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProduct on Product {\n  id\n  name\n  description\n  price\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n    width\n    height\n  }\n  reviews {\n    rating\n    content\n  }\n}"): typeof import('./graphql').SingleProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($search: String!, $orderBy: ProductOrderByInput!) {\n  products(first: 10, where: {_search: $search}, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCategorySlug($slug: String!, $pageNum: Int!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: 4, skip: $pageNum) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
