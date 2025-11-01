"use client"

import { Copy } from "lucide-react"

interface Props {
  link: string
}

export default function CopiarLinkBotao({ link }: Props) {
  const copiar = async () => {
    await navigator.clipboard.writeText(link)
    alert("✅ Link público copiado! Envie ao cliente.")
  }

  return (
    <button
      onClick={copiar}
      className="bg-gray-200 px-2 cursor-pointer py-2 rounded-lg hover:bg-gray-300"
    >
      <Copy />
    </button>
  )
}
