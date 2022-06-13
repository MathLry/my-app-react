import React, { lazy, Suspense } from 'react';

const LazyHeaderHome = lazy(() => import('./HeaderHome'));

const HeaderHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeaderHome {...props} />
  </Suspense>
);

export default HeaderHome;
