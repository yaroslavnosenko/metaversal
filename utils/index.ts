import Axios from 'axios'
import { buildWebStorage, setupCache } from 'axios-cache-interceptor'

const isBrowser = typeof window !== 'undefined'

const instance = Axios.create()
export const axios = setupCache(instance, {
  storage: isBrowser ? buildWebStorage(localStorage, 'cache:') : undefined,
})
