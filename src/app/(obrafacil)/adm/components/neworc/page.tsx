import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { FormOrcamento } from "./formorcamento"

export default async function NewOrc({ obraId }: { obraId: number }) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-8">Novo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo Orçamento</DialogTitle>
            <DialogDescription>Orçamento rápido e fácil</DialogDescription>
          </DialogHeader>
          <div className="px-2 space-y-2">
            <FormOrcamento obraId={obraId} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
