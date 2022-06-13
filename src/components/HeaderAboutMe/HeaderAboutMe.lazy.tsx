import React, { lazy, Suspense } from 'react';

const LazyHeaderAboutMe = lazy(() => import('./HeaderAboutMe'));

const HeaderAboutMe = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeaderAboutMe {...props} />
  </Suspense>
);

export default HeaderAboutMe;
