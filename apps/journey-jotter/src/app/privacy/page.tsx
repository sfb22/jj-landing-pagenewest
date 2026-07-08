import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Journey Jotter',
  description:
    'How Journey Jotter AI Limited collects, stores, uses, and shares your personal data, and your rights under UK GDPR.',
};

export default function PrivacyPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .jj-legal {
          min-height: 100vh;
          background: #FAF0E0;
          color: #2D1B0E;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 48px 20px 96px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .jj-legal .container {
          max-width: 780px;
          margin: 0 auto;
        }
        .jj-legal .back-link {
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
        .jj-legal .back-link:hover { color: #F26B2D; }
        .jj-legal h1 {
          font-size: 44px;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 0 0 10px;
          color: #2D1B0E;
          line-height: 1.1;
        }
        .jj-legal .meta {
          font-size: 15px;
          color: #6B4A2E;
          margin: 0 0 40px;
        }
        .jj-legal section {
          margin-bottom: 40px;
        }
        .jj-legal section h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 14px;
          color: #2D1B0E;
          letter-spacing: -0.01em;
        }
        .jj-legal section h3 {
          font-size: 16px;
          font-weight: 700;
          margin: 20px 0 6px;
          color: #2D1B0E;
        }
        .jj-legal p, .jj-legal li {
          font-size: 15px;
          color: #4A3220;
          margin: 10px 0;
        }
        .jj-legal ul, .jj-legal ol {
          padding-left: 24px;
          margin: 10px 0;
        }
        .jj-legal ul { list-style-type: disc; }
        .jj-legal ol { list-style-type: decimal; }
        .jj-legal li { margin-bottom: 6px; }
        .jj-legal a {
          color: #F26B2D;
          text-decoration: none;
          font-weight: 600;
          word-break: break-word;
        }
        .jj-legal a:hover { text-decoration: underline; }
        .jj-legal .policy-table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
          background: #FFFFFF;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #E8D9BE;
          font-size: 14px;
        }
        .jj-legal .policy-table th {
          text-align: left;
          padding: 12px 16px;
          background: #FDF7EB;
          color: #2D1B0E;
          font-weight: 700;
          border-bottom: 1px solid #E8D9BE;
          font-size: 14px;
        }
        .jj-legal .policy-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #F0E4CE;
          vertical-align: top;
          color: #4A3220;
        }
        .jj-legal .policy-table tr:last-child td { border-bottom: none; }
        .jj-legal .policy-table td strong { color: #2D1B0E; }
        .jj-legal .contact-block {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(242, 107, 45, 0.18);
          margin-top: 12px;
        }
        .jj-legal .contact-block p { margin: 6px 0; }
        .jj-legal .footer-note {
          margin-top: 64px;
          padding-top: 32px;
          border-top: 1px solid #E8D9BE;
          font-size: 13px;
          color: #8A6A4E;
          text-align: center;
        }
        @media (max-width: 640px) {
          .jj-legal { padding: 32px 18px 72px; }
          .jj-legal h1 { font-size: 34px; }
          .jj-legal section h2 { font-size: 20px; }
          .jj-legal .policy-table { font-size: 13px; }
          .jj-legal .policy-table th, .jj-legal .policy-table td { padding: 10px 12px; }
        }
      `,
        }}
      />
      <main className="jj-legal">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Journey Jotter
          </Link>

          <h1>Privacy Policy</h1>
          <p className="meta">Version 1 · 8 July 2026</p>

          <section>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy is provided by <strong>Journey Jotter AI Limited</strong>, a company registered in England and Wales under company number 15916035 with registered office at 3 Mauleverer Road, London, England, SW2 5DR (&apos;we&apos;, &apos;our&apos; or &apos;us&apos;) for use of our products and services including our AI-powered travel journaling app (<strong>Services</strong>).
            </p>
            <p>
              We take your privacy very seriously. Please read this privacy policy carefully as it contains important information on how and why we collect, store, use and share any information relating to you (your personal data).
            </p>
            <p>
              It also explains your rights in relation to your personal data and how to contact us or the relevant regulator in the event you have a complaint. Our collection, storage, use and sharing of your personal data is regulated by law, including under the UK General Data Protection Regulation (UK GDPR).
            </p>
            <p>
              We are the controller of personal data obtained via the Services, meaning we are the organisation legally responsible for deciding how and for what purposes it is used.
            </p>
          </section>

          <section>
            <h2>2. What this policy applies to</h2>
            <p>This privacy policy relates to your use of the Services only.</p>
            <p>
              The Services may link to or rely on other apps, websites, APIs or services owned and operated by us or by certain trusted third parties to enable us to provide you with Services. These other apps, websites, APIs or services may also gather information about you in accordance with their own separate privacy policies. For privacy information relating to these other apps, websites or services, please consult their privacy policies as appropriate. For more information see the section &apos;Who we share your personal data with&apos; below.
            </p>
          </section>

          <section>
            <h2>3. Personal data we collect about you</h2>
            <p>
              The personal data we collect about you depends on the particular activities carried out through the Services. We will collect and use the following personal data about you:
            </p>
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Category of data</th>
                  <th>In more detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Identity and account data you input into the Services</strong>
                    <br />
                    Registration is mandatory in order to use the Services
                  </td>
                  <td>Name and email address</td>
                </tr>
                <tr>
                  <td><strong>Data collected when you use specific functions in the Services</strong></td>
                  <td>Data you store online with us using the Services including your usage history or preferences (while such data may not always be personal data as defined at law in all cases we will assume it is and treat it in accordance with this policy as if it were)</td>
                </tr>
                <tr>
                  <td><strong>Travel destination data you provide during onboarding</strong></td>
                  <td>The travel destination(s) you enter during onboarding, which we use together with the Mapbox mapping service to provide the &ldquo;maps&rdquo; feature. We do not currently collect precise device location data. See the section &apos;Location services/data&apos; below.</td>
                </tr>
                <tr>
                  <td><strong>Other data the Services collect automatically when you use it</strong></td>
                  <td>Your activities on, and use of, the Services which reveal your preferences, interests or manner of use of the Services and the times of use.</td>
                </tr>
                <tr>
                  <td><strong>Data collected when you make an enquiry with us</strong></td>
                  <td>Your email address and any other data you specifically share with us.</td>
                </tr>
                <tr>
                  <td><strong>Voice recordings and audio transcripts</strong></td>
                  <td>Audio recordings you create using the Services and the text transcripts automatically generated from them using speech-to-text technology, so that your spoken entries can be saved to your journal.</td>
                </tr>
                <tr>
                  <td><strong>Images and photographs you upload</strong></td>
                  <td>Photographs, images and other media you choose to upload to, or capture within, the Services to include in your journal entries.</td>
                </tr>
                <tr>
                  <td><strong>Chatbot conversations and AI &lsquo;memories&rsquo;</strong></td>
                  <td>The content of your conversations with the in-app AI assistant, together with contextual information (&lsquo;memories&rsquo;) generated and stored to personalise and improve your interactions with the AI features of the Services.</td>
                </tr>
              </tbody>
            </table>
            <p>
              If you do not provide personal data we ask for where it is required, including the geo-localisation services, it may prevent us from providing services and/or the Services to you.
            </p>
            <p>
              We collect and use this personal data for the purposes described in the section &apos;How and why we use your personal data&apos; below.
            </p>
          </section>

          <section>
            <h2>4. Sensitive data</h2>
            <p>
              Sensitive personal data (also known as special category data) means information related to personal data revealing racial or ethnic origin; political opinions; religious or philosophical beliefs; trade union membership; genetic data; biometric data (where used for identification purposes); data concerning health; data concerning a person&apos;s sex life; and data concerning a person&apos;s sexual orientation.
            </p>
            <p>
              Please note that we do not knowingly or intentionally collect sensitive personal data or information about criminal convictions from individuals and that any you do submit is addressed below.
            </p>
            <p>
              If, however you do submit sensitive data to us, such as if you make this sensitive data available to other users of the Services (such as by publishing it through any forum feature we may make available from time to time) we will assume that you have purposefully made any such sensitive data manifestly public.
            </p>
          </section>

          <section>
            <h2>5. Special category personal data or sensitive data</h2>
            <p>
              Certain Personal Data we collect is treated as a &lsquo;special category&rsquo; to which additional protections apply under data protection law. This is also known as &lsquo;Sensitive Data&rsquo;. Where we process such Sensitive Data, we will also ensure we are permitted to do so under data protection laws, and any such data will be collected on the basis of your consent.
            </p>
            <p>
              Sensitive personal data means information related to personal data revealing racial or ethnic origin; political opinions; religious or philosophical beliefs; trade union membership; genetic data; biometric data (where used for identification purposes); data concerning health; data concerning a person&apos;s sex life; and data concerning a person&apos;s sexual orientation.
            </p>
            <p>
              We may collect sensitive personal data or information. This information will solely consist of what is provided by the user, rather than information that is requested from the user. We process this information on the basis of Consent by the user to receive the services.
            </p>
            <p>
              If you do not provide Personal Data we ask for where it is asked, it will prevent us from providing the Services.
            </p>
            <p>
              We collect and use this Personal Data for the purposes described in the section &apos;How and why we use your Personal Data&apos; below.
            </p>
          </section>

          <section>
            <h2>6. Location services / data</h2>
            <p>
              We do not currently use device location services to identify your location. Instead, during onboarding you can tell us where you are planning to travel by entering that information yourself. We use what you enter, together with the Mapbox mapping service, to provide the &ldquo;maps&rdquo; feature of the Services. We may introduce device-based location services in the future; if we do, we will ask for your consent before accessing precise location data from your device and will update this policy accordingly.
            </p>
            <p>
              If you do not provide this information, you may still use the Services, but the &ldquo;maps&rdquo; feature will not be available. If we introduce device location services in the future, you will be able to withdraw your consent at any time by turning off the location permissions for our app on your device.
            </p>
            <p>
              Any device-based location services we may introduce in the future will not operate unless location services are generally enabled on your device, and you will be able to disable them at any time using your device&apos;s settings app. When you enter your travel information or use the &ldquo;maps&rdquo; feature, data is also collected by Mapbox, Inc. in accordance with their Privacy Policy, as Mapbox is the map service we integrate into our app.
            </p>
            <p>
              We exert no control over Mapbox&apos;s Privacy Policy and we therefore recommend that you consult their privacy policy for further information on how Mapbox protect personal data please visit their site &mdash;{' '}
              <a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">https://www.mapbox.com/legal/privacy</a>. For more information see the section &apos;Who we share your personal data with&apos; below.
            </p>
          </section>

          <section>
            <h2>7. How your personal data is collected</h2>
            <p>
              We collect personal data from you directly when you sign up to the Services, contact us directly or reach out to us via social media, make submissions via the Services when a forum element is available, or indirectly, such as your activity while using the Services. We may also collect location data where you enable location services.
            </p>
            <p>
              We may collect personal information about you using cookies or similar technologies. Please refer to our Cookies Policy for details about the cookies and similar technologies we use and how you can control them.
            </p>
          </section>

          <section>
            <h2>8. How and why we use your personal data</h2>
            <p>
              Under data protection law, we can only use your personal data if we have a proper reason, e.g.:
            </p>
            <ol>
              <li>where you have given consent</li>
              <li>to comply with our legal and regulatory obligations</li>
              <li>for the performance of a contract with you or to take steps at your request before entering into a contract, or</li>
              <li>for our legitimate interests or those of a third party</li>
            </ol>
            <p>
              A legitimate interest is when we have a business or commercial reason to use your information, so long as this is not overridden by your own rights and interests. We will carry out an assessment when relying on legitimate interests, to balance our interests against your own. You can obtain details of this assessment by contacting us (see &apos;How to contact us&apos; below).
            </p>
            <p>The table below explains what we use your personal data for and why.</p>
            <table className="policy-table">
              <thead>
                <tr>
                  <th>What we use your personal data for</th>
                  <th>Our reasons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Create and manage your account with us</td>
                  <td>To perform our contract with you or to take steps at your request before entering into a contract</td>
                </tr>
                <tr>
                  <td>Providing services and/or the functionalities of the Services to you</td>
                  <td>Depending on the circumstances: to perform our contract with you or to take steps at your request before entering into a contract (in this case, the contract means the Terms and Conditions of Use which apply to the Services); the maps function will use data relating to your location only based on your consent as described in &apos;Location services/data&apos; (above)</td>
                </tr>
                <tr>
                  <td>To enforce legal rights or defend or undertake legal proceedings</td>
                  <td>Depending on the circumstances: to comply with our legal and regulatory obligations; in other cases, for our legitimate interests or those of a third party, i.e. to protect our business, interests and rights or those of others</td>
                </tr>
                <tr>
                  <td>Communications with you not related to marketing, including about changes to our terms or policies or changes to the Services or service or other important notices</td>
                  <td>Depending on the circumstances: to comply with our legal and regulatory obligations; in other cases, for our legitimate interests or those of a third party, i.e., to provide the best service to you</td>
                </tr>
                <tr>
                  <td>Protect the security of systems and data</td>
                  <td>To comply with our legal and regulatory obligations we may also use your personal data to ensure the security of systems and data to a standard that goes beyond our legal obligations, and in those cases our reasons are for our legitimate interests or those of a third party, i.e., to protect systems and data and to prevent and detect criminal activity that could be damaging for you and/or us</td>
                </tr>
                <tr>
                  <td>Operational reasons, such as improving efficiency, training, and quality control or to provide support to you</td>
                  <td>For our legitimate interests or those of a third party, i.e., to be as efficient as we can so we can deliver the best service to you</td>
                </tr>
                <tr>
                  <td>Statistical analysis to help us manage our business, e.g., in relation to our performance, customer base, app and functionalities and offerings or other efficiency measures</td>
                  <td>For our legitimate interests or those of a third party, i.e. to be as efficient as we can so we can deliver the best service to you and improve and develop our app</td>
                </tr>
                <tr>
                  <td>Updating and enhancing user records</td>
                  <td>Depending on the circumstances: to perform our contract with you or to take steps at your request before entering into a contract (in this case, the contract means the Terms and Conditions of Use which apply to the Services); to comply with our legal and regulatory obligations; where neither of the above apply, for our legitimate interests or those of a third party, eg making sure that we can keep in touch with our customers about their accounts and new products or functionalities related to the Services and our services</td>
                </tr>
                <tr>
                  <td>To comply with our legal and regulatory obligations</td>
                  <td>Depending on the circumstances: to perform our contract with you or to take steps at your request before entering into a contract (in this case, the contract means the Terms and Conditions of Use which apply to the Services); to comply with our legal and regulatory obligations; where neither of the above apply, for our legitimate interests or those of a third party, e.g. making sure that we can keep in touch with our customers about their accounts and new products or functionalities related to the Services and our services</td>
                </tr>
                <tr>
                  <td>To share your personal data with members of our group and third parties in connection with a significant corporate transaction or restructuring, including a merger, acquisition, asset sale, initial public offering or in the event of our insolvency. In such cases information will be anonymised where possible and only shared where necessary</td>
                  <td>Depending on the circumstances: to comply with our legal and regulatory obligations; in other cases, for our legitimate interests or those of a third party, i.e., to protect, realise or grow the value in our business and assets</td>
                </tr>
                <tr>
                  <td>Providing the AI features of the Services, including transcribing your voice recordings, storing and displaying images you upload, and operating the in-app AI assistant and its &lsquo;memory&rsquo; function</td>
                  <td>To perform our contract with you or to take steps at your request before entering into a contract. Where this content includes special category (sensitive) data, we rely on your explicit consent as described in &lsquo;Special category personal data or Sensitive Data&rsquo; above.</td>
                </tr>
              </tbody>
            </table>
            <p>
              See &apos;Who we share your personal data with&apos; for further information on the steps we will take to protect your personal data where we need to share it with others.
            </p>
          </section>

          <section>
            <h2>9. Who we share your personal data with</h2>
            <p>
              We routinely share personal data with service providers we use to help us run our business or provide the services or functionalities in the Services. This may include Mapbox, Inc. for Mapbox location functionality. We exert no control over Mapbox&apos;s Privacy Policy and recommend that you consult Mapbox&apos;s privacy policy for further information:{' '}
              <a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">https://www.mapbox.com/legal/privacy</a>.
            </p>
            <p>
              We use the following key service providers (processors) to operate the Services. Where they process your personal data outside the UK, we rely on the safeguards described in &apos;Transferring your personal data out of the UK&apos; below. You should also consult each provider&apos;s own privacy policy for further information about how they handle personal data.
            </p>
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Service provider</th>
                  <th>What we use them for</th>
                  <th>Where your data is processed</th>
                  <th>Safeguard for transfers outside the UK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OpenAI, L.L.C.</td>
                  <td>Speech-to-text transcription of your voice recordings and generative-AI features</td>
                  <td>United States</td>
                  <td>UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses with the UK Addendum</td>
                </tr>
                <tr>
                  <td>Anthropic, PBC</td>
                  <td>Large-language-model processing for the in-app AI assistant</td>
                  <td>United States</td>
                  <td>UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses with the UK Addendum</td>
                </tr>
                <tr>
                  <td>Mem0</td>
                  <td>Storage and retrieval of AI conversational context (&lsquo;memories&rsquo;)</td>
                  <td>United States (AWS)</td>
                  <td>UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses with the UK Addendum</td>
                </tr>
                <tr>
                  <td>Mapbox, Inc.</td>
                  <td>Maps and location functionality</td>
                  <td>United States</td>
                  <td>UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses with the UK Addendum</td>
                </tr>
                <tr>
                  <td>RevenueCat, Inc.</td>
                  <td>Management of subscriptions and in-app purchases</td>
                  <td>United States</td>
                  <td>UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses with the UK Addendum</td>
                </tr>
                <tr>
                  <td>DigitalOcean, LLC</td>
                  <td>Cloud hosting and infrastructure</td>
                  <td>EU</td>
                  <td>UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses with the UK Addendum</td>
                </tr>
                <tr>
                  <td>Langfuse</td>
                  <td>Monitoring and analytics of our AI features</td>
                  <td>EU</td>
                  <td>Adequacy regulation or appropriate safeguards (IDTA / SCCs with UK Addendum), as applicable</td>
                </tr>
              </tbody>
            </table>
            <p>
              We only allow service providers to handle your personal data if we are satisfied they take appropriate measures to protect your personal data. We also impose contractual obligations on service providers to ensure they can only use your personal data to provide services to us and to you.
            </p>
            <p>We or the third parties mentioned above may occasionally also need to share your personal data with:</p>
            <ul>
              <li>external auditors, e.g. in relation to the audit of our accounts and our company &mdash; the recipient of the information will be bound by confidentiality obligations</li>
              <li>professional advisors (such as lawyers and other advisors) &mdash; the recipient of the information will be bound by confidentiality obligations</li>
              <li>law enforcement agencies, courts or tribunals and regulatory bodies to comply with legal and regulatory obligations</li>
              <li>other parties in connection with a significant corporate transaction or restructuring, including a merger, acquisition, asset sale, initial public offering or in the event of our insolvency &mdash; usually, information will be anonymised but this may not always be possible, however, the recipient of the information will be bound by confidentiality obligations</li>
            </ul>
            <p>
              If you would like more information about who we share our data with and why, please contact us (see &apos;How to contact us&apos; below).
            </p>
            <p>We will not share your personal data with any other third party.</p>
          </section>

          <section>
            <h2>10. How long your personal data will be kept</h2>
            <p>We keep different categories of personal data for different periods:</p>
            <p>
              <strong>Account and billing records:</strong> we retain these for as long as you have an active account with us and for up to 6 years after your account is closed, to comply with our accounting and legal obligations, including in connection with the pursuit or defence of legal claims.
            </p>
            <p>
              <strong>Journal content</strong> (including your entries, voice recordings, transcripts, uploaded images, chatbot conversations and AI &lsquo;memories&rsquo;): we retain this for as long as you have an active account with us. When you delete this content, or close your account, we will delete or anonymise it as described below.
            </p>
            <p>
              Once you have closed your account with us, we will restrict access to your personal data so that only key stakeholders in our business, on a &lsquo;need to know basis&rsquo;, can access it pending deletion.
            </p>
            <p>At the end of the applicable retention period, or following a valid deletion request, we will delete or anonymise your personal data from our active systems. Please note that:</p>
            <ul>
              <li>some data held by our service providers (including the AI &lsquo;memories&rsquo; stored by Mem0) is first deactivated (&lsquo;soft-deleted&rsquo;) so that it is no longer used or accessible, with permanent deletion completed on request, ordinarily within one week; and</li>
              <li>after deletion from our active systems, residual copies may remain in our encrypted backups for a limited period (up to 12 months) before they are overwritten in the ordinary course of our backup cycle. During this period the backup data is retained securely and is not used for any other purpose.</li>
            </ul>
          </section>

          <section>
            <h2>11. De-identified information</h2>
            <p>
              The personal data we collect may have analytical, educational, or commercial value to us. Where we have de-identified the information we have collected, we reserve the right to process and distribute such information.
            </p>
          </section>

          <section>
            <h2>12. Automated decision-making</h2>
            <p>
              We do not make decisions based solely on automated processing (including profiling) that produce legal effects concerning you or that similarly significantly affect you. While we use automated systems to operate and personalise the Services, including the AI features described in this policy, these do not amount to decisions of that kind. If this changes, we will update this policy and tell you about your rights, including your right to request human review.
            </p>
          </section>

          <section>
            <h2>13. Transferring your personal data out of the UK</h2>
            <p>
              As part of providing the Services, we transfer your personal data to service providers and other third parties based outside the UK, including in the United States. Details of these recipients are set out in the table in &apos;Who we share your personal data with&apos; above.
            </p>
            <p>
              Furthermore, under UK data protection laws, we can only transfer your personal data to a country outside the UK where: the UK government has decided the particular country ensures an adequate level of protection of personal data (known as an &lsquo;adequacy regulation&rsquo;) further to Article 45 of the UK GDPR; there are appropriate safeguards in place, together with enforceable rights and effective legal remedies for you; or a specific exception applies under relevant data protection law. Where we transfer your personal data from the UK, we rely on one of the following:
            </p>
            <ul>
              <li><strong>The EEA:</strong> we would rely on the adequacy finding granted by the UK to the EU under the Withdrawal Agreement to do; for any transfers from the EU to the UK, we would rely on the adequacy regulation granted to the UK under the Adequacy Decision.</li>
              <li><strong>Any country located outside the UK/EEA</strong> (including the United States, where several of our service providers are based): we rely on appropriate safeguards under the UK GDPR, namely the UK International Data Transfer Agreement (IDTA), or EU Standard Contractual Clauses together with the UK Addendum, except where an adequacy regulation is in place for that country.</li>
            </ul>
            <p>
              In the event we could not or choose not to continue to rely on either of those mechanisms at any time we would not transfer your personal data outside the UK unless we could do so on the basis of an alternative mechanism or exception provided by UK data protection law. You can ask us for a copy of the safeguards we rely on for these transfers by contacting us (see &apos;How to contact us&apos; below).
            </p>
          </section>

          <section>
            <h2>14. Your rights</h2>
            <p>
              You generally have the following rights, which you can usually exercise free of charge. For more information regarding these rights, please visit the ICO website{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <table className="policy-table">
              <tbody>
                <tr>
                  <td><strong>Access to a copy of your personal data</strong></td>
                  <td>The right to be provided with a copy of your personal data.</td>
                </tr>
                <tr>
                  <td><strong>Correction (also known as rectification)</strong></td>
                  <td>The right to require us to correct any mistakes in your personal data.</td>
                </tr>
                <tr>
                  <td><strong>Erasure (also known as the right to be forgotten)</strong></td>
                  <td>The right to require us to delete your personal data &mdash; in certain situations.</td>
                </tr>
                <tr>
                  <td><strong>Restriction of use</strong></td>
                  <td>The right to require us to restrict use of your personal data in certain circumstances, e.g. if you contest the accuracy of the data.</td>
                </tr>
                <tr>
                  <td><strong>Data portability</strong></td>
                  <td>The right to receive the personal data you provided to us, in a structured, commonly used and machine-readable format and/or transmit that data to a third party &mdash; in certain situations.</td>
                </tr>
                <tr>
                  <td><strong>To object to use</strong></td>
                  <td>The right to object: at any time to your personal data being used for direct marketing (including profiling); in certain other situations to our continued use of your personal data, e.g. where we use your personal data for our legitimate interests.</td>
                </tr>
                <tr>
                  <td><strong>Not to be subject to decisions without human involvement</strong></td>
                  <td>The right not to be subject to a decision based solely on automated processing (including profiling) that produces legal effects concerning you or similarly significantly affects you. We do not make any such decisions based on data collected by the Services.</td>
                </tr>
              </tbody>
            </table>
            <p>
              For further information on each of those rights, including the circumstances in which they do and do not apply, please contact us (see &apos;How to contact us&apos; below). You may also find it helpful to refer to the guidance from the UK&apos;s Information Commissioner on your rights under the UK GDPR.
            </p>
            <p>
              If you would like to exercise any of those rights, please go to the support page on our website at{' '}
              <a href="/support">www.journeyjotter.ai/support</a> or email or write to us using the contact details below. When contacting us please:
            </p>
            <ul>
              <li>provide enough information to identify yourself (e.g., your full name and username) and any additional identity information we may reasonably request from you, and</li>
              <li>let us know which right(s) you want to exercise and the information to which your request relates</li>
            </ul>
          </section>

          <section>
            <h2>15. Keeping your personal data secure</h2>
            <p>
              We have appropriate security measures to prevent personal data from being accidentally lost, or used or accessed unlawfully. We limit access to your personal data to those who have a genuine business need to access it.
            </p>
            <p>
              We also have procedures in place to deal with any suspected data security breach. We will notify you and any applicable regulator of a suspected data security breach where we are legally required to do so.
            </p>
            <p>
              If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit{' '}
              <a href="https://www.getsafeonline.org" target="_blank" rel="noopener noreferrer">www.getsafeonline.org</a>. Get Safe Online is supported by HM Government and leading businesses.
            </p>
          </section>

          <section>
            <h2>16. How to complain</h2>
            <p>
              Please contact us if you have any queries or concerns about our use of your information (see below &lsquo;How to contact us&rsquo;). We hope we will be able to resolve any issues you may have.
            </p>
            <p>You also have the right to lodge a complaint with the Information Commissioner.</p>
            <p>
              The Information Commissioner can be contacted at{' '}
              <a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer">https://ico.org.uk/make-a-complaint</a> or telephone: 0303 123 1113.
            </p>
          </section>

          <section>
            <h2>17. Changes to this privacy policy</h2>
            <p>
              We may change this privacy policy from time to time. When we make significant changes we will take steps to inform you, for example via the Services or by other means, such as email.
            </p>
          </section>

          <section>
            <h2>18. How to contact us</h2>
            <p>
              For further information about our privacy policy or practices, or to access or correct your personal data, or make a complaint, please contact us using the details set out below:
            </p>
            <div className="contact-block">
              <p><strong>Name:</strong> Sam Brown</p>
              <p><strong>Email:</strong> <a href="mailto:contact@journeyjotter.ai">contact@journeyjotter.ai</a></p>
            </div>
          </section>

          <div className="footer-note">Journey Jotter AI Limited · Registered in England and Wales · Company No. 15916035</div>
        </div>
      </main>
    </>
  );
}
