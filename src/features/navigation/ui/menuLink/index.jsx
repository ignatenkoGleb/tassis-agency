import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const MenuLink = ({ title, path }) => {
  const { t } = useTranslation();

  return (
    <li key={title}>
      <Link to={path} className={styles.menuLink}>
        {t(`navigation.${title}`.toLowerCase())}
      </Link>
    </li>
  );
};
