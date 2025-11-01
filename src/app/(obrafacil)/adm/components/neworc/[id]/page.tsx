import NewOrc from "../../neworc/page"

export default async function ObraPage({ params }: { params: { id: string } }) {
  const obraId = parseInt(params.id)

  return (
    <div>
      <h1>Detalhes da Obra</h1>
      <NewOrc obraId={obraId} />  {/* 👈 Aqui passamos o ID da obra */}
    </div>
  )
}
