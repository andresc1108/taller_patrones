import { useEffect, useState } from 'react'
import api from '../services/api'
import TicketCard from '../components/TicketCard'

export default function Home(){
  const [config, setConfig] = useState(null)
  const [tickets, setTickets] = useState([])

  useEffect(()=>{
    // Intentamos obtener configuración y lista de tipos (si tu backend expone esas rutas)
    api.get('/configuracion').then(r=> setConfig(r.data)).catch(()=>{})
    api.get('/tickets').then(r=> setTickets(r.data)).catch(()=>{})
  },[])

  return (
    <div className="home">
      <section className="hero">
        <h2>{config?.nombre || 'Cine Patrón'}</h2>
        <p className="lead">Compra tus entradas fácil y rápido. Diseño moderno y responsivo.</p>
        <div className="hero-actions">
          <a href="/comprar" className="btn">Comprar Ahora</a>
          <a href="/resumen" className="btn ghost">Ver resumen</a>
        </div>
      </section>

      <section className="cards-grid">
        {tickets.length ? tickets.map(t => <TicketCard key={t.tipo} ticket={t} />) : (
          <div className="card placeholder">
            <h3>Normal</h3>
            <span className="badge">$10000</span>
            <p className="muted">Normal, VIP, 3D, 4D, Niños — tu backend puede enviar estos tipos.</p>
          </div>
        )}
      </section>
    </div>
  )
}