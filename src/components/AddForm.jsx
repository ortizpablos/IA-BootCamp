"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddForm() {
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [ficha, setFicha] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const router = useRouter();

    const limpiarFormulario = () => {
        setName("");
        setDocument("");
        setFicha("");
        setEmail("");
        setPhone("");
    };
    
    const handleSubmit  = async (e) =>{
        e.preventDefault();
        
            try {
            const res = await fetch("http://localhost:3000/api/aprendices", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, document, ficha, email, phone }),
            });

            if (res.ok) {
                toast.success('¡Inscripción exitosa!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                router.refresh();
                limpiarFormulario();
            } else {
                throw new Error(data.message || "Error al registrar el aprendiz");
            }
            
        } catch (error) {
                console.log(error);
                toast.error('El Aprediz ya Existe', error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }

    };

  return (
    <>
        <ToastContainer />
        <div className="hero ">
            <div className="hero-content flex-col w-full lg:flex-row-reverse p-1">
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl ">

                <form  onSubmit={handleSubmit} className="card-body ">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Nombre</span>
                    </label>
                    <input onChange={(e) => setName(e.target.value)}
                    value={name} type="text" placeholder="Nombres y Apellidos" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Documento</span>
                    </label>
                    <input onChange={(e) => setDocument(e.target.value)}
                     value={document} type="number" placeholder="Numero de Documento" className="input input-bordered" required />
                    </div> 

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Numero de Ficha</span>
                    </label>
                    <input onChange={(e) => setFicha(e.target.value)}
                     value={ficha} type="number" placeholder="N° de ficha" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)}
                    value={email} type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Telefono</span>
                    </label>
                    <input onChange={(e) => setPhone(e.target.value)}
                    value={phone} type="number" placeholder="Telefono de contacto" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary ">Inscribirse</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}
