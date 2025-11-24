import Logo from './Logo';
import Menu from './Menu';

import { SlMenu } from 'react-icons/sl';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router';
// import { useContext } from 'react';

export default function Header() {
  // TODO: Implementar un estado que guardará true o false si el Sidebar está abierto o no

  // function sideBarMenu() {
  //   console.log('menu clickado');
  //   <Sidebar />
  // }
  // const context = useContext(UserContext);

  return (
    <>
      <header className="flex gap-4 px-16 py-4 items-center justify-between">
        <NavLink to={"/"}>
          <Logo size="xl" />
        </NavLink>
        <Menu isHidden />
        <Sidebar />
        <button
          type="button"
          className="text-4xl md:hidden"
          aria-label="Abrir menú"
        // onClick={sideBarMenu}
        >
          <SlMenu />
        </button>
      </header>
    </>
  );
}
