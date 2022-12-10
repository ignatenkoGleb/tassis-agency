import classNames from 'classnames';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import styles from './index.module.scss';

export const Button = forwardRef(({ children, className, variant, onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={classNames(styles.btn, styles[variant], className)}
    >
      {children}
    </button>
  );
});

export const MButton = motion(Button);
