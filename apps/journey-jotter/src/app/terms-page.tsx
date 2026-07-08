import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Journey Jotter',
  description:
    'Mobile app terms and conditions for use of the Journey Jotter travel journaling app.',
};

export default function TermsPage() {
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
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 0 0 10px;
          color: #2D1B0E;
          line-height: 1.15;
        }
        .jj-legal .meta {
          font-size: 15px;
          color: #6B4A2E;
          margin: 0 0 32px;
        }
        .jj-legal section {
          margin-bottom: 36px;
        }
        .jj-legal section h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 14px;
          color: #2D1B0E;
          letter-spacing: -0.01em;
        }
        .jj-legal p, .jj-legal li {
          font-size: 15px;
          color: #4A3220;
          margin: 10px 0;
        }
        .jj-legal ul { list-style-type: disc; padding-left: 24px; }
        .jj-legal a {
          color: #F26B2D;
          text-decoration: none;
          font-weight: 600;
          word-break: break-word;
        }
        .jj-legal a:hover { text-decoration: underline; }
        .jj-legal strong { color: #2D1B0E; }
        .jj-legal .legal-list {
          list-style: none;
          padding-left: 0;
          margin: 10px 0;
          counter-reset: alpha-counter;
        }
        .jj-legal .legal-list > li {
          counter-increment: alpha-counter;
          padding-left: 34px;
          position: relative;
          margin-bottom: 10px;
        }
        .jj-legal .legal-list > li::before {
          content: "(" counter(alpha-counter, lower-alpha) ")";
          position: absolute;
          left: 0;
          top: 0;
          font-weight: 600;
          color: #2D1B0E;
        }
        .jj-legal .legal-list.roman {
          counter-reset: roman-counter;
          margin-top: 8px;
        }
        .jj-legal .legal-list.roman > li {
          counter-increment: roman-counter;
          padding-left: 40px;
        }
        .jj-legal .legal-list.roman > li::before {
          content: "(" counter(roman-counter, lower-roman) ")";
        }
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
          .jj-legal h1 { font-size: 30px; }
          .jj-legal section h2 { font-size: 20px; }
          .jj-legal .legal-list > li { padding-left: 30px; }
          .jj-legal .legal-list.roman > li { padding-left: 36px; }
        }
      `,
        }}
      />
      <main className="jj-legal">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Journey Jotter
          </Link>

          <h1>Mobile App Terms and Conditions</h1>
          <p className="meta">Version 1 · 8 July 2026</p>

          <section>
            <p>
              We are <strong>Journey Jotter AI Limited</strong> (company number 15916035), with registered office at 3 Mauleverer Road, London, England, SW2 5DR, the creators of the Journey Jotter app (referred to below as the &lsquo;App&rsquo;).
            </p>
            <p>
              By downloading the App, you are agreeing to the terms of this agreement which are legally binding. Please read it together with our privacy policy, available at{' '}
              <a href="/privacy">journeyjotter.ai/privacy</a>, before you download and use the App. Only download the App if you have read the rules and agree to them.
            </p>
            <p>If you do not agree to these terms, we will not allow you to use the App and you should not download it.</p>
            <p>In this agreement:</p>
            <ul style={{ paddingLeft: '22px', margin: '10px 0' }}>
              <li>references to the &lsquo;App Store&rsquo; means Apple&apos;s App Store and we refer to their rules and policies contained in the Apple Media Services Terms and Conditions as the &lsquo;App Store Rules&rsquo;.</li>
            </ul>
          </section>

          <section>
            <h2>1. Our services</h2>
            <ol className="legal-list">
              <li>Journey Jotter AI Limited is the developer and supplier of the App.</li>
              <li>Journey Jotter AI Limited has developed the App which is intended to capture and store travel journal entries, photos and voice notes, and generate written journal content using artificial intelligence.</li>
            </ol>
          </section>

          <section>
            <h2>2. These terms</h2>
            <ol className="legal-list">
              <li>
                These terms form an agreement between you and us and:
                <ol className="legal-list roman">
                  <li>Apple is not a party to this agreement and has no responsibility for the App or its content; and</li>
                </ol>
              </li>
              <li>
                We license you to download and use the App:
                <ol className="legal-list roman">
                  <li>For iOS users, onto any Apple-branded product, and to use it once you have downloaded it, provided you follow all of the rules described in this agreement and the App Store Rules.</li>
                </ol>
              </li>
              <li>
                The licence:
                <ol className="legal-list roman">
                  <li>is only for you personally (and any family members permitted under the App Store Rules) and for non-business use;</li>
                  <li>starts when you download the App; and</li>
                  <li>covers content, materials, or services accessible from, or bought in, the App including all of our support resources. It also covers updates to the App unless they come with separate terms, in which case we will give you an opportunity to review and accept.</li>
                </ol>
              </li>
              <li>The App can be accessed, used and downloaded by other accounts that are associated with you through family sharing or volume purchasing in accordance with the App Store Rules.</li>
              <li>You must comply with the App Store Rules as well as these terms but, if there is any conflict between them, you should follow the App Store Rules rather than the equivalent rule here.</li>
              <li>You do not own the App or any of its contents but you may use it on devices that you own or control, as permitted by these terms and by the App Store Rules.</li>
              <li>If you sell or give away the device on which you have downloaded the App, you must first remove the App from the device.</li>
              <li>
                You are not allowed to:
                <ol className="legal-list roman">
                  <li>modify the App&apos;s code in any way, including inserting new code, either directly or through the use of another app or piece of software;</li>
                  <li>deliberately attempt to avoid or manipulate any security features included in the App; or</li>
                  <li>pretend that the App is your own or make it available for others to download or use (including by way of copying the code of the App and creating an independent version).</li>
                </ol>
              </li>
            </ol>
          </section>

          <section>
            <h2>3. Support and contact</h2>
            <ol className="legal-list">
              <li>We are responsible for customer service in relation to the App and can help you if you are having any issues.</li>
              <li>For iOS users, you acknowledge that Apple has no obligation whatsoever to provide any support or maintenance services in relation to the App, although if the App is faulty, you may be able to claim a refund for paid content or services &mdash; please see clause 13.</li>
              <li>
                If you need to get in touch with us, you can contact us via email at{' '}
                <a href="mailto:contact@journeyjotter.ai">contact@journeyjotter.ai</a>, or visit our{' '}
                <a href="/support">support page</a>.
              </li>
              <li>If we need to get in touch with you, we will do so by email or an in-app notification.</li>
            </ol>
          </section>

          <section>
            <h2>4. Subscriptions, payment and refunds</h2>
            <ol className="legal-list">
              <li>The App is free to download. Certain features and content require a paid subscription purchased through the App Store (a <strong>Subscription</strong>).</li>
              <li>New users may be offered a 3-day free trial. Unless you cancel at least 24 hours before the trial ends, the trial automatically converts into a paid Subscription at the price for the plan you have selected.</li>
              <li>The Subscription plans and prices are: weekly at £4.49; monthly at £9.99; and three-monthly at £19.99. Prices include VAT where applicable and may vary by country and from time to time. The current price is shown in the App before you confirm your purchase.</li>
              <li>Each Subscription automatically renews for a further period of the same length at the then-current price, unless you cancel it at least 24 hours before the end of the current period. Your Apple ID account is charged on confirmation of purchase and again on each renewal.</li>
              <li>You can manage or cancel your Subscription at any time in your Apple ID account settings. Deleting the App does not cancel your Subscription.</li>
              <li>All payments are taken and processed by Apple under the Apple Media Services Terms and Conditions. We do not collect, process or store your payment card details.</li>
              <li>Refunds are handled by Apple in accordance with the App Store Rules. We are not able to provide refunds directly. To request a refund, you should contact Apple.</li>
              <li>We may change Subscription prices from time to time. Where required, Apple will notify you of a price increase and seek your consent before it takes effect; if you do not consent, your Subscription will not renew at the increased price.</li>
              <li>We may in future offer an optional physical journal product for an additional fee. Separate terms will apply and will be made available to you before any such purchase.</li>
              <li>Nothing in this clause affects your rights under the Consumer Rights Act 2015 that cannot be excluded, including that digital content we supply must be of satisfactory quality, fit for purpose and as described.</li>
            </ol>
          </section>

          <section>
            <h2>5. Privacy and your personal information</h2>
            <p>
              Protecting your personal information is important to us. Our Privacy Policy, which is available at{' '}
              <a href="/privacy">journeyjotter.ai/privacy</a>, explains what personal information we collect from you, how and why we collect, store, use and share such information, your rights in relation to it and how to contact us and supervisory authorities if you have a query or complaint.
            </p>
          </section>

          <section>
            <h2>6. Collection of technical information</h2>
            <p>
              We may collect and use technical data that might include, for example, the specifications of your device and its software in order to help us provide software updates, product support, and other services related to the App. We may also use this information, as long as it is in a form that does not personally identify you, to improve products or to offer new services or technologies to you.
            </p>
          </section>

          <section>
            <h2>7. Location data</h2>
            <ol className="legal-list">
              <li>The App does not currently use the functionalities on your device that can pinpoint your location. We may in the future introduce location features in order to provide core journaling features of the App, including identifying the places you visit, tagging them to your entries and showing them on a map.</li>
              <li>If and when we introduce location features, you will be asked whether the App can use your location and in what circumstances.</li>
              <li>If we introduce location features and you decline to authorise location services, but change your mind later on, you can update your choices at any time in the App settings. You can also turn location services off at any time.</li>
              <li>Any location data we collect in future will be processed pursuant to our Privacy Policy (see clause 5: &lsquo;Privacy and your personal information&rsquo;).</li>
            </ol>
          </section>

          <section>
            <h2>8. Ownership, use and intellectual property rights</h2>
            <ol className="legal-list">
              <li>The intellectual property rights in the App and in any text, images, video, audio or other multimedia content, software or other information or material submitted to or accessible from the App (the &lsquo;<strong>Content</strong>&rsquo;) are owned by us and our licensors.</li>
              <li>We and our licensors reserve all our intellectual property rights (including, but not limited to, all copyright, patents, trademarks, service marks, domain names, design rights, database rights, patents and all other intellectual property rights of any kind) whether registered or unregistered anywhere in the world. This means, for example, that we remain owners or licensors of them and are free to use them as we see fit.</li>
              <li>Nothing in these terms grants you any legal rights in the App or the Content other than as necessary for you to access it and use it. You agree not to adjust, try to circumvent or delete any notices contained in the App or the Content (including any intellectual property notices) and in particular, in any digital rights or other security technology embedded or contained within the App or the Content.</li>
              <li><strong>Trademarks:</strong> &ldquo;Journey Jotter AI Limited&rdquo; and the associated logos within our app are the unregistered trademarks of Journey Jotter AI Limited. Other trademarks and trade names may also be used on the App or in the Content. Use by you of any trade marks on the App or in the Content is strictly prohibited unless you have our prior written permission.</li>
            </ol>
          </section>

          <section>
            <h2>9. Acceptable use</h2>
            <ol className="legal-list">
              <li>
                You must not use the App to do any of the following things:
                <ol className="legal-list roman">
                  <li>break the law or encourage any unlawful activity;</li>
                  <li>send or upload anything that is (or might be considered to be) defamatory, offensive, obscene, containing or representing sexually explicit images and/or discriminatory (including but not limited to, in relation to race, gender, religious beliefs, sexual orientation or disability);</li>
                  <li>infringe our or anyone else&apos;s intellectual property rights (for example, by using or uploading someone else&apos;s content);</li>
                  <li>transmit any harmful software code such as viruses;</li>
                  <li>try to gain unauthorised access to computers, data, systems, accounts or networks; or</li>
                  <li>deliberately disrupt the operation of anyone&apos;s website, mobile application, server or business.</li>
                </ol>
              </li>
              <li>Journey Jotter AI Limited reserves the right to delete any Content which is not compliant with the present clause 9.</li>
              <li>
                Any submission you make to the App, and any other communication to users of the App by you must conform to standards of accuracy, decency and lawfulness, which shall be applied in our discretion, acting reasonably. In particular, any submission or communication by you must be:
                <ol className="legal-list roman">
                  <li>not defamatory or likely to give rise to an allegation of defamation;</li>
                  <li>not offensive, obscene, sexually explicit, discriminatory or deceptive;</li>
                  <li>unlikely to cause offence, embarrassment or be construed as, or constitute harassment to others;</li>
                  <li>factually accurate or your own genuinely held belief; and</li>
                  <li>your own original work (where applicable) and lawfully submitted.</li>
                </ol>
              </li>
              <li>While we use all commercially reasonable efforts to make sure that the App is secure and accurate, we do not actively monitor or check at all times whether information supplied to us through the App is factual, exact, confidential, commercially sensitive or valuable.</li>
              <li>Other than any personal information which will be dealt with in accordance with our Privacy Policy, we do not guarantee that information supplied to us through the App will be kept confidential and we may use it on an unrestricted and free-of-charge basis as we reasonably see fit.</li>
            </ol>
          </section>

          <section>
            <h2>10. Updates to the App</h2>
            <ol className="legal-list">
              <li>We may update the App from time to time for reasons that include fixing bugs or enhancing functionality. We might also change or remove functionality but if we do that, we will ensure that the App still meets the description of it that was provided to you at the time you downloaded the App.</li>
              <li>Updates will either download automatically or you may need to trigger them yourself, depending on your device, its settings and the app store.</li>
              <li>We strongly suggest that you download all updates as soon as they become available. Depending on the nature of the update, the App may not work properly (or at all), or you may be exposed to security vulnerabilities, if you do not keep the App updated to the latest version that we make available.</li>
            </ol>
          </section>

          <section>
            <h2>11. Changes to these terms</h2>
            <ol className="legal-list">
              <li>We may need to revise these terms from time to time to reflect changes in the App&apos;s functionality, to deal with a security threat or if there is a change in the law or guidance.</li>
              <li>You will be asked to agree to any material changes in advance by an in-app notification, usually when you download an update. If you do not accept the changes, you will not be able to use the App.</li>
            </ol>
          </section>

          <section>
            <h2>12. External services</h2>
            <ol className="legal-list">
              <li>The App may enable you to access services and websites that we do not own or operate (referred to below as &lsquo;<strong>external services</strong>&rsquo;).</li>
              <li>We are not responsible for examining or evaluating the content or accuracy of these external services. Before using them, make sure you have read and agreed to the terms on which they are being offered to you including the way in which they may use your personal information.</li>
              <li>
                You must not use external services in any way that:
                <ol className="legal-list roman">
                  <li>is inconsistent with these terms or with the terms of the external service; or</li>
                  <li>infringes our intellectual property rights, or the intellectual property rights of any third party.</li>
                </ol>
              </li>
              <li>From time to time, we may change or remove the external services that are made available through the App.</li>
            </ol>
          </section>

          <section>
            <h2>13. Liability</h2>
            <ol className="legal-list">
              <li>Nothing in these terms shall exclude or limit Journey Jotter AI Limited&apos;s liability for death or personal injury caused by our negligence or wilful misconduct, liability for fraud or fraudulent misrepresentation, or any other liability which cannot be excluded or limited under the laws of England and Wales.</li>
              <li>Subject to clause 13(a), Journey Jotter AI Limited shall bear no liability of any kind whatsoever for (but not limited to) any direct or indirect/consequential, foreseeable or unforeseeable, losses, costs, damages, fees, expenses, any inaccuracy or misleading information, any loss of profit, revenue, suffered by you or any third-party, relating to, in connection with, or arising from, this agreement, Journey Jotter AI Limited&apos;s products and services and/or the App.</li>
              <li>In any case, subject to clause 13(a) and to the extent permitted under applicable law, Journey Jotter AI Limited&apos;s total aggregate liability arising from or in connection with this agreement, Journey Jotter AI Limited and/or the App (whether the liability arises because of breach of contract, tort or for any other reason) shall be limited to no more than fifty pounds sterling (£50).</li>
              <li>If the App fails to meet the standards required by law (including that the App is of satisfactory quality, fit for purpose and as described), please contact Apple who will provide you with a full refund of the price you paid for the App, in the event that the App was not made available for free. Apple has no other responsibility or obligation in relation to the App beyond providing a refund in the circumstances described in the present clause 13(d).</li>
            </ol>
          </section>

          <section>
            <h2>14. Failures of networks or hardware</h2>
            <p>
              The App relies on a number of things working properly to enable you to enjoy all of its features. Many of these, such as your internet connection, your device and the App Store, are entirely outside of our control. Although we will do everything we reasonably can to resolve issues, we are not responsible to you if you are unable to use all or any part of the App due to a poor internet connection, faulty components in your device (such as a faulty GPS signal, failing in the API with any suppliers of our Content or related features), App Store failure or anything else that it would not be reasonable to expect us to control.
            </p>
          </section>

          <section>
            <h2>15. Ending these terms</h2>
            <ol className="legal-list">
              <li>We can end these terms and our agreement with you, if you do not comply with any part of them.</li>
              <li>We will give you a reasonable amount of notice before the terms and our agreement with you ends but if what you have done is serious then we may end our agreement with you immediately and without advance notice to you. &lsquo;<strong>Serious</strong>&rsquo; means that you are causing harm (or attempting to cause harm) to other users, interfering with the operation of the App or doing anything else that we think presents a big enough risk to justify us ending our agreement with you quickly.</li>
              <li>
                The consequences of our agreement with you ending are as follows:
                <ol className="legal-list roman">
                  <li>you are no longer allowed to use the App and we may remotely limit your access to it;</li>
                  <li>you must delete it from any devices that it has been installed on;</li>
                  <li>we may delete or suspend access to any accounts that you hold with us; and</li>
                  <li>you are not entitled to a refund to the extent you paid for the App or any of its features.</li>
                </ol>
              </li>
            </ol>
          </section>

          <section>
            <h2>16. Third parties</h2>
            <ol className="legal-list">
              <li>
                No one other than us or you has any right to enforce these terms, except that in the case of iOS users:
                <ol className="legal-list roman">
                  <li>Apple and Apple&apos;s subsidiary companies are third party beneficiaries of these terms and to this agreement. This means that if you breach any of these terms, Apple has the right to enforce it and to take action against you directly, with or without our involvement.</li>
                </ol>
              </li>
            </ol>
          </section>

          <section>
            <h2>17. Transferring these terms</h2>
            <ol className="legal-list">
              <li>We may transfer our rights under these terms to another business without your consent, but we will notify you of the transfer and make sure that you are not adversely affected as a result.</li>
              <li>You are not allowed to transfer your rights under these terms to anyone without our prior written consent.</li>
            </ol>
          </section>

          <section>
            <h2>18. Governing law and jurisdiction</h2>
            <ol className="legal-list">
              <li>The laws of England and Wales apply to this agreement, although if you are resident elsewhere acting in a non-professional capacity, you will retain the benefit of any mandatory protections given to you by the laws of the country in which you live.</li>
              <li>Any disputes will be subject to the non-exclusive jurisdiction of the English courts. This means that you can choose whether to bring a claim in the courts of England or in the courts of another part of the UK in which you live.</li>
            </ol>
          </section>

          <section>
            <h2>Contact us</h2>
            <div className="contact-block">
              <p><strong>Journey Jotter AI Limited</strong></p>
              <p>3 Mauleverer Road, London, England, SW2 5DR</p>
              <p><strong>Email:</strong> <a href="mailto:contact@journeyjotter.ai">contact@journeyjotter.ai</a></p>
              <p><strong>Support:</strong> <a href="/support">journeyjotter.ai/support</a></p>
            </div>
          </section>

          <div className="footer-note">Journey Jotter AI Limited · Registered in England and Wales · Company No. 15916035</div>
        </div>
      </main>
    </>
  );
}
