import { useState, useEffect } from 'react'
import { useDataContext } from './useUserContext'
import axios from 'axios'

function useFetch(url: string) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error] = useState(null)
  const { apiUrl } = useDataContext()

  useEffect(() => {
    async function fetchData() {
      try {
        const urlOk = apiUrl + url
        const response = await axios.get(urlOk)
        const { payload } = await response.data
        setData(payload)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url, apiUrl])

  return { data, loading, setLoading, error }
}

export default useFetch
