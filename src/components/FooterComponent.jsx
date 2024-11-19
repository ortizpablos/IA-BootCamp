import Image from "next/image"
import Link from "next/link"
export default function FooterComponent() {
  return (
    <>
        <footer className="footer footer-center text-base-content rounded p-10">
        
            
                
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
