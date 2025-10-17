import React from 'react'
import './style.css'

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src="/logo.png" alt="Aromas Artesanales" className="logo" />
        <h1>Aromas Artesanales</h1>
        <p className="slogan">Hecho con amor por Aromas Artesanales 🌿</p>
      </header>

      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#sobre-nosotros">Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <section id="inicio" className="section">
        <h2>Bienvenidos</h2>
        <p>Descubre la magia de nuestros jabones artesanales, elaborados con ingredientes naturales, amor y dedicación.</p>
      </section>

      <section id="productos" className="section">
        <h2>Nuestros Productos</h2>
        <ul className="product-list">
          <li>Jabón Herbal</li>
          <li>Jabón de Avena</li>
          <li>Jabón de Carbón Activado</li>
          <li>Jabón de Arroz</li>
          <li>Jabón de Rosa</li>
        </ul>
        <button className="buy-btn" onClick={() => window.location.href='https://wa.me/573054189387'}>
          🛒 Ir a comprar
        </button>
      </section>

      <section id="sobre-nosotros" className="section">
        <h2>Sobre Nosotros</h2>
        <p>Somos un emprendimiento apasionado por el cuidado natural de la piel. En Aromas Artesanales elaboramos cada jabón con ingredientes seleccionados, brindando bienestar y armonía en cada fragancia.</p>
      </section>

      <footer className="footer">
        <p>Hecho con amor por Aromas Artesanales 🌿</p>
        <a href="https://wa.me/573054189387">WhatsApp</a> | <a href="#">Nequi</a>
      </footer>
    </div>
  )
}