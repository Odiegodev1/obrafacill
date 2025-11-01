"use server";

import { auth } from "@/lib/auth";
import { FormSchema } from "../schema/shema";
import {prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export default async function RegisterOrcamento(data: FormSchema) {
    console.log(data)
    const session = await auth();

    if(!session?.user){
        return{
            data: null,
            error: "Usuário não autenticado"
        }
    }


try{
        const obra = await prisma.obra.create({
        data:{
            nomeCliente: data.nomeCliente,
            telefone: data.telefone,
            endereco: data.endereco,
            tipoServico: data.tipoServico,
            descricao: data.descricao,
            prazoDias: data.prazoDias,
            valorTotal: data.valorTotal,

            user:{
                connect: {
                    id: session.user.id
                }
            }
        }
    }) 
    const linkPublico = `${process.env.NEXT_PUBLIC_SITE_URL}/orcamento/${obra.publicId}`
    console.log(linkPublico)
    revalidatePath("/adm")
    return{
        data: {
            linkPublico,
            obra
        },
        error: null
    }
   

}catch(err){
    console.log(err)
    return{
        data: null,
        error: err
    }
}

}