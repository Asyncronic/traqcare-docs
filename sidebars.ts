import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Live Tracking',
      collapsed: false,
      items: [
        'live-tracking',
        'live-tracking/map-view',
        'live-tracking/object-list',
        'live-tracking/single-object',
        'live-tracking/share-location',
      ],
    },
    {
      type: 'category',
      label: 'Playback & History',
      items: [
        'playback',
        'playback/route-playback',
        'playback/trip-statistics',
      ],
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'reports',
        'reports/trip-report',
        'reports/daily-travel',
        'reports/travel-summary',
        'reports/fuel-summary',
        'reports/daily-distance',
        'reports/stoppage-report',
        'reports/idle-report',
        'reports/alert-report',
        'reports/speed-distance',
        'reports/geofence-report',
        'reports/additional-reports',
      ],
    },
    {
      type: 'category',
      label: 'Alerts & Notifications',
      items: [
        'alerts',
        'alerts/alert-types',
        'alerts/creating-alerts',
        'alerts/alert-history',
        'alerts/notification-settings',
      ],
    },
    'geofences',
    'points-of-interest',
    'routes-and-trips',
    {
      type: 'category',
      label: 'Fuel Management',
      items: [
        'fuel-management',
        'fuel-management/fuel-chart',
        'fuel-management/fuel-calibration',
      ],
    },
    {
      type: 'category',
      label: 'Device Management',
      items: [
        'device-management',
        'device-management/adding-device',
        'device-management/device-settings',
        'device-management/gprs-commands',
        'device-management/device-migration',
      ],
    },
    'maintenance-and-expenses',
    'video-surveillance',
    {
      type: 'category',
      label: 'User Management',
      items: [
        'user-management',
        'user-management/sub-users',
        'user-management/drivers',
        'user-management/object-groups',
      ],
    },
    {
      type: 'category',
      label: 'Reseller Features',
      items: [
        'reseller',
        'reseller/client-management',
        'reseller/coins-and-wallet',
        'reseller/subscriptions',
      ],
    },
    'settings',
    'support-and-tickets',
    'faq',
  ],
  mobileSidebar: [
    'mobile/overview',
    'mobile/dashboard',
    'mobile/tracking',
    'mobile/playback',
    'mobile/reports',
    'mobile/alerts',
    'mobile/geofences-and-poi',
    'mobile/settings',
    'mobile/unique-features',
  ],
};

export default sidebars;
