import classNames from 'classnames';
import styles from './index.module.scss';

export const Button = ({ children, className, variant }) => {
  return <button className={classNames(styles.btn, styles[variant], className)}>{children}</button>;
};
