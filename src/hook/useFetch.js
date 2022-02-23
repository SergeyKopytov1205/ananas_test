import { useState, useEffect, useCallback } from "react"
import axios from "axios";

const useFetch = (url) => {
   const baseUrl = 'https://suggestions.dadata.ru/suggestions/api'

   const [response, setResponse] = useState(null)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const [options, setOptions] = useState({})
   const token = "5181552b08aa901fd6a78656c53e8e79f088f56c"

   const doFetch = useCallback((options) => {
      setIsLoading(true)
      setOptions(options)
   }, [])

   useEffect(() => {
      let skipGetResponseAfterDestroy = false
      const requestOptions = {
         ...options,
         ...{
            mode: "cors",
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json",
               "Authorization": "Token " + token
            }
         }
      }
      if (!isLoading) return

      axios(baseUrl + url, requestOptions)
         .then(res => {
            if (!skipGetResponseAfterDestroy) {
               setResponse(res.data)
               setIsLoading(false)
            }
         })
         .catch(error => {
            if (!skipGetResponseAfterDestroy) {
               setError(error.response.data)
               setIsLoading(false)
            }
         })
      return () => {
         skipGetResponseAfterDestroy = true
      }
   }, [isLoading, options, url, token])

   return [{ response, isLoading, error }, doFetch]
}

export default useFetch