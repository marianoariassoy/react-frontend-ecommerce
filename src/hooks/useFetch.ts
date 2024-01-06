import { useState, useEffect } from 'react'
const apiUrl = 'http://localhost:8080/api'
// const apiUrl = 'https://backendcoderhouse-dev-rqpj.2.us-1.fl0.io/api'
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

  return { data, loading, setLoading, error }
}

export default useFetch
