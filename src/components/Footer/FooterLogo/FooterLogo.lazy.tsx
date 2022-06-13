import React, { lazy, Suspense } from 'react';

const LazyFooterLogo = lazy(() => import('./FooterLogo'));

const FooterLogo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterLogo {...props} />
  </Suspense>
);

export default FooterLogo;
