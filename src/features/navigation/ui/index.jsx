import { Button } from '@/shared/ui/button';
import i18n from '@/shared/config/i18n';
import { ReactComponent as Logotype } from './assets/logotype.svg';
import { ReactComponent as MobileMenu } from './assets/mobileMenu.svg';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

const menuLinks = [
  {
    id: 0,
    title: 'Home',
    path: '/',
  },
  {
    id: 1,
    title: 'About us',
    path: '/about',
  },
  {
    id: 2,
    title: 'Services',
    path: '/services',
  },
  {
    id: 3,
    title: 'Works',
    path: '/works',
  },
];

export const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedLng, setSelectedLng] = useState('en');

  return (
    <nav className={styles.headerContainer}>
      <Link to='/' className={styles.logotype}>
        <Logotype />
      </Link>
      <ul className={styles.menuList}>
        {menuLinks.map(({ title, path }) => (
          <li key={title}>
            <Link to={path} className={styles.menuLink}>
              {t(`navigation.${title}`.toLowerCase())}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.lngList}>
        <Button
          onClick={() => {
            setSelectedLng('ru');
            i18n.changeLanguage('ru');
          }}
          variant='clear'
          className={classNames(styles.ru, selectedLng === 'ru' ? styles.selectedLng : '')}
        >
          Ru
        </Button>
        <Button
          onClick={() => {
            setSelectedLng('en');
            i18n.changeLanguage('en');
          }}
          variant='clear'
          className={classNames(styles.en, selectedLng === 'en' ? styles.selectedLng : '')}
        >
          En
        </Button>
      </ul>
      <Button onClick={() => navigate('/contact')} variant='danger' className={styles.connection}>
        {t(`navigation.button`)}
      </Button>
      <Button variant='clear' className={styles.mobileMenu}>
        <MobileMenu />
      </Button>
    </nav>
  );
};
