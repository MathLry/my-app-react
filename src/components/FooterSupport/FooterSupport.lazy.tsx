import React, { lazy, Suspense } from 'react';

const LazyFooterSupport = lazy(() => import('./FooterSupport'));

const FooterSupport = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterSupport {...props} />
  </Suspense>
);

export default FooterSupport;
