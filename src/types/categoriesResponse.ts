export interface ICategory {
  id: number
  name: string
  description: string
}

export interface ICategoryCreate {
  name: string
  description: string
}

export interface ICategoryUpdate {
  id: number
  description: string
}
