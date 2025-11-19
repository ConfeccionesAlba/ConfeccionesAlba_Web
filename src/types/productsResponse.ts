export interface IProduct {
  id: number
  name: string
  description: string
  categoryId: number
  priceReference: number
  image: IImage
  isVisible: boolean
}

export interface IProductCreate {
  name: string
  description: string
  categoryId: number
  priceReference: number
  isVisible: boolean
  file: File
}

export interface IProductUpdate {
  id: number
  description: string | null
  categoryId: number | null
  priceReference: number | null
  isVisible: boolean | null
  file: File | null
}

export interface IImage {
  name: string
  url: string
}
