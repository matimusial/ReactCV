import React from 'react';
import styles from './SocialButton.module.scss';

interface IProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

function openInNewTab(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

const SocialButton: React.FC<IProps> = ({ href, ariaLabel, children }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    onClick={() => openInNewTab(href)}
    className={styles.socialButton}
  >
    {children}
  </button>
);

export default SocialButton;
