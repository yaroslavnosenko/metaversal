import { User } from '@/types'
import { axios } from '@/utils'
import { useEffect, useState } from 'react'

export const useFollow = () => {
  const [data, setData] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()

    axios('https://dummyjson.com/users?limit=4', { signal: controller.signal })
      .then((res) => setData(res.data.users))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))

    return () => {
      controller.abort()
    }
  }, [])

  return { data, isLoading, error }
}
