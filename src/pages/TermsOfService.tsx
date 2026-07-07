import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - SARMAK"
        description="SARMAK's terms of service outline the rules and regulations for using our website and services."
      />

      <section className="relative pt-32 pb-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-white mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-white/70">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="body-md">
                  By accessing and using the SARMAK website and services, you agree to be bound by 
                  these Terms of Service. If you do not agree to these terms, please do not use 
                  our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">2. Use of Services</h2>
                <p className="body-md mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these 
                  Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our services in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Transmit any harmful code or malware</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">3. Intellectual Property</h2>
                <p className="body-md">
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of SARMAK and is protected by copyright and other intellectual property laws. 
                  You may not reproduce, distribute, or create derivative works without our express 
                  written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">4. Service Availability</h2>
                <p className="body-md">
                  We strive to maintain the availability of our services but do not guarantee 
                  uninterrupted access. We reserve the right to modify, suspend, or discontinue 
                  any part of our services at any time.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
                <p className="body-md">
                  To the maximum extent permitted by law, SARMAK shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising out of 
                  or relating to your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">6. Indemnification</h2>
                <p className="body-md">
                  You agree to indemnify and hold harmless SARMAK and its employees, officers, 
                  and agents from any claims, damages, or expenses arising from your use of our 
                  services or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">7. Governing Law</h2>
                <p className="body-md">
                  These Terms shall be governed by and construed in accordance with the laws of 
                  India. Any disputes arising under these Terms shall be subject to the exclusive 
                  jurisdiction of the courts in India.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">8. Changes to Terms</h2>
                <p className="body-md">
                  We reserve the right to modify these Terms at any time. We will notify you of 
                  any changes by posting the updated Terms on this page. Your continued use of 
                  our services after such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">9. Contact Information</h2>
                <p className="body-md">
                  If you have any questions about these Terms, please contact us at info@sarmak.in.
                </p>
              </div>

              <p className="text-white/50 text-sm">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
