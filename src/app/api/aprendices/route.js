import connectMongoDB from "@/libs/mongodb";
import Aprendiz from "@/models/AprendizModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name, document, ficha, email, phone} = await request.json();
    await connectMongoDB();
    await Aprendiz.create({name, document, ficha, email, phone});
    return NextResponse.json({message: "Aprendiz Registrado con exito"}, {status: 201});
}