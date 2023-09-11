import { useState, useEffect } from 'react'
const apiUrl = 'https://coderhouse-backend-tkm8-dev.fl0.io'
import axios from 'axios'

type Data = string

function useFetch(url: Data) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error] = useState(null)

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
  }, [url])

  return { data, loading, error }
}

export default useFetch
