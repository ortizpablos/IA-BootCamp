import React from 'react'

export default function QueEsConponent() {
  return (
    <>
        <section class="">
            <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-6">
            <h1 className='text-4xl font-bold text-center mb-4 text-white' id='estrategia'>ESTRATEGIAS</h1>
            
                <div class="grid md:grid-cols-2 gap-8 text-white"> 
                    <div class="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
                        
                        <h2 class=" dark:text-white text-3xl font-extrabold mb-2">BootCamp</h2>
                        <p class="text-lg font-normal mb-4">Un BootCamp es un programa educativo intensivo que varía en duración, desde unas pocas semanas hasta varios meses, y puede ser a tiempo completo o parcial. Su objetivo es proporcionar una formación intensiva en un área específica como desarrollo web, ciencia de datos, inteligencia artificial o ciberseguridad, preparando a los participantes para roles concretos en la industria tecnológica. La estructura del BootCamp incluye un currículo detallado con módulos y lecciones planificadas, abarcando teoría, prácticas y proyectos</p>
                        
                    </div>
                    <div class="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6">
                        
                        <h2 class="dark:text-white text-3xl font-extrabold mb-2 text-white">Hackathon </h2>
                        <p class="text-lg font-normal  mb-4 text-white">Un Hackathon es un evento intensivo y colaborativo que dura normalmente entre 24 y 48 horas, aunque a veces puede extenderse aún más. Su objetivo principal es fomentar la innovación y la colaboración rápida para resolver problemas específicos en un tiempo muy limitado. Los participantes forman equipos y trabajan intensivamente en el desarrollo del proyecto. El evento termina con presentaciones finales y evaluaciones por parte de jueces, algunas veces suele incluir premios que motive de alguna forma a los participantes. </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <hr />
    </>
  )
}
