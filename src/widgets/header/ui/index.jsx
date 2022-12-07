import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Navigation } from '@/features/navigation';
import { Container } from '@/shared/ui/container';
import styles from './index.module.scss';

export const Header = () => {
  const [changedHeader, setChangedHeader] = useState(false);

  useEffect(() => {
    const changeHeader = () => {
      if (window.scrollY >= 80) {
        setChangedHeader(true);
      } else {
        setChangedHeader(false);
      }
    };

    window.addEventListener('scroll', changeHeader);

    return () => removeEventListener('scroll', changeHeader);
  }, []);

  return (
    <header
      className={changedHeader ? classNames(styles.header, styles.changedHeader) : styles.header}
    >
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
