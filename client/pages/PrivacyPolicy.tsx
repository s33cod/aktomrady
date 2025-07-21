import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        backgroundImage="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              <strong>Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Personal Information
                  </h3>
                  <p>
                    When you use our services, we may collect the following
                    personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Business or company information</li>
                    <li>Billing and shipping addresses</li>
                    <li>
                      Payment information (processed securely by third-party
                      payment processors)
                    </li>
                    <li>Project specifications and requirements</li>
                    <li>Communication records and preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6">
                    Usage Information
                  </h3>
                  <p>
                    We automatically collect certain information when you visit
                    our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms</li>
                    <li>Device type and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide printing services and fulfill your orders</li>
                    <li>Process payments and manage billing</li>
                    <li>Communicate about your projects and orders</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Improve our services and website functionality</li>
                    <li>Send promotional materials (with your consent)</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                    <li>Analyze website usage and optimize user experience</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information in the
                    following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> Trusted third-party
                      vendors who assist with payment processing, shipping, and
                      website analytics
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law,
                      court order, or government request
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a
                      merger, acquisition, or sale of business assets
                    </li>
                    <li>
                      <strong>Protection:</strong> To protect our rights,
                      property, safety, or that of our users
                    </li>
                    <li>
                      <strong>Consent:</strong> With your explicit consent for
                      specific purposes
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Data Security
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We implement appropriate security measures to protect your
                    personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and data storage</li>
                    <li>Regular security audits and updates</li>
                    <li>
                      Limited access to personal information on a need-to-know
                      basis
                    </li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the internet is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and performance</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookies through your browser settings, but
                    some features may not function properly if cookies are
                    disabled.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Your Rights and Choices
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Access:</strong> Request a copy of your personal
                      information
                    </li>
                    <li>
                      <strong>Correction:</strong> Update or correct inaccurate
                      information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your
                      personal information
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your
                      information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of your
                      data to another service
                    </li>
                    <li>
                      <strong>Marketing:</strong> Opt-out of promotional
                      communications
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at{" "}
                    <a
                      href="mailto:privacy@aktomrady.com"
                      className="text-brand-cyan hover:text-brand-magenta"
                    >
                      privacy@aktomrady.com
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Data Retention
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We retain your personal information for as long as necessary
                    to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide our services and fulfill orders</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain business records and improve services</li>
                  </ul>
                  <p className="mt-4">
                    When information is no longer needed, we securely delete or
                    anonymize it.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Third-Party Links
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these external sites. We encourage you to review the privacy
                    policies of any websites you visit.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Changes to This Policy
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any significant changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Displaying a notice on our homepage</li>
                  </ul>
                  <p className="mt-4">
                    Your continued use of our services after changes are made
                    constitutes acceptance of the new policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Contact Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you have questions about this Privacy Policy or our data
                    practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p>
                      <strong>AKTOMRADY Agencies (NIG.)</strong>
                    </p>
                    <p>5, Kayode Street, Ogba</p>
                    <p>Lagos Mainland, OGBA LAGOS</p>
                    <p>Nigeria</p>
                    <p className="mt-4">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:privacy@aktomrady.com"
                        className="text-brand-cyan hover:text-brand-magenta"
                      >
                        privacy@aktomrady.com
                      </a>
                      <br />
                      <strong>Phone:</strong>{" "}
                      <a
                        href="tel:+2348029477796"
                        className="text-brand-cyan hover:text-brand-magenta"
                      >
                        +234.8029477796
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
