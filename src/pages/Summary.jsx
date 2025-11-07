import { useLocation } from 'react-router-dom'

export default function Summary(){
  const { state } = useLocation()
  const compra = state || { tipo: 'Normal', cantidad: 1, metodoPago: 'PayPal', total: 10000 }

  return (
    <div className="summary">
      <h2>🎉 Compra exitosa</h2>
      <div className="summary-card">
        <p><strong>Tipo:</strong> {compra.tipo}</p>
        <p><strong>Cantidad:</strong> {compra.cantidad}</p>
        <p><strong>Método:</strong> {compra.metodoPago}</p>
        <p className="total"><strong>Total pagado:</strong> ${compra.total}</p>
      </div>
      <p className="muted">Gracias por tu compra. Esta es una integración frontend que usa el backend desplegado.</p>
    </div>
  )
}