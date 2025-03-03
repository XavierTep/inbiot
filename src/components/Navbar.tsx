//YA NO ESTA EN USO PORQUE SE REEMPLAZO POR EL COMPONENTE NAVBaR
import { Link } from "react-router"




const Navbar = ({ links }: any) => {
  return (
    <nav className='w-full flex justify-between items-center p-4'>
      <ul>
        {links.map((link: any) => (
          <li key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
