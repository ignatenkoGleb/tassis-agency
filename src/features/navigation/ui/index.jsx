import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, MButton } from '@/shared/ui/button';
import { LngSwitcher } from '@/shared/ui/lngSwitcher';
import { MenuList } from './menuList';
import { menuLinks } from './constants';
import { ReactComponent as Menu } from './assets/mobileMenu.svg';
import { ReactComponent as Logo } from './assets/logotype.svg';
import styles from './index.module.scss';

const leftPartHeaderAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
};

const rightPartHeaderAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
};

export const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.nav className={styles.headerContainer} initial='hidden' whileInView='visible'>
      <motion.div
        className={styles.leftPart}
        variants={leftPartHeaderAnimation}
        whileHover={{
          scale: 1.05,
        }}
      >
        <Logo className={styles.logotype} />
      </motion.div>
      <motion.div variants={rightPartHeaderAnimation} className={styles.rightPart}>
        <MenuList menuLinks={menuLinks} />
        <LngSwitcher className={styles.lngSwitcher} />
        <Button onClick={() => navigate('/contact')} variant='danger' className={styles.connection}>
          {t(`navigation.button`)}
        </Button>
        <Button variant='clear' className={styles.mobileMenuBtn}>
          <Menu className={styles.mobileMenu} />
        </Button>
      </motion.div>
    </motion.nav>
  );
};
