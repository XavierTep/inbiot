import Parametros from "../../includes/parametros/Parametros"
import  Indicadores from "../../includes/Indicadores/Indicadores"
import  Grafica from "../../includes/grafica/Grafica"


 

export default function ContentPage() {
  return (
    <div>
    <Grafica />
      <Indicadores />
      <Parametros />
    </div>
  );
  
}

