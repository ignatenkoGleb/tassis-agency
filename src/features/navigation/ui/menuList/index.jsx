import { MenuLink } from '../menuLink';
import styles from './index.module.scss';

export const MenuList = ({ menuLinks }) => {
  return (
    <ul className={styles.menuList}>
      {menuLinks.map(({ title, path }) => (
        <MenuLink key={title} title={title} path={path} />
      ))}
    </ul>
  );
};
