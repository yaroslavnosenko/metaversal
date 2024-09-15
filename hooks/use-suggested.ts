import { Post, User } from '@/types'
import { axios } from '@/utils'
import { all } from 'axios'
import { useEffect, useState } from 'react'

export const useSuggested = () => {
  const [data, setData] = useState<[Post, User][] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetch = async () => {
      setIsLoading(true)
      try {
        const {
          data: { posts },
        } = await axios.get('https://dummyjson.com/posts?limit=2', {
          signal: controller.signal,
        })

        const users = await all<{ data: User }>(
          posts.map(({ userId }: Post) =>
            axios.get('https://dummyjson.com/users/' + userId, {
              signal: controller.signal,
            })
          )
        ).then((responses) => responses.map((res) => res.data))

        const mergedData = posts.map((post: Post, index: number) => [
          post,
          users[index],
        ])

        setData(mergedData)
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
  }, [])

  return { data, isLoading, error }
}
