import EcardComponent from "./EcardComponent";



export default function BannerCompoenent() {
  return (
    <>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0">
                <EcardComponent />
                <div className="mt-5">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <h1 className="text-4xl font-bold text-white pt-3">Bootcamp y Hackathon</h1>
                <h2 className="text-2xl font-bold text-white pt-0.5">en Inteligencia Artificial</h2>
                <p className=" text-1xl py-4 text-white">
                   <i> Serán días cargados de conocimiento que te permitirán Adquirir habilidades técnicas y socioemocionales "Todo un Reto" </i> 
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
