export interface SearchParams {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export interface ProductNode {
  node: ProductType
}

export interface ProductNodeData {
  data: ProductNode
}

export interface ProductData {
  data: ProductType
}

export interface RelatedProductData {
  data: ProductNode[]
}

export interface ProductType {
  id: string
  title: string
  handle: string
  description: string
  images: {
    edges: {
      node: {
        altText: string
        transformedSrc: string
      }
    }[]
  }
  priceRange: {
    minVariantPrice: {
      amount: string
    }
  }
  productType: string
  tags: []
  variants: {
    edges: {
      node: {
        id: string
        quantityAvailable: number
      }
    }[]
  }
}

export interface CartType {
  data: ProductType
  orderQuantity: number
}

export interface ImagesType {
  images: {
    node: {
      transformedSrc: string
      altText: string
    }
  }[]
}

export interface Images {
  node: {
    transformedSrc: string
    altText: string
  }
}
