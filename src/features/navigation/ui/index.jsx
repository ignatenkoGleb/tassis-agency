import { Button } from '@/shared/ui/button';
import { ReactComponent as Logotype } from './assets/logotype.svg';
import { ReactComponent as MobileMenu } from './assets/mobileMenu.svg';
import styles from './index.module.scss';

const menuLinks = [
  {
    id: 0,
    title: 'Home',
    path: '',
  },
  {
    id: 1,
    title: 'About us',
    path: '',
  },
  {
    id: 2,
    title: 'Services',
    path: '',
  },
  {
    id: 3,
    title: 'Works',
    path: '',
  },
];

export const Navigation = () => {
  return (
    <nav className={styles.headerContainer}>
      <a className={styles.logotype}>
        <Logotype />
      </a>
      <ul className={styles.menuList}>
        {menuLinks.map(({ title }) => (
          <li key={title}>
            <a className={styles.menuLink}>{title}</a>
          </li>
        ))}
      </ul>
      <ul className={styles.lngList}>
        <Button variant='clear' className={styles.ru}>
          Ru
        </Button>
        <Button variant='clear' className={styles.en}>
          En
        </Button>
      </ul>
      <Button variant='danger' className={styles.connection}>
        Contact us
      </Button>
      <Button variant='clear' className={styles.mobileMenu}>
        <MobileMenu />
      </Button>
    </nav>
  );
};
