import classNames from 'classnames';
import i18next from 'i18next';
import { useState } from 'react';
import i18n from '@/shared/config/i18n';
import { Button } from '../button';
import styles from './index.module.scss';

export const LngSwitcher = ({ className }) => {
  const [selectedLng, setSelectedLng] = useState(i18next.language);

  const changeLanguage = (lng) => {
    setSelectedLng(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classNames(styles.lngSwitcher, className)}>
      <Button
        onClick={() => changeLanguage('ru')}
        variant='clear'
        className={classNames(selectedLng === 'ru' ? styles.selectedLng : '')}
      >
        Ru
      </Button>
      <Button
        onClick={() => changeLanguage('en')}
        variant='clear'
        className={classNames(selectedLng === 'en' ? styles.selectedLng : '')}
      >
        En
      </Button>
    </div>
  );
};
