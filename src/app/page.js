import AgendaCompoenent from "@/components/AgendaCompoenent";
import BannerCompoenent from "@/components/BannerCompoenent";
import CarruselComponent from "@/components/CarruselComponent";
import CarruselDia04Component from "@/components/CarruselDia04Component";
import CarruselDiaDos from "@/components/CarruselDiaDos";
import CarruselDiaTresComponent from "@/components/CarruselDiaTresComponent";
import DescripcionComponent from "@/components/DescripcionComponent";
import FooterComponent from "@/components/FooterComponent";


import MentoresComppenent from "@/components/MentoresComppenent";
import NavCompoenent from "@/components/NavCompoenent";
import QueEsConponent from "@/components/QueEsConponent";


export default function Home() {
  return (
    <>
            <section className="  bg-[url('/fondo3.svg')] bg-cover bg-no-repeat">
            <header>
                <NavCompoenent />
            </header>
            <main>
                <BannerCompoenent />
            </main>
            </section>
            <section className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
                    <section>
                        <QueEsConponent />
                    </section>
                    <section>
                        <AgendaCompoenent />
                    </section>
                    <section>
                        <MentoresComppenent />
                    </section>
                    <section>
                        <CarruselComponent />
                    </section>
                    <section>
                        <CarruselDiaDos />
                    </section>
                    <section>
                        <CarruselDiaTresComponent />
                    </section>
                    <section>
                        <CarruselDia04Component />
                    </section>
                    <footer>
                        <FooterComponent />
                    </footer>
            </section>
                    
                   

    </>
  )
}
