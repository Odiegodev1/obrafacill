import {
  Dialog,

  DialogContent,


  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Locate, PhoneCall, User } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import Orcamento_mao from "@/app/(obrafacil)/orcamento/page";



interface ObraDialogProps {
  obra: {
    id: number
    nomeCliente: string
    telefone: string
    endereco: string
    tipoServico: string
    descricao: string
    prazoDias: number
    valorTotal: number
  }
}

export function DialogApp({obra}: ObraDialogProps){

    return(
        <>
          <Dialog >
                     
            
                        <DialogTrigger asChild >
                             <Button className="w-full">Ver mais</Button>
                        </DialogTrigger>
                        <DialogContent >
                            <DialogHeader>
                                <DialogTitle>{obra.tipoServico}</DialogTitle>
                                
                            </DialogHeader>
                            <Tabs defaultValue="orcamento">
                               <TabsList className=" bg-amber-500">
                                 <TabsTrigger className="cursor-pointer" value="orcamento">Orçamento</TabsTrigger>
                                <TabsTrigger className="cursor-pointer" value="processobra">Processo da Obra</TabsTrigger>
                           </TabsList>
                           <TabsContent value="orcamento">
                                <div className=" flex flex-col gap-3 text-sm text-zinc-600">
                                <p className="flex items-center gap-1"><User/>Nome: {obra.nomeCliente}</p>
                                <p className="flex items-center gap-1"><PhoneCall/>Telefone: {obra.telefone}</p>
                                 <p className="flex items-center gap-1"><Locate/>Endereço: {obra.endereco}</p>
                             
                            </div>
                            <div>
                               <h1>Detalhes do Orçamento</h1>
                               <div className=" mt-2 text-zinc-600 text-sm space-y-1">
                                <p>Tipo de Serviço: {obra.tipoServico}</p>
                                <p>Descrição do serviço: {obra.descricao}</p>
                                <p>Prazo Estimado de entrega: {obra.prazoDias} Dias de Trabalho</p>
                               </div>
                            </div>
                            <div>
                                <h1>Material</h1>
                                <div className="">
                                   <Orcamento_mao obraId={obra.id} />
                                </div>
                            </div>
                            <div>
                                <h1>Mão de Obra</h1>
                                <div className="px-4">
                                    
                                    <p> Mão de obra: R$ {obra.valorTotal.toFixed(2)}</p>
                                </div>
                            </div>
                           </TabsContent>
                           <TabsContent value="processobra">
                            <h1 className="mt-2 mb-2">Fotos</h1>
                             <div className="space-y-4">
                                 
                             Em desenvolvimento
                             </div>
                          
                           </TabsContent>
                           
                            </Tabs>
                           
                           
                        </DialogContent>
                    </Dialog></>
    )
}