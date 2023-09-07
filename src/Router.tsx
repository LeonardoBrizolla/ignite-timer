import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLauout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLauout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
