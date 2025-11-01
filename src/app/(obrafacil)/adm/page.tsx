
import { HardHat } from "lucide-react";
import { Cardcontent } from "./components/cardContent";
import Obras from "./components/obra_new/page";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";



export default async function Adm(){
  const session = await auth();

  if(!session?.user){
      redirect("/")
  }
    return(
       <section className="flex flex-col  w-full min-h-screen">
         <header className="border-b p-5 py-7 justify-between border-orange-200 h-12 w-full flex items-center ">
            <div className=" flex items-center gap-2">
                <div className="flex justify-center items-center p-2 size-12 bg-orange-400 rounded-md">
                    <HardHat className="text-white" />
                </div>
                <h1 className="text-2xl font-extrabold">Obra Facil</h1>
            </div>
          <Obras />
         </header>
         <main className="flex flex-col items-start px-5 py-8 ">
             <Cardcontent />
            
             
         </main>

       </section>
    )
}