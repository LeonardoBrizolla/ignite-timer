import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLauout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
