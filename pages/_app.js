import { useEffect, useState } from 'react'
import axios from '../utils/axios'
import '../public/styles/globals.css'
import Sidebar from '../components/Sidebar'

function MyApp ({ Component, pageProps }) {
  const [appState, setAppState] = useState('dashboard')

  const mounted = async () => {
    try {
      await axios.get('/docker/validate')
    } catch (err) {
      setAppState('install')
    }
  }

  useEffect(() => { mounted() }, [])

  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
        {
          appState === 'dashboard' && <Component {...pageProps} />
        }
      </div>
    </div>
  )
}

export default MyApp
