import './App.css'
import useAxios from './customHooks/useAxios'

export default function App() {
  const {data, error, loading} = useAxios({url:'./posts/1', method: 'get',body: null, headers: null})
  console.log(data, "data")     
  console.log(error, "error")
  console.log(loading, "loading")
  return (
    <main>
      React ⚛️ + Vite ⚡    </main>
  )
}
