import React, { lazy, Suspense } from 'react';

const LazyFooterTermsAndPolicies = lazy(() => import('./FooterTermsAndPolicies'));

const FooterTermsAndPolicies = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterTermsAndPolicies {...props} />
  </Suspense>
);

export default FooterTermsAndPolicies;
