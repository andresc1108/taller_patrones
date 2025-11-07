export default function TicketCard({ ticket }){
  return (
    <div className="card">
      <div className="card-head">
        <h3>{ticket.tipo}</h3>
        <span className="badge">${ticket.precio}</span>
      </div>
      <p className="muted">Descripción: {ticket.descripcion || 'Entrada estándar'}</p>
    </div>
  )
}