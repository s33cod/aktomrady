import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

export default function TermsOfService() {
  return (
    <Layout>
      <PageBanner 
        title="Terms of Service"
        subtitle="Terms and conditions governing the use of our printing services"
        backgroundImage="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>By accessing and using the services of AKTOMRADY Agencies (NIG.) ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                  <p>These terms apply to all users of our website, customers, and anyone who accesses our printing services.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                <div className="space-y-4 text-gray-700">
                  <p>AKTOMRADY Agencies provides comprehensive printing services including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Large format printing (banners, billboards, stickers)</li>
                    <li>Business cards, flyers, and brochures</li>
                    <li>Wedding and event invitations</li>
                    <li>Custom branded items and souvenirs</li>
                    <li>Political campaign materials</li>
                    <li>Corporate materials and stationery</li>
                    <li>Custom packaging and promotional items</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Order Process and Acceptance</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">Quotations</h3>
                  <p>All quotations provided are estimates and are valid for 30 days unless otherwise specified. Final pricing may vary based on project specifications, materials, and delivery requirements.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Order Confirmation</h3>
                  <p>Orders are confirmed only when we provide written acceptance and receive payment or approved credit terms. We reserve the right to refuse any order at our discretion.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Design and Artwork</h3>
                  <p>You are responsible for providing print-ready artwork or paying for design services. We are not responsible for errors in customer-supplied artwork or content.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full payment or approved deposit required before production begins</li>
                    <li>Corporate accounts may be eligible for net 30-day payment terms</li>
                    <li>Rush orders require full payment in advance</li>
                    <li>Currency: Nigerian Naira (₦) unless otherwise agreed</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Additional Costs</h3>
                  <p>Additional charges may apply for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Design and artwork preparation</li>
                    <li>Rush delivery and expedited processing</li>
                    <li>Special materials or finishing options</li>
                    <li>Delivery outside Lagos metropolitan area</li>
                    <li>Storage of completed orders beyond 30 days</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Production and Delivery</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">Production Times</h3>
                  <p>Production times are estimates and begin after receipt of payment and approved artwork. Delivery dates are not guaranteed unless specifically agreed in writing.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Local delivery available within Lagos area</li>
                    <li>Nationwide shipping available at additional cost</li>
                    <li>Customer pickup available at our facility</li>
                    <li>Risk of loss transfers upon delivery or pickup</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Delays</h3>
                  <p>We are not liable for delays caused by factors beyond our control, including but not limited to equipment failure, material shortages, or force majeure events.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Quality Control and Acceptance</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">Proofs and Approval</h3>
                  <p>Digital proofs will be provided for approval before production. Customer approval of proofs releases us from liability for content errors, spelling, or design issues.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Color Matching</h3>
                  <p>While we strive for color accuracy, variations may occur due to different printing processes, materials, and viewing conditions. Color matching guarantees require additional fees and specifications.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Quality Standards</h3>
                  <p>We maintain high quality standards, but printed materials may vary slightly from digital proofs due to the nature of printing processes.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellations and Returns</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">Cancellation Policy</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Orders may be cancelled before production begins with 24-hour notice</li>
                    <li>Cancellation fees may apply for work already completed</li>
                    <li>Custom orders cannot be cancelled once production begins</li>
                    <li>Design fees are non-refundable once work has commenced</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Returns and Refunds</h3>
                  <p>Returns are accepted only for defective products or our errors. Custom printed materials cannot be returned unless defective. Refund requests must be made within 7 days of delivery.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800">Customer Content</h3>
                  <p>You warrant that you own or have rights to use all content provided for printing, including text, images, logos, and designs. You indemnify us against any intellectual property claims.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800">Prohibited Content</h3>
                  <p>We reserve the right to refuse printing of materials that:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violate intellectual property rights</li>
                    <li>Contain defamatory, offensive, or illegal content</li>
                    <li>Promote illegal activities or discrimination</li>
                    <li>Violate applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Our liability is limited to the cost of the printing services provided. We are not liable for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Indirect, consequential, or incidental damages</li>
                    <li>Lost profits or business opportunities</li>
                    <li>Delays in delivery or production</li>
                    <li>Errors in customer-provided content or artwork</li>
                    <li>Color variations within industry standards</li>
                  </ul>
                  <p className="mt-4">Maximum liability shall not exceed the amount paid for the specific order in question.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy and Data Protection</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Your personal information is protected according to our Privacy Policy. We maintain confidentiality of your projects and customer information unless required by law to disclose.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <div className="space-y-4 text-gray-700">
                  <p>These terms are governed by Nigerian law. Any disputes shall be resolved through arbitration in Lagos State, Nigeria, or through competent Nigerian courts.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We reserve the right to modify these terms at any time. Updated terms will be posted on our website and take effect immediately. Continued use of our services constitutes acceptance of revised terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p><strong>AKTOMRADY Agencies (NIG.)</strong></p>
                    <p>5, Kayode Street, Ogba</p>
                    <p>Lagos Mainland, OGBA LAGOS</p>
                    <p>Nigeria</p>
                    <p className="mt-4">
                      <strong>Email:</strong> <a href="mailto:legal@aktomrady.com" className="text-brand-cyan hover:text-brand-magenta">legal@aktomrady.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+2348029477796" className="text-brand-cyan hover:text-brand-magenta">+234.8029477796</a>
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
