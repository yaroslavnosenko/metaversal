import { Post, User } from '@/types'
import { axios } from '@/utils'
import { all } from 'axios'
import { useEffect, useState } from 'react'

export const useRecent = (limit: number) => {
  const [skip, setSkip] = useState(0)
  const [data, setData] = useState<[Post, User][] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const next = () => setSkip((prev) => prev + 5)

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)

    const fetch = async () => {
      try {
        const {
          data: { posts },
        } = await axios.get(
          `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
          {
            signal: controller.signal,
          }
        )

        const users = await all<{ data: User }>(
          posts.map(({ userId }: Post) =>
            axios.get(`https://dummyjson.com/users/${userId}`, {
              signal: controller.signal,
            })
          )
        ).then((responses) => responses.map((res) => res.data))

        const mergedData = posts.map((post: Post, index: number) => [
          post,
          users[index],
        ])

        setData((prev) => (prev ? [...prev, ...mergedData] : mergedData))
      } catch (err) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()

    return () => {
      controller.abort()
    }
  }, [skip, limit])

  return { data, isLoading, error, next }
}
