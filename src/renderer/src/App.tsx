import './styles/global.css'

import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Routes } from './Routes'

export function App() {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Routes />
      </div>
    </div>
  )
}
