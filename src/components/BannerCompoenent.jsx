import AddForm from "./AddForm";


export default function BannerCompoenent() {
  return (
    <>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <AddForm />
                <div className="mt-5">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1 className="text-5xl font-bold text-white pt-3">Bootcamp y Hackathon</h1>
                <h2 className="text-4xl font-bold text-white pt-0.5">en Inteligencia Artificial</h2>
                <p className=" text-2xl py-4 text-white">
                    Serán días cargados de conocimiento que te permitirán Adquirir habilidades técnicas y socioemocionales "Todo un Reto" 
                    </p>   
                    <p className="text-4xl font-bold text-white">
                    ¡Te esperamos!!
                    </p>
                
                </div>
            </div>
        </div>
    </>
  )
}
