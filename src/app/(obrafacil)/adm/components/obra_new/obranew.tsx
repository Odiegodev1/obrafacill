"use client"
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormOrcamentoProps {
  onSuccess?: () => void
}

export function ObraNew({onSuccess: onSucces}: FormOrcamentoProps) {

   const router = useRouter()

 
     const form = useForm<FormSchema>({
        resolver: zodResolver(formschema) as any,
        defaultValues: {
          nomeCliente: "",
          telefone: "",
          endereco: "",
          tipoServico: "",
          descricao: "",
          prazoDias: 10,
          valorTotal: 10,
        }})

     const hanndleorcamento = async (data: FormSchema) => {
         const response =   await RegisterOrcamento(data)
         if(response.error){
          toast.error("Erro ao cadastrar obra")
         }
         form.reset();
         router.refresh();
         onSucces?.()
         toast.success("Obra cadastrada com sucesso")
         return;
        }

  return (
    <>
    <Form {...form}>
        <form  onSubmit={form.handleSubmit(hanndleorcamento)} className="space-y-3">
        



     <FormField 
     control={form.control}
     name="nomeCliente"
     render={({field}) => (
        <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Adriana" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

      <FormField 
     control={form.control}
     name="telefone"
     render={({field}) => (
        <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="(22)9999999" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

        <FormField 
     control={form.control}
     name="endereco"
     render={({field}) => (
        <FormItem>
            <FormLabel>Endereço</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Rua av 1 jacone,saquarema-rj" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

           <FormField 
     control={form.control}
     name="tipoServico"
     render={({field}) => (
        <FormItem>
            <FormLabel>Tipo de servico</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Pintura" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

            <FormField 
     control={form.control}
     name="descricao"
     render={({field}) => (
        <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Pintura de telhado" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

       <FormField
          control={form.control}
          name="prazoDias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prazo (dias)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="valorTotal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor Total (R$)</FormLabel>
              <FormControl>
                <Input  step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     
     
      <Button type="submit" className="cursor-pointer">Cadastrar Obra</Button>
   
        </form>
    </Form>
    </>
  );
}
