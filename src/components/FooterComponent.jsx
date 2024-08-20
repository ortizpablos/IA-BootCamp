import Image from "next/image"
import Link from "next/link"
export default function FooterComponent() {
  return (
    <>
        <footer className="footer footer-center text-base-content rounded p-10">
        <h1 className='text-4xl font-bold text-center text-white className="m-0"' id='estrategia'>ÚNETE AL GRUPO</h1>
            
          <section className="m-0 p-0">
          <Image
              src="/qr.png"
              alt="qr"
              className="dark:invert m-0 p-0"
              width={400}
              height={24}
              priority
            />
          </section>
          
          <Link className="text-white" href="https://chat.whatsapp.com/IAPeyPpZCch5R6dmTiS9FL">o haz clic Aquí para Unirte al Grupo</Link>
          <hr />
          <aside className="text-white">
            <p>Copyright © {new Date().getFullYear()} - Todos los derechos reservados SENA</p>
            <p>Centro de Teleinformatica y Produccion Industrial</p>
            <p>Regional - Cauca</p>
          </aside>
    </footer>
    </>
  )
}
