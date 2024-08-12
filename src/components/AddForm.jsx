
export default function AddForm() {
  return (
    <>
        <div className="hero ">
            <div className="hero-content flex-col w-full lg:flex-row-reverse p-1">
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl ">
                <form className="card-body ">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Nombre</span>
                    </label>
                    <input type="text" placeholder="Nombres y Apellidos" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Documento</span>
                    </label>
                    <input type="text" placeholder="Numero de Documento" className="input input-bordered" required />
                    </div>
                    
                    
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Numero de Ficha</span>
                    </label>
                    <input type="text" placeholder="N° de ficha" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Telefono</span>
                    </label>
                    <input type="password" placeholder="Telefono de contacto" className="input input-bordered" required />
                    
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary ">Inscribirse</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}
