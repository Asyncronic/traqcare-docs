import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const features = [
  {
    title: 'Live Tracking',
    description:
      'Monitor your vehicles and assets in real time on an interactive map with custom markers, status indicators, and instant updates.',
    link: '/docs/mobile/tracking',
  },
  {
    title: 'Reports & Analytics',
    description:
      'Generate detailed reports including travel summaries, distance logs, trip breakdowns, idle time analysis, and speed reports.',
    link: '/docs/mobile/reports',
  },
  {
    title: 'Alerts & Geofences',
    description:
      'Set up virtual boundaries and receive instant notifications for overspeed, geofence entry/exit, ignition events, and more.',
    link: '/docs/mobile/alerts',
  },
  {
    title: 'Fuel Management',
    description:
      'Track fuel levels, detect fuel theft and refills, and analyze consumption patterns with connected fuel sensors.',
    link: '/docs/mobile/reports',
  },
  {
    title: 'Device Management',
    description:
      'Add and configure GPS devices, manage sensors, assign objects, and monitor device connectivity across your fleet.',
    link: '/docs/getting-started',
  },
  {
    title: 'Mobile App',
    description:
      'Full-featured iOS and Android app with 3D follow mode, voice alerts, QR scanning, route playback, and offline support.',
    link: '/docs/mobile/overview',
  },
];

function HeroSection(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
        color: '#ffffff',
        padding: '80px 20px',
        textAlign: 'center',
      }}>
      <div style={{maxWidth: '720px', margin: '0 auto'}}>
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 700,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
          Traqcare Documentation
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
          Everything you need to set up, configure, and get the most out of the
          Traqcare GPS tracking platform — on web, mobile, and API.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Link
            to="/docs/getting-started"
            style={{
              display: 'inline-block',
              backgroundColor: '#ffffff',
              color: '#1565c0',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}>
            Get Started
          </Link>
          <Link
            to="/docs/mobile/overview"
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              transition: 'transform 0.15s ease, background-color 0.15s ease',
            }}>
            Mobile App Guide
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}): ReactNode {
  return (
    <Link
      to={link}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}>
      <div
        style={{
          backgroundColor: 'var(--ifm-card-background-color, #ffffff)',
          border: '1px solid var(--ifm-color-emphasis-200, #e0e0e0)',
          borderRadius: '12px',
          padding: '28px 24px',
          height: '100%',
          transition: 'box-shadow 0.2s ease, transform 0.15s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            '0 4px 16px rgba(0, 0, 0, 0.1)';
          (e.currentTarget as HTMLDivElement).style.transform =
            'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
          (e.currentTarget as HTMLDivElement).style.transform = 'none';
        }}>
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: '8px',
            color: 'var(--ifm-color-primary)',
          }}>
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: 'var(--ifm-color-emphasis-700, #555)',
            marginBottom: 0,
          }}>
          {description}
        </p>
      </div>
    </Link>
  );
}

function FeaturesSection(): ReactNode {
  return (
    <div
      style={{
        padding: '64px 20px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: 600,
          marginBottom: '40px',
        }}>
        Platform Capabilities
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Traqcare Documentation"
      description="Complete documentation for the Traqcare GPS tracking platform — web app, mobile app, and API.">
      <HeroSection />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
