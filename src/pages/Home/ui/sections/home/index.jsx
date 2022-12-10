import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/button';
import artwork from '../../assets/artwork.png';
import styles from './index.module.scss';

const artworkAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1,
    },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1.5,
    },
  },
};

export const HomeSection = () => {
  const { t } = useTranslation('home');

  return (
    <motion.div className={styles.home} initial='hidden' whileInView='visible'>
      <motion.img
        variants={artworkAnimation}
        src={artwork}
        alt='artwork'
        className={styles.artwork}
      />
      <motion.div variants={textAnimation}>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
        <div className={styles.titleWrapper}>
          <span className={styles.digital}>Digital</span>
          <span className={styles.agency}>agency</span>
        </div>
        <p className={styles.descr}>{t('home.description')}</p>
        <Button className={styles.btn} variant='danger'>
          {t('home.button')}
        </Button>
      </motion.div>
    </motion.div>
  );
};
