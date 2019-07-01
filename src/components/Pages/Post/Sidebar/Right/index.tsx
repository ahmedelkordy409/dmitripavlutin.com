import * as React from 'react';
import Media from 'react-media';

import styles from './index.module.scss';

import SubscriptionRegion from 'components/Subscription/Region';
import CarbonAdsFetch from 'components/CarbonAds/Fetch';
import CarbonAdsBanner from 'components/CarbonAds/Banner';

export default function PostRightSidebar() {
  return (
    <div className={styles.rightSidebar}>
      <Media query="(min-width: 1201px)" defaultMatches={false}>
        <CarbonAdsFetch render={(service) => <CarbonAdsBanner carbonAdsService={service} />} />
      </Media>
      <SubscriptionRegion />
    </div>
  );
}
