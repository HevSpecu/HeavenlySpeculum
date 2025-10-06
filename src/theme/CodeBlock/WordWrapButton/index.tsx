import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function WordWrapButton({className, onClick, isEnabled}) {
  const title = translate({
    id: isEnabled
      ? 'theme.CodeBlock.wordWrapToggle'
      : 'theme.CodeBlock.wordWrapToggle',
    message: isEnabled ? 'Disable word wrap' : 'Enable word wrap',
    description: 'The title attribute for toggle word wrapping button',
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        styles.wordWrapButton,
        className,
        isEnabled && styles.wordWrapButtonEnabled,
      )}
      aria-label={title}
      title={title}>
      <svg
        className={styles.wordWrapButtonIcon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          d="M4 7h16M4 12h10a3 3 0 110 6H4m10-6v6m0 0l-3-3m3 3l3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

