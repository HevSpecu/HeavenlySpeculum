import React, {isValidElement} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ElementContent from '@theme/CodeBlock/Content/Element';
import StringContent from '@theme/CodeBlock/Content/String';

export default function CodeBlock({children, ...props}) {
  const isBrowser = useIsBrowser();
  
  return (
    <>
      {isValidElement(children) ? (
        <ElementContent {...props}>{children}</ElementContent>
      ) : (
        <StringContent {...props}>
          {children}
        </StringContent>
      )}
    </>
  );
}

