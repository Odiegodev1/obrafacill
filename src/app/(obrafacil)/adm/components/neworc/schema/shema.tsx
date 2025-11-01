import z from "zod";

export const formschema = z.object({
       orcamento:z.string().min(1, {
        message: "Orcamento deve ser obrigatorio",
       }) 
    })

export type FormSchema = z.infer<typeof formschema>;