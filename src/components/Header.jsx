import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="logo">🎬 Cine Patrón</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/comprar">Comprar</Link>
          <Link to="/resumen">Resumen</Link>
        </nav>
      </div>
    </header>
  )
}