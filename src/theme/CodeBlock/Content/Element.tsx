import React from 'react';
import clsx from 'clsx';
import Container from '@theme/CodeBlock/Container';
import styles from './styles.module.css';

export default function CodeBlockJSX({children, className}) {
  return (
    <Container
      as="div"
      className={clsx(className, 'language-jsx')}>
      <div className={clsx(styles.codeBlockContent, 'thin-scrollbar')}>
        <pre
          tabIndex={0}
          className={clsx(styles.codeBlockLines, 'thin-scrollbar')}>
          <code className={styles.codeBlockLinesWithNumbering}>
            {children}
          </code>
        </pre>
      </div>
    </Container>
  );
}

