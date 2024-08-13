import connectMongoDB from "@/libs/mongodb";
import Aprendiz from "@/models/AprendizModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, document, ficha, email, phone } = await request.json();
        await connectMongoDB();

        // Verificar si ya existe un aprendiz con el mismo documento o email
        const existingAprendiz = await Aprendiz.findOne({ $or: [{ document }, { email }] });

        if (existingAprendiz) {
            // Si existe, devolver un error
            return NextResponse.json(
                { message: "El aprendiz ya está registrado" },
                { status: 400 }
            );
        }

        // Si no existe, crear el nuevo aprendiz
        await Aprendiz.create({ name, document, ficha, email, phone });
        return NextResponse.json(
            { message: "Aprendiz Registrado con éxito" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error al registrar el aprendiz", error: error.message },
            { status: 500 }
        );
    }
}




/* import connectMongoDB from "@/libs/mongodb";
import Aprendiz from "@/models/AprendizModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name, document, ficha, email, phone} = await request.json();
    await connectMongoDB();
    await Aprendiz.create({name, document, ficha, email, phone});
    return NextResponse.json({message: "Aprendiz Registrado con exito"}, {status: 201});
} */