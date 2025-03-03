import { useParams } from "react-router";
import "../SubMenu/Submenu.css";
import Parametros from "../parametros/Parametros";
import Indicadores from "../Indicadores/Indicadores";
import Grafica from "../grafica/Grafica";
import { Suspense, useState } from "react";


const items = [
  { name: "Parámetros", path: "parametros" },
  { name: "Indicadores", path: "indicadores" },
  { name: "Gráfica", path: "grafica" },
];

const Submenu: React.FC = () => {
  const { id } = useParams(); // Obtiene el ID de la URL

  const [tag, setTag] = useState<any>('parametros');
  const handleClick = (tag: any) => {
    setTag(tag);
    console.log(tag);
    console.log(id);
    }

  // Determinar qué componente renderizar según el ID
  let ComponentToRender;
  if (tag === "parametros") ComponentToRender = Parametros;
  else if (tag === "indicadores") ComponentToRender = Indicadores;
  else if (tag === "grafica") ComponentToRender = Grafica;
  else ComponentToRender = () => <h2>Selecciona una opción</h2>;

  return (
    <div>
      {/* Menú de navegación */}
      <div className="menu">
        {items.map((item) => (
          <button key={item.path} className="menu-item" onClick={() => handleClick(item.path)}>
            {item.name}
          </button>
        ))}
      </div>

      {/* Renderiza el componente correspondiente */}
      <Suspense fallback={<div>Cargando...</div>}>
      <ComponentToRender id={id} />
      </Suspense>
    </div>
  );
};

export default Submenu;

