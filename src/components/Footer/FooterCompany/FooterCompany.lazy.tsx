import React, { lazy, Suspense } from 'react';

const LazyFooterCompany = lazy(() => import('./FooterCompany'));

const FooterCompany = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterCompany {...props} />
  </Suspense>
);

export default FooterCompany;
