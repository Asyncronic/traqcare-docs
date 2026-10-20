import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

/**
 * Home: a search box and the jobs people come to do, grouped by area and written as actions.
 * Every link and answer below points to a page that was checked against the app code (2026-10-20).
 */
type Task = {label: string; to: string};
type Group = {title: string; tasks: Task[]};

const groups: Group[] = [
  {
    title: 'Track vehicles',
    tasks: [
      {label: 'See every vehicle live on the map', to: '/docs/live-tracking/'},
      {label: 'Replay where a vehicle went', to: '/docs/playback/'},
      {label: 'Share a live location link', to: '/docs/live-tracking/share-location/'},
      {label: 'Find vehicles near a place', to: '/docs/live-tracking/search-nearby/'},
    ],
  },
  {
    title: 'Alerts and geofences',
    tasks: [
      {label: 'Create an alert', to: '/docs/alerts/creating-alerts/'},
      {label: 'Check past alerts', to: '/docs/alerts/alert-history/'},
      {label: 'Choose how alerts reach you', to: '/docs/alerts/notification-settings/'},
      {label: 'Draw a geofence', to: '/docs/geofences/'},
    ],
  },
  {
    title: 'Reports, fuel and costs',
    tasks: [
      {label: 'Run a report', to: '/docs/reports/'},
      {label: 'Read the trip report', to: '/docs/reports/trip-report/'},
      {label: 'Monitor fuel and refuels', to: '/docs/fuel-management/'},
      {label: 'Plan maintenance and log expenses', to: '/docs/maintenance-and-expenses/'},
    ],
  },
  {
    title: 'Devices and video',
    tasks: [
      {label: 'Add a GPS tracker', to: '/docs/device-management/adding-device/'},
      {label: 'Send a command to a tracker', to: '/docs/device-management/gprs-commands/'},
      {label: 'Set up sensors and cameras', to: '/docs/device-management/device-settings/'},
      {label: 'Watch dashcam video', to: '/docs/video-surveillance/'},
    ],
  },
  {
    title: 'Users, drivers and resellers',
    tasks: [
      {label: 'Give someone their own login', to: '/docs/user-management/sub-users/'},
      {label: 'Add drivers and assign vehicles', to: '/docs/user-management/drivers/'},
      {label: 'Add a client account', to: '/docs/reseller/client-management/'},
      {label: 'Activate or renew subscriptions', to: '/docs/reseller/subscriptions/'},
    ],
  },
  {
    title: 'Mobile app',
    tasks: [
      {label: 'Get started with the app', to: '/docs/mobile/overview/'},
      {label: 'Track vehicles on your phone', to: '/docs/mobile/tracking/'},
      {label: 'Replay a route on your phone', to: '/docs/mobile/playback/'},
      {label: 'Get alerts on your phone', to: '/docs/mobile/alerts/'},
    ],
  },
];

/** Shown on the page and sent as FAQPage data, so the two always match. */
const quickAnswers = [
  {
    question: 'How do I track my vehicles in real time?',
    answer:
      'Sign in at track.traqcare.com or in the Traqcare app. Live Tracking shows every vehicle on the map in its status colour: green moving, yellow idle, red stopped, blue offline.',
    to: '/docs/live-tracking/',
  },
  {
    question: 'How do I see where a vehicle went today?',
    answer:
      'Open Playback for the vehicle from the map, the object list or the vehicle’s own page, choose the date range and press play. The web player runs at 1× to 12×.',
    to: '/docs/playback/',
  },
  {
    question: 'How do I set up a speed alert?',
    answer:
      'Open Alerts > Alerts and click Add. Choose Overspeed, enter the limit in km/h or mph, tick how you want to be told (notification, email, SMS or webhook), move the vehicles to Assigned Objects and click Add.',
    to: '/docs/alerts/creating-alerts/',
  },
  {
    question: 'How do I add a new GPS tracker?',
    answer:
      'Open Settings, select the Devices tab and click Add Device. Fill in the Device Details, then click Submit. Resellers can also add one in the app under More > Reseller > Add Object.',
    to: '/docs/device-management/adding-device/',
  },
  {
    question: 'How do I create a geofence?',
    answer:
      'Go to GeoJsons > Geofence and click the + button. Draw a circle or a custom shape on the map, give it a name and a colour, and click Add.',
    to: '/docs/geofences/',
  },
  {
    question: 'Why is my vehicle showing Offline?',
    answer:
      'No data has reached Traqcare for 2 hours or more on the web (more than 60 minutes in the app). Check that the device has power, mobile signal and an active SIM.',
    to: '/docs/faq/',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="GPS Tracking & Fleet Management User Guide"
      description="User guide for the Traqcare GPS tracking and fleet platform by Skywonder: live tracking, reports, fuel, geofences, alerts, video and the mobile apps.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: quickAnswers.map((qa) => ({
              '@type': 'Question',
              name: qa.question,
              acceptedAnswer: {'@type': 'Answer', text: qa.answer},
            })),
          })}
        </script>
      </Head>
      <main className={styles.page}>
        <header className={styles.intro}>
          <h1 className={styles.title}>Traqcare user guide</h1>
          <p className={styles.lead}>
            Step-by-step help for the Traqcare web platform and the Android and iOS app, from your first login to
            reports, alerts and reseller accounts.
          </p>
          <form className={styles.search} action="/search/" method="get" role="search">
            <label htmlFor="home-search" className={styles.searchLabel}>
              Search the guide
            </label>
            <div className={styles.searchRow}>
              <input
                id="home-search"
                name="q"
                type="search"
                className={styles.searchInput}
                placeholder="For example: odometer, immobilize, fuel report"
                autoComplete="off"
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </div>
          </form>
          <p className={styles.quick}>
            New here? <Link to="/docs/getting-started/">Start with your first login</Link>, or{' '}
            <a href="https://track.traqcare.com" target="_blank" rel="noopener">
              open the web app
            </a>
            .
          </p>
        </header>

        <section className={styles.tasks} aria-labelledby="tasks-title">
          <h2 id="tasks-title" className={styles.sectionTitle}>
            What do you want to do?
          </h2>
          <div className={styles.groups}>
            {groups.map((g) => (
              <div key={g.title} className={styles.group}>
                <h3 className={styles.groupTitle}>{g.title}</h3>
                <ul className={styles.taskList}>
                  {g.tasks.map((t) => (
                    <li key={t.to}>
                      <Link to={t.to} className={styles.task}>
                        {t.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.answers} aria-labelledby="answers-title">
          <h2 id="answers-title" className={styles.sectionTitle}>
            Quick answers
          </h2>
          <div className={styles.answerGrid}>
            {quickAnswers.map((qa) => (
              <div key={qa.question} className={styles.answer}>
                <h3 className={styles.question}>{qa.question}</h3>
                <p>{qa.answer}</p>
                <Link to={qa.to} className={styles.more}>
                  Read the full guide
                </Link>
              </div>
            ))}
          </div>
          <p className={styles.allQuestions}>
            More questions are answered in the <Link to="/docs/faq/">FAQ</Link>.
          </p>
        </section>

        <section className={styles.apps} aria-labelledby="apps-title">
          <h2 id="apps-title" className={styles.appsTitle}>
            Get the app
          </h2>
          <p>
            <a href="https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app" target="_blank" rel="noopener">
              Traqcare on Google Play
            </a>
            <span className={styles.sep} aria-hidden="true" />
            <a href="https://apps.apple.com/cn/app/traqcare/id6449219819?l=en" target="_blank" rel="noopener">
              Traqcare on the App Store
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
