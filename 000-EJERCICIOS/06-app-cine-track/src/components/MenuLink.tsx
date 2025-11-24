import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface Props {
  href: string;
  children: ReactNode;
}

export default function MenuLink(props: Props) {
  return (
    // <a className="text-xl font-montserrat font-bold" href={props.href}>
    // {props.children}
    // </a>  
    <NavLink className="text-xl font-montserrat font-bold" to={props.href}>
      {props.children}
    </NavLink>

  );
}
