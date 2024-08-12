import AgendaCompoenent from "@/components/AgendaCompoenent";
import BannerCompoenent from "@/components/BannerCompoenent";
import FooterComponent from "@/components/FooterComponent";
import FooterCompoenent from "@/components/FooterComponent";
import NavCompoenent from "@/components/NavCompoenent";


export default function Home() {
  return (
    <>
        <section className="  bg-[url('/fondo2.svg')] bg-cover bg-no-repeat">
        <header>
            <NavCompoenent />
        </header>
        <main>
            <BannerCompoenent />
        </main>
        </section>
        <section>
            <AgendaCompoenent />
        </section>
        <footer>
            <FooterComponent />
        </footer>

    </>
  )
}
