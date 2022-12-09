import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button';
import artwork from '../../assets/artwork.png';
import mobileArtwork from '../../assets/mobileArtwork.png';
import tabletArtwork from '../../assets/tabletArtwork.png';
import styles from './index.module.scss';

export const HomeSection = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles.home}>
      <img src={artwork} alt='artwork' className={styles.artwork} />
      <img src={mobileArtwork} alt='artwork' className={styles.mobileArtwork} />
      <img src={tabletArtwork} alt='artwork' className={styles.tabletArtwork} />
      <p className={styles.subtitle}>{t('home.subtitle')}</p>
      <div className={styles.titleWrapper}>
        <span className={styles.digital}>Digital</span>
        <span className={styles.agency}>agency</span>
      </div>
      <p className={styles.descr}>{t('home.description')}</p>
      <div className={styles.btnWrapper}>
        <Button className={styles.btn} variant='danger'>
          {t('home.button')}
        </Button>
      </div>
    </div>
  );
};
