import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';

type Props = WrapperProps<typeof FooterType>;

/** Every article ends with where to go next, above Docusaurus's own footer (last updated date, pager). */
export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <aside className="dx-help" aria-labelledby="dx-help-title">
        <p id="dx-help-title" className="dx-help__title">Still need help?</p>
        <p>
          Check the <Link to="/docs/faq/">FAQ</Link>, or{' '}
          <Link to="/docs/support-and-tickets/">raise a support ticket</Link> from the Traqcare web app or mobile app.
          Installing a tracker or dashcam? The{' '}
          <a href="https://docs.skywondergps.com/">device guides</a> cover wiring and set-up.
        </p>
      </aside>
      <Footer {...props} />
    </>
  );
}
