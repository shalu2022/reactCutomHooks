import React, { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const useAxios = (configParams)=>{
const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)



  async function fetchData(){
await axios(configParams).then(res=>setData(res.data)).catch(err=>setError(err)).finally(()=>setLoading(false))
  }


  useEffect(()=>{
    fetchData()
  }, [])

  return {data, error, loading}
}

export default useAxios;