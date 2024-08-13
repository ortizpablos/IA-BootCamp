

export default function DescripcionComponent() {
  return (
    <>

        <section className="flex flex-wrap">
        <div className="card card-compact bg-base-100  shadow-xl"> 
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </section>
        <section className="bg-base-300 pt-5">
        <h1 className="">ESTRATEGIAS</h1>
        <br />
        <div className="flex flex-wrap">
            <p className="w-1/2 m-2">Un BootCamp es un programa educativo intensivo que varía en duración, desde unas pocas semanas hasta varios meses, y puede ser a tiempo completo o parcial. Su objetivo es proporcionar una formación intensiva en un área específica como desarrollo web, ciencia de datos, inteligencia artificial o ciberseguridad, preparando a los participantes para roles concretos en la industria tecnológica. </p>
            
            <p className="w-1/2 m-2">Un Hackathon es un evento intensivo y colaborativo que dura normalmente entre 24 y 48 horas, aunque a veces puede extenderse aún más. Su objetivo principal es fomentar la innovación y la colaboración rápida para resolver problemas específicos en un tiempo muy limitado</p>
        </div>
        </section>
    </>
  )
}
