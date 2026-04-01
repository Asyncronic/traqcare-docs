import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

// ── Feature Cards Data ──
const features = [
  {
    icon: '📍',
    title: 'Real-Time GPS Tracking',
    description: 'Monitor all vehicles live on an interactive map with color-coded status markers. See speed, location, heading, and sensor data updated every few seconds.',
    link: '/docs/live-tracking',
    tags: ['Web', 'Mobile'],
  },
  {
    icon: '🔄',
    title: 'Route Playback & History',
    description: 'Replay any vehicle route with animated playback controls. View trip distance, moving time, stops, max speed, and average speed for any date range.',
    link: '/docs/playback',
    tags: ['Web', 'Mobile'],
  },
  {
    icon: '📊',
    title: '17+ Fleet Reports',
    description: 'Trip, travel, fuel, distance, idle, stoppage, speed, alert, geofence, and custom reports. Build your own report with any combination of data fields. Export to PDF, Excel, or CSV.',
    link: '/docs/reports',
    tags: ['Web', 'Mobile'],
  },
  {
    icon: '⛽',
    title: 'Fuel Monitoring & Theft Detection',
    description: 'Track fuel levels in real-time with interactive charts. Automatically detect refueling events and fuel theft. Per-trip fuel consumption analysis.',
    link: '/docs/fuel-management',
    tags: ['Web', 'Mobile'],
  },
  {
    icon: '🔔',
    title: 'Smart Alerts & Geofencing',
    description: '20+ alert types: overspeed, geofence entry/exit, SOS, power cut, harsh braking, fuel theft, vibration, door sensor, and more. Push, email, and SMS notifications.',
    link: '/docs/alerts',
    tags: ['Web', 'Mobile'],
  },
  {
    icon: '📱',
    title: 'Mobile App (iOS & Android)',
    description: 'Full-featured app with 3D follow mode, voice alerts, QR scanner, route playback, 9 report types, and offline support. Available in 13 languages.',
    link: '/docs/mobile/overview',
    tags: ['Android', 'iOS'],
  },
  {
    icon: '🎥',
    title: 'Camera & Video Surveillance',
    description: 'Live video streaming and recorded footage playback from vehicle dashcams. Multi-camera views with timeline scrubbing and snapshot gallery.',
    link: '/docs/video-surveillance',
    tags: ['Web'],
  },
  {
    icon: '🔧',
    title: 'Device & Sensor Management',
    description: 'Hardware-agnostic platform supporting any GPS device. Configure fuel sensors, cameras, and temperature probes. Bulk upload, GPRS commands, and device migration.',
    link: '/docs/device-management',
    tags: ['Web', 'Mobile'],
  },
  {
    icon: '👥',
    title: 'Multi-Tenant & White-Label',
    description: 'Role-based access (User, Admin, Reseller, Super Admin). Client isolation, sub-user management, and full white-label branding for 14+ brand flavors.',
    link: '/docs/user-management',
    tags: ['Web'],
  },
];

// ── Quick Links for AEO ──
const quickAnswers = [
  {question: 'How do I track my vehicle in real time?', answer: 'Log in to track.traqcare.com or the mobile app. All vehicles appear on the Map View with live status markers.', link: '/docs/live-tracking/map-view'},
  {question: 'How do I check where my vehicle went today?', answer: 'Open Playback, select the vehicle, choose "Today", and press Play to see the animated route.', link: '/docs/playback/route-playback'},
  {question: 'How do I set up a speed alert?', answer: 'Go to Alerts > Add New Alert > Overspeed, select vehicles, set the speed limit, choose notification method, and save.', link: '/docs/alerts/creating-alerts'},
  {question: 'How do I detect fuel theft?', answer: 'The Fuel Summary report automatically detects sudden fuel drops. Tap any day to see the interactive chart with theft markers.', link: '/docs/fuel-management/fuel-chart'},
  {question: 'How do I create a geofence?', answer: 'Go to Geofences > Add New, draw a circle or polygon on the map, name it, and save. Link it to alerts for entry/exit notifications.', link: '/docs/geofences'},
  {question: 'How do I add a new GPS device?', answer: 'Go to Settings > Devices > Add Device, enter the IMEI, select device type, name the vehicle, and activate.', link: '/docs/device-management/adding-device'},
];

// ── Stats ──
const stats = [
  {value: '17+', label: 'Report Types'},
  {value: '20+', label: 'Alert Types'},
  {value: '13', label: 'Languages'},
  {value: '14', label: 'White-Label Brands'},
  {value: '48+', label: 'Mobile Screens'},
  {value: '24/7', label: 'Real-Time Tracking'},
];

function HeroSection(): ReactNode {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #1976d2 100%)',
      color: '#ffffff',
      padding: '80px 20px 60px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)',
      }}/>
      <div style={{maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1}}>
        <p style={{
          fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          opacity: 0.8, marginBottom: '12px',
        }}>
          GPS Tracking & Fleet Management Platform
        </p>
        <h1 style={{fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.15}}>
          Traqcare Documentation
        </h1>
        <p style={{fontSize: '1.15rem', opacity: 0.9, marginBottom: '12px', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 32px'}}>
          Everything you need to track vehicles, manage your fleet, monitor fuel, set up geofences, and get the most out of the <strong>Traqcare GPS tracking platform</strong> — on web and mobile.
        </p>
        <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/docs/getting-started" style={{
            display: 'inline-block', backgroundColor: '#fff', color: '#1565c0',
            padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem',
            textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}>
            Get Started
          </Link>
          <Link to="/docs/mobile/overview" style={{
            display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.12)',
            color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 600,
            fontSize: '1rem', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)',
          }}>
            Mobile App Guide
          </Link>
          <a href="https://track.traqcare.com" target="_blank" rel="noopener" style={{
            display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.08)',
            color: '#90caf9', padding: '14px 32px', borderRadius: '8px', fontWeight: 600,
            fontSize: '1rem', textDecoration: 'none', border: '1.5px solid rgba(144,202,249,0.3)',
          }}>
            Open Web App
          </a>
        </div>

        {/* App store links */}
        <div style={{marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '0.85rem'}}>
          <a href="https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app" target="_blank" rel="noopener" style={{color: '#a5d6a7', textDecoration: 'none'}}>
            Android App
          </a>
          <span style={{opacity: 0.4}}>|</span>
          <a href="https://apps.apple.com/cn/app/traqcare/id6449219819?l=en" target="_blank" rel="noopener" style={{color: '#a5d6a7', textDecoration: 'none'}}>
            iOS App
          </a>
        </div>
      </div>
    </div>
  );
}

