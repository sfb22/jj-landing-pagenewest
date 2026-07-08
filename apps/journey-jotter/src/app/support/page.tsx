import Link from 'next/link';

export const metadata = {
  title: 'Support | Journey Jotter',
  description:
    'Get help with Journey Jotter. Contact us, browse common issues, and manage your account and subscription.',
};

export default function SupportPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .jj-support {
          min-height: 100vh;
          background: #FAF0E0;
          color: #2D1B0E;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 48px 20px 96px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        .jj-support .container {
          max-width: 760px;
          margin: 0 auto;
        }
        .jj-support .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #6B4A2E;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
          transition: color 0.15s ease;
        }
        .jj-support .back-link:hover { color: #F26B2D; }
        .jj-support h1 {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 0 0 12px;
          color: #2D1B0E;
          line-height: 1.1;
        }
        .jj-support .subtitle {
          font-size: 18px;
          color: #6B4A2E;
          margin: 0 0 40px;
        }
        .jj-support .contact-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 56px;
          box-shadow: 0 2px 16px rgba(61, 40, 23, 0.06);
          border: 1px solid rgba(242, 107, 45, 0.18);
        }
        .jj-support .contact-card h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 20px;
          color: #2D1B0E;
        }
        .jj-support .contact-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 14px 0;
          border-top: 1px solid #F0E4CE;
          flex-wrap: wrap;
          gap: 8px;
        }
        .jj-support .contact-row:first-of-type { border-top: none; padding-top: 0; }
        .jj-support .contact-row:last-of-type { padding-bottom: 0; }
        .jj-support .contact-label {
          color: #6B4A2E;
          font-size: 15px;
        }
        .jj-support .contact-value {
          font-weight: 600;
          color: #2D1B0E;
        }
        .jj-support .contact-value a {
          color: #F26B2D;
          text-decoration: none;
        }
        .jj-support .contact-value a:hover { text-decoration: underline; }
        .jj-support section { margin-bottom: 56px; }
        .jj-support section h2 {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 20px;
          color: #2D1B0E;
          letter-spacing: -0.015em;
        }
        .jj-support .faq {
          padding: 20px 0;
          border-top: 1px solid #E8D9BE;
        }
        .jj-support .faq:first-of-type {
          border-top: none;
          padding-top: 4px;
        }
        .jj-support .faq h3 {
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 8px;
          color: #2D1B0E;
        }
        .jj-support .faq p,
        .jj-support .faq ul,
        .jj-support .faq ol {
          margin: 8px 0;
          color: #4A3220;
          font-size: 15px;
        }
        .jj-support .faq ul,
        .jj-support .faq ol {
          padding-left: 22px;
        }
        .jj-support .faq ul { list-style-type: disc; }
        .jj-support .faq ol { list-style-type: decimal; }
        .jj-support .faq li { margin-bottom: 4px; }
        .jj-support .faq a {
          color: #F26B2D;
          text-decoration: none;
          font-weight: 600;
        }
        .jj-support .faq a:hover { text-decoration: underline; }
        .jj-support .footer-note {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid #E8D9BE;
          font-size: 13px;
          color: #8A6A4E;
          text-align: center;
        }
        @media (max-width: 600px) {
          .jj-support { padding: 32px 18px 72px; }
          .jj-support h1 { font-size: 36px; }
          .jj-support section h2 { font-size: 24px; }
          .jj-support .contact-card { padding: 24px; }
        }
      `,
        }}
      />
      <main className="jj-support">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Journey Jotter
          </Link>

          <h1>Support</h1>
          <p className="subtitle">
            We&apos;re here to help. Real replies from real humans, usually within 48 hours.
          </p>

          {/* Contact */}
          <div className="contact-card">
            <h2>Get in touch</h2>
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                <a href="mailto:contact@journeyjotter.ai">contact@journeyjotter.ai</a>
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Response time</span>
              <span className="contact-value">Within 48 hours (Mon–Fri)</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Company</span>
              <span className="contact-value">Journey Jotter AI Limited (UK)</span>
            </div>
          </div>

          {/* Common Issues */}
          <section>
            <h2>Common issues</h2>

            <div className="faq">
              <h3>My journal entry didn&apos;t save</h3>
              <p>Entries save automatically as you write. If one seems to be missing:</p>
              <ol>
                <li>Force-quit the app (swipe up from the bottom, then swipe Journey Jotter away) and reopen it</li>
                <li>Check you have a stable internet connection — entries sync in the background</li>
                <li>Pull down on the journal screen to refresh</li>
              </ol>
              <p>Still missing? Email us with the approximate date and we&apos;ll help you recover it.</p>
            </div>

            <div className="faq">
              <h3>Voice transcription isn&apos;t working</h3>
              <ul>
                <li>Give Journey Jotter microphone access: iPhone Settings → Journey Jotter → Microphone</li>
                <li>Try somewhere quieter — background noise trips up transcription</li>
                <li>If it fails repeatedly, restart the app</li>
                <li>You can always edit the transcribed text if something comes out wrong</li>
              </ul>
            </div>

            <div className="faq">
              <h3>The chatbot isn&apos;t responding</h3>
              <ul>
                <li>Check your internet — JJ needs a signal to reply</li>
                <li>Force-quit and reopen the app</li>
                <li>If it&apos;s still stuck, email us. That usually means our servers are having a moment.</li>
              </ul>
            </div>

            <div className="faq">
              <h3>How do I change the date of an entry?</h3>
              <p>Open the entry, tap the date at the top, and pick a new date from the calendar.</p>
            </div>

            <div className="faq">
              <h3>How do I add photos to an entry?</h3>
              <p>While writing an entry, tap the photo icon in the input bar. You can attach multiple photos to a single entry.</p>
            </div>

            <div className="faq">
              <h3>I&apos;m not getting daily prompts</h3>
              <ul>
                <li>Turn notifications on: iPhone Settings → Journey Jotter → Notifications</li>
                <li>Make sure your trip is active in the app</li>
                <li>Missed a few days? JJ will ask about them retrospectively next time you open the app.</li>
              </ul>
            </div>

            <div className="faq">
              <h3>The app is crashing or running slowly</h3>
              <ul>
                <li>Update to the latest version from the App Store</li>
                <li>Restart your iPhone</li>
                <li>Still crashing? Email us with your iPhone model and iOS version.</li>
              </ul>
            </div>
          </section>

          {/* Account & Subscription */}
          <section>
            <h2>Account &amp; subscription</h2>

            <div className="faq">
              <h3>Managing your subscription</h3>
              <p>All Journey Jotter subscriptions are handled by Apple. To view, change, or cancel:</p>
              <ol>
                <li>Open the Settings app on your iPhone</li>
                <li>Tap your name at the top</li>
                <li>Tap Subscriptions</li>
                <li>Tap Journey Jotter</li>
              </ol>
            </div>

            <div className="faq">
              <h3>Cancelling your free trial</h3>
              <p>
                Follow the steps above and tap Cancel Subscription. As long as you cancel before the trial ends, you won&apos;t be charged, and you&apos;ll keep access to JJ until the trial period is up.
              </p>
            </div>

            <div className="faq">
              <h3>Refunds</h3>
              <p>
                Refunds are handled by Apple, not us. Request one at{' '}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
                  reportaproblem.apple.com
                </a>
                . If something&apos;s clearly wrong on our end, email us and we&apos;ll advocate for you.
              </p>
            </div>

            <div className="faq">
              <h3>Deleting your account and data</h3>
              <p>
                You can delete your account and all associated data from inside the app: <strong>Profile → Settings → Delete Account</strong>. Deletion is permanent — journal entries, photos, memories, and account details are removed from our systems within 30 days.
              </p>
              <p>
                If you can&apos;t access the app, email{' '}
                <a href="mailto:contact@journeyjotter.ai">contact@journeyjotter.ai</a> from the address linked to your account and we&apos;ll process the deletion for you.
              </p>
            </div>
          </section>

          {/* Privacy & Data */}
          <section>
            <h2>Privacy &amp; data</h2>

            <div className="faq">
              <h3>Where your data is stored</h3>
              <p>
                Journey Jotter is operated by Journey Jotter AI Limited, registered in England and Wales (company no. 15916035). Your journal data is stored on servers in the European Union and handled in accordance with UK and EU GDPR.
              </p>
            </div>

            <div className="faq">
              <h3>Privacy Policy and Terms</h3>
              <p>
                Read the full details in our <a href="/privacy">Privacy Policy</a> and{' '}
                <a href="/terms">Terms of Service</a>.
              </p>
            </div>

            <div className="faq">
              <h3>GDPR requests</h3>
              <p>
                To request a copy of your data, correct information, or delete your account outside the app, email{' '}
                <a href="mailto:contact@journeyjotter.ai">contact@journeyjotter.ai</a>. We respond within 30 days, as required by GDPR.
              </p>
            </div>
          </section>

          <div className="footer-note">Journey Jotter AI Limited · Registered in England and Wales · Company No. 15916035</div>
        </div>
      </main>
    </>
  );
}
