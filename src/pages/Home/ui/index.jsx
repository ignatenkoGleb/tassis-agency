import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import artwork from './assets/artwork.png';

import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation('home');
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.homeMain}>
          <img src={artwork} alt='artwork' className={styles.artwork} />
          <p className={styles.subtitle}>{t('home.subtitle')}</p>
          <p className={styles.title}>Digital agency</p>
          <p className={styles.descr}>{t('home.description')}</p>
          <Button className={styles.btn} variant='danger'>
            {t('home.button')}
          </Button>
        </div>
        <div className={styles.homeSecondary}>
          <div className={styles.socialNetworks}>socialNetworks</div>
          <p className={styles.tassis}>2022 Tassis Digital Agency</p>
        </div>
      </div>
    </Container>
  );
};
