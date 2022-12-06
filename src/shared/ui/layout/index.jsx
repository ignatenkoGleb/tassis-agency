import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header';
import styles from './index.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
