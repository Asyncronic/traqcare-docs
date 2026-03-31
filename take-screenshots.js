const { chromium } = require('playwright');
const path = require('path');

const BASE = 'https://track.traqcare.com';
const USER = 'devicetest';
const PASS = 'devicetest123';
const OUT = path.join(__dirname, 'static/img/screenshots/web');
const VIEWPORT = { width: 1440, height: 900 };

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function shot(page, name) {
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: false });
  console.log(`  ✓ ${name}.png`);
}

async function shotFull(page, name) {
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
  console.log(`  ✓ ${name}.png (full)`);
}

async function goto(page, url, wait = 4000) {
  await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle', timeout: 25000 }).catch(() => {});
  await sleep(wait);
}

async function clickAndWait(page, selector, wait = 3000) {
  const el = page.locator(selector).first();
  if (await el.isVisible().catch(() => false)) {
    await el.click();
    await sleep(wait);
    return true;
  }
  return false;
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: VIEWPORT });
  const page = await context.newPage();
  let count = 0;

  // ═══════════════════════════════════════════════
  // LOGIN
  // ═══════════════════════════════════════════════
  console.log('\n── LOGIN ──');
  await goto(page, '/login', 2000);
  await shot(page, 'login');
  count++;

  const usernameInput = page.locator('input[type="text"], input[name="username"], input[name="email"], input[placeholder*="user" i], input[placeholder*="email" i]').first();
  const passwordInput = page.locator('input[type="password"]').first();
  await usernameInput.fill(USER);
  await passwordInput.fill(PASS);
  await page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In")').first().click();
  await page.waitForURL('**/dashboard**', { timeout: 30000 }).catch(() => {});
  await sleep(5000);

  // ═══════════════════════════════════════════════
  // DASHBOARD
  // ═══════════════════════════════════════════════
  console.log('\n── DASHBOARD ──');
  await shot(page, 'dashboard');
  count++;

  // ═══════════════════════════════════════════════
  // GEOFENCE DASHBOARD
  // ═══════════════════════════════════════════════
  console.log('\n── GEOFENCE DASHBOARD ──');
  await goto(page, '/geofence-dashboard');
  await shot(page, 'geofence-dashboard');
  count++;

  // ═══════════════════════════════════════════════
  // LIVE TRACKING / MAP VIEW
  // ═══════════════════════════════════════════════
  console.log('\n── LIVE TRACKING ──');
  await goto(page, '/live', 6000);
  await shot(page, 'map-view');
  count++;

  // Try clicking on a vehicle in the sidebar list
  const firstVehicle = page.locator('.object-list-item, [class*="objectItem"], [class*="vehicle-item"], tr[class*="object"]').first();
  if (await firstVehicle.isVisible().catch(() => false)) {
    await firstVehicle.click();
    await sleep(3000);
    await shot(page, 'single-object-tracking');
    count++;

    // Try to find share location button
    if (await clickAndWait(page, 'button:has-text("Share"), [title*="share" i], [class*="share"]', 2000)) {
      await shot(page, 'share-location-dialog');
      count++;
      await page.keyboard.press('Escape');
      await sleep(500);
    }

    // Try to find GPRS command button
    if (await clickAndWait(page, 'button:has-text("Command"), button:has-text("GPRS"), [title*="command" i]', 2000)) {
      await shot(page, 'gprs-command-dialog');
      count++;
      await page.keyboard.press('Escape');
      await sleep(500);
    }
  }

  // ═══════════════════════════════════════════════
  // OBJECT LIST / STATUS
  // ═══════════════════════════════════════════════
  console.log('\n── OBJECT LIST ──');
  await goto(page, '/status');
  await shot(page, 'object-list');
  count++;

  // ═══════════════════════════════════════════════
  // PLAYBACK / HISTORY
  // ═══════════════════════════════════════════════
  console.log('\n── PLAYBACK ──');
  await goto(page, '/history', 5000);
  await shot(page, 'playback');
  count++;

  // ═══════════════════════════════════════════════
  // VIDEO PLAYBACK
  // ═══════════════════════════════════════════════
  console.log('\n── VIDEO PLAYBACK ──');
  await goto(page, '/video-playback');
  await shot(page, 'video-playback');
  count++;

  // ═══════════════════════════════════════════════
  // GEOFENCES
  // ═══════════════════════════════════════════════
  console.log('\n── GEOFENCES ──');
  await goto(page, '/geofences', 5000);
  await shot(page, 'geofences');
  count++;

  // ═══════════════════════════════════════════════
  // POI
  // ═══════════════════════════════════════════════
  console.log('\n── POI ──');
  await goto(page, '/pois', 5000);
  await shot(page, 'pois');
  count++;

  // ═══════════════════════════════════════════════
  // ROUTES
  // ═══════════════════════════════════════════════
  console.log('\n── ROUTES ──');
  await goto(page, '/routes');
  await shot(page, 'routes');
  count++;

  // ═══════════════════════════════════════════════
  // TRIPS
  // ═══════════════════════════════════════════════
  console.log('\n── TRIPS ──');
  await goto(page, '/trips');
  await shot(page, 'trips');
  count++;

  // ═══════════════════════════════════════════════
  // ALERTS
  // ═══════════════════════════════════════════════
  console.log('\n── ALERTS ──');
  await goto(page, '/useralerts');
  await shot(page, 'alerts');
  count++;

  // Try to click Add Alert button
  if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("New Alert"), button:has-text("Create"), [class*="add-alert"]', 2000)) {
    await shot(page, 'alert-create-form');
    count++;
    await page.keyboard.press('Escape');
    await sleep(500);
  }

  // ═══════════════════════════════════════════════
  // REPORTS (main page + navigate to each report type)
  // ═══════════════════════════════════════════════
  console.log('\n── REPORTS ──');
  await goto(page, '/reports');
  await shot(page, 'reports-overview');
  count++;

  // ═══════════════════════════════════════════════
  // MAINTENANCE
  // ═══════════════════════════════════════════════
  console.log('\n── MAINTENANCE ──');
  await goto(page, '/maintenance-schedules');
  await shot(page, 'maintenance');
  count++;

  // Try Add Schedule button
  if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("Schedule"), button:has-text("New")', 2000)) {
    await shot(page, 'maintenance-add-form');
    count++;
    await page.keyboard.press('Escape');
    await sleep(500);
  }

  // ═══════════════════════════════════════════════
  // EXPENSES
  // ═══════════════════════════════════════════════
  console.log('\n── EXPENSES ──');
  await goto(page, '/expense');
  await shot(page, 'expenses');
  count++;

  // Try Add Expense button
  if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("Expense"), button:has-text("New")', 2000)) {
    await shot(page, 'expense-add-form');
    count++;
    await page.keyboard.press('Escape');
    await sleep(500);
  }

  // ═══════════════════════════════════════════════
  // FUEL CALIBRATION
  // ═══════════════════════════════════════════════
  console.log('\n── FUEL ──');
  await goto(page, '/fuel');
  await shot(page, 'fuel-calibration');
  count++;

  // ═══════════════════════════════════════════════
  // SUBSCRIPTION
  // ═══════════════════════════════════════════════
  console.log('\n── SUBSCRIPTION ──');
  await goto(page, '/subscription');
  await shot(page, 'subscription');
  count++;

  // ═══════════════════════════════════════════════
  // TICKETS
  // ═══════════════════════════════════════════════
  console.log('\n── TICKETS ──');
  await goto(page, '/ticket');
  await shot(page, 'tickets');
  count++;

  // Try Create Ticket button
  if (await clickAndWait(page, 'button:has-text("Create"), button:has-text("New Ticket"), button:has-text("Add")', 2000)) {
    await shot(page, 'ticket-create-form');
    count++;
    await page.keyboard.press('Escape');
    await sleep(500);
  }

  // ═══════════════════════════════════════════════
  // LOGIN LOGS
  // ═══════════════════════════════════════════════
  console.log('\n── LOGIN LOGS ──');
  await goto(page, '/login-logs');
  await shot(page, 'login-logs');
  count++;

  // ═══════════════════════════════════════════════
  // TRASH
  // ═══════════════════════════════════════════════
  console.log('\n── TRASH ──');
  await goto(page, '/trash');
  await shot(page, 'trash');
  count++;

  // ═══════════════════════════════════════════════
  // WALLET
  // ═══════════════════════════════════════════════
  console.log('\n── WALLET ──');
  await goto(page, '/wallet');
  await shot(page, 'wallet');
  count++;

  // ═══════════════════════════════════════════════
  // WALLET TRANSACTIONS
  // ═══════════════════════════════════════════════
  console.log('\n── WALLET TRANSACTIONS ──');
  await goto(page, '/wallet/transactions');
  await shot(page, 'wallet-transactions');
  count++;

  // ═══════════════════════════════════════════════
  // SETTINGS PAGE — ALL TABS
  // ═══════════════════════════════════════════════
  console.log('\n── SETTINGS TABS ──');

  // Profile/Account tab
  await goto(page, '/settings-page');
  await shot(page, 'settings-page');
  count++;

  // Try each settings tab
  const settingsTabs = [
    { name: 'account', label: 'Profile' },
    { name: 'app', label: 'System' },
    { name: 'devices', label: 'Devices' },
    { name: 'users', label: 'Sub-Users' },
    { name: 'drivers', label: 'Drivers' },
    { name: 'group', label: 'Object Groups' },
    { name: 'clients', label: 'Clients' },
    { name: 'sim', label: 'SIM Card' },
    { name: 'userRole', label: 'User Role' },
  ];

  for (const tab of settingsTabs) {
    const tabEl = page.locator(`[data-node-key="${tab.name}"], [id*="${tab.name}"], .ant-tabs-tab:has-text("${tab.label}"), button:has-text("${tab.label}"), a:has-text("${tab.label}")`).first();
    if (await tabEl.isVisible().catch(() => false)) {
      await tabEl.click();
      await sleep(2000);
      await shot(page, `settings-${tab.name}`);
      count++;

      // On Devices tab, try to find Add Device button
      if (tab.name === 'devices') {
        if (await clickAndWait(page, 'button:has-text("Add Device"), button:has-text("Add"), button:has-text("New Device")', 2000)) {
          await shot(page, 'add-device-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }

        // Try Bulk Upload button
        if (await clickAndWait(page, 'button:has-text("Bulk"), button:has-text("Upload"), button:has-text("Import")', 2000)) {
          await shot(page, 'bulk-upload-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }

        // Try Migrate button
        if (await clickAndWait(page, 'button:has-text("Migrate"), button:has-text("Migration"), button:has-text("Transfer")', 2000)) {
          await shot(page, 'device-migration-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }
      }

      // On Users tab, try Add User button
      if (tab.name === 'users') {
        if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("New User"), button:has-text("Create")', 2000)) {
          await shot(page, 'add-user-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }
      }

      // On Drivers tab, try Add Driver button
      if (tab.name === 'drivers') {
        if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("New Driver"), button:has-text("Create")', 2000)) {
          await shot(page, 'add-driver-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }
      }

      // On Clients tab, try Add Client button
      if (tab.name === 'clients') {
        if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("New Client"), button:has-text("Create")', 2000)) {
          await shot(page, 'add-client-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }
      }

      // On Groups tab, try Add Group button
      if (tab.name === 'group') {
        if (await clickAndWait(page, 'button:has-text("Add"), button:has-text("New Group"), button:has-text("Create")', 2000)) {
          await shot(page, 'add-group-form');
          count++;
          await page.keyboard.press('Escape');
          await sleep(500);
        }
      }
    } else {
      console.log(`  ⊘ Tab "${tab.label}" not visible (role restriction)`);
    }
  }

  // ═══════════════════════════════════════════════
  // GENERAL SETTINGS (legacy)
  // ═══════════════════════════════════════════════
  console.log('\n── GENERAL SETTINGS ──');
  await goto(page, '/general-settings');
  await shot(page, 'general-settings');
  count++;

  // ═══════════════════════════════════════════════
  // RESELLER SETTINGS
  // ═══════════════════════════════════════════════
  console.log('\n── RESELLER SETTINGS ──');
  await goto(page, '/r-settings');
  await shot(page, 'reseller-settings');
  count++;

  // ═══════════════════════════════════════════════
  // PRIVACY POLICY
  // ═══════════════════════════════════════════════
  console.log('\n── PRIVACY POLICY ──');
  await goto(page, '/privacy-policy');
  await shot(page, 'privacy-policy');
  count++;

  await browser.close();
  console.log(`\n══════════════════════════════════════`);
  console.log(`Total screenshots captured: ${count}`);
  console.log(`Saved to: ${OUT}`);
  console.log(`══════════════════════════════════════`);
}

run().catch(e => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
