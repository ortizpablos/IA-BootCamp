

export default function MentoresComppenent() {
  return (
    <>
       <section className="">
       <h1 className='text-4xl font-bold text-center mt-4 text-white'>COLABORADORES</h1>
        <section className="flex flex-wrap py-2 px-4 mx-auto max-w-screen-xl lg:py-6">
    
        <div className="card bg-base-50 w-96 shadow-xl m-2">
            <figure className="px-5 pt-5 w-80 h-96 m-auto">
                <img
                src="./pablo.jpg"
                alt="Mentor"
                className="rounded-xl max-w-full max-h-full" />
            </figure>
            <div className="card-body items-center leading-3 text-white">
                <h2 className="card-title">Pablo Antonio Ortiz G</h2>
                <p>Ingeniero de Sistenas</p>
                <p>Regional Cauca</p>
                <p>Mentor</p>
            </div>
        </div>
        <div className="card bg-base-50 w-96 shadow-xl m-2 ">
            <figure className="px-5 pt-5 w-80 h-96 m-auto">
                <img
                src="./coral.jpg"
                alt="Mentor"
                className="rounded-xl max-w-full max-h-full" />
            </figure>
            <div className="card-body items-center leading-3 text-white">
                <h2 className="card-title">Jorge Andres Coral T</h2>
                <p>Ingeniero de Sistemas</p>
                <p>Regional Cauca</p>
                <p>Mentor</p>
            </div>
        </div>

        <div className="card bg-base-50 w-96 shadow-2xl m-2">
            <figure className="px-5 pt-5 w-80 h-96 m-auto">
                <img
                src="./users.jpg"
                alt="Mentor"
                className="rounded-xl max-w-full max-h-full" />
            </figure>
            <div className="card-body items-center leading-3 text-white">
                <h2 className="card-title">Alberto Cortes Campo</h2>
                <p>Ingeniero de Sistemas</p>
                <p>Regional Cauca</p>
                <p>Certificacion de Competencias</p>
            </div>
        </div>

        <div className="card bg-base-50 w-96 shadow-xl m-2">
            <figure className="px-5 pt-5 w-80 h-96 m-auto">
                <img
                src="./users.jpg"
                alt="Mentor"
                className="rounded-xl max-w-full max-h-full" />
            </figure>
            <div className="card-body items-center leading-3 text-white">
                <h2 className="card-title">James D</h2>
                <p>Ingeniero de Sistemas</p>
                <p>Regional Cauca</p>
                <p>Certificacion de Competencias</p>
            </div>
        </div>     
        </section>
        </section>
        <hr />
    </>
  )
}
