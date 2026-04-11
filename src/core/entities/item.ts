export type Item = {
  id: string
  title: string
  updatedAt: string
}

export const createItem = (item: Item): Item => item
