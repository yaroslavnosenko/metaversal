export type User = {
  id: number
  firstName: string
  lastName: string
  username: string
  address: {
    city: string
    country: string
  }
  company: {
    department: string
  }
}

export type Post = {
  id: number
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}
