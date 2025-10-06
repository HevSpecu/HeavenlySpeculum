import React, {isValidElement, type ReactNode} from 'react';
import ElementContent from '@theme/CodeBlock/Content/Element';
import StringContent from '@theme/CodeBlock/Content/String';

export default function CodeBlockContent({
  children,
  ...props
}) {
  return isValidElement(children) ? (
    <ElementContent {...props}>{children}</ElementContent>
  ) : (
    <StringContent {...props}>{children}</StringContent>
  );
}

