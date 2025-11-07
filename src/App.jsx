import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import BuyTicket from './pages/BuyTicket'
import Payment from './pages/Payment'
import Summary from './pages/Summary'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comprar" element={<BuyTicket />} />
          <Route path="/pago" element={<Payment />} />
          <Route path="/resumen" element={<Summary />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}