import CollapsibleTree from "./collapsible-tree"
import { useApi } from "./example-data"

export default function Homer() {
  const { exampleData } = useApi();

  return (
    <div className="p-6 md:p-8 ">
      <h1 className="text-3xl md:text-4xl font-bold text-left text-neutral-800 mb-6">Lista de Dispositivos</h1>

      <CollapsibleTree hospitals={exampleData} />
    </div>
  )
}

