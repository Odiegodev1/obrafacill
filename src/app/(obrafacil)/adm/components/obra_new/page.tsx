"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,

  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { ObraNew } from "./obranew"
import { useState } from "react"

export default function Obras(){
    const [open, setOpen] = useState(false)
    return(
        <>
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild >
                <Button className="">Criar obra</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Novo Orçamento</DialogTitle>
                    <DialogDescription>Orçamento rapido e facil</DialogDescription>
                </DialogHeader>
                <div className="space-y-2">
                    
                     <ObraNew onSuccess={() => setOpen(false)} />
                </div>

            </DialogContent>
        </Dialog>
          
        </>
    )
}