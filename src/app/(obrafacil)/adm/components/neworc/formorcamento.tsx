"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { formschema, FormSchema } from "./schema/shema";
import RegisterOrcamento from "./actions/get-orcamento";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormOrcamentoProps {
    obraId: number;
    
}

export function FormOrcamento({obraId}: FormOrcamentoProps){
   
const router = useRouter()
 
     const form = useForm<FormSchema>({
        resolver: zodResolver(formschema),
        defaultValues: {
          orcamento: "",
        }})

     const hanndleorcamento = async (data: FormSchema) => {
            console.log(data)
           const response =  await RegisterOrcamento({...data, obraId})
           if(response.error){
            toast.error("Erro ao criar orcamento da obra")
           }
           form.reset();
           router.refresh();
           toast.success("Orcamento criado com sucesso")
           return;
        }
  return (
    <>
    <Form {...form}>
        <form  onSubmit={form.handleSubmit(hanndleorcamento)} className="space-y-3">
        



     <FormField 
     control={form.control}
     name="orcamento"
     render={({field}) => (
        <FormItem>
            <FormLabel className="text-zinc-600">Orçamento do material</FormLabel>
            <FormControl>
                   <Textarea
                   {...field}
                   placeholder="Ex: `10 ripa massaranduba 4 metros, 110 parafuso com 8cm`" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />
     
      <Button  type="submit" className="cursor-pointer w-full">Gerar Orçamento com Ia</Button>
   
        </form>
    </Form>
    </>
  );
}
