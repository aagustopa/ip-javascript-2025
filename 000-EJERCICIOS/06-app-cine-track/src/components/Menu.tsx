import { twMerge } from 'tailwind-merge';
import MenuLink from './MenuLink';
import { user } from '../config/user';

interface Props {
  isHidden?: boolean;
  direction?: 'horizontal' | 'vertical';
}

export default function Menu(props: Props) {
  const { isHidden = false, direction = 'horizontal' } = props;

  const directionClasses = direction === 'vertical' ? 'flex-col' : '';

  const hiddenClasses = isHidden ? 'hidden md:flex' : 'flex';

  const classes = `items-center gap-4 ${directionClasses} ${hiddenClasses} *:[&.active]:text-blue`;

  return (
    // *:[&.active]:font-bold en nav
    <nav className={classes}>
      {!user && <MenuLink href="/login">Login</MenuLink>}
      {!user && <MenuLink href="/register">Registro</MenuLink>}
      {/* {user && <MenuLink href="/my-movies">Mis películas</MenuLink>} */}
      {user && <MenuLink href="/user">Perfil</MenuLink>}
      {user && <MenuLink href="/user/my-movies">Movies</MenuLink>}
      {/* <MenuLink href="/user">User</MenuLink>
      <MenuLink href="/user/my-movies">Movies</MenuLink> */}
    </nav>
  );
}