function StatsSection(): ReactNode {
  return (
    <div style={{background: 'var(--ifm-color-emphasis-100)', padding: '32px 20px'}}>
      <div style={{maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px'}}>
        {stats.map(s => (
          <div key={s.label} style={{textAlign: 'center', minWidth: '100px'}}>
            <div style={{fontSize: '1.8rem', fontWeight: 800, color: 'var(--ifm-color-primary)'}}>{s.value}</div>
            <div style={{fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)', fontWeight: 500}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesSection(): ReactNode {
  return (
    <div style={{padding: '64px 20px', maxWidth: '1100px', margin: '0 auto'}}>
      <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '8px'}}>
        Platform Capabilities
      </h2>
      <p style={{textAlign: 'center', color: 'var(--ifm-color-emphasis-600)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px'}}>
        Traqcare provides end-to-end fleet intelligence — from live tracking to predictive analytics.
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px'}}>
        {features.map((f) => (
          <Link key={f.title} to={f.link} style={{display: 'block', textDecoration: 'none', color: 'inherit'}}>
            <div style={{
              backgroundColor: 'var(--ifm-card-background-color, #fff)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '12px', padding: '24px', height: '100%',
              transition: 'box-shadow 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{fontSize: '1.8rem', marginBottom: '8px'}}>{f.icon}</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ifm-color-primary)'}}>{f.title}</h3>
              <p style={{fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ifm-color-emphasis-700)', marginBottom: '10px'}}>{f.description}</p>
              <div style={{display: 'flex', gap: '6px'}}>
                {f.tags.map(t => (
                  <span key={t} style={{
                    fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
                    background: 'var(--ifm-color-emphasis-100)', color: 'var(--ifm-color-emphasis-600)',
                    fontWeight: 600,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── FAQ Section for AEO (Answer Engine Optimization) ──
function FAQSection(): ReactNode {
  return (
    <div style={{padding: '64px 20px', background: 'var(--ifm-color-emphasis-100)'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, marginBottom: '32px'}}>
          Frequently Asked Questions
        </h2>
        {quickAnswers.map((qa, i) => (
          <div key={i} style={{
            backgroundColor: 'var(--ifm-card-background-color, #fff)',
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '10px', padding: '20px 24px', marginBottom: '12px',
          }}>
            <h3 style={{fontSize: '1rem', fontWeight: 600, marginBottom: '8px', color: 'var(--ifm-color-primary)'}}>
              {qa.question}
            </h3>
            <p style={{fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ifm-color-emphasis-700)', marginBottom: '6px'}}>
              {qa.answer}
            </p>
            <Link to={qa.link} style={{fontSize: '0.85rem', fontWeight: 600}}>
              Read full guide &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CTA Section ──
function CTASection(): ReactNode {
  return (
    <div style={{padding: '64px 20px', textAlign: 'center'}}>
      <h2 style={{fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px'}}>
        Ready to Track Your Fleet?
      </h2>
      <p style={{color: 'var(--ifm-color-emphasis-600)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px'}}>
        Get started with Traqcare — the complete GPS tracking and fleet management platform.
      </p>
      <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="https://track.traqcare.com" target="_blank" rel="noopener" style={{
          padding: '14px 32px', backgroundColor: 'var(--ifm-color-primary)', color: '#fff',
          borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
        }}>
          Open Traqcare App
        </a>
        <Link to="/docs/faq" style={{
          padding: '14px 32px', backgroundColor: 'var(--ifm-color-emphasis-100)',
          color: 'var(--ifm-color-primary)', borderRadius: '8px', fontWeight: 700,
          textDecoration: 'none', fontSize: '1rem', border: '1.5px solid var(--ifm-color-primary)',
        }}>
          FAQ
        </Link>
      </div>
      <div style={{marginTop: '20px', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-500)'}}>
        <a href="https://play.google.com/store/apps/details?id=com.traqcare.gps_tracking_app" target="_blank" rel="noopener" style={{marginRight: '16px'}}>Google Play</a>
        <a href="https://apps.apple.com/cn/app/traqcare/id6449219819?l=en" target="_blank" rel="noopener">App Store</a>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Traqcare Documentation — GPS Tracking & Fleet Management by Skywonder GPS"
      description="Official documentation for Traqcare GPS Tracking & Fleet Management Platform by Skywonder GPS. Real-time vehicle tracking, 16+ fleet reports, fuel monitoring, geofencing, alerts, driver management, camera surveillance, and mobile app for iOS & Android. Track vehicles at track.traqcare.com.">
      <Head>
        {/* AEO: FAQPage structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: quickAnswers.map(qa => ({
              '@type': 'Question',
              name: qa.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: qa.answer,
              },
            })),
          })}
        </script>
      </Head>
      <HeroSection />
      <StatsSection />
      <main>
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </main>
    </Layout>
  );
}
