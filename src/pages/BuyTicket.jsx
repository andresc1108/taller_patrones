import { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function BuyTicket(){
  const [tipo, setTipo] = useState('Normal')
  const [cantidad, setCantidad] = useState(1)
  const [metodoPago, setMetodoPago] = useState('PayPal')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await api.post('/comprar', { tipo, cantidad, metodoPago })
      // si tu backend responde con datos de la compra, los pasamos a resumen
      navigate('/resumen', { state: res.data })
    } catch (err) {
      // Si el backend no tiene endpoint, simulamos la respuesta
      const total = (tipo === 'VIP' ? 20000 : tipo === '3D' ? 15000 : tipo === '4D' ? 22000 : tipo === 'Niños' ? 6000 : 10000) * cantidad
      navigate('/resumen', { state: { tipo, cantidad, metodoPago, total } })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Comprar Entradas</h2>

      <label>Tipo de entrada</label>
      <select value={tipo} onChange={e=>setTipo(e.target.value)}>
        <option>Normal</option>
        <option>VIP</option>
        <option>3D</option>
        <option>4D</option>
        <option>Niños</option>
      </select>

      <label>Cantidad</label>
      <input type="number" min="1" value={cantidad} onChange={e=>setCantidad(Number(e.target.value))} />

      <label>Método de pago</label>
      <select value={metodoPago} onChange={e=>setMetodoPago(e.target.value)}>
        <option>PayPal</option>
        <option>Stripe</option>
        <option>Tarjeta</option>
      </select>

      <button className="btn" disabled={loading}>{loading ? 'Procesando...' : 'Comprar'}</button>
    </form>
  )
}