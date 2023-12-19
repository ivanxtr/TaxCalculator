import { RETRY_COUNT } from '@/constants'

export const fetcher = async (url: string, options?: Record<string, never>) => {
  let count = RETRY_COUNT
  while (count > 0) {
    try {
      const response = await fetch(url, {
        ...options
      })
      const data = await response.json()
      if (data?.errors) throw new Error(data.errors[0].message)
      return data
    } catch (error) {
      // thorw error if it's the last retry
      if (count === 5)
        throw new Error('Something went wrong, please try again later' + error)
    }

    count -= 1
  }

  throw new Error(`Fetch call failed ${RETRY_COUNT} times`)
}
